import './App.css';
import Admin from './components/admin/Admin';
import Driver from './components/driver/Driver';

function App() {

  const user = 'admin';

  return (
      user === 'admin'
        ? <Admin />
        : <Driver />
  );
}

export default App;
