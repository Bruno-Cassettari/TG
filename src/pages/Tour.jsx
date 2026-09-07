import { Link } from 'react-router-dom';
import '../styles/tour.css';
import capapedra from '../assets/images/capapedra.jpeg';
import capacachu from '../assets/images/capacachu.jpeg';
import cultura from '../assets/images/cultura.webp';

function Tour() {
  return (
    <>
      {/* HERO */}
      <section className="passeios-hero">
        <div className="passeios-hero-bg"></div>
        <div className="passeios-hero-content">
          <span className="hero-badge">Roteiros prontos</span>
          <h1>Passeios Prontos</h1>
          <p>
            Três circuitos montados pela nossa equipe, prontos para reservar. Escolha o
            roteiro que mais combina com o seu preparo físico e o tempo que você tem
            disponível.
          </p>
        </div>
      </section>

      {/* LEGENDA RÁPIDA */}
      <section className="passeios-legenda">
        <div className="container">
          <div className="legenda-grid">
            <div className="legenda-item">
              <span className="legenda-icon">⛰️</span>
              <div>
                <strong>Dificuldade</strong>
                <span>Nível de esforço físico exigido em cada roteiro</span>
              </div>
            </div>
            <div className="legenda-item">
              <span className="legenda-icon">⏱️</span>
              <div>
                <strong>Duração</strong>
                <span>Tempo total do passeio, do início ao fim</span>
              </div>
            </div>
            <div className="legenda-item">
              <span className="legenda-icon">🚐</span>
              <div>
                <strong>Transporte</strong>
                <span>Indicamos se o transporte já está incluso no valor</span>
              </div>
            </div>
            <div className="legenda-item">
              <span className="legenda-icon">👥</span>
              <div>
                <strong>Grupo</strong>
                <span>Tamanho ideal de grupo para cada experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTA DE PASSEIOS */}
      <section className="passeios-lista" id="passeios">
        <div className="container">

          {/* PASSEIO 1 */}
          <article className="passeio-card">
            <div className="passeio-img">
              <img src={capapedra} alt="Circuito Pedra do Baú" />
              <span className="passeio-numero">01</span>
            </div>
            <div className="passeio-conteudo">
              <span className="passeio-dificuldade dificuldade-alta">Alta dificuldade</span>
              <h2>Circuito Pedra do Baú Completo</h2>
              <p className="passeio-desc">
                O roteiro mais desafiador e mais procurado da região. Subida técnica com
                auxílio de cabos de aço até o topo da Pedra do Baú, com vista de 360° da
                Serra da Mantiqueira.
              </p>

              <div className="passeio-specs">
                <div className="spec"><span className="spec-icon">⏱️</span> Dia inteiro (8h)</div>
                <div className="spec"><span className="spec-icon">🚐</span> Transporte incluso</div>
                <div className="spec"><span className="spec-icon">👥</span> Grupos de até 8 pessoas</div>
                <div className="spec"><span className="spec-icon">🎂</span> A partir de 14 anos</div>
              </div>

              <div className="passeio-roteiro">
                <strong>Por onde passa</strong>
                <ol>
                  <li>Saída da vila às 6h com transporte 4x4</li>
                  <li>Trilha de acesso pela mata até a base da rocha</li>
                  <li>Subida com cabos de aço até o Baú Pequeno</li>
                  <li>Travessia até o Baú Grande (ponto mais alto)</li>
                  <li>Piquenique no topo com vista panorâmica</li>
                  <li>Descida e retorno à vila no fim da tarde</li>
                </ol>
              </div>

              <div className="passeio-incluso">
                <strong>O que está incluso</strong>
                <ul>
                  <li>Transporte 4x4 ida e volta</li>
                  <li>Guia especializado e equipamento de segurança</li>
                  <li>Seguro de acidentes pessoais</li>
                  <li>Lanche de trilha</li>
                </ul>
              </div>

              <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
            </div>
          </article>

          {/* PASSEIO 2 */}
          <article className="passeio-card passeio-invertido">
            <div className="passeio-img">
              <img src={capacachu} alt="Circuito Cachoeiras & Natureza" />
              <span className="passeio-numero">02</span>
            </div>
            <div className="passeio-conteudo">
              <span className="passeio-dificuldade dificuldade-facil">Fácil · Ideal para famílias</span>
              <h2>Circuito Cachoeiras &amp; Natureza</h2>
              <p className="passeio-desc">
                Um roteiro leve e refrescante entre três cachoeiras de fácil acesso, com
                trechos curtos de caminhada e tempo livre para banho nas piscinas
                naturais.
              </p>

              <div className="passeio-specs">
                <div className="spec"><span className="spec-icon">⏱️</span> Meio período (4h)</div>
                <div className="spec"><span className="spec-icon">🚐</span> Transporte incluso</div>
                <div className="spec"><span className="spec-icon">👥</span> Grupos de até 12 pessoas</div>
                <div className="spec"><span className="spec-icon">🎂</span> Livre, todas as idades</div>
              </div>

              <div className="passeio-roteiro">
                <strong>Por onde passa</strong>
                <ol>
                  <li>Saída da vila às 9h</li>
                  <li>Cachoeira do Corujão, com poço para banho</li>
                  <li>Caminhada leve até a Cachoeira Véu de Noiva</li>
                  <li>Parada para almoço em restaurante parceiro (opcional)</li>
                  <li>Cachoeira do Papudinho para encerrar o passeio</li>
                  <li>Retorno à vila no início da tarde</li>
                </ol>
              </div>

              <div className="passeio-incluso">
                <strong>O que está incluso</strong>
                <ul>
                  <li>Transporte ida e volta</li>
                  <li>Guia local</li>
                  <li>Seguro de acidentes pessoais</li>
                  <li>Água durante o passeio</li>
                </ul>
              </div>

              <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
            </div>
          </article>

          {/* PASSEIO 3 */}
          <article className="passeio-card">
            <div className="passeio-img">
              <img src={cultura} alt="Circuito Cultural & Mirantes" />
              <span className="passeio-numero">03</span>
            </div>
            <div className="passeio-conteudo">
              <span className="passeio-dificuldade dificuldade-moderada">Moderada</span>
              <h2>Circuito Cultural &amp; Mirantes</h2>
              <p className="passeio-desc">
                Passeio sem trilhas pesadas, pensado para quem quer conhecer a história,
                a gastronomia local e os mirantes mais bonitos da cidade com calma.
              </p>

              <div className="passeio-specs">
                <div className="spec"><span className="spec-icon">⏱️</span> Dia inteiro (6h)</div>
                <div className="spec"><span className="spec-icon">🚐</span> Transporte incluso</div>
                <div className="spec"><span className="spec-icon">👥</span> Grupos de até 15 pessoas</div>
                <div className="spec"><span className="spec-icon">🎂</span> Livre, todas as idades</div>
              </div>

              <div className="passeio-roteiro">
                <strong>Por onde passa</strong>
                <ol>
                  <li>Saída da vila às 9h30</li>
                  <li>Visita ao centro histórico e igreja matriz</li>
                  <li>Parada em produtores locais (queijos e doces)</li>
                  <li>Mirante do Cruzeiro, com vista da Serra</li>
                  <li>Almoço em restaurante típico da região</li>
                  <li>Mirante da Pedra Redonda ao entardecer</li>
                </ol>
              </div>

              <div className="passeio-incluso">
                <strong>O que está incluso</strong>
                <ul>
                  <li>Transporte ida e volta</li>
                  <li>Guia local</li>
                  <li>Degustação em produtores parceiros</li>
                  <li>Seguro de acidentes pessoais</li>
                </ul>
              </div>

              <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
            </div>
          </article>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="passeios-cta">
        <div className="container passeios-cta-inner">
          <div>
            <h2>Nenhum roteiro combinou 100%?</h2>
            <p>
              Também montamos passeios sob medida, misturando trilhas, cachoeiras e
              pontos culturais do jeito que você quiser.
            </p>
          </div>
          <Link to="/#contato" className="btn-primary">Montar Roteiro Personalizado</Link>
        </div>
      </section>
    </>
  );
}

export default Tour;
