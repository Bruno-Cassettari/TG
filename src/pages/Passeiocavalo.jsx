import { Link } from 'react-router-dom';
import '../styles/passeiocavalo.css';


const NUMERO_WHATSAPP = '5512997171694';
const INSTAGRAM = 'https://instagram.com/saosebastiaocavalgadas';


const FOTO_CAPA = null;

const ROTEIROS = [
  {
    nome: 'Rota do Amanhecer',
    icone: '🌅',
    categoria: 'Nascer do sol',
    descricao: 'Cavalgada para ver o dia clarear na serra, com a névoa ainda nos vales.',
    foto: null,
  },
  {
    nome: 'Pôr do Sol na Capela',
    icone: '🌇',
    categoria: 'Pôr do sol',
    descricao: 'Passeio para fechar o dia com o pôr do sol na região da Capela.',
    foto: null,
  },
  {
    nome: 'Laço do Baú',
    icone: '⛰️',
    categoria: 'Natureza',
    descricao: 'Roteiro a cavalo pelos cenários que rodeiam a Pedra do Baú.',
    foto: null,
  },
  {
    nome: 'Coração da Mata',
    icone: '🌿',
    categoria: 'Natureza',
    descricao: 'Cavalgada por trechos de mata, para quem quer contato com a natureza.',
    foto: null,
  },
  {
    nome: 'Bela Vista Café',
    icone: '☕',
    categoria: 'Gastronomia',
    descricao: 'Passeio a cavalo com parada no Bela Vista Café.',
    foto: null,
  },
  {
    nome: 'Vinícola Santa Maria',
    icone: '🍷',
    categoria: 'Gastronomia',
    descricao: 'Roteiro a cavalo que passa pela Vinícola Santa Maria.',
    foto: null,
  },
];

const OUTROS_ROTEIROS = [
  'Pão e Pizza Machê',
  'Porteirinha',
  'Pôr do Sol em Casa',
  'Vinícola Raízes do Baú',
  'Capela',
  'Restaurante Pedra do Baú',
];

const PASSOS = [
  { n: '1', titulo: 'Escolha o roteiro', texto: 'Veja os roteiros abaixo e escolha o que combina com o seu dia.' },
  { n: '2', titulo: 'Fale com a gente', texto: 'Clique no botão do roteiro e chame no WhatsApp para combinar data e horário.' },
  { n: '3', titulo: 'Aproveite a cavalgada', texto: 'Nós fazemos a ponte com o operador local e você curte a serra a cavalo.' },
];

function linkWhatsApp(roteiro) {
  const msg = roteiro
    ? `Olá! Vi o roteiro "${roteiro}" de passeio a cavalo no portal de São Bento do Sapucaí e gostaria de mais informações.`
    : 'Olá! Gostaria de informações sobre os passeios a cavalo em São Bento do Sapucaí.';
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function PasseioCavalo() {
  const estiloCapa = FOTO_CAPA
    ? {
        backgroundImage: `linear-gradient(rgba(0,32,0,0.78), rgba(0,20,0,0.92)), url(${FOTO_CAPA})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  function irParaRoteiros(e) {
    e.preventDefault();
    const el = document.getElementById('roteiros');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* ── TOPO ── */}
      <section className="cav-topo" style={estiloCapa}>
        <div className="container cav-topo-conteudo">
          <span className="label label-light">Passeios a cavalo</span>
          <h1>Conheça São Bento a cavalo</h1>
          <p>
            Cavalgadas pela serra da Mantiqueira, do nascer ao pôr do sol. Escolha um roteiro
            e a gente conecta você com o operador local, em parceria com a São Sebastião
            Cavalgadas.
          </p>
          <div className="cav-topo-botoes">
            <a href="#roteiros" className="btn-primary" onClick={irParaRoteiros}>
              Ver roteiros
            </a>
            <a href={linkWhatsApp()} target="_blank" rel="noreferrer" className="cav-btn-claro">
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="cav-passos">
        <div className="container">
          <div className="cav-passos-grid">
            {PASSOS.map((p) => (
              <div className="cav-passo" key={p.n}>
                <span className="cav-passo-n">{p.n}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROTEIROS ── */}
      <section className="cav-roteiros" id="roteiros">
        <div className="container">
          <div className="section-header">
            <span className="label">Roteiros</span>
            <h2>Escolha o seu passeio</h2>
          </div>

          <div className="cav-grid">
            {ROTEIROS.map((r) => (
              <article className="cav-card" key={r.nome}>
                <div className="cav-card-foto">
                  {r.foto ? (
                    <img src={r.foto} alt={`${r.nome} - passeio a cavalo`} />
                  ) : (
                    <div className="cav-card-vazia">
                      <span>{r.icone}</span>
                      <small>Foto em breve</small>
                    </div>
                  )}
                  <span className="cav-card-tag">{r.categoria}</span>
                </div>
                <div className="cav-card-corpo">
                  <h3>{r.nome}</h3>
                  <p>{r.descricao}</p>
                  <a
                    className="cav-card-btn"
                    href={linkWhatsApp(r.nome)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quero este roteiro →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="cav-outros">
            <span className="cav-outros-titulo">Também disponíveis</span>
            <div className="cav-outros-chips">
              {OUTROS_ROTEIROS.map((o) => (
                <span key={o}>{o}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAMADA FINAL ── */}
      <section className="cav-final">
        <div className="container cav-final-conteudo">
          <div>
            <h2>Pronto para cavalgar?</h2>
            <p>Chame a gente no WhatsApp e combine seu roteiro. Veja também as fotos e novidades no Instagram do operador.</p>
          </div>
          <div className="cav-final-botoes">
            <a href={linkWhatsApp()} target="_blank" rel="noreferrer" className="btn-primary">
              💬 Falar no WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="cav-btn-claro">
              📷 @saosebastiaocavalgadas
            </a>
          </div>
        </div>
      </section>

      {/* botão flutuante: sempre à mão, principalmente no celular */}
      <a
        href={linkWhatsApp()}
        target="_blank"
        rel="noreferrer"
        className="cav-flutuante"
        aria-label="Falar no WhatsApp sobre passeios a cavalo"
      >
        💬 Reservar
      </a>

      <div className="cav-voltar">
        <Link to="/#categorias">← Ver outras categorias</Link>
      </div>
    </>
  );
}

export default PasseioCavalo;