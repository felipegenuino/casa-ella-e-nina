"use client";

import Ambientes from './blocks/Ambientes';
 // src/app/page.js
import Hero from './blocks/Hero';
import RefugioLuxo from './blocks/RefugioLuxo';



export default function HomePage() {
  return (
    <main className='w-100'> 
      <Hero />  

      <RefugioLuxo />

      <Ambientes />





    <section className='bg-white	 flex items-center justify-center h-screen'> 

      <div className='md:w-[740px]'>
      <h1>Moments s</h1>
        <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Viva essa experiência <span class=" underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> Momentos Especiais</span></h2>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Nossas casas boutique oferecem uma experiência cinco estrelas, com conforto, estilo e exclusividade.</p>
        <p> As casas Ella e Nina estão prontas para receber até 5 hóspedes, com 2 quartos espaçosos, 2 banheiros modernos e uma piscina privativa em cada unidade. Localizadas na paradisíaca Praia do Patacho, as casas são um refúgio de tranquilidade, a poucos minutos dos melhores pontos turísticos de Alagoas.</p>
        <p> Pets são bem-vindos, e o café da manhã, cuidadosamente preparado com produtos locais, está incluso em sua estadia.</p>
            
      </div>  
       </section>








    <section className='envarioments bg-indigo-300 flex items-center justify-center h-screen'>
      
      
      
      
       <h1>Ambientes</h1> 
       
 
 
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1650698678900-3b1aba1baac9?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern building architecture" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div> 
       
       
       
       </section>
    <section className='comodities flex items-center justify-center h-screen'> <h1>Comodidades</h1> </section>
    <section className='instagram bg-indigo-200  flex items-center justify-center h-screen'> <h1>Instagram</h1> </section>
    <section className='booking bg-indigo-100  flex items-center justify-center h-screen'> <h1>Reserve sua experiencia</h1> </section>

    <footer>
      <h2>footer</h2>
    </footer>

    </main>
  );
}