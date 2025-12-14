export type SetStateActionWithReset<Value> =
    | Value
    | typeof RESET
    | ((prev: Value) => Value | typeof RESET);
