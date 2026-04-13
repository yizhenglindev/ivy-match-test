import type { IvySchoolKey, Question } from "@/data/questions";

export const ivySchoolMeta: Record<
  IvySchoolKey,
  { name: string; description: string; iconText: string; iconClass: string; logoPath: string }
> = {
  harvard: {
    name: "哈佛 / Harvard",
    description:
      "偏向高目标驱动与影响力导向，适合想站上更大平台的人。 / Goal-driven and impact-oriented, ideal for people aiming at major platforms.",
    iconText: "H",
    iconClass: "bg-rose-100 text-rose-700 border-rose-200",
    logoPath: "/ivy-logos/harvard.svg",
  },
  yale: {
    name: "耶鲁 / Yale",
    description:
      "偏向人文表达与思辨氛围，适合重视叙事与思想深度的人。 / Humanities-forward and reflective, great for narrative and depth thinkers.",
    iconText: "Y",
    iconClass: "bg-blue-100 text-blue-700 border-blue-200",
    logoPath: "/ivy-logos/yale.svg",
  },
  princeton: {
    name: "普林斯顿 / Princeton",
    description:
      "偏向学术严谨与研究深耕，适合喜欢深度推理与理论训练的人。 / Rigorous and research-intensive, best for deep reasoning and theory lovers.",
    iconText: "P",
    iconClass: "bg-orange-100 text-orange-700 border-orange-200",
    logoPath: "/ivy-logos/princeton.svg",
  },
  columbia: {
    name: "哥大 / Columbia",
    description:
      "偏向城市机会与跨界实践，适合喜欢快节奏与资源联动的人。 / Urban and cross-disciplinary, fitting for fast-paced opportunity seekers.",
    iconText: "C",
    iconClass: "bg-sky-100 text-sky-700 border-sky-200",
    logoPath: "/ivy-logos/columbia.svg",
  },
  penn: {
    name: "宾大 / Penn",
    description:
      "偏向实践与商业联动，适合结果导向与执行力强的人。 / Practical and business-connected, suitable for execution-focused achievers.",
    iconText: "UP",
    iconClass: "bg-red-100 text-red-700 border-red-200",
    logoPath: "/ivy-logos/penn.svg",
  },
  brown: {
    name: "布朗 / Brown",
    description:
      "偏向自由探索与个性路径，适合自驱和开放型学习者。 / Open and exploratory, excellent for self-directed learners.",
    iconText: "B",
    iconClass: "bg-amber-100 text-amber-700 border-amber-200",
    logoPath: "/ivy-logos/brown.svg",
  },
  dartmouth: {
    name: "达特茅斯 / Dartmouth",
    description:
      "偏向紧密社群与归属感，适合重视关系和校园共同体的人。 / Community-centric with strong belonging, great for relationship-oriented students.",
    iconText: "D",
    iconClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    logoPath: "/ivy-logos/dartmouth.svg",
  },
  cornell: {
    name: "康奈尔 / Cornell",
    description:
      "偏向务实多元与专业投入，适合能在大体系中自我推进的人。 / Pragmatic and diverse, fitting for self-driven students in large systems.",
    iconText: "CR",
    iconClass: "bg-pink-100 text-pink-700 border-pink-200",
    logoPath: "/ivy-logos/cornell.svg",
  },
};

export type IvyMatchResult = {
  topSchool: IvySchoolKey;
  topSchoolScore: number;
  explanation: string;
  rankedSchools: Array<{ key: IvySchoolKey; score: number; percent: number }>;
};

export function calculateIvyMatchResult(
  questions: Question[],
  answers: string[],
): IvyMatchResult {
  const scores: Record<IvySchoolKey, number> = {
    harvard: 0,
    yale: 0,
    princeton: 0,
    columbia: 0,
    penn: 0,
    brown: 0,
    dartmouth: 0,
    cornell: 0,
  };

  questions.forEach((question, index) => {
    const answerId = answers[index];
    const selectedOption = question.options.find((option) => option.id === answerId);
    if (!selectedOption) {
      return;
    }

    Object.entries(selectedOption.points).forEach(([school, point]) => {
      if (!point) {
        return;
      }
      scores[school as IvySchoolKey] += point;
    });
  });

  const rankedSchools = (Object.keys(scores) as IvySchoolKey[])
    .map((key) => ({ key, score: scores[key] }))
    .sort((a, b) => b.score - a.score);

  const topScore = rankedSchools[0]?.score ?? 0;
  const rankedWithPercent = rankedSchools.map((item) => ({
    ...item,
    percent: topScore > 0 ? Math.round((item.score / topScore) * 100) : 0,
  }));

  const topSchool = rankedWithPercent[0]?.key ?? "harvard";

  return {
    topSchool,
    topSchoolScore: rankedWithPercent[0]?.score ?? 0,
    explanation: ivySchoolMeta[topSchool].description,
    rankedSchools: rankedWithPercent,
  };
}
