import { useEffect, useState } from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { Navbar } from './components/navbar';
import { Contact } from './pages/Contact';
import { Practice } from './pages/Practice';
import { Home } from './pages/Home';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

const PersistentHome = styled.div<{ $isHome: boolean }>`
  display: ${({ $isHome }) => ($isHome ? 'contents' : 'none')};
`;

interface AppContentProps {
  masterVolume: number;
  isMuted: boolean;
  onChangeVolume: (value: number) => void;
  onToggleMute: () => void;
}

function AppContent({
  masterVolume,
  isMuted,
  onChangeVolume,
  onToggleMute,
}: AppContentProps) {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar
        masterVolume={masterVolume}
        isMuted={isMuted}
        onChangeVolume={onChangeVolume}
        onToggleMute={onToggleMute}
      />
      <PersistentHome $isHome={pathname === '/'}>
        <Home />
      </PersistentHome>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );
}

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
        <AppContent
          masterVolume={masterVolume}
          isMuted={isMuted}
          onChangeVolume={(value) => {
            setMasterVolume(value);
            if (value > 0 && isMuted) setIsMuted(false);
          }}
          onToggleMute={() => setIsMuted((muted) => !muted)}
        />
      </Router>
    </>
  );
}
export default App;