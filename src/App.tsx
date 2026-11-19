import { GlobalStyle } from './style/GlobalStyle';
import {Navbar} from './components/navbar';
import {Contact} from './pages/contact';
import {Practice} from './pages/practice';
import {Home} from './pages/home';
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