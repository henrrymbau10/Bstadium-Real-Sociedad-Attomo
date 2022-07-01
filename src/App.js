import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Main from './components/Main/Main';
import Separator from './components/Separator/Separator';

function App() {
  return (
    <div className="App">
      <Home/>
      <Separator/>
      <Main/>
      <Information/>
      <Contact/>
    </div>
  );
}

export default App;
