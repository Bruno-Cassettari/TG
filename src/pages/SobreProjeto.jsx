import { Link } from 'react-router-dom';
import '../styles/sobre-projeto.css';

/* Para colocar a foto da equipe:
   1) salve a imagem em src/assets/images/ (ex.: equipe.jpg)
   2) descomente o import abaixo e troque FOTO_EQUIPE = null por FOTO_EQUIPE = equipe */
// import equipe from '../assets/images/equipe.jpg';
const FOTO_EQUIPE = null;

/* Troque pelos nomes reais da equipe */
const EQUIPE = ['Nome do integrante', 'Nome do integrante', 'Nome do integrante'];

function SobreProjeto() {
  return (
    <main className="sp-pagina">
      <div className="sp-container">
        <div className="sp-grid">
          <div className="sp-texto">
            <span className="sp-label">Sobre o projeto</span>
            <h1>Quem está por trás do portal</h1>
            <p>
              Este portal é o nosso Trabalho de Graduação na Universidade de Taubaté
              (UNITAU). A ideia é reunir em um só lugar tudo o que São Bento do Sapucaí
              oferece, de esporte e natureza a gastronomia e cultura, e facilitar o
              contato entre quem visita e quem oferece o serviço.
            </p>

            <div className="sp-equipe">
              <span className="sp-equipe-titulo">Desenvolvido por</span>
              <ul>
                {EQUIPE.map((nome, i) => (
                  <li key={i}>{nome}</li>
                ))}
              </ul>
              <small>Curso · UNITAU · Ano</small>
            </div>
          </div>

          <div className="sp-foto">
            {FOTO_EQUIPE ? (
              <img src={FOTO_EQUIPE} alt="Equipe do projeto" />
            ) : (
              <div className="sp-foto-vazia">
                <span>📷</span>
                <small>Foto da equipe</small>
              </div>
            )}
          </div>
        </div>

        <div className="sp-voltar">
          <Link to="/" className="sp-btn">← Voltar ao site</Link>
        </div>
      </div>
    </main>
  );
}

export default SobreProjeto;