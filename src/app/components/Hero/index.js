import styles from './index.module.css';
import Image from 'next/image'

import brandPic from '/public/midias/hero/brandLight.png'
import HighlightsSection from '@/app/components/HighlightsSection';


export default function Hero() {
  return (
    <section className={`${styles['section-hero']} container min-h-screen `}>
       

       <HighlightsSection /> 

      <div>
      <Image
      src={brandPic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
      </div>
    </section>
  );
}