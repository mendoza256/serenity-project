"use client";
import { sanitize } from "isomorphic-dompurify";

export type TextType = {
  headline: string;
  text: string | Node;
  backgroundColor: string;
};

interface TextProps {
  data: TextType;
}

const Text = ({ data }: TextProps) => {
  const { headline, text, backgroundColor } = data;
  const bgColorClass = backgroundColor
    ? `bg-${backgroundColor?.toLowerCase()}`
    : "bg-default";

  const headlineJSX = text ? (
    <h3 className="text-bold">{headline}</h3>
  ) : (
    <h2 className={text ? "text-bold" : "text-center text-bold"}>{headline}</h2>
  );

  return (
    <section className={`text ${bgColorClass}`}>
      <div className={`container`}>
        {headline && headlineJSX}
        {text && <p dangerouslySetInnerHTML={{ __html: sanitize(text) }} />}
      </div>
    </section>
  );
};

export default Text;
