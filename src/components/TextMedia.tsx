import { ImageType } from "@/types/baseTypes";
import { sanitize } from "isomorphic-dompurify";
import Image from "next/image";

export type TextMediaType = {
  headline: string;
  text: string | Node;
  image: ImageType;
  backgroundColor: string;
};

interface TextMediaProps {
  data: TextMediaType;
}

const TextMedia = ({ data }: TextMediaProps) => {
  const { headline, text, image, backgroundColor } = data;
  const bgColorClass = backgroundColor
    ? `bg-${backgroundColor?.toLowerCase()}`
    : "bg-default";

  return (
    <section className={`text-media ${bgColorClass}`}>
      <div className={`container ${bgColorClass}`}>
        <div className="text-media__text">
          <h2>{headline}</h2>
          <p dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
        </div>
        <div className="text-media__media">
          {image.url && (
            <Image
              src={image.url}
              // TODO add alt text in CMS
              alt=""
              width={image.width}
              height={image.height}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TextMedia;
