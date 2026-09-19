import '../styles/footer.css';
import paisagem from '../assets/images/pedrabau.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg" style={{ backgroundImage: `url(${paisagem})` }}></div>
      <div className="footer-overlay"></div>

      <div className="footer-content">
        <div className="container footer-top">
          <span className="label label-light">Venha para a Serra da Mantiqueira</span>
          <h2 className="footer-heading">
            Tá esperando o quê para vir pra São Bento?
          </h2>
        </div>

        <div className="container footer-grid">
          <span className="label label-light footer-slogan">
            Aventura, natureza e paz te esperam na serra
          </span>
          <div className="footer-extra">
            <span className="footer-extra-label">Siga a gente</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:contato@saobentodosapucai.com.br">E-mail</a>
          </div>
        </div>

        <div className="container">
          <div className="footer-divider"></div>
          <p className="footer-bottom-text">
            Todos os direitos reservados — Trabalho de Graduação — UNITAU
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;