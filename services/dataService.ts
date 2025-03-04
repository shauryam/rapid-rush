import { words } from "./staticData";

export const getWord = (): string => {
  return words[Math.floor(Math.random() * words.length)].word;
};
