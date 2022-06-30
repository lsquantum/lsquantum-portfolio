import useLanguage from "../../hooks/useLanguage";
import { ExperienceIcon } from "../icons/Icon";

function ExperienceInfo() {
    const [languageItems] = useLanguage();
    return (
        <div>
            <div className='flex flex-nowrap'>
                <ExperienceIcon />
                <div className='mt-1 ml-2'>
                    <p>{languageItems.totalExp}</p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceInfo;