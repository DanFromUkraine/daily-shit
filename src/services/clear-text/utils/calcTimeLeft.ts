export const ONE_DAY = 86400000;

export default function calcDeadlineTimeLeft({
  startTimeInMs,
  daysToAdd,
}: {
  startTimeInMs: number;
  daysToAdd: number;
}) {
  const now = Date.now();
  const baseDeadline = startTimeInMs + daysToAdd * ONE_DAY;
  const targetDate = new Date(baseDeadline);
  targetDate.setHours(2, 0, 0, 0);

  let finalDeadline = targetDate.getTime();
  if (finalDeadline < baseDeadline) {
    finalDeadline += ONE_DAY;
  }

  return Math.max(0, finalDeadline - now);
}
