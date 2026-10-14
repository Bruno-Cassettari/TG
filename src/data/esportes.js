/* ════════════════════════════════════════════════════════
   ESPORTES.JS
   Dados de todas as modalidades de Aventura & Esportes.
   Para adicionar um esporte novo, copie um bloco e ajuste o slug.
   A página /aventura/<slug> é criada automaticamente.

   Os textos foram escritos a partir de materiais de turismo e
   reportagens sobre São Bento do Sapucaí. Onde não há informação
   confirmada, o campo fica vazio ou diz "em breve" — complete com
   dados dos operadores (valores, duração, regras) quando tiver.

   foto:       imagem do card/topo (troque os placeholders pelas fotos reais)
   operadores: lista de quem oferece. Cada item:
               { nome, descricao, whatsapp ('5512999999999'), instagram (link), mapa (link) }
               Vazio [] = a página mostra "operadores em breve" e o botão
               fala com o portal (mediador).
   relacionado: link opcional para outra página do portal.
   ════════════════════════════════════════════════════════ */

import escalada from '../assets/images/escalada.jpg';
import ferrata from '../assets/images/ferrata.jpg';
import rapel from '../assets/images/rapel.jpg';
import voo from '../assets/images/voo.png';
import bike from '../assets/images/bike.jpg';
import indomit from '../assets/images/indomit.jpg';

export const ESPORTES = [
  {
    slug: 'escalada',
    nome: 'Escalada',
    icone: '🧗',
    foto: escalada,
    resumo: 'Mais de 30 vias em um dos polos de escalada mais conhecidos do Brasil.',
    nivel: 'Varia conforme a via',
    guia: 'Recomendado',
    epoca: 'Maio a setembro (período seco)',
    duracao: null,
    sobre: [
      'São Bento do Sapucaí é conhecida como polo de escalada desde os anos 80, e o complexo da Pedra do Baú (Bauzinho, Baú e Ana Chata) concentra a maior parte das vias. Há pelo menos 30 vias, com graus de dificuldade técnica bem diferentes.',
      'Tem opção para quem está começando, acompanhado de guia, e para escaladores experientes que buscam vias mais desafiadoras.',
    ],
    destaques: [
      { titulo: '30+ vias', texto: 'Graus técnicos variados, do mais acessível ao mais exigente.' },
      { titulo: 'Polo desde os anos 80', texto: 'Tradição de montanhismo que ajudou a colocar a cidade no mapa.' },
      { titulo: 'Complexo do Baú', texto: 'Três pedras com paredões diferentes: Bauzinho, Baú e Ana Chata.' },
    ],
    cuidados: [
      'Escale sempre com guia ou operador credenciado se não tiver experiência.',
      'Use equipamento em boas condições e verifique a previsão do tempo antes de sair.',
      'Respeite as regras da unidade de conservação da Pedra do Baú.',
    ],
    relacionado: { texto: 'Veja também a página da Pedra do Baú', rota: '/pedra-do-bau' },
    operadores: [],
  },
  {
    slug: 'via-ferrata',
    nome: 'Via Ferrata',
    icone: '🪜',
    foto: ferrata,
    resumo: 'Suba a Pedra do Baú por degraus de ferro cravados na rocha.',
    nivel: 'Moderado a difícil',
    guia: 'Recomendado',
    epoca: 'Maio a setembro (período seco)',
    duracao: 'Cerca de 4 horas (ida e volta, Baú)',
    sobre: [
      'A via ferrata é uma espécie de escada de grampos de ferro fixados na rocha, que facilita a subida. No Baú, ela é explorada desde a década de 1940, e é uma das formas mais tradicionais de chegar ao topo.',
      'A subida ao topo do Baú tem cerca de 600 grampos (algumas fontes citam 620) e leva em torno de 4 horas, somando ida e volta. A Ana Chata tem dificuldade média, combinando trilha e uma pequena via ferrata.',
    ],
    destaques: [
      { titulo: '~600 grampos', texto: 'Degraus de ferro até o topo da Pedra do Baú.' },
      { titulo: '~4 horas', texto: 'Tempo total aproximado, contando ida e volta.' },
      { titulo: 'Ana Chata', texto: 'Opção de dificuldade média, com trilha e um trecho curto de via ferrata.' },
    ],
    cuidados: [
      'Faça a subida com guia e equipamento de segurança adequado.',
      'Evite dias de chuva: a rocha molhada aumenta o risco.',
      'Leve água, lanche e comece cedo para ter tempo de sobra.',
    ],
    relacionado: { texto: 'Veja também a página da Pedra do Baú', rota: '/pedra-do-bau' },
    operadores: [],
  },
  {
    slug: 'rapel',
    nome: 'Rapel',
    icone: '🧵',
    foto: rapel,
    resumo: 'Descida em corda pelas paredes de rocha da região, com guia especializado.',
    nivel: 'Iniciante a moderado',
    guia: 'Necessário',
    epoca: 'Maio a setembro (período seco)',
    duracao: null,
    sobre: [
      'O rapel é uma das atividades de aventura praticadas com apoio de guias especializados em São Bento do Sapucaí, junto com a escalada e o voo livre.',
      'Mais detalhes sobre locais, duração e valores serão adicionados assim que tivermos os operadores parceiros.',
    ],
    destaques: [
      { titulo: 'Com guia', texto: 'Atividade conduzida por profissionais especializados.' },
      { titulo: 'Rocha e altura', texto: 'Descidas em paredões da região da Pedra do Baú.' },
    ],
    cuidados: [
      'Só pratique com operador credenciado e equipamento certificado.',
      'Informe ao guia qualquer problema de saúde antes da atividade.',
    ],
    relacionado: null,
    operadores: [],
  },
  {
    slug: 'voo-livre',
    nome: 'Voo Livre',
    icone: '🪂',
    foto: voo,
    resumo: 'Parapente e asa-delta em uma das melhores rampas do estado.',
    nivel: 'Depende da modalidade',
    guia: 'Instrutor ou piloto habilitado',
    epoca: 'Período seco, com vento favorável',
    duracao: null,
    sobre: [
      'A rampa de voo livre próxima ao Mirante do Caramuru é considerada uma das melhores do estado para asa-delta e parapente, graças às condições constantes de vento. A região da Pedra do Baú oferece vista privilegiada do vale.',
      'Quem não é piloto precisa voar acompanhado de instrutor habilitado. Consulte a disponibilidade e as condições do dia antes de planejar a viagem.',
    ],
    destaques: [
      { titulo: 'Vento constante', texto: 'Uma das características que fazem da rampa uma das melhores do estado.' },
      { titulo: 'Vista da Pedra do Baú', texto: 'Os voos e a rampa têm vista para a Pedra e o vale.' },
      { titulo: 'Pôr do sol', texto: 'A região da rampa também é procurada para ver o fim de tarde.' },
    ],
    cuidados: [
      'O voo depende do tempo: pode ser remarcado por vento ou chuva.',
      'Voe apenas com piloto ou instrutor habilitado.',
      'Use roupas confortáveis e calçado fechado.',
    ],
    relacionado: { texto: 'Veja também Nascer & Pôr do Sol', rota: '/nascer-por-do-sol' },
    operadores: [],
  },
  {
    slug: 'mountain-bike',
    nome: 'Mountain Bike',
    icone: '🚵',
    foto: bike,
    resumo: 'Trilhas e estradas rurais da serra para pedalar entre montanhas.',
    nivel: 'Varia conforme o roteiro',
    guia: 'Recomendado',
    epoca: 'Período seco',
    duracao: null,
    sobre: [
      'Materiais de turismo da região citam as trilhas para caminhada e mountain bike entre as atividades de São Bento do Sapucaí, com relevo de serra e paisagens da Mantiqueira.',
      'Estamos reunindo informações sobre roteiros e operadores. Em breve, esta página terá os percursos e quem oferece o passeio.',
    ],
    destaques: [
      { titulo: 'Relevo de serra', texto: 'Subidas e descidas em meio às montanhas da Mantiqueira.' },
      { titulo: 'Melhor no seco', texto: 'O período seco costuma ser o mais indicado para pedalar.' },
    ],
    cuidados: [
      'Leve capacete, água e kit de reparo.',
      'Evite trilhas em dias de chuva forte.',
    ],
    relacionado: null,
    operadores: [],
  },
  {
    slug: 'trail-running',
    nome: 'Trail Running & Eventos',
    icone: '🏃',
    foto: indomit,
    resumo: 'Provas de corrida de montanha e festivais ao pé da Pedra do Baú.',
    nivel: 'Varia conforme a prova',
    guia: 'Não se aplica',
    epoca: 'Março (Indomit) e maio (Mountain Festival)',
    duracao: null,
    sobre: [
      'São Bento recebe provas de corrida de montanha e eventos de esportes ao ar livre. A Indomit Pedra do Baú, ultra trail, costuma acontecer em março; em 2026 teve um percurso de 12 km, e edições anteriores tiveram percursos de cerca de 35 km.',
      'O Mountain Festival, que aconteceu de 22 a 24 de maio de 2026 (6ª edição), reúne natureza, cultura e esportes. A entrada é gratuita, mas as provas de trail running e as clínicas esportivas exigem inscrição paga. Há também o Desafio Hike & Fly.',
      'As datas mudam a cada ano: confirme a próxima edição nos canais oficiais dos eventos.',
    ],
    destaques: [
      { titulo: 'Indomit Pedra do Baú', texto: 'Ultra trail em março, nas trilhas da Pedra do Baú.' },
      { titulo: 'Mountain Festival', texto: 'Festival de montanha em maio, com entrada gratuita.' },
      { titulo: 'Hike & Fly', texto: 'Desafio que combina caminhada e voo, dentro do festival.' },
    ],
    cuidados: [
      'Provas e clínicas têm inscrição paga e vagas limitadas: inscreva-se com antecedência.',
      'Confirme datas e regulamento nos canais oficiais antes de viajar.',
    ],
    relacionado: null,
    operadores: [],
  },
];

export function buscarEsporte(slug) {
  return ESPORTES.find((e) => e.slug === slug);
}