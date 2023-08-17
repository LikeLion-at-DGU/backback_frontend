import { useCallback } from "react";

export default function LoginButton({
  loginUrl,
  children,
}: {
  loginUrl: string;
  children: React.ReactNode;
}) {
  const onClick = useCallback(() => {
    window.location.href = loginUrl;
  }, [loginUrl]);

  return <div onClick={onClick}>{children}</div>;
}
