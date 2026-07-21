import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rotork.com.vn"),
  title: {
    default: "Rotork Việt Nam | Fast Group Engineering",
    template: "%s | Rotork Việt Nam",
  },
  description: "Fast Group Engineering cung cấp sản phẩm Rotork chính hãng tại Việt Nam, hỗ trợ tra cứu model, lựa chọn cấu hình, tài liệu kỹ thuật và báo giá.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Rotork Việt Nam - Fast Group Engineering",
    title: "Sản phẩm Rotork chính hãng tại Việt Nam",
    description: "Tra cứu model, cấu hình và yêu cầu báo giá Rotork từ Fast Group Engineering.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Sản phẩm Rotork chính hãng tại Việt Nam - Fast Group Engineering" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Công ty TNHH Fast Group Engineering",
        url: "https://rotork.com.vn",
        telephone: "+84938888958",
        email: "minhduc@fastgroup.vn",
        address: { "@type": "PostalAddress", streetAddress: "150/41 Nguyễn Cư Trinh, Phường Cầu Ông Lãnh", addressLocality: "Hồ Chí Minh", addressCountry: "VN" },
      },
      {
        "@type": "WebSite",
        name: "Rotork Việt Nam - Fast Group Engineering",
        url: "https://rotork.com.vn",
        inLanguage: "vi-VN",
        potentialAction: { "@type": "SearchAction", target: "https://rotork.com.vn/san-pham?q={search_term_string}", "query-input": "required name=search_term_string" },
      },
    ],
  };
  return (
    <html lang="vi">
      <body>
        <a className="skip-link" href="#main">Đi đến nội dung</a>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
