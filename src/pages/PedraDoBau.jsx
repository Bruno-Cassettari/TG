import { Link } from 'react-router-dom';
import '../styles/cardgrid.css';
import '../styles/pedra-do-bau.css';

function PedraDoBau() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="page-hero">
        <div className="page-hero-bg pedra-hero-bg"></div>
        <div className="page-hero-content">
          <span className="hero-badge">Aventura · São Bento do Sapucaí</span>
          <h1>Pedra do Baú</h1>
          <p>
            Um dos cartões-postais da Serra da Mantiqueira, com trilhas para todos os
            níveis, do passeio em família à escalada até o topo.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="cachoeiras-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-stat">
              <strong>4</strong>
              <span>Circuitos de trilha</span>
            </div>
            <div className="intro-stat">
              <strong>1.950 m</strong>
              <span>Altitude no topo</span>
            </div>
            <div className="intro-stat">
              <strong>Fácil a extremo</strong>
              <span>Nível de acesso</span>
            </div>
            <div className="intro-stat">
              <strong>Guia</strong>
              <span>Recomendado</span>
            </div>
          </div>
        </div>
      </section>

      {/* LISTAGEM DE TRILHAS */}
      <section className="cachoeiras-lista">
        <div className="container">

          {/* CARD 1 */}
          <div className="cachoeira-card">
            <div className="cachoeira-foto">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80"
                alt="Trilha do Bauzinho"
              />
              <span className="cachoeira-badge">Mais fácil</span>
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">01</span>
                <div className="cachoeira-tags">
                  <span className="tag">🥾 Fácil acesso</span>
                  <span className="tag">👨‍👩‍👧 Para toda a família</span>
                </div>
              </div>
              <h2>Trilha do Bauzinho</h2>
              <p>
                A porta de entrada para quem quer conhecer a Pedra do Baú sem grandes
                esforços. Caminho curto e bem sinalizado até um mirante com vista
                privilegiada da Serra da Mantiqueira, ideal para iniciantes, crianças e
                quem busca apenas um passeio leve.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📊</span>
                  <span>Dificuldade: fácil (a mais fácil do circuito)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>Duração média: 30 a 40 min (ida e volta)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⛰️</span>
                  <span>Altitude aproximada: 1.500 m</span>
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

          {/* CARD 2 */}
          <div className="cachoeira-card invertido">
            <div className="cachoeira-foto">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80"
                alt="Trilha da Ana Chata"
              />
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">02</span>
                <div className="cachoeira-tags">
                  <span className="tag">🥾 Fácil / moderada</span>
                  <span className="tag">🌄 Vista panorâmica</span>
                </div>
              </div>
              <h2>Trilha da Ana Chata</h2>
              <p>
                Um pouco mais longa e com trechos de subida mais acentuados que o
                Bauzinho, a trilha da Ana Chata leva a um mirante amplo com vista aberta
                para o vale. Boa opção para quem já quer sentir um pouco mais de esforço
                físico sem enfrentar a escalada até o topo.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📊</span>
                  <span>Dificuldade: fácil a moderada (segunda mais fácil)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>Duração média: 1h a 1h30 (ida e volta)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⛰️</span>
                  <span>Altitude aproximada: 1.650 m</span>
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

          {/* CARD 3 */}
          <div className="cachoeira-card">
            <div className="cachoeira-foto">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=80"
                alt="Trilha para o Topo da Pedra do Baú"
              />
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">03</span>
                <div className="cachoeira-tags">
                  <span className="tag">🧗 Difícil</span>
                  <span className="tag">🌅 Nascer do sol</span>
                </div>
              </div>
              <h2>Trilha para o Topo da Pedra</h2>
              <p>
                A escalada até o cume da Pedra do Baú, com trechos de apoio em cabos de
                aço e rocha exposta, recompensa quem chega ao topo com uma das vistas
                mais impressionantes da Mantiqueira. É um dos pontos preferidos para
                observar o nascer do sol, e exige preparo físico e, de preferência,
                acompanhamento de guia.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📊</span>
                  <span>Dificuldade: difícil</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>Duração média: 2h30 a 3h (ida e volta)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⛰️</span>
                  <span>Altitude no topo: 1.950 m</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⚠️</span>
                  <span>Guia recomendado e equipamento de apoio</span>
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

          {/* CARD 4 */}
          <div className="cachoeira-card invertido">
            <div className="cachoeira-foto">
              <img
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=700&q=80"
                alt="Circuito Visitando as Três Pedras"
              />
              <span className="cachoeira-badge">Maior desafio</span>
            </div>
            <div className="cachoeira-info">
              <div className="cachoeira-topo">
                <span className="cachoeira-numero">04</span>
                <div className="cachoeira-tags">
                  <span className="tag">🏔️ Extremo</span>
                  <span className="tag">🎯 Circuito completo</span>
                </div>
              </div>
              <h2>Visitando as Três Pedras</h2>
              <p>
                O passeio mais completo e mais desafiador de todo o circuito: em uma
                única jornada, o visitante percorre as três formações rochosas da
                região, unindo escalada técnica, longos trechos de caminhada e alto
                desgaste físico. Recomendado apenas para quem já tem experiência em
                trilhas de montanha e sempre acompanhado de guia especializado.
              </p>
              <div className="cachoeira-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-icone">📊</span>
                  <span>Dificuldade: extrema (a mais difícil do circuito)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⏱️</span>
                  <span>Duração média: dia inteiro (6 a 8h)</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⛰️</span>
                  <span>Altitude acumulada acima de 1.950 m</span>
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-icone">⚠️</span>
                  <span>Guia especializado obrigatório</span>
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

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cachoeiras-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Quer subir na Pedra do Baú?</h2>
            <p>
              Montamos roteiros personalizados com transporte, guia especializado e todo
              o suporte para você escolher a trilha ideal para o seu nível.
            </p>
            <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PedraDoBau;
