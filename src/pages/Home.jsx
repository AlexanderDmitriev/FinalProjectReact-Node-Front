import { useMediaQuery } from 'react-responsive';

import FirstPage from 'components/FirstPage/FirstPage';
import Login from './Login';

export default function Home() {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return <>{isTablet ? <Login /> : <FirstPage />}</>;
}
