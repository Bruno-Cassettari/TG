import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/gastronomia.css';
import sabordaserra from '../assets/images/sabordaserra.jpg';
import taipa from '../assets/images/taipa.jpg';
import leao from '../assets/images/leao.png';
import japa from '../assets/images/japa.jpg';


const FILTROS = ['Todos', 'Almoço', 'Jantar', 'Noite'];


const RESTAURANTES = [
  {
    id: 'sabor-da-serra',
    nome: 'Sabor da Serra',
    icone: '🍲',
    tipo: 'Comida tradicional',
    periodos: ['Almoço', 'Jantar'],
    descricao:
      'Comida tradicional para quem quer sentar à mesa sem pressa, seja no almoço depois de uma trilha ou no jantar para fechar o dia.',
    destaques: ['Comida tradicional', 'Almoço e jantar'],
    foto: sabordaserra,
    whatsapp: '',
    mapa: '',
  },
  {
    id: 'taipa-restaurante',
    nome: 'Taipa Restaurante',
    icone: '🔥',
    tipo: 'Comida tradicional · Fogão de lenha',
    periodos: ['Almoço'],
    descricao:
      'Comida tradicional feita no fogão de lenha, em formato self-service. Uma ótima pedida para o almoço, escolhendo seu prato no seu ritmo.',
    destaques: ['Fogão de lenha', 'Self-service'],
    foto: taipa,
    whatsapp: '',
    mapa: '',
  },
  {
    id: 'japadime',
    nome: 'Japadime',
    icone: '🍣',
    tipo: 'Comida japonesa',
    periodos: ['Jantar'],
    descricao:
      'Comida japonesa para variar o cardápio da viagem. Funciona no jantar, ideal para quem quer fugir do tradicional.',
    destaques: ['Culinária japonesa', 'Jantar'],
    foto: japa,
    whatsapp: '',
    mapa: '',
  },
  {
    id: 'leao-na-chapa',
    nome: 'Leão na Chapa',
    icone: '🍔',
    tipo: 'Hamburgueria artesanal',
    periodos: ['Noite'],
    descricao:
      'Hamburgueria artesanal para a noite. Perfeita para um lanche descontraído depois de um dia inteiro de passeio.',
    destaques: ['Artesanal', 'Noite'],
    foto: leao,
    whatsapp: '',
    mapa: '',
  },
];

// 'Almoço' -> 'almoco' (classe CSS sem acento)
function slug(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function linkWhatsApp(r) {
  const msg = `Olá! Vi o ${r.nome} no guia de gastronomia de São Bento do Sapucaí e gostaria de mais informações.`;
  return `https://wa.me/${r.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function linkMapa(r) {
  if (r.mapa) return r.mapa;
  const busca = `${r.nome} São Bento do Sapucaí SP`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;
}

function Gastronomia() {
  const [filtro, setFiltro] = useState('Todos');

  const lista =
    filtro === 'Todos'
      ? RESTAURANTES
      : RESTAURANTES.filter((r) => r.periodos.includes(filtro));

  function irPara(e, id) {
    e.preventDefault();
    setFiltro('Todos');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  return (
    <>
      {/* ── CAPA DO FOLDER ── */}
      <section className="gastro-capa">
        <div className="container gastro-capa-grid">
          <div className="gastro-capa-texto">
            <span className="label label-light">Guia gastronômico</span>
            <h1>Onde comer em São Bento do Sapucaí</h1>
            <p>
              Uma seleção de lugares para almoçar, jantar e curtir a noite na serra.
              Escolha o seu, chame no WhatsApp e boa refeição.
            </p>
          </div>

          <nav className="gastro-indice" aria-label="Índice dos restaurantes">
            <span className="gastro-indice-titulo">Neste guia</span>
            <ul>
              {RESTAURANTES.map((r, i) => (
                <li key={r.id}>
                  <a href={`#${r.id}`} onClick={(e) => irPara(e, r.id)}>
                    <span className="gastro-indice-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="gastro-indice-nome">{r.nome}</span>
                    <span className="gastro-pontilhado"></span>
                    <span className="gastro-indice-periodo">{r.periodos.join(' · ')}</span>
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
          <div className="gastro-filtros" role="tablist" aria-label="Filtrar por período">
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
            {lista.map((r, i) => (
              <article className="gastro-item" id={r.id} key={r.id}>
                <div className="gastro-corpo">
                  <div className="gastro-cabeca">
                    <span className="gastro-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="gastro-tipo">
                      {r.icone} {r.tipo}
                    </span>
                  </div>

                  <div className="gastro-topo">
                    <h3>{r.nome}</h3>
                    <span className="gastro-pontilhado"></span>
                    <div className="gastro-periodos">
                      {r.periodos.map((p) => (
                        <span className={`gastro-periodo ${slug(p)}`} key={p}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="gastro-desc">{r.descricao}</p>

                  <div className="gastro-tags">
                    {r.destaques.map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>

                  <div className="gastro-acoes">
                    <a
                      className="gastro-btn"
                      href={linkMapa(r)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      📍 Como chegar
                    </a>
                    {r.whatsapp && (
                      <a
                        className="gastro-btn secundario"
                        href={linkWhatsApp(r)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        💬 WhatsApp
                      </a>
                    )}
                  </div>
                </div>

                <div className="gastro-foto">
                  {r.foto ? (
                    <img src={r.foto} alt={`${r.nome} em São Bento do Sapucaí`} />
                  ) : (
                    <div className="gastro-foto-vazia">
                      <span>{r.icone}</span>
                      <small>Foto em breve</small>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="gastro-aviso">
            Horários e funcionamento podem variar conforme a época do ano. Confirme antes de ir.
          </p>

          {/* ── CTA PARA PARCEIROS ── */}
          <div className="gastro-parceiro">
            <div>
              <span className="label label-light">Para quem tem restaurante</span>
              <h2>Seu restaurante também pode estar aqui</h2>
              <p>Entre no hub de São Bento e seja encontrado por quem está planejando a viagem.</p>
            </div>
            <Link to="/#contato" className="btn-primary">Quero participar</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gastronomia;