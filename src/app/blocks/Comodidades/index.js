import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Cross1Icon } from "@radix-ui/react-icons";
import { ArrowSquareOut } from "@phosphor-icons/react";

import ModalWithMotion from "@/app/components/ModalWithMotion";

// src/app/blocks/Comodidades/index.js
import amenities from "./amenities";
import Image from "next/image";

const AmenitiesSection = () => {
  const closeModalButtonRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen && closeModalButtonRef.current) {
      closeModalButtonRef.current.focus();
    }
  }, [isModalOpen]);

  // Filtra e ordena os itens para a lista principal
  const mainAmenities = amenities
    .flatMap((category) =>
      category.items
        .filter((item) => item.priority !== undefined)
        .map((item) => ({ ...item, category: category.category }))
    )
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 10); // Limita a exibição a 10 itens principais

  return (
    <section
      id="comodidades"
      className=" bg-violet-50 overflow-hidden relative border-y border-violet-200"
    >
      <div className="_max-w-screen-xl mx-auto ">
        <div
          className="flex flex-wrap w-full  md:pr-0 
        "
        >
          <div
            className="w-full md:w-3/4 xl:w-3/5 lg:w-3/5 2xl:w-2/4 px-6
          md:px-8 
          lg:pl-8 
          lg:pr-8 
          xl:pl-24  
           xl:pr-10 
          2xl:pl-60
           2xl:pr-12  
          3xl:bg-yellow
          py-12  *:
          lg:py-28  
          mx-auto "
          >
            <div className=" mb-8 border-b-gray-200 border-b pb-8">
              <p className="text-indigo-600 font-light py-2">Comodidades</p>
              <div className="space-y-5">
                <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl">
                O Que Esse Lugar Oferece
                </h2>

                <div className="text-gray-500  lg:max-w-lg ">
                  <p className="xs:mt-3 text-gray-600">
                    Veja algumas das comodidades disponíveis neste local.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 gap-x-12">
              {mainAmenities.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 py-2">
                  <Image
                    src={`/midias/amenities/${item.icon}`}
                    alt=""
                    // className="w-6 h-6 w-6"
                    width={24}
                    height={24}
                  />
                  <div>
                    <p
                      className={`font-medium ${
                        item.unavailable ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                    {item.details && (
                      <p
                        className={`text-sm ${
                          item.unavailable
                            ? "line-through text-gray-400"
                            : "text-gray-500"
                        }`}
                      >
                        {/* {item.details} */}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="mt-6 lg:mt-14 button-primary "
            >
              <span>Mostrar Todas as 55 Comodidades</span>
              <ArrowSquareOut size={24} className="mt-[-4px]" />
            </button>
          </div>
          <div className=" md:w-1/4 lg:w-2/5 xl:w-2/5  2xl:w-2/4 w-full bg-teal-200  visible lg:flex bg-[url('/midias/ambientes/5.jpg')] bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>

      <ModalWithMotion
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Todas as Comodidades"
      >
        {/* Conteúdo do modal */}
        {amenities.map((category, index) => (
          <div key={index} className="mb-4 pb-14">
            <h3 className="font-semibold text-lg mb-2">{category.category}</h3>

            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 py-6 border-b	border-slate-200"
                aria-hidden={item.unavailable ? "true" : "false"}
              >
                <Image
                  src={`/midias/amenities/${item.icon}`}
                  alt=""
                  width={24}
                  height={24}
                  // className="w-6 h-6"
                />
                <div>
                  <p
                    className={`font-medium ${
                      item.unavailable ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                  {item.details && (
                    <p
                      className={`text-sm ${
                        item.unavailable
                          ? "line-through text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* end Conteúdo do modal */}
      </ModalWithMotion>
    </section>
  );
};

export default AmenitiesSection;
