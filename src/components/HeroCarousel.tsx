'use client';

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
    image: '/images/slider/02.jpg',
    headline: 'Fighting Human Trafficking Together',
    subtitle: 'Join our mission to create a world free from exploitation',
    ctaText: 'Learn More',
    ctaLink: '/mission',
  },
  {
    image: '/images/slider/01.jpg',
    headline: 'Empowering Through Education',
    subtitle: 'Our scholarship programs help survivors rebuild their lives',
    ctaText: 'Scholarship Programs',
    ctaLink: '/scholarship',
  },
  {
    image: '/images/slider/02.jpg',
    headline: 'Find Peace at Our Meditation Center',
    subtitle: 'A sanctuary for healing and inner transformation',
    ctaText: 'Visit Center',
    ctaLink: '/meditation-center',
  },
  {
    image: '/images/slider/01.jpg',
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
              {/* Image with enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/30 z-10" />
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 md:px-12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 max-w-5xl leading-tight text-shadow-lg">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white mb-10 max-w-3xl font-medium leading-relaxed text-shadow-lg">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="bg-accent text-white px-10 py-4 rounded-full hover:bg-accent/90 transition-all duration-300 text-xl font-bold shadow-2xl hover:shadow-accent/40 hover:scale-105 transform"
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
