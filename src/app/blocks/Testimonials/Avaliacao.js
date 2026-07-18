import Image from "next/image";
import { useTranslations } from "next-intl";

function Laurel({ side }) {
  return (
    <Image
      src={`/midias/reviews/laurel-${side}.webp`}
      alt=""
      aria-hidden="true"
      width={240}
      height={365}
      className="h-16 w-auto lg:h-20"
    />
  );
}

export default function Avaliacao() {
  const t = useTranslations("testimonials");
  return (
    <section id="avaliacoes" className="pt-4 lg:pt-16 flex flex-col justify-center">
      <div className="lg:max-w-screen-xl w-full px-6 mx-auto lg:px-0 pb-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-gray-800">
            <Laurel side="left" />
            <span className="text-6xl lg:text-7xl font-bold leading-none tracking-tight">
              4,95
            </span>
            <Laurel side="right" />
          </div>
          <p className="mt-4 text-xl lg:text-2xl font-semibold text-gray-900">
            {t("preferredHeading")}
          </p>
          <p className="mt-2 max-w-md text-sm text-gray-600">
            {t("preferredDesc")}
          </p>
          <p className="mt-2 text-sm text-gray-500">{t("superhostLine")}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-7 gap-4 border-t border-gray-300 pt-4">
          {/* Avaliação Geral */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-2 mb-4">
            <h3 className="text-sm font-semibold text-gray-800">
              {t("overallRating")}
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
                      style={{
                        width: { 5: "96%", 4: "4%", 3: "1%", 2: "1%", 1: "1%" }[
                          rating
                        ],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avaliações Individuais */}
          {[
            {
              labelKey: "cleanliness",
              rating: "5,0",
              icon: "/midias/amenities/limpeza.svg",
            },
            {
              labelKey: "accuracy",
              rating: "5,0",
              icon: "/midias/amenities/check.svg",
            },
            {
              labelKey: "checkin",
              rating: "5,0",
              icon: "/midias/amenities/chaves.svg",
            },
            {
              labelKey: "communication",
              rating: "5,0",
              icon: "/midias/amenities/comunicacao.svg",
            },
            {
              labelKey: "location",
              rating: "4,9",
              icon: "/midias/amenities/localizacao.svg",
            },
            {
              labelKey: "costBenefit",
              rating: "5,0",
              icon: "/midias/amenities/tag.svg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border-l border-gray-300 px-2 sm:py-6"
            >
              <h4 className="text-sm font-semibold text-gray-800">
                {t(item.labelKey)}
              </h4>
              <span className="text-lg font-medium text-gray-800">
                {item.rating}
              </span>
              <Image
                src={item.icon}
                alt={t(item.labelKey)}
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
