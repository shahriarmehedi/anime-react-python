import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Anime from './pages/Anime/Anime';
import Episodes from './pages/Episodes/Episodes';
import { createContext, useEffect, useState } from 'react';

export const AnimeContext = createContext()

function App() {

  const [animes, setAnimes] = useState("Hello");

  useEffect(() => {
      console.log(animes);
  }, [animes])


  return (
    <AnimeContext.Provider value={[animes, setAnimes]}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Anime />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AnimeContext.Provider>
  );
}

export default App;
