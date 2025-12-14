export default function calcTimeLeft({
    currTime,
    sessionStartTime,
    roundedTimeToWait,
}: {
    currTime: number;
    sessionStartTime: number;
    roundedTimeToWait: number;
}) {
    const hoursTill2Am = 26 - new Date(sessionStartTime).getHours();

    return (
        sessionStartTime +
        roundedTimeToWait +
        1000 * 60 * 60 * hoursTill2Am -
        currTime
    );
}
