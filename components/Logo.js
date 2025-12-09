import Image from "next/image";
import Link from "next/link";

export default function Logo({ width = 185, height = 41 }) {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/images/logo.svg"
        alt="mrnet"
        width={width}
        height={height}
        priority
        className="hover:opacity-80 transition-opacity"
      />
    </Link>
  );
}


