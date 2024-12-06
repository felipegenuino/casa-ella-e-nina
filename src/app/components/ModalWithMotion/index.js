import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactModal from "react-modal";

// Verifica se estamos no cliente e define o App Element corretamente
if (typeof window !== "undefined") {
  ReactModal.setAppElement("#__next");
}

export default function ModalWithMotion({ isOpen, onRequestClose, children }) {
  const [isVisible, setIsVisible] = useState(false); // Controla a visibilidade do conteúdo
  const [isClosing, setIsClosing] = useState(false); // Controla o estado de fechamento

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      setIsVisible(true); // Mostra o modal imediatamente ao abrir
    } else {
      setIsClosing(true); // Inicia a animação de fechamento
      setTimeout(() => {
        setIsClosing(false); // Remove o estado de fechamento
        setIsVisible(false); // Esconde o modal após a animação
        document.body.classList.remove("overflow-hidden");
      }, 0); // Tempo da animação de fechamento
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isVisible}
      onRequestClose={onRequestClose}
      closeTimeoutMS={400}
      overlayClassName="fixed inset-0 z-10 flex items-center justify-center"
      className="relative z-20 max-w-xl w-full mx-6 bg-white rounded-lg shadow-lg"
      contentLabel="Animated Modal"
      shouldCloseOnOverlayClick={!isClosing} // Impede fechar enquanto a animação está ocorrendo
    >
      {/* Overlay com animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen && !isClosing ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-slate-900/90 z-10"
      />

      {/* Modal com animação */}
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{
          opacity: isOpen && !isClosing ? 1 : 1,
          y: isOpen && !isClosing ? 0 : -1000,
        }}
        exit={{ opacity: 0, y: -1000 }}
        transition={{ duration: 0.3 }}
        className="relative z-20"
      >
        {children}
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Fechar modal"
        >
          ×
        </button>
      </motion.div>
    </ReactModal>
  );
}
