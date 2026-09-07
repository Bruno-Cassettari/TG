import { Link } from 'react-router-dom';
import '../styles/cardgrid.css';
import '../styles/cachoeiras.css';
import monjolinho from '../assets/images/monjolinho.jpeg';
import amores from '../assets/images/amores.jpeg';
import toldi from '../assets/images/toldi.jpg';
import toboga from '../assets/images/toboga.jpeg';

function Cachoeiras() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="page-hero">
        <div className="page-hero-bg cachoeiras-hero-bg"></div>
        <div className="page-hero-content">
          <span className="hero-badge">Natureza · São Bento do Sapucaí</span>
          <h1>Cachoeiras</h1>
          <p>Águas cristalinas, piscinas naturais e trilhas entre a mata fechada da Mantiqueira.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="cachoeiras-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-stat">
              <strong>4</strong>
              <span>Cachoeiras mapeadas</span>
            </div>
            <div className="intro-stat">
              <strong>Todo ano</strong>
              <span>Visitáveis</span>
            </div>
            <div className="intro-stat">
              <strong>Fácil a moderado</strong>
              <span>Nível de acesso</span>
            </div>
            <div className="intro-stat">
              <strong>Guia</strong>
              <span>Recomendado</span>
            </div>
          </div>
        </div>
      </section>

      {/* LISTAGEM DE CACHOEIRAS */}
      <section className="cachoeiras-lista">
        <div className="container">

          {/* CARD 1 */}
          <div className="cachoeira-card">
            <div className="cachoeira-foto">
              <img src={monjolinho} alt="Cachoeira do Mojolinha" />
              <span className="cachoeira-badge">Destaque</span>
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">01</span>
                <div className="cachoeira-tags">
                  <span className="tag">🥾 Trilha fácil</span>
                  <span className="tag">🏊 Piscina natural</span>
                </div>
              </div>
              <h2>Cachoeira do Mojolinho</h2>
              <p>
                Uma das mais procuradas da região, a Cachoeira do Mojolinha encanta pela
                queda d'água de aproximadamente 12 metros que deságua numa piscina natural
                de águas frias e transparentes. O acesso é feito por uma trilha leve de
                cerca de 20 minutos, ideal para famílias e iniciantes.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Estrada do Mojolinho, zona rural</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>20 min de trilha</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">🌡️</span>
                  <span>Visitável o ano todo</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Cachoeira+do+Mojolinha+São+Bento+do+Sapucaí"
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

          {/* CARD 2 */}
          <div className="cachoeira-card invertido">
            <div className="cachoeira-foto">
              <img src={amores} alt="Cachoeira dos Amores" />
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">02</span>
                <div className="cachoeira-tags">
                  <span className="tag">💑 Romântico</span>
                  <span className="tag">🌿 Reservado</span>
                </div>
              </div>
              <h2>Cachoeira dos Amores</h2>
              <p>
                Com um ambiente mais reservado e tranquilo, a Cachoeira dos Amores é
                perfeita para casais que buscam um refúgio na natureza. A queda forma
                uma bela piscina natural cercada por vegetação nativa, criando uma
                atmosfera única e intimista.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Região do Vale dos Amores</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>35 min de trilha</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⚠️</span>
                  <span>Evitar no período chuvoso</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Cachoeira+dos+Amores+São+Bento+do+Sapucaí"
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

          {/* CARD 3 */}
          <div className="cachoeira-card">
            <div className="cachoeira-foto">
              <img src={toldi} alt="Cachoeira do Toldi" />
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">03</span>
                <div className="cachoeira-tags">
                  <span className="tag">⭐ Mais conhecida</span>
                  <span className="tag">Difícil acesso</span>
                </div>
              </div>
              <h2>Cachoeira do Toldi</h2>
              <p>
                Localizada no bairro do Paiol Grande, próxima à Pedra do Baú, a Cachoeira
                do Toldi é conhecida por sua imponente queda d'água, que encanta pela
                beleza e pelo cenário natural ao seu redor. De acesso difícil, o local é
                indicado principalmente para contemplação da natureza. Não é recomendada
                para banho, devido às condições de acesso e segurança.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Sítio do Toldi, acesso pela SP-50</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>10 min de trilha</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">👨‍👩‍👧</span>
                  <span>Ideal para famílias</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Cachoeira+do+Toldi+São+Bento+do+Sapucaí"
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

          {/* CARD 4 */}
          <div className="cachoeira-card invertido">
            <div className="cachoeira-foto">
              <img src={toboga} alt="Cachoeira do Poção" />
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">04</span>
                <div className="cachoeira-tags">
                  <span className="tag">🏊 Piscina rasa</span>
                  <span className="tag">🧗 Moderado</span>
                </div>
              </div>
              <h2>Cachoeira do Tobogã</h2>
              <p>
                Localizada no bairro do Serrano, a Cachoeira do Tobogã é uma ótima opção
                para quem busca um passeio tranquilo em meio à natureza. O acesso é fácil
                de carro, seguido por uma curta trilha de aproximadamente cinco minutos
                até a cachoeira. Com um ambiente tranquilo e acesso seguro, é um passeio
                indicado para toda a família, inclusive para crianças.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📍</span>
                  <span>Zona rural, região do Serrano</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>30 min de carro e 5min de trilha</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⚠️</span>
                  <span>Não precisa de Guia</span>
                </div>
              </div>
              <div className="cachoeira-btns">
                <a
                  href="https://www.google.com/maps/search/Cachoeira+do+Poção+São+Bento+do+Sapucaí"
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
            <h2>Quer visitar alguma dessas cachoeiras?</h2>
            <p>
              Montamos roteiros personalizados com transporte, guia e todas as dicas para
              você aproveitar ao máximo.
            </p>
            <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cachoeiras;
