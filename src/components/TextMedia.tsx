"use client";

import { ImageType } from "@/types/baseTypes";
import { sanitize } from "isomorphic-dompurify";
import Image from "next/image";
import { assignBackgroundColor } from "../../utils/helpers";
import FadeIn from "./animations/FadeIn";

export type TextMediaType = {
  headline: string;
  text: string | Node;
  image: ImageType;
  backgroundColor: string;
  textIsLeft: boolean;
  __typename: "TextMediaModule";
};

interface TextMediaProps {
  data: TextMediaType;
}

const TextMedia = ({ data }: TextMediaProps) => {
  const { headline, text, image, backgroundColor, textIsLeft } = data;
  const bgColorClass = assignBackgroundColor(backgroundColor);

  return (
    <section className={`text-media ${bgColorClass}`}>
      <FadeIn className={`${textIsLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className="text-media__text w-half flex-justify-center">
          <h3 className="text-bold">{headline}</h3>
          {text && (
            <div
              className="content flex-column"
              dangerouslySetInnerHTML={{ __html: sanitize(text) }}
            />
          )}
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
      </FadeIn>
    </section>
  );
};

export default TextMedia;
