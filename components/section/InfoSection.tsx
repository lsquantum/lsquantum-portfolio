import useLanguage from "../../hooks/useLanguage";
import ProfileImage from "../image/ProfileImage";
import BaseInfo from "../info/BaseInfo";
import BirthDayInfo from "../info/BirthDayInfo";
import EmailInfo from "../info/EmailInfo";
import ExperienceInfo from "../info/ExperienceInfo";
import LocationInfo from "../info/LocationInfo";
import MarriageInfo from "../info/MarriageInfo";
import PhoneInfo from "../info/PhoneInfo";
import Skill from "../skill/Skill";
import ItemWrapper from "../wrappers/ItemWrapper";
import SkillsWrapper from "../wrappers/SkillsWrapper";

function InfoSection() {
    const [languageItems] = useLanguage();
    return (
        <ItemWrapper>
            <div className="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 border-b border-gray-500">
                <ProfileImage src={'/assets/images/profile-pic.png'} />
                <div className='w-auto ml-5 col-span-7'>
                    <p className='font-bold text-2xl text-blue-600'>{languageItems.fullname}</p>
                    <p className='font-semibold text-xl'>{languageItems.jobTitle}</p>
                    <div className='mt-3 ml-3'>
                        {languageItems.info.map((item, i) => {
                            return (
                                <BaseInfo
                                    key={i}
                                    text={item}
                                />
                            );
                        })}
                    </div>
                    <SkillsWrapper>
                        {languageItems.skills.map((item, i) => {
                            return (
                                <Skill
                                    key={i}
                                    text={item}
                                    size={'normal'}
                                />
                            );
                        })}
                    </SkillsWrapper>
                </div>
                <div className='w-full col-span-3 lg:border-l border-gray-500'>
                    <EmailInfo />
                    <PhoneInfo />
                    <BirthDayInfo />
                    <MarriageInfo />
                </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3 place-items-center	">
                <LocationInfo />
                <ExperienceInfo />
            </div>
        </ItemWrapper>
    );
}

export default InfoSection;