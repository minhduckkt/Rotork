import { readFile, readdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(scriptDir, "..");
const workspaceDir = path.resolve(siteDir, "..", "..");
const sourceDir = path.join(workspaceDir, "07_CONTENT_SEO_BLOG", "blog");
const outputFile = path.join(siteDir, "app", "blog-articles.json");
const publicDir = path.join(siteDir, "public");

const P = "/images/products/";

const articlePresentation = {
  "cach-doc-nameplate-rotork": [1, "Mua hàng & Tra cứu", `${P}iq3-pro-all/iq3-pro.jpg`, `${P}iqt3-pro-gallery/iqt3-pro-view-2.jpg`],
  "part-number-rotork-la-gi": [2, "Mua hàng & Tra cứu", `${P}hanbay-m-range/mch-000xx-3-20sm9072-lt.png`, `${P}iq3-pro-range/iq3-pro-set.jpg`],
  "mua-actuator-rotork-chinh-hang-viet-nam": [3, "Mua hàng & Tra cứu", `${P}iqt3-pro.jpg`, `${P}cma/cmq.jpg`],
  "bao-gia-rotork-viet-nam": [4, "Mua hàng & Tra cứu", `${P}gp-gh.jpg`, `${P}skilmatic-si/si3-part-turn.jpg`],
  "rotork-co-cq-chinh-hang": [5, "Mua hàng & Tra cứu", `${P}iq3-pro-range/iq3-pro.jpg`, `${P}catalog/master-station-networks-protocols/master-station-networks-protocols/master-station.jpg`],
  "iq3-pro-rotork": [6, "Actuator điện thông minh", `${P}iq3-pro-all/iq3-pro.jpg`, `${P}iq3-pro-all/iqt3-pro.jpg`],
  "iq3-pro-vs-iq3-perform": [7, "Actuator điện thông minh", `${P}iq3-pro-range/iq3-pro.jpg`, `${P}iq3-perform/iq3-perform-standard-multi-turn.jpg`],
  "iqt3-pro-rotork-vietnam": [8, "Actuator điện thông minh", `${P}iqt3-pro.jpg`, `${P}iqt3-pro-gallery/iqt3-pro-cutaway-red.jpg`],
  "ck-range-vs-iq3-pro": [9, "Actuator điện thông minh", `${P}ck-standard.jpg`, `${P}iq3-pro-range/iq3-pro.jpg`],
  "thay-the-rotork-iq-pro": [10, "Actuator điện thông minh", `${P}iq-pro/iq-pro.jpg`, `${P}iq3-pro-all/iq3-pro.jpg`],
  "cma-rotork-chon-cml-cmq-cmr": [11, "Điều khiển chính xác", `${P}cma/cml.jpg`, `${P}cma/cmq.jpg`],
  "cva-rotork-cvl-vs-cvq": [12, "Điều khiển chính xác", `${P}cva/cvl.jpg`, `${P}cva/cvq.jpg`],
  "la-2000-rotork-2400-vs-2500": [13, "Điều khiển chính xác", `${P}la-2000/la-2400.jpg`, `${P}la-2000/la-2500.jpg`],
  "sm-actuator-rotork-chon-dong": [14, "Điều khiển chính xác", `${P}sm/sm-6000.jpg`, `${P}sm/sm-1700sm-5000.jpg`],
  "actuator-dieu-khien-chinh-xac-rotork": [15, "Điều khiển chính xác", `${P}cma/cmr.jpg`, `${P}cva/cvq.jpg`],
  "skilmatic-si-rotork": [16, "Điện–thủy lực & Công nghiệp", `${P}skilmatic-si/si3-part-turn.jpg`, `${P}skilmatic-si/si4-linear.jpg`],
  "si3-vs-si4-rotork": [17, "Điện–thủy lực & Công nghiệp", `${P}skilmatic-si/si3-linear.jpg`, `${P}skilmatic-si/si4-part-turn.jpg`],
  "modular-electro-hydraulic-rotork": [18, "Điện–thủy lực & Công nghiệp", `${P}modular-electro-hydraulic/modular-electro-hydraulic.jpg`, `${P}gp-gh.jpg`],
  "hanbay-actuator-rotork-cach-doc-ma": [19, "Điện–thủy lực & Công nghiệp", `${P}hanbay-m-range/mch-000xx-3-20sm9072-lt.png`, `${P}hanbay-r-range/rdm-s-b00xx-1-me990-24.png`],
  "elc-actuator-rotork-vietnam": [20, "Điện–thủy lực & Công nghiệp", `${P}elc-range/elc-100.jpg`, `${P}elc-range/elc-1000.jpg`],
  "actuator-khi-nen-rotork-gp-gh-rc200": [21, "Gearbox & Instrumentation", `${P}gp-gh.jpg`, `${P}catalog/light-duty-fluid-actuators/rc200/rc200.jpg`],
  "gearbox-iw-rotork-sizing": [22, "Gearbox & Instrumentation", `${P}catalog/part-turn-gearboxes/iw/iw-mk2.jpg`, `${P}iq3-pro-all/iqt3-pro.jpg`],
  "gearbox-ib-rotork-sizing": [23, "Gearbox & Instrumentation", `${P}catalog/multi-turn-gearboxes/ib/ib-motorised.jpg`, `${P}catalog/multi-turn-gearboxes/ib/ibas-combination.jpg`],
  "ytc-positioner-rotork-vietnam": [24, "Gearbox & Instrumentation", `${P}catalog/valve-positioners-and-controllers/valve-positioners/yt-1000.jpg`, `${P}catalog/valve-positioners-and-controllers/ytc-valve-positioner-accessories/yt-300-volume-booster.jpg`],
  "fairchild-rotork-vietnam": [25, "Gearbox & Instrumentation", `${P}catalog/flow-pressure-control-filtration/fairchild-pressure-regulators/m10.jpg`, `${P}catalog/electrical-instrumentation/fairchild-transducers/t6000.jpg`],
  "bifold-solenoid-valve-rotork": [26, "Bifold, HVAC & Mạng", `${P}catalog/instrumentation-valves/bifold-pneumatic-solenoid-valves/bxs-solenoid.jpg`, `${P}catalog/instrumentation-valves/bifold-hydraulic-solenoid-valves/fp02-05.jpg`],
  "bifold-ball-needle-valve-rotork": [27, "Bifold, HVAC & Mạng", `${P}catalog/instrumentation-valves/bifold-fire-safe-valves/sxx-fvmb.jpg`, `${P}catalog/instrumentation-valves/bifold-thermal-relief-valves/vrt.jpg`],
  "schischek-rotork-hvac-hazardous": [28, "Bifold, HVAC & Mạng", `${P}catalog/hvac-actuators/max/exmax.jpg`, `${P}catalog/hvac-actuators/maxlin/exmax-lin.jpg`],
  "master-station-ethernet-rotork": [29, "Bifold, HVAC & Mạng", `${P}catalog/master-station-networks-protocols/master-station-networks-protocols/master-station.jpg`, `${P}catalog/master-station-networks-protocols/master-station-networks-protocols/integrated-ethernet.jpg`],
  "rotork-vietnam-actuator-theo-nganh": [30, "Bifold, HVAC & Mạng", `${P}iq3-pro-range/iqt3-pro.jpg`, `${P}skilmatic-si/si3-part-turn.jpg`],
};

const decode = (value) => value
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&rsaquo;/g, "›")
  .replace(/&ndash;/g, "–")
  .replace(/&mdash;/g, "—")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">");

const textOnly = (value) => decode(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const matchOne = (html, regex, label) => {
  const match = html.match(regex);
  if (!match) throw new Error(`Không tìm thấy ${label}`);
  return decode(match[1].trim());
};

const files = (await readdir(sourceDir)).filter((file) => file.endsWith(".html"));
const articles = [];

for (const file of files) {
  const slug = file.replace(/\.html$/, "");
  const presentation = articlePresentation[slug];
  if (!presentation) throw new Error(`Chưa khai báo ảnh/chuyên mục cho ${slug}`);

  const [order, category, image, secondaryImage] = presentation;
  await access(path.join(publicDir, image));
  await access(path.join(publicDir, secondaryImage));

  const html = await readFile(path.join(sourceDir, file), "utf8");
  const title = matchOne(html, /<title>([\s\S]*?)<\/title>/i, `title của ${slug}`);
  const description = matchOne(html, /<meta\s+name="description"\s+content="([^"]+)"/i, `description của ${slug}`);
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (!articleMatch) throw new Error(`Không tìm thấy article trong ${slug}`);

  let body = articleMatch[1]
    .replace(/<header>[\s\S]*?<\/header>/i, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();

  const introMatch = body.match(/<section id="mo-bai">([\s\S]*?)<\/section>/i);
  const excerpt = introMatch ? textOnly(introMatch[1]).slice(0, 260) : description;
  const words = textOnly(body).split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(5, Math.ceil(words / 220));

  const headings = [...body.matchAll(/<h2>([\s\S]*?)<\/h2>/gi)].map((match, index) => {
    const before = body.slice(0, match.index);
    const sectionMatches = [...before.matchAll(/<section id="([^"]+)"/gi)];
    return { id: sectionMatches.at(-1)?.[1] ?? `muc-${index + 1}`, label: textOnly(match[1]) };
  });

  const figure = `<figure class="article-inline-figure"><img src="${secondaryImage}" alt="Hình ảnh minh họa ${title}" loading="lazy"><figcaption>Hình ảnh sản phẩm Rotork liên quan đến nội dung lựa chọn và đối chiếu cấu hình trong bài.</figcaption></figure>`;
  body = body.replace(/<\/section>/i, `</section>${figure}`);

  let faq = [];
  for (const script of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(script[1]);
      if (data["@type"] === "FAQPage") {
        faq = (data.mainEntity ?? []).map((item) => ({
          question: item.name,
          answer: item.acceptedAnswer?.text ?? "",
        }));
      }
    } catch {
      // Schema lỗi không được phép làm hỏng quá trình tạo nội dung.
    }
  }

  articles.push({
    order,
    slug,
    title,
    description,
    excerpt,
    category,
    image,
    secondaryImage,
    imageAlt: `${title} - hình ảnh sản phẩm Rotork`,
    readTime,
    updatedAt: "2026-07-19",
    featured: [1, 6, 16, 29].includes(order),
    headings,
    faq,
    body,
  });
}

articles.sort((a, b) => a.order - b.order);
if (articles.length !== 30) throw new Error(`Kỳ vọng 30 bài, nhận được ${articles.length}`);

await writeFile(outputFile, `${JSON.stringify(articles, null, 2)}\n`, "utf8");
console.log(`Đã tạo ${articles.length} bài tại ${outputFile}`);

