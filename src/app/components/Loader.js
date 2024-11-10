// src/app/components/Loader.js
import Logo from "./Logo"; // Certifique-se de ter o SVG como componente

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-pulse-opacity">
        <Logo className="w-16 h-16 text-indigo-600" />
      </div>
    </div>
  );
}
