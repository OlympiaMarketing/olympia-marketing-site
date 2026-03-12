import fs from 'fs';
import { resolveJsonPath } from './resolve-path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Category {
  term_id: string;
  name: string;
  slug: string;
  parent: string;
}

// ---------------------------------------------------------------------------
// Data loading (reads JSON once, caches in module scope)
// ---------------------------------------------------------------------------

let _cache: Category[] | null = null;

function loadCategories(): Category[] {
  if (_cache) return _cache;

  const filePath = resolveJsonPath('categories.json');
  _cache = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Category[];

  return _cache;
}

// ---------------------------------------------------------------------------
// Public API — all async for future Supabase swap
// ---------------------------------------------------------------------------

export async function getAllCategories(): Promise<Category[]> {
  return loadCategories();
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | undefined> {
  return loadCategories().find((c) => c.slug === slug);
}
