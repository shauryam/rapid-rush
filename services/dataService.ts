import { words } from "./staticData";

interface Categories {
  name: string;
}

export const getWord = (eligibleIds: number[]): string => {
  const randomlySelectedId =
    eligibleIds[Math.floor(Math.random() * eligibleIds.length)];
  //TODO: Bad implementation: Fix this
  return words.find(({ id }) => id === randomlySelectedId).word;
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
