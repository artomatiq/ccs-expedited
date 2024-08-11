import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/main-content/MainContent';

function App() {

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className='app-container'>

      <div className='top-row'>
            <Sidebar 
              showSidebar={showSidebar} 
              setShowSidebar={setShowSidebar} 
              className={showSidebar? 'show' : 'hide'}
            />
        <div className='main-container'>
          <Header />
          <MainContent/>
        </div>
      </div>

      <div className='bottom-row'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
