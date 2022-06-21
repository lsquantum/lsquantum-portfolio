import { AppConfig } from "../../config/AppConfig";
import { EducationIcon, WorkExperienceIcon } from "../icons/Icon";
import Title from "../title/Title";
import WorkExperienceItem from "../workexperience/WorkExperienceItem";

function WorkExperienceSection() {
    return (
        <>
            <div className='flex flex-nowrap'>
                <WorkExperienceIcon />
                <Title text={'Work Experience'} />
            </div>
            {AppConfig.experince.sort(function (a: any, b: any) {
                return a.order - b.order
            }).map((item, i) => {
                return (
                    <WorkExperienceItem
                        key={i}
                        company={item.company}
                        jobTitle={item.jobTitle}
                        jobInfo={item.jobInfo}
                        year={item.year}
                    />
                );
            })}
        </>
    );
}

export default WorkExperienceSection;