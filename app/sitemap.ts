import type { MetadataRoute } from "next";
import { iq3Models } from "./iq3-models";
import { iq3PerformModels } from "./iq3-perform-models";
import { ckModels } from "./ck-range-data";
import { iqProModels } from "./iq-pro-data";
import { elcModels } from "./elc-range-data";
import { hanbayMModels, hanbayRModels } from "./hanbay-data";
import { cmaModels, cvaModels, laModels, skilmaticModels, smModels } from "./advanced-actuator-data";
import { genericCatalogRoutes } from "./generic-catalog-data";
import { productLineRoutes } from "./catalog-lines";
import { blogArticles } from "./blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/san-pham", "/kien-thuc", ...blogArticles.map((article) => `/kien-thuc/${article.slug}`), "/san-pham/electric-intelligent-actuators/iq3-pro", ...iq3Models.map((model) => `/san-pham/electric-intelligent-actuators/iq3-pro/${model.slug}`), "/san-pham/electric-intelligent-actuators/iq3-perform", ...iq3PerformModels.map((model) => `/san-pham/electric-intelligent-actuators/iq3-perform/${model.slug}`), "/san-pham/electric-intelligent-actuators/ck-range", ...ckModels.map((model) => `/san-pham/electric-intelligent-actuators/ck-range/${model.slug}`), "/san-pham/electric-intelligent-actuators/iq-pro", ...iqProModels.map((model) => `/san-pham/electric-intelligent-actuators/iq-pro/${model.slug}`), "/san-pham/electric-intelligent-actuators/iq3", "/san-pham/electric-industrial-actuators/elc-range", ...elcModels.map((model) => `/san-pham/electric-industrial-actuators/elc-range/${model.slug}`), "/san-pham/electric-industrial-actuators/hanbay-m-range", ...hanbayMModels.map((model) => `/san-pham/electric-industrial-actuators/hanbay-m-range/${model.slug}`), "/san-pham/electric-industrial-actuators/hanbay-r-range", ...hanbayRModels.map((model) => `/san-pham/electric-industrial-actuators/hanbay-r-range/${model.slug}`), "/san-pham/precision-modulating-actuators/cma", ...cmaModels.map((model) => `/san-pham/precision-modulating-actuators/cma/${model.slug}`), "/san-pham/precision-modulating-actuators/cva", ...cvaModels.map((model) => `/san-pham/precision-modulating-actuators/cva/${model.slug}`), "/san-pham/precision-modulating-actuators/la-2000", ...laModels.map((model) => `/san-pham/precision-modulating-actuators/la-2000/${model.slug}`), "/san-pham/precision-modulating-actuators/sm", ...smModels.map((model) => `/san-pham/precision-modulating-actuators/sm/${model.slug}`), "/san-pham/electro-hydraulic-actuators/skilmatic-si", ...skilmaticModels.map((model) => `/san-pham/electro-hydraulic-actuators/skilmatic-si/${model.slug}`), "/san-pham/electro-hydraulic-actuators/modular-electro-hydraulic", ...genericCatalogRoutes, "/ve-chung-toi", "/lien-he"];
  routes.splice(2, 0, ...productLineRoutes);
  return routes.filter((route) => route !== "/san-pham/electric-intelligent-actuators/iq3").map((route) => ({ url: `https://rotork.com.vn${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.8 }));
}
