// ══════════════════════════════════
// FORMULÁRIO DE PASSEIO PERSONALIZADO
// Por enquanto, monta a mensagem e envia via WhatsApp.
// Quando o back-end de atendimento estiver pronto, basta
// trocar o conteúdo de "enviarPedido()" para um fetch/POST.
// ══════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formPersonalizado');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    enviarPedido();
  });
});

function enviarPedido() {
  const nome = document.getElementById('nome').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const email = document.getElementById('email').value.trim();
  const pessoas = document.getElementById('pessoas').value.trim();
  const data = document.getElementById('data').value;
  const horario = document.getElementById('horario').value;
  const observacoes = document.getElementById('observacoes').value.trim();

  // Validação básica dos campos obrigatórios
  if (!nome || !whatsapp || !pessoas || !data) {
    alert('Por favor, preencha nome, WhatsApp, número de pessoas e data desejada.');
    return;
  }

  // Interesses selecionados (checkboxes)
  const interesses = Array.from(
    document.querySelectorAll('input[name="interesse"]:checked')
  ).map(el => el.value);

  // Nível de experiência (radio)
  const nivelEl = document.querySelector('input[name="nivel"]:checked');
  const nivel = nivelEl ? nivelEl.value : 'Não informado';

  // Crianças no grupo (radio)
  const criancasEl = document.querySelector('input[name="criancas"]:checked');
  const criancas = criancasEl ? criancasEl.value : 'Não informado';

  // Formata a data para dd/mm/aaaa
  const dataFormatada = formatarData(data);

  // Monta o texto da mensagem
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

  // Número de WhatsApp de quem atende os pedidos (trocar pelo número real)
  const numeroWhatsApp = '5512997171694';

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
}

function formatarData(dataISO) {
  if (!dataISO) return '';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}