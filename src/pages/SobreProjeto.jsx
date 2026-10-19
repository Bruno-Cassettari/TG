import { Link } from 'react-router-dom';
import '../styles/sobre-projeto.css';
import equipe1 from '../assets/images/equipe1.png';
import equipe2 from '../assets/images/equipe2.png';


const MEMBROS = [
  { nome: 'Bruno Cassettari', foto: equipe1 },
  { nome: 'João Pedro Barbosa', foto: equipe2 },
];

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
                {MEMBROS.map((m, i) => (
                  <li key={i}>{m.nome}</li>
                ))}
              </ul>
              <small>Curso · UNITAU · Ano</small>
            </div>
          </div>

          <div className="sp-fotos">
            {MEMBROS.map((m, i) => (
              <figure className="sp-membro" key={i}>
                <div className="sp-foto">
                  {m.foto ? (
                    <img src={m.foto} alt={m.nome} />
                  ) : (
                    <div className="sp-foto-vazia">
                      <span>📷</span>
                      <small>Foto</small>
                    </div>
                  )}
                </div>
                <figcaption className="sp-legenda">{m.nome}</figcaption>
              </figure>
            ))}
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