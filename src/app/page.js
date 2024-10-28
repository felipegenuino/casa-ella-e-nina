"use client";

 // src/app/page.js
import Hero from './components/Hero';



export default function HomePage() {
  return (
    <main className='w-100'> 
      <Hero /> 
    

    <section className='know flex bg-indigo-400 items-center justify-center min-h-screen bg-teal-100 text-center'> 
            <div className='container max-w-7xl justify-center flex flex-col items-center  '>
                  <div className=' bg-teal-400  w-full'>
                    <h2>Conheça as Casas</h2>  
                    <p>Algum conteúdo sobre momentos especiais</p>
                  </div>
                <div className='max-w-4xl w-full '>
                    <iframe class="w-24 min-w-full aspect-video mx-auto"   src="https://www.youtube.com/embed/93trkmx3Ixo?si=m2L9gqO7Yk4Cj49b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
    </section>

    <section className='moments flex items-center justify-center h-screen'> <h1>Moments</h1> </section>
    <section className='envarioments bg-indigo-300 flex items-center justify-center h-screen'> <h1>Ambientes</h1> </section>
    <section className='comodities flex items-center justify-center h-screen'> <h1>Comodidades</h1> </section>
    <section className='instagram bg-indigo-200  flex items-center justify-center h-screen'> <h1>Instagram</h1> </section>
    <section className='booking bg-indigo-100  flex items-center justify-center h-screen'> <h1>Reserve sua experiencia</h1> </section>

    <footer>
      <h2>footer</h2>
    </footer>

    </main>
  );
}