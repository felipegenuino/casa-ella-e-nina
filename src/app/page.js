// src/app/page.js
import HighlightsSection from './components/HighlightsSection';

export default function HomePage() {
  return (
    <div>
      <section>
        <h1>Casa Boutique Ella e Nina</h1>
        <p>Bem-vindo ao refúgio perfeito na Praia do Patacho, Alagoas.</p>
      </section>
      <HighlightsSection />
      {/* Adicione outras seções, como "Sobre as Casas", "Localização", etc. */}
    </div>
  );
}