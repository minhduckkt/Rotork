export type CatalogModel = {
  slug: string;
  name: string;
  type: string;
  duty: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  specs: [string, string][];
  officialUrl: string;
};

export type RangeConfig = {
  slug: string;
  name: string;
  categoryName: string;
  categorySlug: string;
  description: string;
  heroBadge: string;
  facts: [string, string][];
  overviewTitle: string;
  overview: string[];
  selectionTitle: string;
  selectionIntro: string;
  selectionSteps: [string, string][];
  commonFeatures: [string, string][];
  brochureCode: string;
  brochureTitle: string;
  brochureUrl: string;
  officialRangeUrl: string;
};
