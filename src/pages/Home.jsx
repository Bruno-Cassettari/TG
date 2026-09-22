import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import capapedra from '../assets/images/capapedra.jpeg';
import capacachu from '../assets/images/capacachu.jpeg';
import cultura from '../assets/images/cultura.webp';
import monjolinho from '../assets/images/monjolinho.jpeg';
import toboga from '../assets/images/toboga.jpeg';
import amores from '../assets/images/amores.jpeg';
import toldi from '../assets/images/toldi.jpg';
import pedrabau from '../assets/images/pedrabau.png';
import '../styles/categorias.css';
import '../styles/novidades.css';
import evento from '../assets/images/evento.png';

const NUMERO_WHATSAPP = '5512987100349';

/* Imagens de placeholder — trocar quando tivermos os eventos/novidades reais */
const NOVIDADES = [
  { tag: 'Novidade', titulo: 'Hub de São Bento no ar', descricao: 'Agora você encontra esporte, natureza, gastronomia e cultura tudo em um só lugar.', imagem: evento },
  { tag: 'Evento', titulo: 'Festival de Inverno se aproxima', descricao: 'Fique de olho na agenda cultural da cidade nos próximos meses.', imagem: cultura },
  { tag: 'Aviso', titulo: 'Condições das trilhas', descricao: 'Confira o clima antes de subir a Pedra do Baú nesta época do ano.', imagem: monjolinho },
];

const CATEGORIAS = [
  { icone: '🍴', titulo: 'Gastronomia', imagem: toldi, rota: '/#contato' },
  { icone: '🏡', titulo: 'Hospedagem', imagem: amores, rota: '/#contato' },
  { icone: '🌿', titulo: 'Natureza & Trilhas', imagem: capacachu, rota: '/cachoeiras' },
  { icone: '⛰️', titulo: 'Pedra do Baú', imagem: capapedra, rota: '/pedra-do-bau' },
  { icone: '🪂', titulo: 'Aventura & Esportes', imagem: toboga, rota: '/#contato' },
  { icone: '🌅', titulo: 'Nascer & Pôr do Sol', imagem: pedrabau, rota: '/#contato' },
  { icone: '🏛️', titulo: 'Cultura & História', imagem: cultura, rota: '/#contato' },
  { icone: '🐎', titulo: 'Passeios a Cavalo', imagem: monjolinho, rota: '/#contato' },
  { icone: '🚐', titulo: 'City Tour', imagem: capapedra, rota: '/passeios' },
  { icone: '🧭', titulo: 'Passeios Personalizados', imagem: capacachu, rota: '/personalizado' },
];

const FAQ_ITENS = [
  {
    pergunta: 'Como faço para reservar?',
    resposta:
      'Entre em contato via WhatsApp ou pelo formulário abaixo. Respondemos em até 24h com opções de roteiro e valores.',
  },
  {
    pergunta: 'Posso personalizar o roteiro?',
    resposta:
      'Sim! Todos os nossos roteiros são adaptáveis. Nos conte seus interesses, tempo disponível e nível de condicionamento físico.',
  },
  {
    pergunta: 'Precisa pagar antecipado?',
    resposta:
      'É necessário um sinal para confirmar a reserva. O restante é pago no dia do passeio, em dinheiro ou PIX.',
  },
  {
    pergunta: 'Os passeios aceitam crianças?',
    resposta:
      'Depende do tipo de passeio. Trilhas leves e cachoeiras de fácil acesso são ideais para a família. Trilhas avançadas têm restrição de idade.',
  },
];

function Home() {
  const [faqAberto, setFaqAberto] = useState(null);
  const [slideAtivo, setSlideAtivo] = useState(0);

  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const whatsappRef = useRef(null);
  const interesseRef = useRef(null);
  const mensagemRef = useRef(null);

  function slideAnterior() {
    setSlideAtivo((atual) => (atual === 0 ? NOVIDADES.length - 1 : atual - 1));
  }

  function proximoSlide() {
    setSlideAtivo((atual) => (atual === NOVIDADES.length - 1 ? 0 : atual + 1));
  }

  // ── TROCA AUTOMÁTICA A CADA 6s ──
  useEffect(() => {
    const intervalo = setInterval(proximoSlide, 6000);
    return () => clearInterval(intervalo);
  }, []);

  function alternarFaq(index) {
    setFaqAberto((atual) => (atual === index ? null : index));
  }

  function enviarMensagemWhatsApp() {
    const nome = nomeRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const whatsapp = whatsappRef.current.value.trim();
    const interesse = interesseRef.current.value;
    const mensagem = mensagemRef.current.value.trim();

    if (!nome || !whatsapp) {
      alert('Por favor, preencha pelo menos nome e WhatsApp.');
      return;
    }

    let texto = `Olá! Meu nome é ${nome}.\n`;
    if (email) texto += `E-mail: ${email}\n`;
    texto += `WhatsApp: ${whatsapp}\n`;
    if (interesse) texto += `Interesse: ${interesse}\n`;
    if (mensagem) texto += `Mensagem: ${mensagem}`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <span className="hero-badge">Serra da Mantiqueira</span>
          <h1>
            Explore São Bento
            <br />
            do Sapucaí
          </h1>
          <p>
            Roteiros personalizados, cachoeiras, trilhas e
            <br />a icônica Pedra do Baú — tudo num só lugar.
          </p>
          <div className="hero-btns">
            <Link to="/#contato" className="btn-primary">Fazer Orçamento</Link>
           <Link to="/#categorias" className="btn-ghost">Ver Categorias</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Rolar</span>
          <div className="scroll-line"></div>
        </div>
      </section>

     

        {/* ── NOVIDADES (CARROSSEL) ── */}
          <section className="novidades">
            <div className="container-largo">
              <div className="carrossel-wrap">
                <div className="carrossel-viewport">
                  {NOVIDADES.map((item, index) => (
                    <div className={`carrossel-slide ${index === slideAtivo ? 'ativo' : ''}`} key={item.titulo}>
                      <img src={item.imagem} alt={item.titulo} />
                      <div className="carrossel-overlay">
                        <span className="carrossel-tag">{item.tag}</span>
                        <h3 className="carrossel-titulo">{item.titulo}</h3>
                        <p className="carrossel-desc">{item.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carrossel-seta esquerda" aria-label="Anterior" onClick={slideAnterior}>‹</button>
                <button className="carrossel-seta direita" aria-label="Próximo" onClick={proximoSlide}>›</button>
                <div className="carrossel-dots">
                  {NOVIDADES.map((item, index) => (
                    <button
                      key={item.titulo}
                      className={`carrossel-dot ${index === slideAtivo ? 'ativo' : ''}`}
                      aria-label={`Ir para slide ${index + 1}`}
                      onClick={() => setSlideAtivo(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </section>

     {/* ── SOBRE ── */}
    <section className="quem-somos">              
      <div className="container">
          <div className="sobre-grid">
            <div className="sobre-texto">
              <span className="label">Quem somos</span>
              <h2>Apaixonados por São Bento do Sapucaí</h2>
              <p>
                Somos um portal turístico dedicado a conectar visitantes com tudo que a
                cidade tem de melhor — das cachoeiras cristalinas às trilhas da Pedra do
                Baú. Oferecemos roteiros personalizados, indicações de gastronomia local
                e contato direto com os melhores guias da região.
              </p>
            </div>
            <div className="sobre-numeros">
              <div className="numero-card">
                <strong>15+</strong>
                <span>Destinos mapeados</span>
              </div>
              <div className="numero-card">
                <strong>8+</strong>
                <span>Guias parceiros</span>
              </div>
              <div className="numero-card">
                <strong>100%</strong>
                <span>Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* ── CATEGORIAS (HUB) ── */}
        <section className="categorias" id="categorias">
          <div className="container">
            <div className="section-header">
              <span className="label">O hub de São Bento</span>
              <h2>Tudo o que a cidade oferece, por categoria</h2>
            </div>
            <p className="categorias-intro">
              Reunimos esporte, natureza, gastronomia, hospedagem e cultura em um só lugar.
              Escolha uma categoria e fale com quem oferece o serviço.
            </p>
            <div className="categorias-grid">
              {CATEGORIAS.map((cat) => (
                <Link to={cat.rota} className="categoria-card" key={cat.titulo}>
                  <img src={cat.imagem} alt={cat.titulo} />
                  <div className="categoria-info">
                    <span className="categoria-icone">{cat.icone}</span>
                    <h3>{cat.titulo}</h3>
                  </div>
                  <div className="categoria-hover">Saiba mais →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>     

      {/* ── FAQ ── */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="label">Tire suas dúvidas</span>
            <h2>Perguntas Frequentes</h2>
          </div>
          <div className="faq-lista">
            {FAQ_ITENS.map((item, index) => (
              <div className={`faq-item ${faqAberto === index ? 'aberto' : ''}`} key={item.pergunta}>
                <button className="faq-pergunta" onClick={() => alternarFaq(index)}>
                  {item.pergunta}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-resposta">
                  <p>{item.resposta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section className="contato" id="contato">
        <div className="container">
          <div className="contato-grid">
            <div className="contato-texto">
              <span className="label label-light">Fale conosco</span>
              <h2>Pronto para sua aventura?</h2>
              <p>
                Preencha o formulário e montamos o roteiro ideal para você. Atendimento
                rápido e personalizado.
              </p>
              <div className="contato-infos">
                <div className="contato-info-item">
                  <span className="info-icon">📍</span>
                  <span>São Bento do Sapucaí – SP</span>
                </div>
                <div className="contato-info-item">
                  <span className="info-icon">💬</span>
                  <span>Atendimento via WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="contato-form-wrap">
              <div className="form-card">
                <div className="form-group">
                  <label>Seu nome</label>
                  <input type="text" ref={nomeRef} placeholder="João Silva" />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" ref={emailRef} placeholder="joao@email.com" />
                </div>
                <div className="form-group">
                  <label>WhatsApp</label>
                  <input type="tel" ref={whatsappRef} placeholder="(12) 99999-9999" />
                </div>
                <div className="form-group">
                  <label>Interesse</label>
                  <select ref={interesseRef} defaultValue="">
                    <option value="">Selecione um serviço</option>
                    <option>City Tour</option>
                    <option>Passeio Personalizado</option>
                    <option>Pedra do Baú</option>
                    <option>Cachoeiras</option>
                    <option>Trilhas</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Mensagem</label>
                  <textarea
                    ref={mensagemRef}
                    placeholder="Conte mais sobre o que você procura..."
                  ></textarea>
                </div>
                <button type="button" className="btn-submit" onClick={enviarMensagemWhatsApp}>
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
