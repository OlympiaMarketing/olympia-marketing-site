import fs from 'fs';
import path from 'path';
import { resolveJsonPath } from './resolve-path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Post {
  title: string;
  slug: string;
  content: string;
  images: string[];
  date: string;
  categories: string[];
  excerpt: string;
  seo_title: string;
  seo_description: string;
  focus_keyword: string;
}

// ---------------------------------------------------------------------------
// Local image resolution — maps wp-content URLs to downloaded local files
// ---------------------------------------------------------------------------

/** Build a set of filenames in /public/images/posts/ for fast lookup */
function buildLocalImageIndex(): Set<string> {
  const dir = path.join(process.cwd(), 'public', 'images', 'posts');
  try {
    return new Set(fs.readdirSync(dir));
  } catch {
    return new Set();
  }
}

/**
 * For each image URL, try to find a local file at /images/posts/{slug}-{index}.{ext}.
 * Returns an array with local paths for images that exist, omitting any that don't.
 */
function resolvePostImages(slug: string, images: string[], localIndex: Set<string>): string[] {
  return images.reduce<string[]>((resolved, _url, i) => {
    const prefix = `${slug}-${i}.`;
    const localFile = [...localIndex].find((f) => f.startsWith(prefix));
    if (localFile) {
      resolved.push(`/images/posts/${localFile}`);
    }
    return resolved;
  }, []);
}

// ---------------------------------------------------------------------------
// Data loading (reads JSON once, caches in module scope)
// ---------------------------------------------------------------------------

let _cache: Post[] | null = null;

function loadPosts(): Post[] {
  if (_cache) return _cache;

  const filePath = resolveJsonPath('posts.json');
  const raw: Post[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const localIndex = buildLocalImageIndex();

  // Sort by date descending (newest first) as default ordering
  _cache = raw
    .map((post) => ({
      ...post,
      images: resolvePostImages(post.slug, post.images, localIndex),
    }))
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return _cache;
}

// ---------------------------------------------------------------------------
// Public API — all async for future Supabase swap
// ---------------------------------------------------------------------------

export async function getAllPosts(): Promise<Post[]> {
  return loadPosts();
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return loadPosts().find((p) => p.slug === slug);
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<Post[]> {
  return loadPosts().filter((p) => p.categories.includes(categorySlug));
}

export async function getRecentPosts(limit: number = 10): Promise<Post[]> {
  return loadPosts().slice(0, limit);
}

export async function getRelatedPosts(
  categorySlugs: string[],
  limit: number = 6,
): Promise<Post[]> {
  if (categorySlugs.length === 0) return [];

  const slugSet = new Set(categorySlugs);
  const scored = loadPosts().map((post) => {
    const overlap = post.categories.filter((c) => slugSet.has(c)).length;
    return { post, overlap };
  });

  return scored
    .filter((s) => s.overlap > 0)
    .sort((a, b) => {
      // More overlapping categories first, then newest first
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, limit)
    .map((s) => s.post);
}
