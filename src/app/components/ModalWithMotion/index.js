import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ReactModal from "react-modal";
import { Cross1Icon } from "@radix-ui/react-icons";

// Configurando ReactModal
if (typeof window !== "undefined") {
  ReactModal.setAppElement("#__next");
}

export default function ModalWithMotion({
  isOpen,
  onRequestClose,
  title,
  children,
  footerContent, // Novo prop para permitir footer customizado, se necessário
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      overlayClassName="fixed inset-0 bg-slate-900/90 z-10 flex items-center justify-center"
      className="relative z-20 max-w-3xl w-full mx-6 bg-white rounded-lg shadow-lg flex flex-col"
      contentLabel={title || "Modal"}
    >
      {/* Adicionando transições com framer-motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative flex flex-col max-h-[90vh] "
      >
        {/* Header */}
        <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10 flex justify-between items-center rounded-t-lg ">
          <h2 className="text-2xl font-regular">{title}</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Fechar modal"
          >
            <Cross1Icon />
          </button>
        </header>

        {/* Conteúdo principal */}
        <div className="overflow-y-auto p-6 space-y-6">{children}</div>

        {/* Footer */}
        <footer className="p-4 border-t border-gray-200 text-right">
          {footerContent ? (
            footerContent
          ) : (
            <button
              onClick={onRequestClose}
              className="px-4 py-2  border  duration-200  rounded-full transition-all  text-white   bg-gradient-to-r  from-purple-500 to-pink-500   hover:from-indigo-500 hover:to-indigo-400   active:from-indigo-600 active:to-indigo-600  hover:shadow-xl  active:scale-95  active:shadow-sm"
              aria-label="Fechar modal"
            >
              Fechar
            </button>
          )}
        </footer>
      </motion.div>
    </ReactModal>
  );
}
