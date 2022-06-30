import useLanguage from '../../hooks/useLanguage';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const [languageItems] = useLanguage();

  const fontStyle = props.xl
    ? 'font-bold text-2xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 dark:text-gray-100 inline-flex items-center ${fontStyle}`}>
      <div className='mr-2'>
        <img
          className='w-16 h-16'
          src='/assets/images/resume.png'
        />
      </div>
      <div className='hidden sm:block'>
        {languageItems.site_name}
      </div>
    </span>
  );
};

export { Logo };