"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  { src: "/images/products/iqt3-pro.jpg", alt: "Bộ truyền động Rotork IQT3 Pro" },
  { src: "/images/products/iqt3-pro-gallery/iqt3-pro-cutaway-yellow.jpg", alt: "Cấu tạo cắt lớp IQT3 Pro màu vàng" },
  { src: "/images/products/iqt3-pro-gallery/iqt3-pro-cutaway-red.jpg", alt: "Cấu tạo cắt lớp IQT3 Pro màu đỏ" },
  { src: "/images/products/iqt3-pro-gallery/iqt3-pro-view-2.jpg", alt: "Góc nhìn bên của IQT3 Pro" },
  { src: "/images/products/iqt3-pro-gallery/iqt3-pro-view-3.jpg", alt: "Góc nhìn điều khiển IQT3 Pro" },
];

export function ProductGallery() {
  const [active, setActive] = useState(0);
  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <span className="gallery-badge">Ảnh sản phẩm chính thức</span>
        <Image src={gallery[active].src} alt={gallery[active].alt} width={800} height={800} priority />
        <span className="gallery-count">{String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
      </div>
      <div className="gallery-thumbs" aria-label="Chọn ảnh sản phẩm">
        {gallery.map((image, index) => (
          <button className={active === index ? "active" : ""} key={image.src} onClick={() => setActive(index)} aria-label={`Xem ảnh ${index + 1}: ${image.alt}`}>
            <Image src={image.src} alt="" width={160} height={160} />
          </button>
        ))}
      </div>
    </div>
  );
}
