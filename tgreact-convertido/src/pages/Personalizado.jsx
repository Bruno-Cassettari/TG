import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/personalizado.css';

const NUMERO_WHATSAPP = '5512997171694';

const OPCOES_INTERESSE = [
  { valor: 'Cachoeiras', icone: '💧' },
  { valor: 'Trilhas leves', icone: '🥾' },
  { valor: 'Pedra do Baú', icone: '🪨' },
  { valor: 'City Tour', icone: '🚐' },
  { valor: 'Gastronomia local', icone: '🍽️' },
  { valor: 'Cultura e Mirantes', icone: '🏔️' },
  { valor: 'Transfer', icone: '🚗' },
  { valor: 'Outro', icone: '✨' },
];

function formatarData(dataISO) {
  if (!dataISO) return '';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

function Personalizado() {
  const formRef = useRef(null);
  const nomeRef = useRef(null);
  const whatsappRef = useRef(null);
  const emailRef = useRef(null);
  const pessoasRef = useRef(null);
  const dataRef = useRef(null);
  const horarioRef = useRef(null);
  const observacoesRef = useRef(null);

  function enviarPedido(e) {
    e.preventDefault();

    const nome = nomeRef.current.value.trim();
    const whatsapp = whatsappRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const pessoas = pessoasRef.current.value.trim();
    const data = dataRef.current.value;
    const horario = horarioRef.current.value;
    const observacoes = observacoesRef.current.value.trim();

    if (!nome || !whatsapp || !pessoas || !data) {
      alert('Por favor, preencha nome, WhatsApp, número de pessoas e data desejada.');
      return;
    }

    const interesses = Array.from(
      formRef.current.querySelectorAll('input[name="interesse"]:checked')
    ).map((el) => el.value);

    const nivelEl = formRef.current.querySelector('input[name="nivel"]:checked');
    const nivel = nivelEl ? nivelEl.value : 'Não informado';

    const criancasEl = formRef.current.querySelector('input[name="criancas"]:checked');
    const criancas = criancasEl ? criancasEl.value : 'Não informado';

    const dataFormatada = formatarData(data);

    let texto = `*Pedido de Passeio Personalizado*\n\n`;
    texto += `Nome: ${nome}\n`;
    texto += `WhatsApp: ${whatsapp}\n`;
    if (email) texto += `E-mail: ${email}\n`;
    texto += `Nº de pessoas: ${pessoas}\n`;
    texto += `\nInteresses: ${interesses.length ? interesses.join(', ') : 'Não informado'}\n`;
    texto += `Nível de experiência: ${nivel}\n`;
    texto += `\nData desejada: ${dataFormatada}\n`;
    texto += `Horário preferido: ${horario}\n`;
    texto += `Crianças no grupo: ${criancas}\n`;
    if (observacoes) texto += `\nObservações: ${observacoes}`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  }

  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="personalizado-hero">
        <div className="personalizado-hero-bg"></div>
        <div className="personalizado-hero-content">
          <span className="page-breadcrumb">
            <Link to="/">Início</Link> / Passeios Personalizados
          </span>
          <h1>
            Monte Seu Passeio
            <br />
            Personalizado
          </h1>
          <p>
            Conte pra gente o que você procura e receba um roteiro sob medida, com data,
            horário e valores confirmados via WhatsApp.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="como-funciona">
        <div className="container">
          <div className="section-header">
            <span className="label">Simples assim</span>
            <h2>Como Funciona</h2>
          </div>
          <div className="passos-grid">
            <div className="passo-card">
              <span className="passo-numero">01</span>
              <h3>Conte seus interesses</h3>
              <p>Escolha os tipos de passeio, o nível de dificuldade e quantas pessoas vão participar.</p>
            </div>
            <div className="passo-card">
              <span className="passo-numero">02</span>
              <h3>Informe sua disponibilidade</h3>
              <p>Selecione a data e o horário que funcionam melhor para você e seu grupo.</p>
            </div>
            <div className="passo-card">
              <span className="passo-numero">03</span>
              <h3>Receba sua proposta</h3>
              <p>Nossa equipe monta o roteiro ideal e te chama no WhatsApp em até 24h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="personalizar" id="personalizar">
        <div className="container">
          <div className="section-header">
            <span className="label">Roteiro sob medida</span>
            <h2>Vamos Montar Seu Passeio</h2>
          </div>

          <form className="form-card form-card-grande" ref={formRef} onSubmit={enviarPedido}>

            {/* Dados pessoais */}
            <div className="form-secao">
              <h3 className="form-secao-titulo">Seus dados</h3>
              <div className="form-linha">
                <div className="form-group">
                  <label>Seu nome *</label>
                  <input type="text" ref={nomeRef} placeholder="João Silva" required />
                </div>
                <div className="form-group">
                  <label>WhatsApp *</label>
                  <input type="tel" ref={whatsappRef} placeholder="(12) 99999-9999" required />
                </div>
              </div>
              <div className="form-linha">
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" ref={emailRef} placeholder="joao@email.com" />
                </div>
                <div className="form-group">
                  <label>Quantas pessoas? *</label>
                  <input type="number" ref={pessoasRef} min="1" placeholder="Ex: 4" required />
                </div>
              </div>
            </div>

            {/* Tipo de passeio */}
            <div className="form-secao">
              <h3 className="form-secao-titulo">
                O que você quer fazer? <span className="form-secao-sub">(selecione uma ou mais opções)</span>
              </h3>
              <div className="opcoes-grid">
                {OPCOES_INTERESSE.map((opcao) => (
                  <label className="opcao-card" key={opcao.valor}>
                    <input type="checkbox" name="interesse" value={opcao.valor} />
                    <span className="opcao-icone">{opcao.icone}</span>
                    <span className="opcao-texto">{opcao.valor}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nível de experiência */}
            <div className="form-secao">
              <h3 className="form-secao-titulo">Qual o nível de experiência do grupo?</h3>
              <div className="nivel-grid">
                <label className="nivel-card">
                  <input type="radio" name="nivel" value="Fácil / iniciante" />
                  <span>Fácil / iniciante</span>
                </label>
                <label className="nivel-card">
                  <input type="radio" name="nivel" value="Moderado" />
                  <span>Moderado</span>
                </label>
                <label className="nivel-card">
                  <input type="radio" name="nivel" value="Avançado / experiente" />
                  <span>Avançado / experiente</span>
                </label>
              </div>
            </div>

            {/* Disponibilidade */}
            <div className="form-secao">
              <h3 className="form-secao-titulo">Quando você quer ir?</h3>
              <div className="form-linha">
                <div className="form-group">
                  <label>Data desejada *</label>
                  <input type="date" ref={dataRef} required />
                </div>
                <div className="form-group">
                  <label>Horário preferido</label>
                  <select ref={horarioRef} defaultValue="Flexível">
                    <option value="Flexível">Flexível</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Dia inteiro">Dia inteiro</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Há crianças no grupo?</label>
                <div className="nivel-grid nivel-grid-2">
                  <label className="nivel-card">
                    <input type="radio" name="criancas" value="Sim" />
                    <span>Sim</span>
                  </label>
                  <label className="nivel-card">
                    <input type="radio" name="criancas" value="Não" />
                    <span>Não</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Observações */}
            <div className="form-secao">
              <h3 className="form-secao-titulo">Mais alguma informação?</h3>
              <div className="form-group">
                <label>Observações</label>
                <textarea
                  ref={observacoesRef}
                  placeholder="Conte mais sobre o que você procura: restrições alimentares, condição física, ocasião especial, etc."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn-submit">Enviar Meu Pedido</button>
            <p className="form-aviso">
              Ao enviar, você será direcionado ao WhatsApp com todas as informações
              preenchidas.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Personalizado;
