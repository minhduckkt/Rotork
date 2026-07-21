import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div className="footer-cta-copy">
            <span className="footer-cta-index">RFQ</span>
            <div>
              <strong>Cần kiểm tra model hoặc cấu hình Rotork?</strong>
              <p>Gửi part number, BOM hoặc ảnh nameplate để nhận tư vấn và báo giá.</p>
            </div>
          </div>
          <Link className="footer-cta-button" href="/lien-he">
            Gửi yêu cầu báo giá <span>→</span>
          </Link>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-geometry" aria-hidden="true" />
        <div className="container footer-brand-row">
          <Link className="footer-lockup" href="/" aria-label="Rotork Việt Nam - Fast Group Engineering">
            <span className="footer-brand">ROTORK</span>
            <span className="footer-brand-divider" />
            <span className="footer-operator">Fast Group Engineering</span>
          </Link>
          <div className="footer-promise">
            <span>Sản phẩm chính hãng</span>
            <span>Dữ liệu từ nguồn chính thức</span>
            <span>Báo giá theo cấu hình</span>
          </div>
        </div>

        <div className="container footer-grid">
          <div className="footer-intro">
            <span className="footer-eyebrow">ROTORK PRODUCTS · VIỆT NAM</span>
            <h2>Giải pháp flow control cho nhà máy và dự án</h2>
            <p>Fast Group Engineering cung cấp sản phẩm Rotork chính hãng, hỗ trợ tra cứu model, lựa chọn cấu hình, tài liệu kỹ thuật và cung ứng tại Việt Nam.</p>
            <div className="footer-response"><b>Phản hồi RFQ</b><span>Model · Giá · Lead time · Chứng từ</span></div>
          </div>

          <div className="footer-column">
            <h3>Sản phẩm</h3>
            <Link href="/san-pham">Bộ truyền động điện</Link>
            <Link href="/san-pham">Khí nén & thủy lực</Link>
            <Link href="/san-pham">Điều khiển chính xác</Link>
            <Link href="/san-pham">Hộp số van</Link>
            <Link href="/san-pham">Instrumentation & Control</Link>
          </div>

          <div className="footer-column">
            <h3>Hỗ trợ khách hàng</h3>
            <Link href="/kien-thuc">Thư viện kiến thức Rotork</Link>
            <Link href="/san-pham">Tra cứu model Rotork</Link>
            <Link href="/#san-pham-noi-bat">Dòng sản phẩm nổi bật</Link>
            <Link href="/lien-he">Gửi BOM / RFQ</Link>
            <Link href="/lien-he">Kiểm tra mã thay thế</Link>
            <Link href="/ve-chung-toi">Năng lực cung ứng</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Liên hệ Fast Group</h3>
            <div className="footer-contact-item">
              <span>Điện thoại / Zalo</span>
              <a href="tel:+84938888958">(+84) 938 888 958</a>
            </div>
            <div className="footer-contact-item">
              <span>Email</span>
              <a href="mailto:minhduc@fastgroup.vn">minhduc@fastgroup.vn</a>
            </div>
            <div className="footer-contact-item">
              <span>Trụ sở</span>
              <p>150/41 Nguyễn Cư Trinh, P. Cầu Ông Lãnh, TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div>
            <span>© 2026 Công ty TNHH Fast Group Engineering</span>
            <span>MST: 0315555189</span>
          </div>
          <p>Website do Fast Group Engineering vận hành nhằm cung cấp, tư vấn và hỗ trợ kỹ thuật sản phẩm Rotork tại Việt Nam. Rotork và các nhãn hiệu liên quan thuộc chủ sở hữu tương ứng.</p>
          <Link href="/">rotork.com.vn</Link>
        </div>
      </div>
    </footer>
  );
}
