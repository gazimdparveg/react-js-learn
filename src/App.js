import logo from './logo.svg';
import './App.css';
import Home from './Pagese/Home';
import About from './Pagese/About';
import Copytext from './Pagese/Copytext';
import Focus from './Pagese/Focus';
import Keybord from './Pagese/Keybord';
import Condons from './Pagese/Condons';
import Style from './Pagese/Style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from './Pagese/Bootstrap';
import Input from './Pagese/Input';
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
       <Style/>
       <Bootstrap/>
       <Input/>
      </header>
      <br/><br/><br/>
    </div>
  );
}



export default App;
