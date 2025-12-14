import { RoundedTime } from "../types/roundTime";

export default function getTimeRounded(
    timeMs: number,
): RoundedTime | undefined {
    const seconds = Math.floor(timeMs / 1000),
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24),
        weeks = Math.floor(days / 7);

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
