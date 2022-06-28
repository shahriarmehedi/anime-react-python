import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Anime from './pages/Anime/Anime';
import Episodes from './pages/Episodes/Episodes';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';


function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Anime />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
