import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


export default function Ambientes() {

  const slides = [
    { image: '/midias/ambientes/1-0.jpg', caption: 'Fachada da casa com a praia ao fundo' },
    { image: '/midias/ambientes/1-1.jpg', caption: 'Vista da piscina privativa ao entardecer' },
    { image: '/midias/ambientes/1-2.jpg', caption: 'Área de estar com detalhes artesanais' },
    { image: '/midias/ambientes/2.jpg', caption: 'Quarto decorado com toque acolhedor' },
     { image: '/midias/ambientes/3.jpg', caption: 'Café da manhã com itens regionais' },
     { image: '/midias/ambientes/4.jpg', caption: 'Fachada da casa com a praia ao fundo' },
    { image: '/midias/ambientes/5.jpg', caption: 'Fachada da casa com a praia ao fundo' },
    { image: '/midias/ambientes/6.jpg', caption: 'Vista da piscina privativa ao entardecer' },
    // { image: '/midias/ambientes/7.jpg', caption: 'Área de estar com detalhes artesanais' },
    { image: '/midias/ambientes/8.jpg', caption: 'Quarto decorado com toque acolhedor' },
    { image: '/midias/ambientes/9.jpg', caption: 'Café da manhã com itens regionais' },
    { image: '/midias/ambientes/10.jpg', caption: 'Fachada da casa com a praia ao fundo' },
    { image: '/midias/ambientes/11.jpg', caption: 'Vista da piscina privativa ao entardecer' },
    { image: '/midias/ambientes/12.jpg', caption: 'Área de estar com detalhes artesanais' },
    { image: '/midias/ambientes/13.jpg', caption: 'Quarto decorado com toque acolhedor' },
    { image: '/midias/ambientes/14.jpg', caption: 'Café da manhã com itens regionais' }, 

    { image: '/midias/ambientes/j-1.jpg', caption: 'Vista da piscina privativa ao entardecer' },
    { image: '/midias/ambientes/j-2.jpg', caption: 'Área de estar com detalhes artesanais' },

    { image: '/midias/ambientes/q-1.jpg', caption: 'Quarto decorado com toque acolhedor' },
    { image: '/midias/ambientes/q-2.jpg', caption: 'Café da manhã com itens regionais' },
    { image: '/midias/ambientes/q-4.jpg', caption: 'Fachada da casa com a praia ao fundo' },
    { image: '/midias/ambientes/q-5.jpg', caption: 'Café da manhã com itens regionais' },

    { image: '/midias/ambientes/s-1.jpg', caption: 'Fachada da casa com a praia ao fundo' },
  ];



 

return (
    <section className="py-24  min-h-screen px-8 lg:text-center flex flex-col justify-center bg-white-0	">
        <div className='    '>
            <h2 className="mb-4  mx-auto max-w-2xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 ">
              <span className='underline underline-offset-3 decoration-4 decoration-blue-400 block  text-2xl pb-2'>Experiência Única</span> 
               Casa Boutique  da Praia do Patacho </h2>
               <p  className='mb-6  mx-auto max-w-2xl xs:text-xs font-normal text-gray-500 lg:text-xl'>Descubra um refúgio exclusivo na paradisíaca Praia do Patacho, onde elegância e conforto se encontram em cada detalhe.</p>
              <p className='mb-6 mx-auto max-w-2xl xs:text-xs font-normal text-gray-800 lg:text-md'> Nossas casas boutique oferecem uma experiência 5 estrelas, com ambientes cuidadosamente planejados para proporcionar momentos inesquecíveis. Desde áreas de lazer privativas até dormitórios com toque artesanal, cada espaço foi projetado para que você se sinta em casa enquanto desfruta das belezas naturais de Alagoas.</p>
        </div>
    
      <div className="mx-auto w-full xxx-max-w-6xl relative" role="region" aria-label="Carrossel de imagens das casas">
        <Swiper 
          spaceBetween={24} 
          slidesPerView={1}  
          grabCursor={true}  
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
            1536: { slidesPerView: 7 },
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 6000, // Define o tempo de espera entre as transições (em milissegundos)
            disableOnInteraction: true, // Continua o autoplay mesmo após interação do usuário
          }}
          modules={[Autoplay]} // Adiciona o módulo de autoplay
          className="rounded-lg overflow-hidden" 
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center relative" aria-hidden={index !== 0}>
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-auto rounded-lg object-cover"
              />
              <p className="mt-2 text-xs text-gray-700">{slide.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev" aria-label="Slide anterior"></button>
        <button className="swiper-button-next" aria-label="Próximo slide"></button>
      </div>
    </section> 

  );
}

