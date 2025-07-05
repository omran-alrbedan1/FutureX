import "@/app/globals.css";
import WhatsAppFloatingButton from "@/components/elements/WhatsAppFloatingButton";
import Footer from "@/components/parts/Footer";
import Header from "@/components/parts/Header";
import { AntdProvider } from "@/components/providers/AntdProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { routing } from "@/i18n/routing";
import { Providers } from "@/store/providers";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "FUTURE X",
  description: "Software Company",
  icons: {
    icon: "/images/logo.png",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!hasLocale(routing.locales, params.locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${params.locale}.json`)).default;

  return (
    <html
      lang={params.locale}
      dir={params.locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className=" dark:bg-[#0B0B11]">
        <Providers>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <ThemeProvider>
              <AntdProvider>
                <Header />
                <div className="mt-20">{children}</div>
                <Footer />
                <WhatsAppFloatingButton />
              </AntdProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
