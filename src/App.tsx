import { useEffect, useState } from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { Navbar } from './components/navbar';
import { Contact } from './pages/Contact';
import { Practice } from './pages/Practice';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [masterVolume, setMasterVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const settings = { masterVolume, isMuted };
    window.__masterAudioSettings = settings;
    window.dispatchEvent(
      new CustomEvent('master-audio-change', { detail: settings }),
    );
  }, [masterVolume, isMuted]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar
          masterVolume={masterVolume}
          isMuted={isMuted}
          onChangeVolume={(value) => {
            setMasterVolume(value);
            if (value > 0 && isMuted) setIsMuted(false);
          }}
          onToggleMute={() => setIsMuted((muted) => !muted)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;