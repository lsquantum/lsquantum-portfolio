import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import ItemWrapper from '../wrappers/ItemWrapper';
import Divider from '../divider/Divider';

import SkillsSection from '../section/SkillsSection';
import NavbarSection from '../section/NavbarSection';
import InfoSection from '../section/InfoSection';
import TimelineSection from '../section/TimelineSection';
import WorkExperienceSection from '../section/WorkExperienceSection';
import EducationSection from '../section/EducationSection';
import TrainingCertificationSection from '../section/TrainingCertificationSection';
import SideProjectsSection from '../section/SideProjectsSection';

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
                  <WorkExperienceSection />
                  <Divider />
                  <EducationSection />
                  <Divider />
                  <TrainingCertificationSection />
                  <Divider />
                  <SideProjectsSection />
                  <Divider />
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