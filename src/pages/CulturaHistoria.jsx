import { Link } from 'react-router-dom';
import '../styles/cultura-historia.css';

/* Quando o ateliê não tem WhatsApp cadastrado, o botão "Combinar visita"
   fala com o portal (mediador). Preencha o campo whatsapp do ateliê para
   falar direto com ele (DDI+DDD, só dígitos, ex.: '5512999999999'). */
const NUMERO_WHATSAPP = '5512997171694';

/* Foto opcional de cada item: importe a imagem e use no campo foto.
   Sem foto, o card mostra o ícone. */

const SECOES = [
  { id: 'historia', rotulo: 'História' },
  { id: 'visitar', rotulo: 'O que visitar' },
  { id: 'tradicoes', rotulo: 'Tradições' },
  { id: 'atelies', rotulo: 'Ateliês' },
];

const HISTORIA = [
  {
    quando: 'Origem',
    titulo: 'Um povoado à beira do Sapucaí',
    texto: 'A cidade nasce das expedições que saíam da região de Taubaté e cruzavam a Mantiqueira rumo às áreas de mineração de Minas Gerais.',
  },
  {
    quando: '1832',
    titulo: 'Vira freguesia',
    texto: 'O povoado, que crescia perto do Rio Sapucaí, é elevado à categoria de freguesia.',
  },
  {
    quando: 'Início do século XX',
    titulo: 'Chegam os bonecões',
    texto: 'Os bonecos gigantes da família Zé Pereira começam a percorrer as ruas no Carnaval e acompanham várias gerações da cidade.',
  },
  {
    quando: '2020',
    titulo: 'Museu do Zé Pereira',
    texto: 'A própria família cria um museu no Mercado Municipal para contar essa história e expor alguns dos bonecos.',
  },
];

const VISITAR = [
  {
    icone: '⛪',
    tipo: 'Patrimônio',
    nome: 'Igreja Matriz',
    texto: 'Igreja centenária no centro, um dos símbolos da cidade e ponto de partida para um passeio a pé.',
    foto: null,
  },
  {
    icone: '🏛️',
    tipo: 'Casa de cultura',
    nome: 'Casa de Cultura Miguel Reale',
    texto: 'Espaço cultural que preserva a história do professor Miguel Reale e recebe exposições de arte gratuitas.',
    foto: null,
  },
  {
    icone: '🎭',
    tipo: 'Museu',
    nome: 'Museu do Zé Pereira',
    texto: 'No Mercado Municipal, conta a história da família Zé Pereira e expõe os bonecos gigantes do Carnaval.',
    foto: null,
  },
  {
    icone: '🐂',
    tipo: 'Museu',
    nome: 'Museu do Carro de Boi',
    texto: 'Homenagem a Joaquim Pereira da Costa, o Quim Costa, renomado fabricante de carros de boi da região.',
    foto: null,
  },
  {
    icone: '🎨',
    tipo: 'Arte sacra',
    nome: 'Capelinhas de Mosaico',
    texto: 'Pequenas construções religiosas revestidas com fragmentos coloridos, espalhadas pelo caminho da zona rural.',
    foto: null,
  },
  {
    icone: '🎷',
    tipo: 'Praça',
    nome: 'Praça do Coreto',
    texto: 'Coração do centro, na Praça Dr. Adhemar de Barros. Palco de eventos culturais, como o Jazz no Coreto.',
    foto: null,
  },
];

const TRADICOES = [
  {
    icone: '🎎',
    titulo: 'Bonecões do Zé Pereira',
    texto: 'Zé, Maria, Mariinha e Kiko estão entre os personagens mais antigos. Os bonecos gigantes desfilam pelas ruas nos dias que antecedem o Carnaval, e a tradição virou símbolo da cidade.',
  },
  {
    icone: '🥁',
    titulo: 'Congada de São Benedito',
    texto: 'Manifestação afro-brasileira de fé e cultura popular, presente na programação cultural da cidade e ligada à memória das comunidades quilombolas.',
  },
  {
    icone: '🎪',
    titulo: 'Festivais ao longo do ano',
    texto: 'Carnaval de rua (fevereiro), Festival de Inverno (julho) e FLIPES, a festa literária (setembro). As datas mudam a cada ano, então confirme antes de planejar.',
  },
];

/* mapa: link do Google Maps do lugar (opcional). Vazio = busca pelo nome. */
const ATELIES = [
  {
    nome: 'Atelier Ditinho Joana',
    local: 'Bairro do Quilombo',
    icone: '🪵',
    texto: 'Ateliê de um dos artesãos mais renomados da região, o escultor famoso pelas botinhas de madeira.',
    whatsapp: '',
    mapa: '',
  },
  {
    nome: 'Arte no Quilombo',
    local: 'Bairro do Quilombo',
    icone: '🧺',
    texto: 'Espaço que reúne peças de vários produtores locais, com artesanato em fibra de bananeira e palha de milho.',
    whatsapp: '',
    mapa: '',
  },
  {
    nome: 'Sítio Solar – Ateliê de Cerâmica',
    local: 'Zona rural',
    icone: '🏺',
    texto: 'Ateliê de cerâmica que faz parte de roteiros culturais da cidade, com visita e peças feitas à mão.',
    whatsapp: '',
    mapa: '',
  },
  {
    nome: 'Ateliê Maria Pereira',
    local: 'Centro',
    icone: '🧵',
    texto: 'Concentra venda de artesanato e oficinas, e é movimentado principalmente nos eventos da cidade.',
    whatsapp: '',
    mapa: '',
  },
];

function linkMapa(nome, mapa) {
  if (mapa) return mapa;
  const busca = `${nome} São Bento do Sapucaí SP`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;
}

function linkVisita(a) {
  const numero = a.whatsapp || NUMERO_WHATSAPP;
  const msg = `Olá! Vi o ${a.nome} no portal de São Bento do Sapucaí e gostaria de combinar uma visita.`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}

function linkRoteiro() {
  const msg = 'Olá! Gostaria de um roteiro cultural em São Bento do Sapucaí.';
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function CulturaHistoria() {
  function irPara(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* ── TOPO ── */}
      <section className="cul-topo">
        <div className="container">
          <span className="label label-light">Cultura & História</span>
          <h1>A cultura de São Bento, de perto</h1>
          <p>
            Bonecões centenários, museus, capelinhas de mosaico, ateliês e festas populares.
            Veja o que visitar, entenda a história da cidade e combine uma visita.
          </p>
          <nav className="cul-chips" aria-label="Seções da página">
            {SECOES.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => irPara(e, s.id)}>
                {s.rotulo}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── HISTÓRIA ── */}
      <section className="cul-historia" id="historia">
        <div className="container cul-historia-grid">
          <div className="cul-historia-texto">
            <span className="label">História</span>
            <h2>De povoado a destino cultural</h2>
            <p>
              São Bento do Sapucaí cresceu no caminho entre o Vale do Paraíba e Minas Gerais. Ao
              longo dos séculos, a cidade guardou tradições próprias, e algumas delas viraram
              marca registrada.
            </p>
          </div>

          <ol className="cul-linha">
            {HISTORIA.map((h) => (
              <li key={h.titulo}>
                <span className="cul-linha-quando">{h.quando}</span>
                <h3>{h.titulo}</h3>
                <p>{h.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── O QUE VISITAR ── */}
      <section className="cul-visitar" id="visitar">
        <div className="container">
          <div className="section-header">
            <span className="label">O que visitar</span>
            <h2>Pontos culturais da cidade</h2>
          </div>

          <div className="cul-grid">
            {VISITAR.map((v) => (
              <article className="cul-card" key={v.nome}>
                {v.foto ? (
                  <img className="cul-card-foto" src={v.foto} alt={v.nome} />
                ) : (
                  <span className="cul-card-icone">{v.icone}</span>
                )}
                <span className="cul-card-tipo">{v.tipo}</span>
                <h3>{v.nome}</h3>
                <p>{v.texto}</p>
                <a
                  className="cul-link"
                  href={linkMapa(v.nome)}
                  target="_blank"
                  rel="noreferrer"
                >
                  📍 Como chegar
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADIÇÕES ── */}
      <section className="cul-tradicoes" id="tradicoes">
        <div className="container">
          <div className="section-header">
            <span className="label label-light">Tradições vivas</span>
            <h2>O que a cidade celebra</h2>
          </div>

          <div className="cul-tradicoes-grid">
            {TRADICOES.map((t) => (
              <div className="cul-tradicao" key={t.titulo}>
                <span className="cul-tradicao-icone">{t.icone}</span>
                <h3>{t.titulo}</h3>
                <p>{t.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATELIÊS (serviço) ── */}
      <section className="cul-atelies" id="atelies">
        <div className="container">
          <div className="section-header">
            <span className="label">Ateliês e artesanato</span>
            <h2>Conheça quem faz</h2>
          </div>
          <p className="cul-atelies-intro">
            Visitar um ateliê é ver o artesão trabalhando e levar para casa uma peça feita à mão.
            Escolha um e combine a visita com a gente.
          </p>

          <div className="cul-atelies-grid">
            {ATELIES.map((a) => (
              <article className="cul-atelie" key={a.nome}>
                <div className="cul-atelie-topo">
                  <span className="cul-atelie-icone">{a.icone}</span>
                  <div>
                    <h3>{a.nome}</h3>
                    <span className="cul-atelie-local">{a.local}</span>
                  </div>
                </div>
                <p>{a.texto}</p>
                <div className="cul-atelie-acoes">
                  <a className="cul-btn" href={linkVisita(a)} target="_blank" rel="noreferrer">
                    💬 Combinar visita
                  </a>
                  <a
                    className="cul-btn secundario"
                    href={linkMapa(a.nome, a.mapa)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    📍 Como chegar
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="cul-aviso">
            Horários e visitação dependem de cada ateliê. Confirme antes de ir.
          </p>
        </div>
      </section>

      {/* ── CHAMADA FINAL ── */}
      <section className="cul-final">
        <div className="container cul-final-conteudo">
          <div>
            <h2>Quer um roteiro cultural?</h2>
            <p>
              Montamos um passeio com os pontos que você mais gostou, ou você pode conhecer o
              centro com o nosso City Tour.
            </p>
          </div>
          <div className="cul-final-botoes">
            <a href={linkRoteiro()} target="_blank" rel="noreferrer" className="btn-primary">
              💬 Pedir roteiro
            </a>
            <Link to="/passeios" className="cul-btn-claro">Ver City Tour</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CulturaHistoria;