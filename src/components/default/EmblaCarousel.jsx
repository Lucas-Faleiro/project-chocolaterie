import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [emblaRef] = useEmblaCarousel({
    axis: "y",
    align: "start",
    dragFree: true,
    containScroll: "keepSnaps",
  });

  return (
    <div className="flex gap-4 h-180">
      <div className="w-24 h-full py-2">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className=" flex flex-col">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setImageIndex(index)}
                className={`relative flex-0 flex-shrink-0 w-24 h-24 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  index === imageIndex
                    ? "border-pink-400 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <img
          src={images[imageIndex]}
          alt="chocolate"
          className="w-xl h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
