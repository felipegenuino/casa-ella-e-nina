// components/SkipToContent.js

export default function SkipToContent({ label = "Pular para o conteúdo" }) {
  return (
    <a
      href="#main-content"
      className="sr-only z-[100] focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:block focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
    >
      {label}
    </a>
  );
}
