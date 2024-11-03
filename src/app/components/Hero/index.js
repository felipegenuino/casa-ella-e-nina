import styles from './index.module.css';
import Image from 'next/image'

import { Button } from "@/components/ui/button"

 

import brandPic from '/public/midias/hero/brand-hero-light.svg'
import HighlightsSection from '@/app/components/HighlightsSection';



export default function Hero() {
  return (
    <section className="hero bg-center	bg-top min-h-screen bg-indigo-900 justify-center flex flex-col" >
       
          
          <HighlightsSection /> 
 

 <div className='max-w-7xl px-0 lg:px-8 mx-auto container flex justify-center   h-full flex-1 '>
      <div className='content-center'>  

      <Image
      src={brandPic}
      alt="Picture of the author"
      width={500}  
      height={500}  
    />

    <p>Casa Boutique</p>
    <p>Patacho - Alagoas - Brasil</p>

    <Button> s Click me</Button>

    
      </div>
 </div>
   
 
 
       


    </section>
  );
}