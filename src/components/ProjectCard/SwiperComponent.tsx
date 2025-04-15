'use client'
import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('./Project'), {
   ssr: false,
 });
 
 export default SwiperComponent;