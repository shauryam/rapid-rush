import { words } from "./staticData";

interface Categories {
  name: string;
}

export const getWord = (): string => {
  return words[Math.floor(Math.random() * words.length)].word;
};

export const getAllCategories = (): Categories[] => {
  const uniqueCategories = new Set();
  words.forEach(({ categories }) => {
    categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });
  return [...uniqueCategories].map((uniqueCategory) => ({
    name: uniqueCategory as string,
  }));
};
