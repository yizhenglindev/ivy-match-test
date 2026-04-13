import type { Question } from "@/data/questions";

export type DimensionScores = {
  IE: number;
};

export type PersonalityResult = {
  type: "I" | "E";
  totalScore: number;
  dimensionScores: DimensionScores;
  description: string;
};

export function calculatePersonalityResult(
  questions: Question[],
  answers: Array<1 | 2 | 3 | 4>,
): PersonalityResult {
  const dimensionScores: DimensionScores = { IE: 0 };
  let totalScore = 0;

  questions.forEach((question, index) => {
    const score = answers[index] ?? 0;
    totalScore += score;
    dimensionScores[question.dimension] += score;
  });

  const ieQuestionCount = questions.filter((question) => question.dimension === "IE").length;
  const ieMidpoint = ieQuestionCount * 2.5;
  const type: "I" | "E" = dimensionScores.IE >= ieMidpoint ? "E" : "I";

  const description =
    type === "E"
      ? "你更偏向外向（E）：通过与外界互动获得能量，愿意表达和连接他人。"
      : "你更偏向内向（I）：通过独处与思考恢复能量，重视内在感受和深度体验。";

  return {
    type,
    totalScore,
    dimensionScores,
    description,
  };
}
