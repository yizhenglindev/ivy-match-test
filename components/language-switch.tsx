"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Lang } from "@/lib/i18n";

type LanguageSwitchProps = {
  lang: Lang;
};

export function LanguageSwitch({ lang }: LanguageSwitchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLang = (nextLang: Lang) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="inline-flex rounded-xl border border-slate-300 bg-white p-1 text-xs font-semibold">
      <button
        type="button"
        onClick={() => changeLang("zh")}
        className={`rounded-lg px-3 py-1 ${lang === "zh" ? "bg-indigo-600 text-white" : "text-slate-600"}`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => changeLang("en")}
        className={`rounded-lg px-3 py-1 ${lang === "en" ? "bg-indigo-600 text-white" : "text-slate-600"}`}
      >
        EN
      </button>
    </div>
  );
}
