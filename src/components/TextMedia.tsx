import Image from "next/image";

const TextMedia = () => {
  return (
    <section className="text-media">
      <div className="container">
        <div className="text-media__text">
          <h2>Text Media</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div className="text-media__media">
          <Image
            src="https://picsum.photos/200/300"
            alt="random"
            width={200}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default TextMedia;
