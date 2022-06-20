import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-2 flex flex-row justify-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>

    <div className="mt-2 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
