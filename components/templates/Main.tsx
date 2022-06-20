import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from '../logo/Logo';
import Skill from '../skill/Skill';
import { AppConfig } from '../../config/AppConfig';
import Title from '../title/Title';
import SubTitle from '../title/Subtitle';
import ExperienceSkillsWrapper from '../wrappers/ExperienceSkillsWrapper';
import SkillsWrapper from '../wrappers/SkillsWrapper';
import ProfileImage from '../image/ProfileImage';
import EmailInfo from '../info/EmailInfo';
import PhoneInfo from '../info/PhoneInfo';
import BirthDayInfo from '../info/BirthDayInfo';
import MarriageInfo from '../info/MarriageInfo';
import LocationInfo from '../info/LocationInfo';
import ExperienceInfo from '../info/ExperienceInfo';
import TimelineItem from '../timeline/TimelineItem';
import NavbarLink from '../navigation/NavbarLink';
import ToggleTheme from '../theme/ToggleTheme';
import BaseInfo from '../info/BaseInfo';
import ItemWrapper from '../wrappers/ItemWrapper';
import { EducationIcon, SideProjectIcon, TimelineIcon, TraininCertificationIcon, WorkExperienceIcon } from '../icons/Icon';
import TimelineItemWrapper from '../wrappers/TimelineItemWrapper';
import WorkExperienceItem from '../workexperience/WorkExperienceItem';
import AllSkillsWrapper from '../wrappers/AllSkillsWrapper';
import SkillsSection from '../section/SkillsSection';
import NavbarSection from '../section/NavbarSection';
import InfoSection from '../section/InfoSection';
import TimelineSection from '../section/TimelineSection';

const Main = () => {
  return (
    <>
      <Background color="bg-gray-100 dark:bg-[#141414]">
        <NavbarSection />
        <Section yPadding="pt-6 pb-12">
          <div className="space-y-7">
            <InfoSection />
            <TimelineSection />
            <ItemWrapper>
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12'>
                <div className='my-4 w-auto col-span-9'>
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
                  <div className='m-5 border-t border-gray-500'></div>
                  <div className='flex flex-nowrap'>
                    <EducationIcon />
                    <Title text={'Education'} />
                  </div>
                  <div className='w-auto mt-5 ml-8'>
                    <div className='mr-3'>
                      <span className='text-blue-600 font-medium text-lg'>{'İskenderun Teknik Üniversitesi'}</span>
                      <span className='float-right font-medium'>{'2012-2016'}</span>
                    </div>
                    <div className='-mt-1'>
                      <span className='text-sm font-medium'>{'Computer Engineering'}</span>
                    </div>
                    <div>
                      Graduated with a 3.75 GPA
                    </div>
                  </div>
                  <div className='w-auto mt-5 ml-8'>
                    <div className='mr-3'>
                      <span className='text-blue-600 font-medium text-lg'>{'Hacı Mehmet Koçarslan Anadolu Lisesi'}</span>
                      <span className='float-right font-medium'>{'2008-2012'}</span>
                    </div>
                    <div className='-mt-1'>
                      <span className='text-sm font-medium'>{''}</span>
                    </div>
                    <div>
                      Graduated with a 3.75 GPA
                    </div>
                  </div>
                  <div className='m-5 border-t border-gray-500'></div>
                  <div className='flex flex-nowrap'>
                    <TraininCertificationIcon />
                    <Title text={'Trainings and Certifications'} />
                  </div>
                  <div className='w-auto mt-5 ml-8'>
                    <div className='mr-3'>
                      <span className='float-right font-medium'>{'2008-2012'}</span>
                    </div>
                    <div className='-mt-1'>
                      <span className='text-sm font-medium'>{'CCNA'}</span>
                    </div>
                    <div>
                      Got it while in military
                    </div>
                  </div>
                  <div className='m-5 border-t border-gray-500'></div>
                  <div className='flex flex-nowrap'>
                    <SideProjectIcon />
                    <Title text={'Side Projects'} />
                  </div>
                  <div className='w-auto mt-5 ml-8'>
                    <div className='mr-3'>
                      <span className='text-blue-600 font-medium text-lg'>{'Portfolio Project'}</span>
                      <span className='float-right font-medium'>{'2022'}</span>
                    </div>
                    <div className='-mt-1'>
                      <span className='text-sm font-medium'>{'By lsquantum'}</span>
                    </div>
                    <div>
                      Created a simple web-app for tracking personal fitness which allowed entry of workouts and then visualizations for key metrics like mileage, calories, and weight. Deployed to Amazon AWS.
                    </div>
                  </div>
                  <div className='m-5 border-t border-gray-500'></div>
                </div>
                <SkillsSection />
              </div>
            </ItemWrapper>
          </div>
        </Section>
      </Background >
    </>
  );
}

export default Main;