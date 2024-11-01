"use client";

 // src/app/page.js
import Hero from './components/Hero';



export default function HomePage() {
  return (
    <main className='w-100'> 
      <Hero /> 
    

           


    <section className='know flex bg-primary items-center justify-center min-h-screen bg-teal-100 text-center'> 
            <div className='container max-w-7xl justify-center flex flex-col items-center  '>
                  <div className='w-full justify-center '> 

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Nossas casas boutique oferecem uma experiência 5 estrelas, acomodando até 5 hóspedes em 2 quartos, 2 banheiros e uma piscina privativa. Com um toque elegante e artesão, cada casa é equipada para o máximo conforto. Localizadas na paradisíaca Praia do Patacho, a poucos minutos dos melhores pontos turísticos. Aceitamos pets e nosso café da manhã é incluso. Reserve agora para vivenciar momentos inesquecíveis.</p>

         <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Learn more
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a> 
        </div>

                <div className='w-4xl w-full bg-white/20 rounded-2xl max-w-full lg:px-24 px-4 mt-20 relative' >
                    <iframe class="w-24 min-w-full rounded-2xl aspect-video mx-auto"   src="https://www.youtube.com/embed/93trkmx3Ixo?si=m2L9gqO7Yk4Cj49b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
    </section>



   







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