import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sempre que a rota ou a âncora (#contato, #servicos, etc.) mudar,
// rola suavemente até a seção certa. Sem âncora, volta ao topo.
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
