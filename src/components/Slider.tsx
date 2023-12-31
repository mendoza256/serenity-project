"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImageType } from "@/types/baseTypes";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { assignBackgroundColor } from "../../utils/helpers";

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
  const bgColorClass = assignBackgroundColor(backgroundColor);

  return (
    <section className={`slider ${bgColorClass}`}>
      <motion.div
        className={`container`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
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
              slidesPerView: 4,
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
