import fs from 'fs';
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
// Data loading (reads JSON once, caches in module scope)
// ---------------------------------------------------------------------------

let _cache: Post[] | null = null;

function loadPosts(): Post[] {
  if (_cache) return _cache;

  const filePath = resolveJsonPath('posts.json');
  const raw: Post[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Sort by date descending (newest first) as default ordering
  _cache = raw.sort(
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
