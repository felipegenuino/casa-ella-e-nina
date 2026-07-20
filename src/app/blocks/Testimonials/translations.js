// Traduções (en/es) dos depoimentos reais. `data.js` é a fonte em PT (original
// dos hóspedes); aqui ficam traduções FIÉIS (sem inventar/embelezar), indexadas
// pelo `id` de cada depoimento. Exibidas com a nota "Traduzido do português".

const reviewTranslations = {
  8: {
    en: [
      "I can confirm what I read in another review: it's truly poetry in the shape of a house! Beautiful, cozy, private and complete.",
      "The moments we lived in this house with my wife were sensational; we'll keep the memories forever with great affection. We stayed 5 days and, if we could, we'd stay for weeks, months… Easy access to the whole Rota dos Milagres. One day we'll be back 💚",
    ],
    es: [
      "Confirmo lo que leí en otra reseña: ¡es una verdadera poesía en forma de casa! Hermosa, acogedora, privada y completa.",
      "Fueron sensacionales los momentos vividos en esta casa junto a mi esposa; nos llevaremos los recuerdos para siempre con mucho cariño. Pasamos 5 días y, si pudiéramos, nos quedaríamos semanas, meses… Fácil acceso a toda la Rota dos Milagres. ¡Algún día volveremos 💚!",
    ],
  },
  9: {
    en: [
      "The house is a dream and definitely exceeded our expectations. Everything in incredibly good taste, plus the pool, which is also a highlight.",
      "I recommend it to everyone! Everything wonderful and amazing. I'd definitely come back.",
    ],
    es: [
      "La casa es un sueño y sin duda superó nuestras expectativas. Todo con un gusto increíble, además de la piscina, que también es un diferencial.",
      "¡Lo recomiendo a todos! Todo maravilloso e increíble. Volvería sin duda.",
    ],
  },
  10: {
    en: [
      "Simply an amazing place! Incredible peace, perfect to rest and disconnect from the world. I already want to come back!",
    ],
    es: [
      "¡Un lugar simplemente increíble! Una paz absoluta, perfecto para descansar y desconectar del mundo. ¡Ya quiero volver!",
    ],
  },
  11: {
    en: [
      "Excellent stay on the Rota dos Milagres, at Praia do Patacho (Porto de Pedras). It was our first time in the region and, after days exploring the area, we concluded that the location and the house were one of the best options we could have found.",
      "The house is spacious, very comfortable for two adults. The care taken with the space is huge and we highly recommend the stay, already hoping for the chance to come back!",
    ],
    es: [
      "Excelente estadía en la Rota dos Milagres, en la Praia do Patacho (Porto de Pedras). Fue nuestra primera vez en la región y, tras días explorando los alrededores, concluimos que la ubicación y la casa fueron una de las mejores opciones que podríamos haber encontrado.",
      "La casa es amplia, muy cómoda para dos adultos. El esmero con el espacio es enorme y recomendamos mucho la estadía, ¡deseando desde ya tener la oportunidad de volver!",
    ],
  },
  12: {
    en: [
      "We really enjoyed the stay. A very cozy and pleasant place, equipped with everything we needed! Very good location.",
    ],
    es: [
      "Nos gustó mucho el alojamiento. Un lugar muy acogedor y agradable, equipado con todo lo que necesitábamos. Muy buena ubicación.",
    ],
  },
  13: {
    en: [
      "The stay was amazing: the house is beautiful, comfortable and very well equipped, easy to find and cozy. In every little detail you can see the care and dedication to welcoming guests.",
      "The breakfast is delicious and well served. We spent wonderful days and, without a doubt, we'll be back!",
    ],
    es: [
      "La estadía fue increíble: la casa es bellísima, cómoda y muy bien equipada, fácil de encontrar y acogedora. En cada detalle se percibe el esmero y la dedicación en recibir bien a los huéspedes.",
      "El desayuno es delicioso y bien servido. Pasamos días maravillosos y, sin duda, ¡volveremos!",
    ],
  },
  14: {
    en: ["The house is very cozy, tidy and comfortable. We recommend it!"],
    es: ["La casa es muy acogedora, ordenada y cómoda. ¡La recomendamos!"],
  },
  15: {
    en: [
      "No words to describe the days at Casa Ella. Great location, close to many beaches of the Milagres Circuit. Beautiful house, lovely garden, well-kept pool, comfortable bed, full kitchen and, above all, exemplary care from the hosts.",
      "Breakfast every day, fresh, with the best of the local cuisine. Thank you for all the attention and I'll definitely be back ❤️",
    ],
    es: [
      "Sin palabras para describir los días en Casa Ella. Ubicación excelente, cerca de muchas playas del Circuito dos Milagres. Casa preciosa, jardín precioso, piscina bien cuidada, cama cómoda, cocina completa y, sobre todo, una atención ejemplar por parte de las anfitrionas.",
      "Desayuno todos los días, fresquito, con lo mejor de la cocina local. Gracias por toda la atención y volveré sin duda ❤️",
    ],
  },
  16: {
    en: [
      "Excellent house, even better than in the photos. Excellent location, close to the best beaches of Milagres. I'll probably come back. Everything clean and organized.",
    ],
    es: [
      "Excelente casa, mejor que en las fotos. Ubicación excelente, cerca de las mejores playas de Milagres. Probablemente volveré. Todo limpio y organizado.",
    ],
  },
  1: {
    en: [
      "The space is charming and even more beautiful and complete than in the photos.",
      "Delicious breakfast made daily by Juliana, with everything you need.",
      "Spacious accommodation, close to one of the most beautiful beaches on the Route (Patacho).",
      "I would absolutely come back!",
    ],
    es: [
      "El espacio es encantador y aún más bonito y completo que en las fotos.",
      "Desayuno delicioso preparado a diario por Juliana, con todo lo necesario.",
      "Alojamiento espacioso y cerca de una de las playas más bellas de la Ruta (Patacho).",
      "¡Volvería con toda seguridad!",
    ],
  },
  2: {
    en: [
      "Very tasteful accommodation, clean and very cozy. With ample, well-ventilated and bright space, a well-equipped kitchen and a pool with water at a great temperature.",
      "There were also 2 hammocks to relax and enjoy the books that were available. The house references Nina Simone and Ella Fitzgerald, helping to create a sophisticated and calm atmosphere, which was exactly what we were looking for.",
      "We'll be back! It was excellent! Oh, and there's also Juliana's breakfast, which was delicious.",
    ],
    es: [
      "Alojamiento de muy buen gusto, limpio y muy acogedor. Con un espacio amplio, bien ventilado e iluminado, cocina bien equipada y piscina con el agua a una temperatura estupenda.",
      "También había 2 hamacas para relajarse y disfrutar de los libros disponibles. La casa hace referencia a Nina Simone y Ella Fitzgerald, ayudando a crear un ambiente sofisticado y tranquilo, que era justo lo que buscábamos.",
      "¡Volveremos! ¡Fue excelente! Ah, y además está el desayuno de Juliana, que era una delicia.",
    ],
  },
  3: {
    en: [
      "The space is excellent. The house has a very unique beauty and is very cozy. Equipped with everything you need, including the kitchen.",
      "Mariângela was very helpful and quite proactive in all our contacts.",
      "We'll certainly be back. An excellent place to rest!",
    ],
    es: [
      "El espacio es excelente. La casa tiene una belleza muy singular y es muy acogedora. Equipada con todo lo necesario, incluida la cocina.",
      "Mariângela fue muy atenta y bastante proactiva en todos nuestros contactos.",
      "Sin duda volveremos. ¡Un lugar excelente para descansar!",
    ],
  },
  4: {
    en: [
      "We left in love with the place! The house is beautiful, very comfortable and Juliana's breakfast is a show of its own. We'll definitely be back!",
    ],
    es: [
      "¡Salimos enamorados del lugar! La casa es preciosa, muy cómoda y el desayuno de Juliana es un espectáculo aparte. ¡Sin duda volveremos!",
    ],
  },
  5: {
    en: [
      "The space is very well thought out and very well executed. A good space to rest and enjoy with privacy. Juliana and Val (the staff) provide quick support, making the stay even better.",
      "I plan to return as soon as possible! The best Airbnb I've ever stayed at on the Route! <3",
    ],
    es: [
      "El espacio está muy bien pensado y muy bien ejecutado. Un buen lugar para descansar y disfrutar con privacidad. Juliana y Val (el personal) garantizan un soporte rápido, haciendo la estadía aún mejor.",
      "¡Pienso volver lo antes posible! ¡El mejor Airbnb en el que me he quedado en la Ruta! <3",
    ],
  },
  6: {
    en: [
      "My stay at Casa Boutique Nina was excellent. The house is beautiful, well decorated, with cozy lighting that's perfect for relaxing. The place is super quiet, surrounded by greenery, with many windows that let in a wonderful breeze. The private pool was always clean, and the privacy of the place made everything even better. We slept really well; the setting is very comfortable.",
      "And the breakfast prepared by Juliana was delicious! She is very attentive, always taking care of every detail. Without a doubt, a perfect place to rest and disconnect. I'll surely want to come back!",
    ],
    es: [
      "Mi estadía en la Casa Boutique Nina fue excelente. La casa es preciosa, bien decorada, con una iluminación acogedora y perfecta para relajarse. El lugar es súper tranquilo, rodeado de verde, con muchas ventanas que dejan entrar una brisa maravillosa. La piscina privada estaba siempre limpia, y la privacidad del lugar lo hizo todo aún mejor. Dormimos muy bien; el ambiente es muy cómodo.",
      "¡Y el desayuno preparado por Juliana fue delicioso! Es muy atenta, siempre cuidando cada detalle. Sin duda, un lugar perfecto para descansar y desconectar. ¡Seguro querré volver!",
    ],
  },
  7: {
    en: ["Great place, I'll probably come back more times."],
    es: ["Excelente lugar, probablemente volveré más veces."],
  },
};

/** Retorna os parágrafos do depoimento no idioma atual (PT = original). */
export function getReviewComment(testimonial, locale) {
  if (locale === "pt") return testimonial.comment;
  const tr = reviewTranslations[testimonial.id];
  return (tr && tr[locale]) || testimonial.comment;
}

export default reviewTranslations;
