import { useAtom } from "jotai";
import { useEffect } from "react";
import { lastSessionStartDataLSAtom } from "../jotai/clearLogic";

export default function useInitDateInLS() {
    const [date, updateDate] = useAtom(lastSessionStartDataLSAtom);
    useEffect(() => {
        console.log({ date });
        if (date === 0) {
            console.log("update time");
            updateDate(Date.now());
        }
    }, [date, updateDate]);
}
