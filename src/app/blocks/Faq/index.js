// src/app/blocks/FAQSection.js
import { useState, useRef, useEffect } from "react";
import faqs from "./faqs";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[
        openIndex
      ].style.height = `${contentRefs.current[openIndex].scrollHeight}px`;
    }
  }, [openIndex]);

  return (
    <section className="py-8 lg:py-32 px-4 bg-gray-100 space-y-12">
      <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl text-center ">
        Perguntas Frequentes
      </h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-3 px-4 text-left text-gray-800 font-semibold"
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                height:
                  openIndex === index
                    ? `${contentRefs.current[index].scrollHeight}px`
                    : "0px",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
              className="px-4 text-gray-600"
              aria-hidden={openIndex !== index}
            >
              <p className="py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
