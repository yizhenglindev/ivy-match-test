export type Lang = "zh" | "en";

export function resolveLang(input?: string): Lang {
  return input === "en" ? "en" : "zh";
}

export function pickText(text: string, lang: Lang): string {
  const parts = text.split(" / ");
  if (parts.length < 2) {
    return text;
  }
  return lang === "en" ? parts[1] : parts[0];
}
