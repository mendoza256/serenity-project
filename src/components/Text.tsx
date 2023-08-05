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

  return (
    <section className={`text ${bgColorClass}`}>
      <div className={`container`}>
        <h2>{headline}</h2>
        <p dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
      </div>
    </section>
  );
};

export default Text;
