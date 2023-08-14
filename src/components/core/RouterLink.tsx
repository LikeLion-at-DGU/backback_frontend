import { useRouter } from "next/router";
import React from "react";

type RouterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const RouterLink: React.FC<RouterLinkProps> = ({ href, children }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      style={{
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default RouterLink;
