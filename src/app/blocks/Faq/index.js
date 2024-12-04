// src/app/blocks/FAQSection.js
import { useState, useRef, useEffect } from "react";
import faqs from "./faqs";
import { ChevronDown } from "lucide-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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
    <section className="py-32 px-4 bg-gray-100 space-y-12   border-b border-t border-gray-200">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-gray-800 text-3xl font-regular sm:text-4xl _lg:text-center ">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center py-5  text-left text-black font-regular text-lg ${
                openIndex === index ? "active" : ""
              }`}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDownIcon className="text-gray-400" />
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
              className="px-4 text-gray-500"
              aria-hidden={openIndex !== index}
            >
              <p className="pt-0 pb-6 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
