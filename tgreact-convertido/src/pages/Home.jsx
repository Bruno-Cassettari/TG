import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import capapedra from '../assets/images/capapedra.jpeg';
import capacachu from '../assets/images/capacachu.jpeg';
import cultura from '../assets/images/cultura.webp';

const NUMERO_WHATSAPP = '5512997171694';

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

  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const whatsappRef = useRef(null);
  const interesseRef = useRef(null);
  const mensagemRef = useRef(null);

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
            <Link to="/#destinos" className="btn-ghost">Ver Destinos</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Rolar</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="sobre" id="sobre">
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

      {/* ── SERVIÇOS ── */}
      <section className="servicos" id="servicos">
        <div className="container">
          <div className="section-header">
            <span className="label">O que oferecemos</span>
            <h2>Nossos Serviços</h2>
          </div>
          <div className="servicos-grid">
            <Link to="/passeios">
              <div className="servico-card">
                <div className="servico-img">
                  <img
                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&q=80"
                    alt="City Tour"
                  />
                  <div className="servico-overlay"><span>Saiba mais →</span></div>
                </div>
                <div className="servico-info">
                  <h3>City Tour</h3>
                  <p>
                    Conheça os principais pontos turísticos da cidade com guia
                    especializado e transporte incluso.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/personalizado">
              <div className="servico-card destaque">
                <div className="servico-img">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
                    alt="Passeios Personalizados"
                  />
                  <div className="servico-overlay"><span>Saiba mais →</span></div>
                </div>
                <div className="servico-info">
                  <span className="tag-destaque">Mais popular</span>
                  <h3>Passeios Personalizados</h3>
                  <p>
                    Monte seu roteiro ideal com base nos seus interesses, tempo
                    disponível e nível de experiência.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DESTINOS ── */}
      <section className="destinos" id="destinos">
        <div className="container">
          <div className="section-header">
            <span className="label">Onde ir</span>
            <h2>Conheça os Destinos</h2>
          </div>
          <div className="destinos-grid">
            <div className="destino-card destino-grande">
              <Link to="/pedra-do-bau">
                <img src={capapedra} alt="Pedra do Baú" />
                <div className="destino-info">
                  <span className="destino-tag">Trilha · Alta dificuldade</span>
                  <h3>Pedra do Baú</h3>
                  <p>
                    O cartão postal de São Bento. Vista de 360° no topo da rocha mais
                    famosa da Mantiqueira.
                  </p>
                </div>
              </Link>
            </div>

            <Link to="/cachoeiras" className="destino-card">
              <img src={capacachu} alt="Cachoeiras" />
              <div className="destino-info">
                <span className="destino-tag">Natureza · Fácil acesso</span>
                <h3>Cachoeiras</h3>
                <p>Águas cristalinas e piscinas naturais escondidas na mata.</p>
              </div>
            </Link>

            <div className="destino-card">
              <img src={cultura} alt="Trilhas" />
              <div className="destino-info">
                <span className="destino-tag">Gastronomia • Cultura • Mirantes</span>
                <h3>Onde ir</h3>
                <p>
                  Descubra sabores, lugares especiais e outros encantos de São Bento do
                  Sapucaí.
                </p>
              </div>
            </div>
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
