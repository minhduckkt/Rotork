import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="brand-bar">
        <div className="container brand-bar-inner">
          <Link className="brand" href="/" aria-label="Rotork Việt Nam - Trang chủ">
            <span className="brand-main">ROTORK</span>
            <span className="brand-divider" />
            <span className="brand-operator">Fast Group Engineering</span>
          </Link>
          <div className="brand-contact">
            <a href="tel:+84938888958">(+84) 938 888 958</a>
            <span>•</span>
            <a href="mailto:minhduc@fastgroup.vn">minhduc@fastgroup.vn</a>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container nav-inner">
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            <Link href="/">Trang chủ</Link>
            <Link href="/san-pham">Sản phẩm</Link>
            <Link href="/kien-thuc">Kiến thức</Link>
            <Link href="/ve-chung-toi">Về chúng tôi</Link>
            <Link href="/lien-he">Liên hệ</Link>
          </nav>
          <Link className="header-search" href="/san-pham" aria-label="Tìm model Rotork">
            <span>Tìm model Rotork</span><b>⌕</b>
          </Link>
          <Link className="button button-red header-cta" href="/lien-he">Yêu cầu báo giá</Link>
          <details className="mobile-menu">
            <summary aria-label="Mở menu">Menu</summary>
            <nav aria-label="Điều hướng di động">
              <Link href="/">Trang chủ</Link>
              <Link href="/san-pham">Sản phẩm</Link>
              <Link href="/kien-thuc">Kiến thức</Link>
              <Link href="/ve-chung-toi">Về chúng tôi</Link>
              <Link href="/lien-he">Liên hệ</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
