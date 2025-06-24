export type StarType = "filled" | "half" | "second" | "fourth" | "unfilled";

export const starAvg = (rating: number, index: number): StarType => {
  const rounded = Math.round(rating * 10) / 10;

  if (rounded === 0) return "unfilled";

  const base = Math.floor(rounded);
  const decimal = rounded - base;

  if (index < base) return "filled";
  if (index > base) return "unfilled";

  if (decimal === 0) return "unfilled";
  if (decimal === 0.5) return "half";
  if (decimal < 0.5) return "second";
  if (decimal > 0.5) return "fourth";

  return "unfilled";
};
