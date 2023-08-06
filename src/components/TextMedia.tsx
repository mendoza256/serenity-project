"use client";

import { ImageType } from "@/types/baseTypes";
import { motion } from "framer-motion";
import { sanitize } from "isomorphic-dompurify";
import Image from "next/image";

export type TextMediaType = {
  headline: string;
  text: string | Node;
  image: ImageType;
  backgroundColor: string;
  textIsLeft: boolean;
};

interface TextMediaProps {
  data: TextMediaType;
}

const TextMedia = ({ data }: TextMediaProps) => {
  const { headline, text, image, backgroundColor, textIsLeft } = data;
  const bgColorClass = backgroundColor
    ? `bg-${backgroundColor?.toLowerCase()}`
    : "bg-default";

  return (
    <section className={`text-media ${bgColorClass}`}>
      <motion.div
        className={`container ${textIsLeft ? "flex-row" : "flex-row-reverse"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-media__text w-half flex-justify-center">
          <h3 className="text-bold">{headline}</h3>
          <p dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
        </div>
        <div className="text-media__media w-half flex-align-center">
          {image.url && (
            <Image
              src={image.url}
              // TODO add alt text in CMS
              alt=""
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default TextMedia;
