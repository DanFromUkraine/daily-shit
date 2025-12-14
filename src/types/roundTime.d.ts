export type TimeUnit =
    | "weeks"
    | "week"
    | "days"
    | "day"
    | "hours"
    | "hour"
    | "minutes"
    | "minute"
    | "seconds"
    | "second";

export type RoundedTime = {
    timeUnit: TimeUnit;
    amount: number;
};
