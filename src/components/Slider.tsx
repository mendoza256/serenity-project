"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImageType } from "@/types/baseTypes";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export type SliderType = {
  headline: string;
  images: ImageType[];
  backgroundColor: string;
};

interface SliderProps {
  data: SliderType;
}

const Slider = ({ data }: SliderProps) => {
  const { headline, images, backgroundColor } = data;
  const bgColorClass = backgroundColor
    ? `bg-${backgroundColor?.toLowerCase()}`
    : "bg-default";

  return (
    <section className={`slider ${bgColorClass}`}>
      <motion.div
        className={`container`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <h2>{headline}</h2>
        <Swiper
          spaceBetween={0}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop
        >
          {images.map((image, i: number) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={image.url}
                  // TODO add alt text in CMS
                  alt=""
                  width={image.width}
                  height={image.height}
                  // layout="fill"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Slider;
