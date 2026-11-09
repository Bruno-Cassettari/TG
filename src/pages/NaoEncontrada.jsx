import { Link } from 'react-router-dom';

function NaoEncontrada() {
  return (
    <section style={{ padding: '180px 24px 120px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, marginBottom: 12 }}>
        Página não encontrada
      </h1>
      <p style={{ color: 'var(--cinza-texto)', marginBottom: 24 }}>
        O endereço que você acessou não existe no portal.
      </p>
      <Link to="/" className="btn-primary">← Voltar para a página inicial</Link>
    </section>
  );
}

export default NaoEncontrada;