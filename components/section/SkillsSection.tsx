import { AppConfig } from "../../config/AppConfig";
import Skill from "../skill/Skill";
import SubTitle from "../title/Subtitle";
import Title from "../title/Title";
import AllSkillsWrapper from "../wrappers/AllSkillsWrapper";
import ExperienceSkillsWrapper from "../wrappers/ExperienceSkillsWrapper";

function SkillsSection() {
    return (
        <AllSkillsWrapper>
            <Title text={'Skills'} />
            <SubTitle text={'Front End'} />
            <ExperienceSkillsWrapper>
                {AppConfig.frontEndSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
            <SubTitle text={'Back End'} />
            <ExperienceSkillsWrapper>
                {AppConfig.backEndSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
            <SubTitle text={'Database'} />
            <ExperienceSkillsWrapper>
                {AppConfig.databaseSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
            <SubTitle text={'Misc'} />
            <ExperienceSkillsWrapper>
                {AppConfig.miscSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
        </AllSkillsWrapper>
    );
}

export default SkillsSection;