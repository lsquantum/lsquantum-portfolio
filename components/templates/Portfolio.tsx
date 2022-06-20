import { Meta } from '../layout/Meta';
import { AppConfig } from '../../config/AppConfig';
import { Footer } from '../footer/Footer';
import dynamic from 'next/dynamic';

const Main = dynamic(
  () => import('./Main'),
  { ssr: false }
)

const Portfolio = () => (
  <div className="antialiased text-gray-900 dark:text-gray-100">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Main />
    <Footer />
  </div>
);

export { Portfolio };
