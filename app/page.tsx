import HeaderSwitchModes from "@/src/components/HeaderSwitchModes";
import MainInput from "@/src/components/MainInput";
import { Provider } from "jotai";

export default function MainPage() {
    return (
        <Provider>
            <main className="flex flex-col gap-10 h-screen">
                <HeaderSwitchModes />
                <MainInput />
            </main>
        </Provider>
    );
}
