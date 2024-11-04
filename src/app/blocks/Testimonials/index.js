import React from 'react'
import Image from 'next/image';


const testimonials = [
    {
        id: 1,
        name: 'Marcio',
        time: '7 anos no Airbnb',
        date: '2 semanas atrás',
        stayDuration: 'Ficou algumas noites',
        rating: 5,
        comment: 'O espaço é excelente. A casa tem uma beleza única e muito aconchegante. Equipado com tudo que é necessário, inclusive a cozinha. A Mariângela foi muito solícita e bastante...',
        image: '/midias/testimonials/marcio.webp',
    },
    {
        id: 2,
        name: 'Ana',
        time: '3 anos no Airbnb',
        date: '1 mês atrás',
        stayDuration: 'Ficou algumas noites',
        rating: 5,
        comment: 'Saímos apaixonados pelo local! A casa é linda, muito confortável e o café da manhã da Juliana é um show a parte. Sem dúvidas voltaremos!',
        image: '/midias/testimonials/julia.webp',
    },
    {
        id: 3,
        name: 'João Felipe',
        time: '5 anos no Airbnb',
        date: '3 semanas atrás',
        stayDuration: 'Ficou algumas noites',
        rating: 5,
        comment: 'O espaço é muito bem pensado e muito bem executado. Bom espaço para descansar e curtir com privacidade. Juliana e Val (funcionários do estabelecimento) garantem um suporte rápido, deixando a estadia melhor ainda. Pretendo retornar assim que possível! O melhor Airbnb que já fiquei na Rota! <3',
        image: '/midias/testimonials/joao-felipe.webp',
    },
];

export default function Testimonials() {
    return (

        <section className="py-32 bg-gray-100 ">
            <div className="max-w-screen-xl mx-auto  px-8  md:px-8  ">
                <div className="block-heading w-full px-4 space-y-3 mt-6 sm:px-0 md:mt-0 grid grid-cols-2 ">
                    <div>
                        <p className="text-indigo-600 font-bold py-2">
                            O que nossos hóspedes dizem
                        </p>
                        <p className=" text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Histórias de experiências memoráveis na Casa Ella e Nina
                        </p>
                    </div>
                    <div>
                        {/* <p className="mt-3 text-gray-600">
                            <span className='lg:block'> Desfrute de um refúgio exclusivo e acolhedor, onde cada detalhe é cuidadosamente pensado para proporcionar conforto e privacidade. </span>
                            Os hóspedes destacam o ambiente encantador, o suporte excepcional da equipe e a experiência memorável que faz todos quererem voltar.
                        </p> */}
                    </div>
                </div>




                <div className=" grid max-w-2xl grid-cols-1  gap-x-12 lg:gap-x-24 gap-y-16 border-t border-gray-200 mt-4 mb-8 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex max-w-xl flex-col items-start justify-between">

                            <div className='p-0 flex  gap-y-0 text-xs flex-col'>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={`Foto de ${testimonial.name}`}
                                        width={50}
                                        height={50}
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            <span className="absolute inset-0" />
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-gray-600">{testimonial.time}</p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-500 mt-2">
                                    <span className="text-yellow-400 ">{'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}</span>
                                    · {testimonial.date}
                                    ·  <span className='text-xs'>{testimonial.stayDuration}</span>
                                </p>
                                <p className="mt-2 text-gray-700 text-sm">{testimonial.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
