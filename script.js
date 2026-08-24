function iniciarHeader() {
  // ── HEADER AO ROLAR ──
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── MENU HAMBÚRGUER ──
  const hamburger     = document.getElementById('hamburger');
  const mobileMenu    = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose   = document.getElementById('mobileClose');
  const mobileLinks   = document.querySelectorAll('.mobile-link');

  function abrirMenu() {
    mobileMenu.classList.add('aberto');
    mobileOverlay.classList.add('visivel');
    hamburger.classList.add('ativo');
    document.body.style.overflow = 'hidden';
  }

  function fecharMenu() {
    mobileMenu.classList.remove('aberto');
    mobileOverlay.classList.remove('visivel');
    hamburger.classList.remove('ativo');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', abrirMenu);
  mobileClose.addEventListener('click', fecharMenu);
  mobileOverlay.addEventListener('click', fecharMenu);
  mobileLinks.forEach(link => link.addEventListener('click', fecharMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharMenu();
  });
}

// ── FAQ ACCORDION ──
function iniciarFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const pergunta = item.querySelector('.faq-pergunta');
    pergunta.addEventListener('click', () => {
      const jaAberto = item.classList.contains('aberto');
      faqItems.forEach(i => i.classList.remove('aberto'));
      if (!jaAberto) item.classList.add('aberto');
    });
  });
}

iniciarFaq();

// Aguarda o header carregar antes de iniciar
const aguardarHeader = setInterval(() => {
  if (document.getElementById('header')) {
    clearInterval(aguardarHeader);
    iniciarHeader();
  }
}, 50);


function enviarMensagemWhatsApp() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const interesse = document.getElementById('interesse').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  // validação básica
  if (!nome || !whatsapp) {
    alert('Por favor, preencha pelo menos nome e WhatsApp.');
    return;
  }

  // monta o texto da mensagem
  let texto = `Olá! Meu nome é ${nome}.\n`;
  if (email) texto += `E-mail: ${email}\n`;
  texto += `WhatsApp: ${whatsapp}\n`;
  if (interesse) texto += `Interesse: ${interesse}\n`;
  if (mensagem) texto += `Mensagem: ${mensagem}`;

  // número do WhatsApp da empresa (troque pelo número real, com DDI+DDD)
  const numeroWhatsApp = '5512997171694';

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
}