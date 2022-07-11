import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Home/>
      <Main/>
      {/* <Information/> */}
      <Contact/>
    </div>
  );
}

export default App;
