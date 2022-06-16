import { Meta } from '../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Footer } from './Footer';
import { Main } from './Main';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Main />
    <Footer />
  </div>
);

export { Base };
