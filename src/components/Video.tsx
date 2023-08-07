import { useRef } from "react";

export const InternalVideo = ({ url }: { url: string }) => {
  const options = {
    autoPlay: true,
    muted: true,
    controls: false,
    loop: true,
    src: url,
    playsInline: true,
    preload: "auto",
  };

  const videoJSX = <video {...options} />;

  return <>{videoJSX}</>;
};
