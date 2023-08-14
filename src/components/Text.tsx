"use client";
import { sanitize } from "isomorphic-dompurify";
import { assignBackgroundColor } from "../../utils/helpers";
import FadeIn from "./animations/FadeIn";

export type TextType = {
  headline: string;
  text: string | Node;
  backgroundColor: string;
  __typename: "TextModule";
};

interface TextProps {
  data: TextType;
}

const Text = ({ data }: TextProps) => {
  const { headline, text, backgroundColor } = data;
  const bgColorClass = assignBackgroundColor(backgroundColor);

  const headlineJSX = text ? (
    <h3 className="text-bold uppercase">{headline}</h3>
  ) : (
    <h2 className={text ? "text-bold" : "text-center text-bold"}>{headline}</h2>
  );

  return (
    <section className={`text ${bgColorClass} ${text ? "" : "headline-only"}`}>
      <FadeIn>
        {headline && headlineJSX}
        {text && <div dangerouslySetInnerHTML={{ __html: sanitize(text) }} />}
      </FadeIn>
    </section>
  );
};

export default Text;
