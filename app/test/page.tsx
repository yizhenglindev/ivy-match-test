"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { QuestionCard } from "@/components/question-card";
import { questionSets, resolveQuizMode } from "@/data/questions";
import { pickText, resolveLang } from "@/lib/i18n";

export default function TestPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = resolveLang(searchParams.get("lang") ?? undefined);
  const mode = resolveQuizMode(searchParams.get("mode") ?? undefined);
  const questions = questionSets[mode];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentIndex];
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const progress = Math.round((answeredCount / questions.length) * 100);

  const handleSelectOption = (optionId: string) => {
    const questionId = currentQuestion.id;
    const nextAnswers = { ...answers, [questionId]: optionId };
    setAnswers(nextAnswers);

    const isLastQuestion = currentIndex === questions.length - 1;
    if (isLastQuestion) {
      const orderedAnswers = questions.map(
        (question) => nextAnswers[question.id],
      ) as string[];
      router.push(
        `/result?answers=${encodeURIComponent(orderedAnswers.join(","))}&lang=${lang}&mode=${mode}`,
      );
      return;
    }

    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const keyAsNumber = Number(event.key);
      if (Number.isNaN(keyAsNumber) || keyAsNumber < 1 || keyAsNumber > 4) {
        return;
      }

      const matchedOption = currentQuestion.options[keyAsNumber - 1];
      if (!matchedOption) {
        return;
      }

      handleSelectOption(matchedOption.id);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentQuestion, answers, currentIndex]);

  return (
    <div className="space-y-6">
      <header className="hero-card rounded-3xl p-6 shadow-lg shadow-indigo-100/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            Ivy Match Quiz
          </p>
          <LanguageSwitch lang={lang} />
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
          {pickText("测试进行中 / Quiz In Progress", lang)}
        </h1>
        <p className="mt-2 text-slate-600">
          {pickText(
            "每题点击一个选项，系统会自动进入下一题并累计各校匹配分。 / Select one option to move forward automatically.",
            lang,
          )}
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
          <span>
            {pickText(
              `第 ${currentIndex + 1} / ${questions.length} 题 / Question ${currentIndex + 1} of ${questions.length}`,
              lang,
            )}
          </span>
          <span>{pickText(`完成度 ${progress}% / Progress ${progress}%`, lang)}</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100">
          <div className="animated-progress h-2 rounded-full" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          {pickText(
            "提示：你可以直接按键盘 1-4 快速选择答案。 / Tip: Press 1-4 to answer quickly.",
            lang,
          )}
        </p>
      </section>

      <QuestionCard question={currentQuestion} onSelectOption={handleSelectOption} lang={lang} />

      <div className="flex items-center gap-3 pt-1">
        <Link
          href={`/?lang=${lang}&mode=${mode}`}
          className="secondary-btn rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition"
        >
          {pickText("返回首页 / Back Home", lang)}
        </Link>
      </div>
    </div>
  );
}
