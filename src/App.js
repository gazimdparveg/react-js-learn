import logo from './logo.svg';
import './App.css';
import Home from './Pagese/Home';
import About from './Pagese/About';
import Copytext from './Pagese/Copytext';
import Focus from './Pagese/Focus';
import Keybord from './Pagese/Keybord';
import Condons from './Pagese/Condons';

function App() {
  return (
    <div className="App">
      <header >
       <Home/>
       <About/>
       <Copytext/>
       <Focus/>
       <Keybord/>
       <Condons/>
      </header>

    </div>
  );
}



export default App;
