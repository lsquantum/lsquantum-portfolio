import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from './CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from '../logo/Logo';

const Footer = () => (
  <Background color="bg-gray-100 dark:bg-[#141414]">
    <Section>
      <CenteredFooter
        logo={<Logo />}
      >
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
