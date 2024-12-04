import Image from "next/image";

export default function Avaliacao() {
  return (
    <section className="pt-4 lg:pt-16 flex flex-col justify-center">
      <div className="lg:max-w-screen-xl w-full px-6 mx-auto lg:px-0 pb-8">
        <div className="flex items-center space-x-2 text-gray-800">
          ★<span className="text-2xl font-semibold">5,0</span>
          <span className="text-gray-600">· 3 comentários</span>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-7 gap-4 border-t border-gray-300 pt-4">
          {/* Avaliação Geral */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-2 mb-4">
            <h3 className="text-sm font-semibold text-gray-800">
              Avaliação geral
            </h3>
            <div className="space-y-1 mt-1">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <span className="text-xs w-4">{rating}</span>
                  <div className="w-full h-1.5 rounded bg-gray-200">
                    <div
                      className={`h-full ${
                        rating === 5 ? "bg-gray-800" : "bg-gray-300"
                      }`}
                      style={{ width: rating === 5 ? "100%" : "20%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avaliações Individuais */}
          {[
            {
              label: "Limpeza",
              rating: "5,0",
              icon: "/midias/amenities/limpeza.svg",
            },
            {
              label: "Exatidão do anúncio",
              rating: "5,0",
              icon: "/midias/amenities/check.svg",
            },
            {
              label: "Check-in",
              rating: "5,0",
              icon: "/midias/amenities/chaves.svg",
            },
            {
              label: "Comunicação",
              rating: "5,0",
              icon: "/midias/amenities/comunicacao.svg",
            },
            {
              label: "Localização",
              rating: "5,0",
              icon: "/midias/amenities/localizacao.svg",
            },
            {
              label: "Custo-benefício",
              rating: "5,0",
              icon: "/midias/amenities/tag.svg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border-l border-gray-300 px-2 sm:py-6"
            >
              <h4 className="text-sm font-semibold text-gray-800">
                {item.label}
              </h4>
              <span className="text-lg font-medium text-gray-800">
                {item.rating}
              </span>
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                className="mt-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
