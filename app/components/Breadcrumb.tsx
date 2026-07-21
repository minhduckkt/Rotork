import Link from "next/link";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Trang chủ</Link><span>›</span><strong>{current}</strong>
    </div>
  );
}
