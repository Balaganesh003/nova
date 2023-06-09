import '../styles/globals.css';
import '../styles/styles.scss';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useEffect, useState } from 'react';
import store from '../store';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfilePage, setIsProfilePage] = useState(false);

  const checkProfilePage = () => {
    if (router.pathname === '/profile') {
      setIsProfilePage(true);
    } else {
      setIsProfilePage(false);
    }
  };

  useEffect(() => {
    checkProfilePage();
  }, [router.pathname]);

  return (
    <Provider store={store}>
      <NavBar
        isProfilePage={isProfilePage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
