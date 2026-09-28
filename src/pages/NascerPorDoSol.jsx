import { Link } from 'react-router-dom';
import '../styles/cardgrid.css';
import '../styles/cachoeiras.css';
import '../styles/nascer-por-do-sol.css';
import pedrabau from '../assets/images/pedrabau.png';
import capapedra from '../assets/images/capapedra.jpeg';
import capacachu from '../assets/images/capacachu.jpeg';
import nascerdosol from '../assets/images/nascerdosol.jpg';
import porbauzinho from '../assets/images/porbauzinho.jpeg'


function NascerPorDoSol() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="page-hero">
        <div className="page-hero-bg nascer-hero-bg"></div>
        <div className="page-hero-content">
          <span className="hero-badge">Pedra do Baú · São Bento do Sapucaí</span>
          <h1>Nascer &amp; Pôr do Sol</h1>
          <p>Duas formas de ver o dia começar e terminar na Pedra do Baú: uma para quem busca desafio, outra para toda a família.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="cachoeiras-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-stat">
              <strong>2</strong>
              <span>Experiências</span>
            </div>
            <div className="intro-stat">
              <strong>Fácil a moderado</strong>
              <span>Nível de dificuldade</span>
            </div>
            <div className="intro-stat">
              <strong>Guia</strong>
              <span>Obrigatório no nascer</span>
            </div>
            <div className="intro-stat">
              <strong>500 m</strong>
              <span>Trilha do pôr do sol</span>
            </div>
          </div>
        </div>
      </section>

      {/* LISTAGEM */}
      <section className="cachoeiras-lista">
        <div className="container">

          {/* CARD 1 — NASCER */}
          <div className="cachoeira-card">
            <div className="cachoeira-foto">
              <img src={nascerdosol} alt="Nascer do sol na Pedra do Baú" />
              <span className="cachoeira-badge">Aventura</span>
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">01</span>
                <div className="cachoeira-tags">
                  <span className="tag">🧗 Dificuldade moderada</span>
                  <span className="tag">🧭 Com guia</span>
                </div>
              </div>
              <h2>Nascer do Sol na Pedra do Baú</h2>
              <p>
                Para ver o sol nascer, você escala a Pedra do Baú e chega ao topo
                acompanhado de guia. É um passeio com mais dificuldade, que exige
                disposição e condicionamento, e por isso não é indicado para todas
                as idades.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Pedra do Baú, São Bento do Sapucaí</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">🧗</span>
                  <span>Escalada até o topo da pedra</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⚠️</span>
                  <span>Não recomendado para todas as idades</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Pedra+do+Baú+São+Bento+do+Sapucaí"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-localizacao"
                >
                  📍 Ver no Mapa
                </a>
                <Link to="/#contato" className="btn-agendar">Agendar Passeio</Link>
              </div>
            </div>
          </div>

          {/* CARD 2 — PÔR DO SOL */}
          <div className="cachoeira-card invertido">
            <div className="cachoeira-foto">
              <img src={porbauzinho} alt="Pôr do sol no Baúzinho" />
              <span className="cachoeira-badge">Em família</span>
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">02</span>
                <div className="cachoeira-tags">
                  <span className="tag">🥾 Trilha fácil</span>
                  <span className="tag">👨‍👩‍👧 Toda a família</span>
                </div>
              </div>
              <h2>Pôr do Sol no Baúzinho</h2>
              <p>
                Uma trilha de cerca de 500 metros leva até o Baúzinho, onde você
                aprecia o pôr do sol. A dificuldade é fácil, então dá para ir com
                toda a família, inclusive com crianças.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Baúzinho, Pedra do Baú</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>Trilha de cerca de 500 m</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">👨‍👩‍👧</span>
                  <span>Ideal para famílias</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Baúzinho+Pedra+do+Baú+São+Bento+do+Sapucaí"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-localizacao"
                >
                  📍 Ver no Mapa
                </a>
                <Link to="/#contato" className="btn-agendar">Agendar Passeio</Link>
              </div>
            </div>
          </div>

          {/* CARD 3 — ANA CHATA */}
          <div className="cachoeira-card">
            <div className="cachoeira-foto">
              <img src={capacachu} alt="Trilha da Ana Chata" />
              <span className="cachoeira-badge">Combine</span>
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">03</span>
                <div className="cachoeira-tags">
                  <span className="tag">🔗 Trilhas conjugadas</span>
                </div>
              </div>
              <h2>Trilha da Ana Chata</h2>
              <p>
                Do Baúzinho você pode seguir também para a Trilha da Ana Chata. As
                duas trilhas ficam lado a lado, e é possível combiná-las no mesmo
                passeio.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Saída a partir do Baúzinho</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">🔗</span>
                  <span>Trilhas vizinhas, uma ao lado da outra</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Trilha+da+Ana+Chata+São+Bento+do+Sapucaí"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-localizacao"
                >
                  📍 Ver no Mapa
                </a>
                <Link to="/#contato" className="btn-agendar">Agendar Passeio</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cachoeiras-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Quer ver o sol nascer ou se pôr na Pedra do Baú?</h2>
            <p>
              Conte quem vai com você e montamos o roteiro ideal, com guia e todas as
              dicas para você aproveitar ao máximo.
            </p>
            <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NascerPorDoSol;