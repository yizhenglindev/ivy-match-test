"use client";

import type { Question } from "@/data/questions";
import type { Lang } from "@/lib/i18n";
import { pickText } from "@/lib/i18n";

type QuestionCardProps = {
  question: Question;
  onSelectOption: (optionId: string) => void;
  lang: Lang;
};

export function QuestionCard({ question, onSelectOption, lang }: QuestionCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">
        {pickText(`题目 ${question.id} / Question ${question.id}`, lang)}
      </p>
      <h2 className="mb-5 text-xl font-bold leading-relaxed text-slate-900">
        {pickText(question.title, lang)}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelectOption(option.id)}
            className="group w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 hover:text-slate-900"
          >
            <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 transition group-hover:bg-indigo-100 group-hover:text-indigo-700">
              {index + 1}
            </span>
            {pickText(option.label, lang)}
          </button>
        ))}
      </div>
    </section>
  );
}
