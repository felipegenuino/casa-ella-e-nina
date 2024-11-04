import styles from './index.module.css';
import Image from 'next/image'


import { WhatsappLogo, ArrowDown } from "@phosphor-icons/react";



import HighlightsSection from '@/app/blocks/HighlightsSection';



export default function Hero() {
    return (
        <section className="hero bg-center	bg-top min-h-screen  justify-center flex flex-col" >
            <HighlightsSection />

            <section className="py-12">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 pb-8  sm:max-w-lg md:px-0 lg:max-w-xl">
                        <p className="text-indigo-600 font-semibold">
                            Estadias Inesquecível
                        </p>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Viva uma experiência de luxo e conforto na Praia do Patacho
                        </h2>
                        <p>
                            Descubra um refúgio onde o charme e a sofisticação encontram a natureza exuberante. Nossas casas boutique oferecem uma estadia de cinco estrelas, repleta de detalhes pensados para seu conforto. Desfrute de momentos únicos com sua família e amigos, em um ambiente acolhedor e totalmente equipado. Reserve agora e comece a planejar sua experiência memorável.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="javascript:void(0)" className="flex items-center justify-center  py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg md:inline-flex hover:shadow-none">
                                <ArrowDown size={32} />
                                Conheça os Ambientes
                            </a>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                <WhatsappLogo size={32} />
                                Tire dúvidas pelo WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="/midias/hero/img-1.jpg"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-14 px-4 md:px-8 pb-8">
                    <p className="text-center text-sm text-gray-700 font-semibold">Escolha Onde Quer Reservar</p>
                    <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-4">

                        <img className='h-14' src='/midias/brands/airbnb.svg' alt='airbnb' />
                        <img className='h-10 mt-2' src='/midias/brands/booking.svg' alt='booking' />
                    </div>
                </div>
            </section>
        </section>
    );
}