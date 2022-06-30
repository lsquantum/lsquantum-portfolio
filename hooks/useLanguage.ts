import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { content } from "../config/AppConfig";

function useLanguage() {
    const { locale } = useRouter();
    const key = locale! as string;

    const [language, setLanguage] = useState(
        key !== "undefined" ? (key == undefined ? "en-US" : key!) : "en-US"
    );

    const languageItems = content[key as keyof typeof content];

    useEffect(() => {
    }, [language]);

    return [languageItems, setLanguage] as const;
}

export default useLanguage;