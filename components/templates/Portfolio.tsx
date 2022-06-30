import { Meta } from '../layout/Meta';
import { Footer } from '../footer/Footer';
import dynamic from 'next/dynamic';
import useLanguage from '../../hooks/useLanguage';

const Main = dynamic(
  () => import('./Main'),
  { ssr: false }
)

const Portfolio = () => {
  const [languageItems] = useLanguage();
  return (
    <div className="antialiased text-gray-900 dark:text-gray-100">
      <Meta
        title={languageItems.title}
        description={languageItems.description}
      />
      <Main />
      <Footer />
    </div>
  );
}

export { Portfolio };
