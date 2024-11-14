import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/main-content/MainContent';
import Welcome from './components/welcome/Welcome';
import { useAuth0 } from '@auth0/auth0-react';

console.log('App.js before render');

function App() {

  console.log('App.js rendering');

  const [showSidebar, setShowSidebar] = useState(true);
  const { isAuthenticated, isLoading } = useAuth0();

  function isSmartphone() {
    const userAgent = navigator.userAgent || window.opera;
    if (/android/i.test(userAgent)) {
      return true;
    }
    if (/iPhone|iPod|iPad/i.test(userAgent)) {
      return true;
    }
    if (/windows phone/i.test(userAgent)) {
      return true;
    }
    return false;
  }

  const isMobile = isSmartphone();

  useEffect(() => {
    if (isMobile) setShowSidebar(false);
  }, [isMobile]);

  if (isLoading) {
    console.log('App: auth state loading');
    return <div>Loading...</div>; // Or a spinner to indicate loading state
  }

  if (!isAuthenticated) {
    console.log('App: not authenticated');
    return (
      <Routes>
        <Route path='/' element={<Navigate to="/welcome" />} />
        {/* <Route path='/' element={<Welcome />} /> */}
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    )
  }

  return (

    <div className='app-container'>
      {console.log('App: authenticated')}
      {isMobile && <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        className={showSidebar ? 'show' : 'hide'}
      />
      }
      <div className='top-row'>
        {!isMobile && <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          className={showSidebar ? 'show' : 'hide'}
        />}
        <div className='main-container'>
          <Header />
          <MainContent />
        </div>
      </div>

      <div className='bottom-row'>
        <Footer />
      </div>
    </div>
  );
}

export default App;