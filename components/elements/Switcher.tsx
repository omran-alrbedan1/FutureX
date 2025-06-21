"use client";

import { ConfigProvider, Select } from "antd";
import theme from "antd/es/theme";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState("en");
  const { resolvedTheme } = useTheme();

  const languages = [
    {
      code: "en",
      name: "English",
      countryCode: "US",
    },
    {
      code: "ar",
      name: "العربية",
      countryCode: "SY",
    },
  ];

  useEffect(() => {
    const pathParts = pathname.split("/").filter(Boolean);
    const langFromPath = pathParts[0];

    if (languages.some((lang) => lang.code === langFromPath)) {
      setCurrentLang(langFromPath);
    } else {
      setCurrentLang("en");
    }
  }, [pathname]);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);

    const pathParts = pathname.split("/").filter(Boolean);
    const isCurrentPathLang = languages.some(
      (lang) => lang.code === pathParts[0]
    );
    const remainingPath = isCurrentPathLang ? pathParts.slice(1) : pathParts;

    const newPath = `/${langCode}/${remainingPath.join("/")}`;
    router.push(newPath);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  return (
    <ConfigProvider
      theme={{
        algorithm:
          resolvedTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <Select
        value={currentLang}
        onChange={changeLanguage}
        style={{ width: 140 }}
        optionLabelProp="label"
        className="language-switcher" // Add a class for custom styling
      >
        {languages.map((lang) => (
          <Select.Option
            key={lang.code}
            value={lang.code}
            label={
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={lang.countryCode}
                  svg
                  style={{ width: "1.2em", height: "1.2em" }}
                />
                <span>{lang.name}</span>
              </div>
            }
          >
            <div className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode={lang.countryCode}
                svg
                style={{ width: "1.2em", height: "1.2em" }}
              />
              <span>{lang.name}</span>
            </div>
          </Select.Option>
        ))}
      </Select>
    </ConfigProvider>
  );
}
