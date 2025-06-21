"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#17314d",
          },
        }}
      >
        {children}
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#17314d",
        },
        algorithm:
          resolvedTheme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
      key={resolvedTheme}
    >
      {children}
    </ConfigProvider>
  );
}
