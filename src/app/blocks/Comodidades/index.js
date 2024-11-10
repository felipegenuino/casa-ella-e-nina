import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Cross1Icon } from "@radix-ui/react-icons";

// src/app/blocks/Comodidades/index.js
import amenities from "./amenities";
import Image from "next/image";

const AmenitiesSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModalButtonRef = useRef(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (modalIsOpen && closeModalButtonRef.current) {
      closeModalButtonRef.current.focus();
    }
  }, [modalIsOpen]);

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
    <section className=" bg-teal-50 overflow-hidden relative">
      <div className="_max-w-screen-xl mx-auto ">
        <div className="flex flex-wrap w-full px-4">
          <div className="xl:w-3/5 lg:w-4/5 lg:px-6  xl:px-16  py-12 lg:py-28  mx-auto ">
            <div className="block-heading  mb-8 space-y-3 mt-6  md:mt-0 border-b border-gray-200 pb-8  ">
              <div>
                <p className="text-indigo-600 font-semibold py-2">
                  Comodidades
                </p>
              </div>
              <div className="grid grid-cols-1 items-start space-y-3 ">
                <p className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
                  O que esse lugar oferece
                </p>
                <p className="xs:mt-3 text-gray-600">
                  Veja algumas das comodidades disponíveis neste local.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
              className="mt-6 lg:mt-14 flex gap-2 px-4 py-2 border duration-200 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white 
              hover:from-pink-500 hover:to-purple-500 hover:shadow-xl 
              active:scale-95 active:shadow-sm"
            >
              Mostrar todas as 55 comodidades
            </button>
          </div>
          <div className="xl:w-2/5 lg:w-1/5   bg-teal-200 hidden lg:flex bg-[url('/midias/ambientes/5.jpg')] bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center  bg-black/[.06]  p-4"
        overlayClassName="fixed inset-0 bg-black/[.5] z-10"
        contentLabel="Todas as comodidades"
      >
        <div className="rounded-xl overflow-hidden bg-white max-w-3xl w-full relative flex flex-col max-h-[90vh]">
          <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Todas as comodidades</h2>
            <button
              onClick={closeModal}
              ref={closeModalButtonRef}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Fechar modal"
            >
              <Cross1Icon />
            </button>
          </header>

          <div className="overflow-y-auto p-6 pt-12">
            {amenities.map((category, index) => (
              <div key={index} className="mb-4 pb-14">
                <h3 className="font-semibold text-lg mb-2">
                  {category.category}
                </h3>

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
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default AmenitiesSection;
