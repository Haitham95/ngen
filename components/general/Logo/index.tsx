import React from "react";
import Image from "next/image";
function Logo({ width, height }: { width: number; height: number }) {
  return (
    <Image
      src="/assets/images/logos/ngen-logo.svg"
      width={width}
      height={height}
      alt="NGen Logo"
    />
  );
}

export default Logo;
