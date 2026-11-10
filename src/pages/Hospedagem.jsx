import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/gastronomia.css'; // reaproveita o layout de folder da Gastronomia
import '../styles/hospedagem.css';


/* Foto de fundo da capa (opcional). Para usar:
   import capa from '../assets/images/capa-hospedagem.jpg'; e FOTO_CAPA = capa */
const FOTO_CAPA = null;

/* DADOS REUNIDOS DE GUIAS DE VIAGEM (nov/2026), os mesmos da base do assistente.
   Confirmar com cada hospedagem antes de divulgar contato ou fotos.

   tipo:      'Pousada', 'Chalé', 'Hotel'... (alimenta o filtro automaticamente)
   local:     texto curto abaixo do nome (ex.: 'Centro da cidade')
   fotos:     lista de imports. 1 foto = imagem fixa; 2 ou mais = carrossel.
              Vazio [] = mostra "Foto em breve".
   comodidades: use só o que o lugar realmente oferece.
   whatsapp:  número da hospedagem (DDI+DDD, só dígitos). Vazio = botão não aparece.
   mapa:      link do Google Maps (opcional). */
const HOSPEDAGENS = [
  {
    id: 'pousada-lua-bonita',
    nome: 'Pousada Lua Bonita',
    icone: '🌙',
    tipo: 'Pousada',
    local: 'Chalés com vista para o vale',
    descricao:
      'Pousada com chalés com vista para o vale. Os chalés têm sala, TV, frigobar e lareira, e a pousada tem jardim e terraço. Café da manhã bem avaliado.',
    comodidades: ['🔥 Lareira nos chalés', '📺 TV e frigobar', '🌿 Jardim e terraço', '☕ Café da manhã'],
    fotos: [],
    whatsapp: '',
    mapa: '',
  },
  {
    id: 'pousada-villa-da-montanha',
    nome: 'Pousada Villa da Montanha',
    icone: '🏔️',
    tipo: 'Pousada',
    local: 'Chalés pela propriedade',
    descricao:
      'Pousada com chalés espalhados pela propriedade, piscina ao ar livre e hidromassagem em alguns quartos. Café da manhã simples e bem avaliado.',
    comodidades: ['🏊 Piscina ao ar livre', '🛁 Hidromassagem em alguns quartos', '☕ Café da manhã'],
    fotos: [],
    whatsapp: '',
    mapa: '',
  },
  {
    id: 'pousada-canto-da-lua',
    nome: 'Pousada Canto da Lua',
    icone: '🌿',
    tipo: 'Pousada',
    local: 'A cerca de 1 km do centro',
    descricao:
      'Pousada com chalés a cerca de 1 km do centro, cercada por vegetação. Os chalés têm lareira, e a pousada tem piscina aquecida, hidromassagem e sauna. Café da manhã bem avaliado.',
    comodidades: ['🏊 Piscina aquecida', '🛁 Hidromassagem', '🧖 Sauna', '🔥 Lareira nos chalés'],
    fotos: [],
    whatsapp: '',
    mapa: '',
  },
  {
    id: 'pousada-do-quilombo',
    nome: 'Pousada do Quilombo',
    icone: '🏡',
    tipo: 'Pousada',
    local: 'São Bento do Sapucaí',
    descricao:
      'Pousada com spa com hidromassagem e massagens, academia, sala de jogos, duas piscinas ao ar livre, bar e restaurante. Quartos com lareira, varanda, TV e frigobar. Café da manhã em geral incluído na diária.',
    comodidades: ['💆 Spa e massagens', '🏊 Duas piscinas', '🍽️ Bar e restaurante', '🏋️ Academia'],
    fotos: [],
    whatsapp: '',
    mapa: '',
  },
];

// os botões de filtro nascem dos tipos cadastrados acima
const FILTROS = ['Todos', ...new Set(HOSPEDAGENS.map((h) => h.tipo))];

// 'Chalé' -> 'chale' (classe CSS sem acento)
function slug(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function linkWhatsApp(h) {
  const msg = `Olá! Vi a ${h.nome} no guia de hospedagem de São Bento do Sapucaí e gostaria de consultar disponibilidade e valores.`;
  return `https://wa.me/${h.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function linkMapa(h) {
  if (h.mapa) return h.mapa;
  const busca = `${h.nome} São Bento do Sapucaí SP`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;
}

/* Foto única, carrossel (2+ fotos) ou espaço reservado */
function Fotos({ h }) {
  const [atual, setAtual] = useState(0);
  const total = h.fotos.length;

  if (total === 0) {
    return (
      <div className="gastro-foto-vazia">
        <span>{h.icone}</span>
        <small>Foto em breve</small>
      </div>
    );
  }

  if (total === 1) {
    return <img src={h.fotos[0]} alt={`${h.nome} em São Bento do Sapucaí`} />;
  }

  const anterior = () => setAtual((a) => (a === 0 ? total - 1 : a - 1));
  const proxima = () => setAtual((a) => (a === total - 1 ? 0 : a + 1));

  return (
    <div className="hosp-car">
      {h.fotos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${h.nome} - foto ${i + 1}`}
          className={i === atual ? 'ativo' : ''}
        />
      ))}
      <button className="hosp-car-seta esquerda" aria-label="Foto anterior" onClick={anterior}>‹</button>
      <button className="hosp-car-seta direita" aria-label="Próxima foto" onClick={proxima}>›</button>
      <div className="hosp-car-dots">
        {h.fotos.map((_, i) => (
          <button
            key={i}
            className={i === atual ? 'ativo' : ''}
            aria-label={`Ir para foto ${i + 1}`}
            onClick={() => setAtual(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}

function Hospedagem() {
  const [filtro, setFiltro] = useState('Todos');

  const lista =
    filtro === 'Todos' ? HOSPEDAGENS : HOSPEDAGENS.filter((h) => h.tipo === filtro);

  function irPara(e, id) {
    e.preventDefault();
    setFiltro('Todos');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  const estiloCapa = FOTO_CAPA
    ? {
        backgroundImage: `linear-gradient(rgba(0,32,0,0.82), rgba(0,24,0,0.92)), url(${FOTO_CAPA})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <>
      {/* ── CAPA ── */}
      <section className="gastro-capa" style={estiloCapa}>
        <div className="container gastro-capa-grid">
          <div className="gastro-capa-texto">
            <span className="label label-light">Guia de hospedagem</span>
            <h1>Onde ficar em São Bento do Sapucaí</h1>
            <p>
              Pousadas e chalés para descansar depois de um dia de trilha, cachoeira e
              passeio. Compare, escolha e consulte a disponibilidade direto com a hospedagem.
            </p>
          </div>

          <nav className="gastro-indice" aria-label="Índice das hospedagens">
            <span className="gastro-indice-titulo">Neste guia</span>
            <ul>
              {HOSPEDAGENS.map((h, i) => (
                <li key={h.id}>
                  <a href={`#${h.id}`} onClick={(e) => irPara(e, h.id)}>
                    <span className="gastro-indice-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="gastro-indice-nome">{h.nome}</span>
                    <span className="gastro-pontilhado"></span>
                    <span className="gastro-indice-periodo">{h.tipo}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── GUIA ── */}
      <section className="gastro-guia">
        <div className="container">
          <div className="gastro-filtros" role="tablist" aria-label="Filtrar por tipo">
            {FILTROS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filtro === f}
                className={`gastro-chip ${filtro === f ? 'ativo' : ''}`}
                onClick={() => setFiltro(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gastro-folha">
            {lista.map((h, i) => (
              <article className="gastro-item" id={h.id} key={h.id}>
                <div className="gastro-corpo">
                  <div className="gastro-cabeca">
                    <span className="gastro-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="gastro-tipo">
                      {h.icone} {h.local}
                    </span>
                  </div>

                  <div className="gastro-topo">
                    <h3>{h.nome}</h3>
                    <span className="gastro-pontilhado"></span>
                    <div className="gastro-periodos">
                      <span className={`gastro-periodo ${slug(h.tipo)}`}>{h.tipo}</span>
                    </div>
                  </div>

                  <p className="gastro-desc">{h.descricao}</p>

                  <div className="gastro-tags">
                    {h.comodidades.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>

                  <div className="gastro-acoes">
                    {h.whatsapp && (
                      <a
                        className="gastro-btn"
                        href={linkWhatsApp(h)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        💬 Consultar disponibilidade
                      </a>
                    )}
                    <a
                      className={`gastro-btn ${h.whatsapp ? 'secundario' : ''}`}
                      href={linkMapa(h)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      📍 Como chegar
                    </a>
                  </div>
                </div>

                <div className="gastro-foto">
                  <Fotos h={h} />
                </div>
              </article>
            ))}
          </div>

          <p className="gastro-aviso">
            Informações reunidas de guias de viagem (nov/2026) e não fornecidas pelas hospedagens.
            Valores e disponibilidade variam conforme a época do ano. Confirme direto com a hospedagem.
          </p>

          {/* ── CTA PARA PARCEIROS ── */}
          <div className="gastro-parceiro">
            <div>
              <span className="label label-light">Para quem tem hospedagem</span>
              <h2>Sua hospedagem também pode estar aqui</h2>
              <p>Entre no Hub Turístico de São Bento e seja encontrado por quem está planejando a viagem.</p>
            </div>
            <Link to="/#contato" className="btn-primary">Quero participar</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hospedagem;