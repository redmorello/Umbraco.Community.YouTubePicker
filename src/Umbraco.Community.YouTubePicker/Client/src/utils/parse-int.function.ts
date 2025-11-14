export function parseInt(input: unknown): number | undefined {
  const num = Number(input);
  return Number.isNaN(num) ? undefined : num;
}
