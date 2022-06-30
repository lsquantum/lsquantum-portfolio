import useLanguage from "../../hooks/useLanguage";
import EducationItem from "../education/EducationItem";
import { EducationIcon } from "../icons/Icon";
import Title from "../title/Title";

function EducationSection() {
    const [languageItems] = useLanguage();
    return (
        <>
            <div className='flex flex-nowrap'>
                <EducationIcon />
                <Title text={languageItems.educationTitle} />
            </div>
            {languageItems.education.sort(function (a: any, b: any) {
                return a.order - b.order
            }).map((item, i) => {
                return (
                    <EducationItem
                        key={i}
                        school={item.school}
                        class={item.class}
                        year={item.year}
                        info={item.info}
                    />
                );
            })}
        </>
    );
}

export default EducationSection;