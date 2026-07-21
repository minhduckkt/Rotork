# Rotork Việt Nam Product Catalog

Website danh mục sản phẩm Rotork tại Việt Nam do Fast Group Engineering phát triển, phục vụ tra cứu model, thông số kỹ thuật, tài liệu nguồn và gửi yêu cầu báo giá.

> Repository này nên được đặt ở chế độ **private**. Tên thương hiệu, hình ảnh và tài liệu Rotork thuộc quyền của chủ sở hữu tương ứng. Website không tự nhận là website doanh nghiệp chính thức của Rotork.

## Phạm vi hiện tại

- 701 model và cấu hình đã đạt trạng thái `READY`.
- 20 nhóm sản phẩm và 121 range.
- Thư viện 30 bài kiến thức tại `/kien-thuc`, có ảnh đại diện, mục lục, FAQ, internal link và metadata riêng.
- Trang riêng cho nhóm, range và model.
- Tìm kiếm theo model, range, nhóm sản phẩm và thông số.
- Metadata, sitemap, robots và structured data phục vụ SEO.
- Giá bán ở trạng thái liên hệ báo giá; không tạo part number hoặc giá không có nguồn.

## Công nghệ

- Next.js 16 và React 19.
- Vinext/Vite cho Cloudflare Workers.
- TypeScript và CSS thuần.
- OpenAI Sites cho quy trình build và triển khai hiện tại.

## Chạy tại máy local

Yêu cầu Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

Kiểm tra trước khi push hoặc deploy:

```bash
npm run lint
npm test
```

`npm test` thực hiện production build hoàn chỉnh.

## Cấu trúc repository

- `app/`: route, component và dữ liệu catalog dùng trực tiếp bởi website.
- `public/`: hình ảnh, logo, favicon và social preview.
- `worker/`: Cloudflare Worker entry point và image optimization.
- `build/`: plugin đóng gói metadata cho OpenAI Sites.
- `scripts/`: công cụ tạo catalog từ thư viện dữ liệu đã kiểm duyệt.
- `app/blog-articles.json`: nội dung 30 bài đã chuyển từ bộ editorial sang dữ liệu website.
- `app/kien-thuc/`: trang thư viện và template bài viết dùng chung.
- `.openai/hosting.json`: cấu hình liên kết với dự án Sites hiện tại.

Thư viện nghiên cứu gốc, PDF đã tải, workbook kiểm duyệt, báo cáo audit, cache và gói deploy không nằm trong repository này.

## Quy tắc dữ liệu

- Chỉ xuất bản record có trạng thái `READY`.
- Record `HOLD` hoặc `REVIEW` không được đưa vào tìm kiếm và sitemap.
- Model code không được trình bày như part number đặt hàng hoàn chỉnh.
- Datasheet và revision của cấu hình được xác nhận là căn cứ kỹ thuật cuối cùng.
- Bài kiến thức là nội dung định hướng; part number, chứng nhận, xuất xứ và cấu hình cuối cùng phải được xác nhận theo từng đơn hàng/lô hàng.

## Đồng bộ lại nội dung blog trong workspace

Khi các file `07_CONTENT_SEO_BLOG/blog/*.html` được cập nhật, chạy:

```bash
node scripts/generate-blog-content.mjs
```

Script kiểm tra đủ 30 bài và 60 tham chiếu ảnh trước khi tạo lại `app/blog-articles.json`.

## Đơn vị vận hành

- Fast Group Engineering
- Email: `minhduc@fastgroup.vn`
- Điện thoại/Zalo: `(+84) 938 888 958`
