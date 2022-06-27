import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Anime from './pages/Anime/Anime';
import Episodes from './pages/Episodes/Episodes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animes" element={<Anime />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
