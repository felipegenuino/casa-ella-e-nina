import styles from './index.module.css';
import Image from 'next/image'

import brandPic from '/public/midias/hero/brandLight.png'
import HighlightsSection from '@/app/components/HighlightsSection';


export default function Hero() {
  return (
    <section className='hero min-h-screen py-8 bg-slate-400 justify-center flex flex-col'>
       
          
          <HighlightsSection /> 
 

 <div className='max-w-7xl px-0 lg:px-8 mx-auto container flex justify-center border h-full flex-1 '>
      <div className='content-center'>
      <Image
      src={brandPic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
      </div>
 </div>
   
 
 
       


    </section>
  );
}