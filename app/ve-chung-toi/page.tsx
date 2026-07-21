import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Về Fast Group Engineering",
  description: "Tìm hiểu năng lực cung cấp sản phẩm Rotork chính hãng, hỗ trợ kỹ thuật và xử lý RFQ của Fast Group Engineering tại Việt Nam.",
  alternates: { canonical: "/ve-chung-toi" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero about-hero"><div className="container"><Breadcrumb current="Về chúng tôi" /><span className="kicker light">FAST GROUP ENGINEERING</span><h1>Kết nối sản phẩm chính hãng với nhu cầu kỹ thuật thực tế</h1><p>Chúng tôi đồng hành cùng nhà máy, đơn vị bảo trì và dự án trong việc tra cứu, lựa chọn và cung ứng sản phẩm Rotork tại Việt Nam.</p></div></section>
      <section className="section"><div className="container about-grid"><div><span className="kicker">VAI TRÒ CỦA CHÚNG TÔI</span><h2>Không chỉ gửi một báo giá</h2></div><div className="prose"><p>Fast Group Engineering tập trung làm rõ model, cấu hình, tài liệu và điều kiện cung ứng trước khi báo giá. Cách làm này giúp giảm rủi ro đặt sai thiết bị, đặc biệt với những dòng actuator có nhiều tùy chọn điện, cơ khí và chứng nhận.</p><p>Website rotork.com.vn được xây dựng như một catalog kỹ thuật tiếng Việt: dễ tìm kiếm như một website B2C nhưng giữ quy trình xác nhận kỹ thuật cần thiết của mua hàng công nghiệp.</p></div></div></section>
      <section className="section section-gray"><div className="container"><div className="section-head"><span className="kicker">GIÁ TRỊ VẬN HÀNH</span><h2>Quy trình rõ ràng từ yêu cầu đến giao hàng</h2></div><div className="process-grid">
        <article><span>01</span><h3>Tiếp nhận yêu cầu</h3><p>Part number, BOM, ảnh nameplate, yêu cầu kỹ thuật và thời gian cần hàng.</p></article>
        <article><span>02</span><h3>Đối chiếu cấu hình</h3><p>Kiểm tra range, duty, điện áp, torque/thrust, IP, chứng nhận và phụ kiện.</p></article>
        <article><span>03</span><h3>Xác nhận phương án</h3><p>Model hiện hành, mã thay thế hoặc phương án kỹ thuật phù hợp được làm rõ.</p></article>
        <article><span>04</span><h3>Báo giá & cung ứng</h3><p>Thống nhất giá, lead time, chứng từ và điều kiện giao hàng tại Việt Nam.</p></article>
      </div></div></section>
      <section className="section"><div className="container evidence-grid"><div className="evidence-block"><span>775</span><h3>Hồ sơ sản phẩm</h3><p>Được tổ chức theo 21 nhóm sản phẩm, range và model.</p></div><div className="evidence-content"><span className="kicker">NGUYÊN TẮC NỘI DUNG</span><h2>Ưu tiên bằng chứng kỹ thuật</h2><ul><li>Không dùng model code thay cho part number khi chưa được xác nhận.</li><li>Không tạo giá bán hoặc thông số chưa có nguồn chính thức.</li><li>Tách rõ model hiện hành, model legacy và sản phẩm thay thế.</li><li>Giữ liên kết tới brochure, manual và chứng nhận liên quan.</li></ul><Link className="button button-dark" href="/lien-he">Trao đổi với chúng tôi →</Link></div></div></section>
    </main>
  );
}
