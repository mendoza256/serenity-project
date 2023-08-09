export const Video = ({
  videoUrl,
  posterUrl,
}: {
  videoUrl: string;
  posterUrl: string;
}) => {
  return (
    <video
      autoPlay
      muted
      controls={false}
      loop
      playsInline
      preload="auto"
      poster={posterUrl}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};
