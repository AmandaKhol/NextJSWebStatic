import { defineRouting } from "next-intl/routing";

export enum PagesName {
  main = "/",
  about = "/about",
  vegan = "/vegan",
  vegetarian = "/vegetarian",
  details = "/details",
}

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],

  defaultLocale: "en",
});
