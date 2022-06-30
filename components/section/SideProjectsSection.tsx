import useLanguage from "../../hooks/useLanguage";
import { SideProjectIcon } from "../icons/Icon";
import SideProjectItem from "../sideprojects/SideProjectItem";
import Title from "../title/Title";

function SideProjectsSection() {
    const [languageItems] = useLanguage();
    return (
        <>
            <div className='flex flex-nowrap'>
                <SideProjectIcon />
                <Title text={languageItems.sideProjectsTitle} />
            </div>
            {languageItems.sideProjects.sort(function (a: any, b: any) {
                return a.order - b.order
            }).map((item, i) => {
                return (
                    <SideProjectItem
                        key={i}
                        title={item.title}
                        team={item.team}
                        year={item.year}
                        info={item.info}
                        tools={item.tools}
                        link={item.projectLink}
                    />
                );
            })}
        </>
    );
}

export default SideProjectsSection;