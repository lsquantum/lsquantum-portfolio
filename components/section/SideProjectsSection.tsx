import { AppConfig } from "../../config/AppConfig";
import { SideProjectIcon } from "../icons/Icon";
import SideProjectItem from "../sideprojects/SideProjectItem";
import Title from "../title/Title";

function SideProjectsSection() {
    return (
        <>
            <div className='flex flex-nowrap'>
                <SideProjectIcon />
                <Title text={'Side Projects'} />
            </div>
            {AppConfig.sideProjects.sort(function (a: any, b: any) {
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
                    />
                );
            })}
        </>
    );
}

export default SideProjectsSection;