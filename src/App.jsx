import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import Cachoeiras from './pages/Cachoeiras';
import PedraDoBau from './pages/PedraDoBau';
import Tour from './pages/Tour';
import Personalizado from './pages/Personalizado';
import './styles/global.css';
import NascerPorDoSol from './pages/NascerPorDoSol';
import Gastronomia from './pages/Gastronomia';
import SobreProjeto from './pages/SobreProjeto';
import Hospedagem from './pages/Hospedagem';
import PasseioCavalo from './pages/Passeiocavalo';


function App() {
  
  const { pathname } = useLocation();
  const semMoldura = pathname === '/sobre-projeto';

  return (
    <>
      <ScrollToHash />
      {!semMoldura && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cachoeiras" element={<Cachoeiras />} />
        <Route path="/pedra-do-bau" element={<PedraDoBau />} />
        <Route path="/passeios" element={<Tour />} />
        <Route path="/personalizado" element={<Personalizado />} />
        <Route path="/nascer-por-do-sol" element={<NascerPorDoSol />} />
        <Route path="/gastronomia" element={<Gastronomia />} />
        <Route path="/sobre-projeto" element={<SobreProjeto />} />
        <Route path="/hospedagem" element={<Hospedagem />} />
        <Route path="/passeiocavalo" element={<PasseioCavalo />} />
      </Routes>
      {!semMoldura && <Footer />}
    </>
  );
}

export default App;