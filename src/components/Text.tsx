"use client";
import { sanitize } from "isomorphic-dompurify";
import { assignBackgroundColor } from "../../utils/helpers";
import { motion } from "framer-motion";

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
  const bgColorClass = assignBackgroundColor(backgroundColor);

  const headlineJSX = text ? (
    <h3 className="text-bold uppercase">{headline}</h3>
  ) : (
    <h2 className={text ? "text-bold" : "text-center text-bold"}>{headline}</h2>
  );

  return (
    <section className={`text ${bgColorClass} ${text ? "" : "headline-only"}`}>
      <motion.div
        className={`container`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {headline && headlineJSX}
        {text && <div dangerouslySetInnerHTML={{ __html: sanitize(text) }} />}
      </motion.div>
    </section>
  );
};

export default Text;
