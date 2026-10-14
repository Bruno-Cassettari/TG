import { Link } from 'react-router-dom';
import { ESPORTES } from '../data/esportes';
import '../styles/aventura.css';

const NUMERO_WHATSAPP = '5512997171694';

const NUMEROS = [
  { valor: '30+', rotulo: 'vias de escalada' },
  { valor: `${ESPORTES.length}`, rotulo: 'modalidades no guia' },
  { valor: 'Mai–Set', rotulo: 'período seco, ideal para as atividades' },
];

function linkWhatsApp() {
  const msg = 'Olá! Gostaria de ajuda para escolher uma atividade de aventura em São Bento do Sapucaí.';
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function AventuraEsportes() {
  return (
    <>
      {/* ── TOPO ── */}
      <section className="av-topo">
        <div className="container">
          <span className="label label-light">Aventura & Esportes</span>
          <h1>Capital dos esportes de aventura</h1>
          <p>
            Escalada, via ferrata, voo livre e muito mais ao pé da Pedra do Baú. Escolha a
            modalidade, veja o que você precisa saber e fale com a gente para planejar.
          </p>

          <div className="av-numeros">
            {NUMEROS.map((n) => (
              <div className="av-numero" key={n.rotulo}>
                <strong>{n.valor}</strong>
                <span>{n.rotulo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODALIDADES ── */}
      <section className="av-modalidades">
        <div className="container">
          <div className="section-header">
            <span className="label">Modalidades</span>
            <h2>O que você quer fazer?</h2>
          </div>

          <div className="av-grid">
            {ESPORTES.map((e) => (
              <Link to={`/aventura/${e.slug}`} className="av-card" key={e.slug}>
                <div className="av-card-foto">
                  <img src={e.foto} alt={e.nome} />
                  <span className="av-card-nivel">{e.nivel}</span>
                  <div className="av-card-hover">Saiba mais →</div>
                </div>
                <div className="av-card-corpo">
                  <h3>
                    <span>{e.icone}</span> {e.nome}
                  </h3>
                  <p>{e.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGURANÇA ── */}
      <section className="av-seguranca">
        <div className="container av-seguranca-grid">
          <div>
            <span className="label">Antes de ir</span>
            <h2>Segurança em primeiro lugar</h2>
          </div>
          <ul>
            <li>Prefira operadores e guias credenciados para qualquer atividade.</li>
            <li>Confira a previsão do tempo: chuva e vento podem cancelar ou remarcar.</li>
            <li>Informe ao guia seu nível de experiência e qualquer problema de saúde.</li>
          </ul>
        </div>
      </section>

      {/* ── CHAMADA ── */}
      <section className="av-final">
        <div className="container av-final-conteudo">
          <div>
            <h2>Não sabe por onde começar?</h2>
            <p>Conte o que você curte e o tempo que tem. A gente indica a melhor atividade.</p>
          </div>
          <a href={linkWhatsApp()} target="_blank" rel="noreferrer" className="btn-primary">
            💬 Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default AventuraEsportes;