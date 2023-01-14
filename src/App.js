import './App.css';
import Middle from './components/Middle/Middle';
import Slider from './components/Middle/Slider/Slider';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
     <Topbar/>
     <Middle/>
     <Slider/>
    </div>
  );
}

export default App;
