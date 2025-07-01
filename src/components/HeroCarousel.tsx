'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Define the slide type
interface SlideProps {
  image: string;
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

// Sample slides data
const slides: SlideProps[] = [
  {
    image: '/next.svg', // Placeholder image
    headline: 'Fighting Human Trafficking Together',
    subtitle: 'Join our mission to create a world free from exploitation',
    ctaText: 'Learn More',
    ctaLink: '/mission',
  },
  {
    image: '/next.svg', // Placeholder image
    headline: 'Empowering Through Education',
    subtitle: 'Our scholarship programs help survivors rebuild their lives',
    ctaText: 'Scholarship Programs',
    ctaLink: '/scholarship',
  },
  {
    image: '/next.svg', // Placeholder image
    headline: 'Find Peace at Our Meditation Center',
    subtitle: 'A sanctuary for healing and inner transformation',
    ctaText: 'Visit Center',
    ctaLink: '/meditation-center',
  },
  {
    image: '/next.svg', // Placeholder image
    headline: 'Make a Difference Today',
    subtitle: 'Your support helps us continue our vital work',
    ctaText: 'Donate Now',
    ctaLink: '/donate',
  },
];

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Image with gradient overlay */}
              <div className="absolute inset-0 bg-black/50 z-10" />
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-12">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-clean mb-4 max-w-4xl">
                  {slide.headline}
                </h1>
                <p className="text-lg md:text-xl text-clean mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="bg-accent text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-lg font-medium"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
