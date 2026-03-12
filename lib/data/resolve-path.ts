import fs from 'fs';
import path from 'path';

/** Map from canonical data/ filename to .claude/ source filename */
const SOURCE_FILE_MAP: Record<string, string> = {
  'pages.json': 'wp-pages-clean.json',
  'posts.json': 'wp-posts-clean.json',
  'categories.json': 'wp-categories.json',
};

/**
 * Resolve a JSON data file path.
 * Checks data/ first, falls back to .claude/ source files during development.
 * Once you run: cp .claude/wp-*-clean.json data/ && cp .claude/wp-categories.json data/categories.json
 * the fallback is no longer needed.
 */
export function resolveJsonPath(filename: string): string {
  const primary = path.join(process.cwd(), 'data', filename);
  if (fs.existsSync(primary)) return primary;

  const sourceName = SOURCE_FILE_MAP[filename] ?? filename;
  const fallback = path.join(process.cwd(), '.claude', sourceName);
  if (fs.existsSync(fallback)) return fallback;

  return primary;
}
