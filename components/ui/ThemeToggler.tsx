// "use client";

// import * as React from "react";
// import { MoonIcon, SunIcon } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";

// export function ThemeToggler() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className=" h-6 w-8 md:h-8 md:w-10 bg-primary-color1 rounded-[10%] hover:bg-primary-color1/80"
//     >
//       <SunIcon className="h-[1.2rem] w-[1.2rem] text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//     </Button>
//   );
// }

"use client";

import { LaptopOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme");
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const items: MenuProps["items"] = [
    {
      key: "light",
      label: (
        <Space>
          <SunOutlined />
          {t("light")}
        </Space>
      ),
      onClick: () => {
        setTheme("light");
        setDropdownVisible(false);
      },
    },
    {
      key: "dark",
      label: (
        <Space>
          <MoonOutlined />
          {t("dark")}
        </Space>
      ),
      onClick: () => {
        setTheme("dark");
        setDropdownVisible(false);
      },
    },
    {
      key: "system",
      label: (
        <Space>
          <LaptopOutlined />
          {t("system")}
        </Space>
      ),
      onClick: () => {
        setTheme("system");
        setDropdownVisible(false);
      },
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      arrow={{ pointAtCenter: true }}
      open={dropdownVisible}
      onOpenChange={(visible) => setDropdownVisible(visible)}
    >
      <Button
        type="text"
        size="large"
        icon={
          theme === "dark" ? (
            <MoonOutlined />
          ) : theme === "light" ? (
            <SunOutlined />
          ) : (
            <LaptopOutlined />
          )
        }
        aria-label={t("toggleTheme")}
        onClick={(e) => {
          e.preventDefault();
          setDropdownVisible(!dropdownVisible);
        }}
      />
    </Dropdown>
  );
}
