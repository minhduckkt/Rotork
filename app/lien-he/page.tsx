import type { Metadata } from "next";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Liên hệ và yêu cầu báo giá Rotork",
  description: "Gửi model, part number, BOM hoặc ảnh nameplate để Fast Group Engineering kiểm tra cấu hình và báo giá sản phẩm Rotork.",
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero compact"><div className="container"><Breadcrumb current="Liên hệ" /><span className="kicker light">REQUEST FOR QUOTATION</span><h1>Gửi yêu cầu báo giá Rotork</h1><p>Cung cấp càng nhiều thông tin, chúng tôi càng có thể kiểm tra model và phản hồi chính xác hơn.</p></div></section>
      <section className="section"><div className="container contact-layout">
        <div className="contact-info"><span className="kicker">FAST GROUP ENGINEERING</span><h2>Trao đổi trực tiếp với đội ngũ cung ứng</h2><p>Đối với yêu cầu gấp, bạn có thể gửi model hoặc ảnh nameplate qua điện thoại/Zalo.</p>
          <div className="contact-method"><span>Điện thoại / Zalo</span><a href="tel:+84938888958">(+84) 938 888 958</a></div>
          <div className="contact-method"><span>Email</span><a href="mailto:minhduc@fastgroup.vn">minhduc@fastgroup.vn</a></div>
          <div className="contact-method"><span>Trụ sở</span><p>150/41 Nguyễn Cư Trinh, Phường Cầu Ông Lãnh, TP. Hồ Chí Minh</p></div>
          <div className="contact-note"><strong>Thông tin nên chuẩn bị</strong><ul><li>Model hoặc ảnh nameplate</li><li>Số lượng và thời gian cần hàng</li><li>Thông số vận hành chính</li><li>Yêu cầu CO/CQ, datasheet hoặc chứng nhận</li></ul></div>
        </div>
        <form className="rfq-form" action="mailto:minhduc@fastgroup.vn" method="post" encType="text/plain">
          <div className="form-head"><span>RFQ FORM</span><h2>Thông tin yêu cầu</h2><p>Biểu mẫu sẽ mở ứng dụng email trên thiết bị của bạn.</p></div>
          <div className="form-grid"><label>Họ và tên *<input name="Ho va ten" required placeholder="Nguyễn Văn A" /></label><label>Công ty<input name="Cong ty" placeholder="Tên doanh nghiệp" /></label><label>Email *<input name="Email" type="email" required placeholder="email@company.com" /></label><label>Số điện thoại *<input name="So dien thoai" required placeholder="09xx xxx xxx" /></label><label className="full">Model / Part number<input name="Model" placeholder="Ví dụ: IQT3 Pro" /></label><label className="full">Nội dung yêu cầu *<textarea name="Noi dung" required rows={6} placeholder="Số lượng, thông số, thời gian cần hàng và yêu cầu chứng từ…" /></label></div>
          <button className="button button-red submit-button" type="submit">Gửi yêu cầu qua email →</button><small>Bằng việc gửi yêu cầu, bạn đồng ý để Fast Group Engineering sử dụng thông tin trên nhằm mục đích tư vấn và báo giá.</small>
        </form>
      </div></section>
    </main>
  );
}
