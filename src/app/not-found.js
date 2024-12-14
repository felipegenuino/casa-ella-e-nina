export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Página não encontrada
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Opa! Parece que você tentou acessar algo que não existe ou foi movido.
        Volte para a página inicial ou explore outros links no site.
      </p>
      <a
        href="/"
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
