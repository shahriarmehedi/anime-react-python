import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Anime from './pages/Anime/Anime';
import Episodes from './pages/Episodes/Episodes';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Footer from './components/common/Footer';
import { useEffect, useState } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SearchPage from './pages/SearchPage/SearchPage';


function App() {


  const [latestAnimes, setLatestAnimes] = useState([]);
  const [latestEpisodes, setLatestEpisodes] = useState([]);
  const [randomAnimes, setRandomAnimes] = useState([]);


  useEffect(() => {
    fetch('https://anime-python-backend.herokuapp.com/latest-animes')
      .then(res => res.json())
      .then(data => {
        setLatestAnimes(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('https://anime-python-backend.herokuapp.com/latest-episodes')
      .then(res => res.json())
      .then(data => {
        setLatestEpisodes(data);
      })
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    fetch('https://anime-python-backend.herokuapp.com/browse-animes')
      .then(res => res.json())
      .then(data => {
        setRandomAnimes(data);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home latestAnimes={latestAnimes} latestEpisodes={latestEpisodes} randomAnimes={randomAnimes} />} />
          <Route path="/anime-info/:animeId" element={<Anime />} />
          <Route path="/episodes/:episodeId" element={<Episodes />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search-result" element={<SearchPage latestAnimes={latestAnimes} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
