import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ESPORTES, buscarEsporte } from '../data/esportes';
import '../styles/aventura.css';

const NUMERO_WHATSAPP = '5512997171694';

function linkWhatsApp(esporte, operador) {
  const numero = operador && operador.whatsapp ? operador.whatsapp : NUMERO_WHATSAPP;
  const msg = operador
    ? `Olá! Vi ${operador.nome} no portal de São Bento do Sapucaí e gostaria de informações sobre ${esporte.nome}.`
    : `Olá! Tenho interesse em ${esporte.nome} em São Bento do Sapucaí e gostaria de mais informações.`;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
}

/* Modelo único: serve para todas as modalidades de src/data/esportes.js */
function EsporteDetalhe() {
  const { slug } = useParams();
  const esporte = buscarEsporte(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!esporte) {
    return (
      <section className="av-nao-encontrado">
        <div className="container">
          <h1>Modalidade não encontrada</h1>
          <p>Não achamos essa página. Volte e escolha uma das modalidades disponíveis.</p>
          <Link to="/aventura" className="btn-primary">← Aventura & Esportes</Link>
        </div>
      </section>
    );
  }

  const fatos = [
    { rotulo: 'Nível', valor: esporte.nivel },
    { rotulo: 'Guia', valor: esporte.guia },
    { rotulo: 'Melhor época', valor: esporte.epoca },
    esporte.duracao ? { rotulo: 'Duração', valor: esporte.duracao } : null,
  ].filter(Boolean);

  const outros = ESPORTES.filter((e) => e.slug !== esporte.slug);
  const temOperadores = esporte.operadores.length > 0;

  return (
    <>
      {/* ── TOPO ── */}
      <section className="av-topo av-topo-detalhe">
        <div className="container">
          <Link to="/aventura" className="av-voltar">← Aventura & Esportes</Link>
          <span className="av-topo-icone">{esporte.icone}</span>
          <h1>{esporte.nome}</h1>
          <p>{esporte.resumo}</p>
        </div>
      </section>

      {/* ── INFORMAÇÕES RÁPIDAS ── */}
      <section className="av-fatos">
        <div className="container av-fatos-grid">
          {fatos.map((f) => (
            <div className="av-fato" key={f.rotulo}>
              <span>{f.rotulo}</span>
              <strong>{f.valor}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE + FOTO ── */}
      <section className="av-sobre">
        <div className="container av-sobre-grid">
          <div className="av-sobre-texto">
            <span className="label">Sobre a atividade</span>
            <h2>Como é {esporte.nome}</h2>
            {esporte.sobre.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {esporte.relacionado && (
              <Link to={esporte.relacionado.rota} className="av-link-relacionado">
                {esporte.relacionado.texto} →
              </Link>
            )}
          </div>
          <div className="av-sobre-foto">
            <img src={esporte.foto} alt={esporte.nome} />
          </div>
        </div>
      </section>

      {/* ── DESTAQUES ── */}
      <section className="av-destaques">
        <div className="container">
          <div className="av-destaques-grid">
            {esporte.destaques.map((d) => (
              <div className="av-destaque" key={d.titulo}>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUIDADOS ── */}
      <section className="av-cuidados">
        <div className="container av-seguranca-grid">
          <div>
            <span className="label">Antes de ir</span>
            <h2>O que você precisa saber</h2>
          </div>
          <ul>
            {esporte.cuidados.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── QUEM OFERECE / RESERVAR ── */}
      <section className="av-reservar">
        <div className="container">
          <div className="section-header">
            <span className="label">Como fazer</span>
            <h2>{temOperadores ? 'Quem oferece' : 'Quer fazer? Fale com a gente'}</h2>
          </div>

          {temOperadores ? (
            <div className="av-operadores">
              {esporte.operadores.map((op) => (
                <article className="av-operador" key={op.nome}>
                  <h3>{op.nome}</h3>
                  {op.descricao && <p>{op.descricao}</p>}
                  <div className="av-operador-acoes">
                    <a className="av-btn" href={linkWhatsApp(esporte, op)} target="_blank" rel="noreferrer">
                      💬 WhatsApp
                    </a>
                    {op.instagram && (
                      <a className="av-btn secundario" href={op.instagram} target="_blank" rel="noreferrer">
                        📷 Instagram
                      </a>
                    )}
                    {op.mapa && (
                      <a className="av-btn secundario" href={op.mapa} target="_blank" rel="noreferrer">
                        📍 Como chegar
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="av-em-breve">
              <p>
                Estamos reunindo os operadores parceiros desta modalidade. Enquanto isso, chame a
                gente e indicamos quem pode te atender.
              </p>
              <a className="btn-primary" href={linkWhatsApp(esporte)} target="_blank" rel="noreferrer">
                💬 Falar no WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── OUTRAS MODALIDADES ── */}
      <section className="av-outros">
        <div className="container">
          <span className="av-outros-titulo">Outras modalidades</span>
          <div className="av-outros-chips">
            {outros.map((o) => (
              <Link to={`/aventura/${o.slug}`} key={o.slug}>
                {o.icone} {o.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EsporteDetalhe;