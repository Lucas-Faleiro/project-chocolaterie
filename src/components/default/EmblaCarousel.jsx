import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    align: "center",
    containScroll: "keepSnaps",
  });

  const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel({
    axis: "y",
    align: "start",
    dragFree: true,
    containScroll: "keepSnaps",
  });

  const onSelect = useCallback(
    (i) => {
      if (!emblaMainApi || !emblaThumbApi) return;

      setImageIndex(i);
      emblaThumbApi.scrollTo(i);
      emblaMainApi.scrollTo(i);
    },
    [emblaMainApi, emblaThumbApi]
  );

  useEffect(() => {
    if (!emblaMainApi || !emblaThumbApi) return;

    emblaMainApi.on("select", () => {
      onSelect(emblaMainApi.selectedScrollSnap());
    });

    emblaMainApi.off("select", onSelect);
  }, [emblaMainApi, emblaThumbApi, onSelect]);

  return (
    <div className="flex gap-4 h-180">
      <div className="w-24 h-full py-2">
        <div className="overflow-hidden" ref={emblaThumbRef}>
          <div className=" flex flex-col">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => onSelect(index)}
                className={`relative flex-0 flex-shrink-0 w-24 h-24 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  index === imageIndex
                    ? "border-thumbnail-border opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  key={imageIndex}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-24 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative shadow-lg overflow-hidden w-120 rounded-2xl">
        <div className="h-full " ref={emblaMainRef}>
          <div className="flex h-full touch-pan-y">
            {images.map((img, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                <img
                  key={imageIndex}
                  src={img}
                  alt={`Chocolate Image ${index}`}
                  className=" h-full w-full object-cover "
                />
              </div>
            ))}
          </div>
        </div>
        {/* <button
          className="absolute text-7xl top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer"
          onClick={prevImage}
        >
          <FaAngleLeft />
        </button>
        <button
          className="absolute text-7xl top-1/2 -translate-y-1/2 text-gray-300 right-0 cursor-pointer "
          onClick={nextImage}
        >
          <FaAngleRight />
        </button> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;
