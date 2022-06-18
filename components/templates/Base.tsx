import { Meta } from '../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from './Footer';
import dynamic from 'next/dynamic';

const Main = dynamic(
  () => import('./Main'),
  { ssr: false }
)

const Base = () => (
  <div className="antialiased text-gray-900 dark:text-gray-100">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Main />
    <Footer />
  </div>
);

export { Base };
