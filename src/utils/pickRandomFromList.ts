export default function pickRandomFromList<T>(list: readonly T[]) {
    const randomIndex = Math.floor(list.length * Math.random());
    return list[randomIndex];
}
