import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { pickText, resolveLang } from "@/lib/i18n";
import { resolveQuizMode } from "@/data/questions";

type HomePageProps = {
  searchParams: Promise<{ lang?: string; mode?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const lang = resolveLang(params.lang);
  const mode = resolveQuizMode(params.mode);

  return (
    <div className="space-y-8">
      <header className="hero-card rounded-3xl p-8 shadow-lg shadow-indigo-100/50 backdrop-blur">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Ivy League Match Quiz
          </p>
          <LanguageSwitch lang={lang} />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {pickText("你更适合哪所藤校？ / Which Ivy League school fits you best?", lang)}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          {pickText(
            "用 10 道情境题，生成你和 8 所藤校的匹配榜单。结果会展示 Top 1、Top 3 和完整分数表。 / Answer 10 scenario-based questions to generate your match ranking across all 8 Ivy schools.",
            lang,
          )}
        </p>
      </header>

      <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-800">
            {pickText("10 题快速完成 / 10 Quick Questions", lang)}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {pickText("每题 4 个选项，点击即下一题。 / 4 options per question.", lang)}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-800">
            {pickText("8 校独立计分 / 8-School Scoring", lang)}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {pickText("每个选项会给不同学校加权分。 / Each option boosts different schools.", lang)}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-800">
            {pickText("结果可解释 / Explainable Result", lang)}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {pickText("给出匹配院校与风格说明。 / Includes fit explanation.", lang)}
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-xl font-bold text-slate-900">
          {pickText("开始测试 / Start Quiz", lang)}
        </h2>
        <p className="mb-6 text-slate-600">
          {pickText("选择题风后开始，约 1 分钟出结果。 / Pick a tone and finish in about one minute.", lang)}
        </p>
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/?lang=${lang}&mode=normal`}
            className={`rounded-2xl border p-4 text-left transition ${mode === "normal" ? "border-indigo-300 bg-indigo-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
          >
            <p className="text-sm font-semibold text-slate-800">
              {pickText("Normal 模式（正经） / Normal Mode (Serious)", lang)}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {pickText("更像真实择校问卷 / More formal and realistic", lang)}
            </p>
          </Link>
          <Link
            href={`/?lang=${lang}&mode=fun`}
            className={`rounded-2xl border p-4 text-left transition ${mode === "fun" ? "border-pink-300 bg-pink-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
          >
            <p className="text-sm font-semibold text-slate-800">
              {pickText("Fun 模式（极端玩梗） / Fun Mode (Extreme Stereotypes)", lang)}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {pickText("更夸张、更不正经、更像娱乐测试 / More exaggerated and meme-like", lang)}
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/test?lang=${lang}&mode=${mode}`}
            className="primary-btn rounded-xl px-5 py-3 text-sm font-semibold transition"
          >
            {pickText("开始测试 / Start Quiz", lang)}
          </Link>
          <Link
            href={`/result?lang=${lang}&mode=${mode}`}
            className="secondary-btn rounded-xl px-5 py-3 text-sm font-semibold text-slate-700 transition"
          >
            {pickText("查看结果模板 / View Sample Result", lang)}
          </Link>
        </div>
      </section>
    </div>
  );
}
