import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import Slider from './components/Slider';
import LatestEpisodes from './pages/LatestEpisodes/LatestEpisodes';
import LatestAddedAnimes from './pages/LatestAddedAnimes/LatestAddedAnimes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <LatestEpisodes />
      <LatestAddedAnimes />
    </div>
  );
}

export default App;
