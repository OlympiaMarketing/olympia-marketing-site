// Re-export all data layer functions and types

export type { Page, PageType } from './pages';
export { getAllPages, getPageBySlug, getPageByPath, getPagesByType } from './pages';

export type { Post } from './posts';
export {
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  getRecentPosts,
  getRelatedPosts,
} from './posts';

export type { Category } from './categories';
export { getAllCategories, getCategoryBySlug } from './categories';
