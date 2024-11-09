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
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold">O que esse lugar oferece</h2>
      <p className="text-gray-600">
        Veja algumas das comodidades disponíveis neste local.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                  {item.details}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={openModal}
        className="mt-6 inline-block px-4 py-2 border rounded-lg text-indigo-600 font-medium hover:bg-indigo-50"
      >
        Mostrar todas as comodidades
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center  bg-black/[.06]  p-4"
        overlayClassName="fixed inset-0 bg-black/[.5] z-10"
        contentLabel="Todas as comodidades"
      >
        <div className="rounded-xl overflow-hidden bg-white rounded-lg max-w-3xl w-full relative flex flex-col max-h-[90vh]">
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

          <div className="overflow-y-auto p-6">
            {amenities.map((category, index) => (
              <div key={index} className="mb-4">
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
