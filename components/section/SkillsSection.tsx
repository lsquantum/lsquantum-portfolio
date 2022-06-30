import useLanguage from "../../hooks/useLanguage";
import Skill from "../skill/Skill";
import SubTitle from "../title/Subtitle";
import Title from "../title/Title";
import AllSkillsWrapper from "../wrappers/AllSkillsWrapper";
import ExperienceSkillsWrapper from "../wrappers/ExperienceSkillsWrapper";

function SkillsSection() {
    const [languageItems] = useLanguage();
    return (
        <AllSkillsWrapper>
            <Title text={languageItems.skillsTitle} />
            <SubTitle text={'Front End'} />
            <ExperienceSkillsWrapper>
                {languageItems.frontEndSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
            <SubTitle text={'Back End'} />
            <ExperienceSkillsWrapper>
                {languageItems.backEndSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
            <SubTitle text={'Database'} />
            <ExperienceSkillsWrapper>
                {languageItems.databaseSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
            <SubTitle text={'Misc'} />
            <ExperienceSkillsWrapper>
                {languageItems.miscSkills.map((item, i) => {
                    return (<Skill key={i} text={item} size={'small'} />);
                })}
            </ExperienceSkillsWrapper>
        </AllSkillsWrapper>
    );
}

export default SkillsSection;