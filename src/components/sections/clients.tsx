'use client'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';

import { CLIENTS } from "lib/constants"

SwiperCore.use([Autoplay]);

export const Clients = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start();
    }
  }, [swiper]);

  return (
    <section className="py-16">
      <Swiper
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false
        }}
        allowTouchMove
        slidesPerView={2}
        onSwiper={setSwiper}
        centeredSlides={true}
        className="opacity-50"
      >
        {CLIENTS.map((client, index) => (
          <SwiperSlide key={index} className="text-center font-light">
            {client.logo}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}