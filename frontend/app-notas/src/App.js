import logo from './logo.svg';
import './App.css';

import UserRegister from './components/usuario/UserRegister';
//import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App Notas
        </p>
        <div>
        </div>
        <UserRegister></UserRegister>
        
      </header>
    </div>
  );
}

export default App;
