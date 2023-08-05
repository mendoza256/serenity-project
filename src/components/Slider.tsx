import { ImageType } from "@/types/baseTypes";
import Image from "next/image";

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
      <div className={`container`}>
        <h2>{headline}</h2>
        {images.map((image, i: number) => {
          return (
            <div key={i} className="slider__image">
              <Image
                src={image.url}
                // TODO add alt text in CMS
                alt=""
                width={image.width}
                height={image.height}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
