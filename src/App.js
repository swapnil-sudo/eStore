import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav/TopNav';
import CatNav from './Components/CatNav/CatNav';
import MainComponent from './Components/MainComponent/Mincomponent';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;
