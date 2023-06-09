import '../styles/globals.css';
import '../styles/styles.scss';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { useState } from 'react';
import store from '../store';

function App({ Component, pageProps }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Provider store={store}>
      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
