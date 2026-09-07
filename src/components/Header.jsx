import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  // ── HEADER MUDA DE COR AO ROLAR A PÁGINA ──
  useEffect(() => {
    function aoRolar() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // ── TRAVA O SCROLL DO FUNDO QUANDO O MENU MOBILE ESTÁ ABERTO ──
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
  }, [menuAberto]);

  // ── FECHA O MENU AO APERTAR ESC ──
  useEffect(() => {
    function aoTeclar(e) {
      if (e.key === 'Escape') setMenuAberto(false);
    }
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, []);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="header-inner">
          <Link to="/" className="logo-link">
            <div className="logo-mark">SBS</div>
            <div className="logo-text">
              <span className="logo-title">São Bento</span>
              <span className="logo-sub">do Sapucaí</span>
            </div>
          </Link>

          <nav className="nav-desktop">
            <Link to="/#servicos">Serviços</Link>
            <Link to="/#destinos">Destinos</Link>
            <Link to="/passeios">Passeios Prontos</Link>
            <Link to="/#sobre">Sobre</Link>
            <Link to="/#contato" className="nav-cta">Orçamento</Link>
          </nav>

          <button
            className={`hamburger ${menuAberto ? 'ativo' : ''}`}
            aria-label="Abrir menu"
            onClick={() => setMenuAberto(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuAberto ? 'aberto' : ''}`}>
        <button className="mobile-close" aria-label="Fechar menu" onClick={fecharMenu}>
          ✕
        </button>
        <nav className="mobile-nav">
          <Link to="/#servicos" className="mobile-link" onClick={fecharMenu}>Serviços</Link>
          <Link to="/#destinos" className="mobile-link" onClick={fecharMenu}>Destinos</Link>
          <Link to="/passeios" className="mobile-link" onClick={fecharMenu}>Passeios Prontos</Link>
          <Link to="/#sobre" className="mobile-link" onClick={fecharMenu}>Sobre</Link>
          <Link to="/#faq" className="mobile-link" onClick={fecharMenu}>Dúvidas</Link>
          <Link to="/#contato" className="mobile-link mobile-link-cta" onClick={fecharMenu}>
            Fazer Orçamento
          </Link>
        </nav>
      </div>
      <div
        className={`mobile-overlay ${menuAberto ? 'visivel' : ''}`}
        onClick={fecharMenu}
      ></div>
    </>
  );
}

export default Header;
