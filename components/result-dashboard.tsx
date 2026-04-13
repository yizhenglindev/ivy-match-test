"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ivySchoolMeta, type IvyMatchResult } from "@/lib/ivy-match";
import type { Lang } from "@/lib/i18n";
import { pickText } from "@/lib/i18n";

type ResultDashboardProps = {
  result: IvyMatchResult;
  lang: Lang;
};

export function ResultDashboard({ result, lang }: ResultDashboardProps) {
  const [animatedTopScore, setAnimatedTopScore] = useState(0);
  const [animatedPercents, setAnimatedPercents] = useState<Record<string, number>>({});

  const topThree = useMemo(() => result.rankedSchools.slice(0, 3), [result.rankedSchools]);

  useEffect(() => {
    const durationMs = 700;
    const frameMs = 16;
    const totalFrames = Math.max(1, Math.floor(durationMs / frameMs));
    let frame = 0;

    const timer = window.setInterval(() => {
      frame += 1;
      const ratio = Math.min(1, frame / totalFrames);

      setAnimatedTopScore(Math.round(result.topSchoolScore * ratio));
      setAnimatedPercents(
        result.rankedSchools.reduce<Record<string, number>>((acc, item) => {
          acc[item.key] = Math.round(item.percent * ratio);
          return acc;
        }, {}),
      );

      if (ratio >= 1) {
        window.clearInterval(timer);
      }
    }, frameMs);

    return () => window.clearInterval(timer);
  }, [result]);

  return (
    <>
      <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-sm">
        <p className="text-sm font-semibold text-emerald-700">
          {pickText("Top 1 匹配院校 / Top 1 Best Fit", lang)}
        </p>
        <div className="mt-3 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={ivySchoolMeta[result.topSchool].logoPath}
              alt={pickText(ivySchoolMeta[result.topSchool].name, lang)}
              width={64}
              height={64}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h2 className="text-4xl font-black text-emerald-900">
            {pickText(ivySchoolMeta[result.topSchool].name, lang)}
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-emerald-800">{pickText(result.explanation, lang)}</p>
        <p className="mt-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
          {pickText(`匹配分：${animatedTopScore} / Score: ${animatedTopScore}`, lang)}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900">
          {pickText("Top 3 匹配榜 / Top 3 Ranking", lang)}
        </h3>
        <div className="mt-4 space-y-3">
          {topThree.map((item, index) => (
            <div key={item.key} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white">
                    <Image
                      src={ivySchoolMeta[item.key].logoPath}
                      alt={pickText(ivySchoolMeta[item.key].name, lang)}
                      width={28}
                      height={28}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    #{index + 1} {pickText(ivySchoolMeta[item.key].name, lang)}
                  </p>
                </div>
                <p className="text-sm text-slate-600">
                  {pickText(`${item.score} 分 / ${item.score} pts`, lang)}
                </p>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div
                  className="score-bar h-2 rounded-full"
                  style={{ width: `${animatedPercents[item.key] ?? 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900">
          {pickText("8 校总览 / All 8 Schools", lang)}
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {result.rankedSchools.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm"
            >
              <span className="font-medium text-slate-700">{pickText(ivySchoolMeta[item.key].name, lang)}</span>
              <span className="text-slate-500">
                {pickText(
                  `${item.score} 分（${animatedPercents[item.key] ?? 0}%） / ${item.score} pts (${animatedPercents[item.key] ?? 0}%)`,
                  lang,
                )}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
