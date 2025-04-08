import { StaticImageData } from "next/image";
import salad from "../../../public/vegan/salad.jpg";
import sandwitch from "../../../public/vegetarian/sandwich_with_cheese.jpg";

enum FOOD_STATE {
  SOLD = "sold",
  AVAILABLE = "available",
}

export enum FOOD_CATEGORIES {
  VEGAN = "vegan",
  VEGETARIAN = "vegetarian",
}

export enum ALERGIES {
  PEANUTS = "peanuts",
  SOY = "soy",
  GLUTEN = "gluten",
}

export type FoodData = {
  id: number;
  name: string;
  link: StaticImageData;
  categories: Array<FOOD_CATEGORIES>;
  alergies: ALERGIES[];
  state?: FOOD_STATE;
};

export const foodData: FoodData[] = [
  {
    id: 0,
    name: "salad",
    state: FOOD_STATE.SOLD,
    link: salad,
    categories: [FOOD_CATEGORIES.VEGAN],
    alergies: [ALERGIES.PEANUTS],
  },
  {
    id: 1,
    name: "sandwich with cheese",
    state: FOOD_STATE.SOLD,
    link: sandwitch,
    categories: [FOOD_CATEGORIES.VEGETARIAN],
    alergies: [ALERGIES.SOY, ALERGIES.GLUTEN],
  },
];
