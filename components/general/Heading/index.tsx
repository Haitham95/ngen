import React from "react";

export function H2({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="text-2xl lg:text-5xl font-protestRiot text-purple-dark">
      {children}
    </h2>
  );
}
