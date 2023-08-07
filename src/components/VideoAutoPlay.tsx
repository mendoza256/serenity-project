import React, { useRef, useEffect } from "react";

export default function VideoAutoPlay({ url }: { url: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
    }
  }, [videoRef]);

  return (
    <video ref={videoRef} loop autoPlay muted playsInline>
      <source src={url} type="video/mp4" />
    </video>
  );
}
