import { setRequestLocale } from "next-intl/server";
import { FOOD_CATEGORIES, FoodData, foodData } from "../_data/data";
import Gallery from "../components/Gallery";

type CategoryParams = {
  params: Promise<{
    locale: string;
    category: FOOD_CATEGORIES;
  }>;
};

export default async function Category({ params }: CategoryParams) {
  const { locale, category } = await params;

  setRequestLocale(locale);

  const imagesList = foodData.filter((item: FoodData) =>
    item.categories.includes(category)
  );

  if (!imagesList) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center pt-2">
      <Gallery images={imagesList} />
    </div>
  );
}
