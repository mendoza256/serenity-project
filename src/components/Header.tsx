"use client";

import { motion } from "framer-motion";

export type HeaderType = {
  pageTitle: string;
  subline: string;
  headerMedia: {
    url: string;
  };
};

interface HeaderProps {
  data: HeaderType;
}

const Header = ({ data }: HeaderProps) => {
  const { pageTitle, subline, headerMedia } = data;

  return (
    <>
      <section className="header home">
        <motion.div
          className="container content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="p-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          >
            <span>{subline}</span>
            <h1>{pageTitle}</h1>
          </motion.div>
        </motion.div>
        {/* TODO add video loading transition */}
        <div className="video-wrapper">
          {headerMedia?.url && (
            <video autoPlay muted loop src={headerMedia.url}></video>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
