import './App.css';
import Admin from './components/admin/Admin';
import Driver from './components/driver/Driver';
import Footer from './components/footer/Footer';

function App() {

  const user = 'admin';

  return (
    <div className='app-container'>
      {user === 'admin'
        ? <Admin />
        : <Driver />}
      <Footer />
    </div>
  );
}

export default App;
