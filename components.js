function carregarComponente(id, arquivo) {
  fetch(arquivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

carregarComponente('header-componente', 'header.html');
carregarComponente('footer-componente', 'footer.html');