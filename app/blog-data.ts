import rawArticles from "./blog-articles.json";

export type BlogHeading = { id: string; label: string };
export type BlogFaq = { question: string; answer: string };

export type BlogArticle = {
  order: number;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  image: string;
  secondaryImage: string;
  imageAlt: string;
  readTime: number;
  updatedAt: string;
  featured: boolean;
  headings: BlogHeading[];
  faq: BlogFaq[];
  body: string;
};

export const blogArticles = rawArticles as BlogArticle[];
export const blogCategories = [...new Set(blogArticles.map((article) => article.category))];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: BlogArticle, count = 3) {
  const sameCategory = blogArticles.filter((item) => item.slug !== article.slug && item.category === article.category);
  const others = blogArticles.filter((item) => item.slug !== article.slug && item.category !== article.category);
  return [...sameCategory, ...others].slice(0, count);
}

