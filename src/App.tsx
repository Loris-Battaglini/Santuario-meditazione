import { GlobalStyle } from './style/GlobalStyle';
import {Navbar} from './components/navbar';
import {Contact} from './pages/Contact';
import {Practice} from './pages/Practice';
import {Home} from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
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