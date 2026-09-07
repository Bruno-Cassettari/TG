import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import Cachoeiras from './pages/Cachoeiras';
import PedraDoBau from './pages/PedraDoBau';
import Tour from './pages/Tour';
import Personalizado from './pages/Personalizado';
import './styles/global.css';

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cachoeiras" element={<Cachoeiras />} />
        <Route path="/pedra-do-bau" element={<PedraDoBau />} />
        <Route path="/passeios" element={<Tour />} />
        <Route path="/personalizado" element={<Personalizado />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
