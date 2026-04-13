import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { calculateIvyMatchResult, ivySchoolMeta } from "@/lib/ivy-match";
import { questionSets, resolveQuizMode } from "@/data/questions";
import { ResultDashboard } from "@/components/result-dashboard";
import { pickText, resolveLang } from "@/lib/i18n";

type ResultPageProps = {
  searchParams: Promise<{ answers?: string; lang?: string; mode?: string }>;
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;
  const lang = resolveLang(params.lang);
  const mode = resolveQuizMode(params.mode);
  const questions = questionSets[mode];
  const answers = decodeURIComponent(params.answers ?? "")
    .split(",")
    .filter(Boolean);
  const result = calculateIvyMatchResult(questions, answers);

  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-lg shadow-emerald-100/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Ivy Match Result
          </p>
          <LanguageSwitch lang={lang} />
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          {pickText("你的藤校匹配结果 / Your Ivy Match Result", lang)}
        </h1>
        <p className="mt-2 text-slate-600">
          {pickText(
            "基于你的答题选择，计算了 8 所藤校的匹配分数。 / Scores are calculated across all 8 Ivy schools.",
            lang,
          )}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {pickText("结果类型： / Match Type: ", lang)}
          {pickText(ivySchoolMeta[result.topSchool].name, lang)}
        </p>
      </header>

      <ResultDashboard result={result} lang={lang} />

      <div className="flex items-center gap-3">
        <Link
          href={`/?lang=${lang}&mode=${mode}`}
          className="secondary-btn rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition"
        >
          {pickText("回到首页 / Back Home", lang)}
        </Link>
        <Link
          href={`/test?lang=${lang}&mode=${mode}`}
          className="primary-btn rounded-xl px-4 py-2 text-sm font-semibold transition"
        >
          {pickText("重新测试 / Retake Quiz", lang)}
        </Link>
      </div>
    </div>
  );
}
