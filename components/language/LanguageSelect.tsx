import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { LanguageIcon, SelectedIcon } from "../icons/Icon";
import { useRouter } from "next/router";

const language = [
    { text: "English", code: "en", value: "en-US" },
    { text: "Türkçe", code: "tr", value: "tr-TR" },
];

function LanguageSelect() {
    const router = useRouter();
    const { pathname, asPath, query } = router;
    const [selectedLanguage, setSelectedLanguage] = useState(router.locale);
    const changeLang = (langCode: string) => {
        router.push({ pathname, query }, asPath, { locale: langCode });
    }
    return (
        <div className="w-full max-w-xs mx-auto mr-2">
            <Listbox
                as="div"
                className="space-y-1"
                value={selectedLanguage}
                onChange={setSelectedLanguage}
            >
                {({ open }) => (
                    <div>
                        <span className="inline-block w-full rounded-md mt-1">
                            <Listbox.Button
                                className="h-7 w-8 cursor-pointer relative rounded-md dark:bg-[#292929] dark:hover:bg-[#242424] dark:text-gray-100  hover:border-gray-500 hover:border border border-gray-300 bg-white pl-2 text-left transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                            >
                                <LanguageIcon />
                            </Listbox.Button>
                        </span>
                        <Transition
                            show={open}
                            leave="transition ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="absolute mt-1 w-32 rounded-md bg-white dark:bg-[#292929] shadow-lg -ml-24"
                        >
                            <Listbox.Options
                                static
                                className="w-32 max-h-40 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                            >
                                {language.map((language) => (
                                    <Listbox.Option
                                        key={language.code}
                                        value={language.value}
                                    >
                                        {({ selected, active }) => (
                                            <div
                                                onClick={() => changeLang(language.value)}
                                                className={`${active ? "text-white bg-blue-600 dark:bg-[#242424] " : "text-gray-900 dark:text-white "
                                                    } cursor-default select-none relative py-2 pl-8 pr-4 dark:bg-[#292929] dark:hover:bg-[#242424]`}
                                            >
                                                <div className="flex flex-nowrap">
                                                    <div className="mr-1 my-1">
                                                        <img className="w-6 h-5" src={`/assets/images/languages/${language.code}.svg`} />
                                                    </div>
                                                    <span className={`${selected ? "font-semibold" : "font-normal"} block truncate mt-1`}>
                                                        {language.text}
                                                    </span>
                                                </div>
                                                {
                                                    selected && (
                                                        <span className={`${active ? "text-white" : "text-blue-600"} absolute inset-y-0 left-0 flex items-center pl-1.5`}>
                                                            <SelectedIcon />
                                                        </span>
                                                    )
                                                }
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>
    );
}

export default LanguageSelect;