import HeaderSwitchModes from "@/src/components/HeaderSwitchModes";
import MainInput from "@/src/components/MainInput";
import { Provider } from "jotai";

export default function MainPage() {
    return (
        <Provider>
            <main className="flex flex-col">
                <HeaderSwitchModes />
                <MainInput />
            </main>
        </Provider>
    );
}
