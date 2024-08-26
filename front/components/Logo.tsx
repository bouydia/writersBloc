import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  width: number;
  height: number;
};

const Logo = ({ width = 80, height = 80 }: LogoProps) => {
  return (
    <Link href="/" className="">
      <Image src="/logo-dark.svg" width={width} height={height} alt="logo" />
    </Link>
  );
};

export default Logo;
