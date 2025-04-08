import Image from "next/image";
import { FoodData } from "../_data/data";

type GalleryProps = {
  images: FoodData[];
};

const Gallery = ({ images }: GalleryProps) => {
  const gallery = images.map(async (image: FoodData) => {
    const { id, name, link } = image;
    return (
      <div
        key={id}
        className="m-1 flex justify-center max-w-[200px] sm:max-w-[300px] "
      >
        <Image key={id} src={link} alt={name} width={300} height={200} />
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center max-w-[1400px] self-center">
      {gallery}
    </div>
  );
};

export default Gallery;
