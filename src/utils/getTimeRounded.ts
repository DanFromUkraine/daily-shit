import { RoundedTime } from "../types/roundTime";

export default function getTimeRounded(
  timeMs: number,
): RoundedTime | undefined {
  const seconds = round(timeMs / 1000),
    minutes = round(seconds / 60),
    hours = round(minutes / 60),
    days = round(hours / 24),
    weeks = round(days / 7);

  if (weeks > 1) return { timeUnit: "weeks", amount: weeks };
  else if (weeks === 1) return { timeUnit: "week", amount: 1 };
  else if (days > 1) return { timeUnit: "days", amount: days };
  else if (days === 1) return { timeUnit: "day", amount: 1 };
  else if (hours > 1) return { timeUnit: "hours", amount: hours };
  else if (hours === 1) return { timeUnit: "hour", amount: 1 };
  else if (minutes > 1) return { timeUnit: "minutes", amount: minutes };
  else if (minutes === 1) return { timeUnit: "minute", amount: 1 };
  else if (seconds > 1) return { timeUnit: "seconds", amount: seconds };
  else if (seconds === 1) return { timeUnit: "second", amount: 1 };
}

function round(target: number) {
  const RATE = 10;

  return Math.round(target * 10) / 10;
}
