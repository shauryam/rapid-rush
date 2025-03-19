//TODO: move to separate file approriately

import { getAllCategories } from "@/services/dataService";
import { words } from "@/services/staticData";

//TODO: unit test and ask AI for the best way to split the code
interface Settings {
  //TOOD: How to make fields mandatory?
  playerCount: number;
  useAllCategories: boolean;
  //TODO: fix any
  selectedCategories: any;
}

interface GameConstraints {
  randomGameplayTime: number;
  eligibleWordIds: number[];
}

export default function gameSetup(settings: Settings): GameConstraints {
  //TODO: check if error throwing is correct
  if (!settings.playerCount)
    throw new Error("Unable to setup game: Invalid player count");
  const { minTime, maxTime } = timeRangeCalculator(settings.playerCount);
  const randomGameplayTime = getRandomGameplayTime(minTime, maxTime);
  const eligibleWordIds: number[] = getEligibleWordIds(
    settings.useAllCategories,
    settings.selectedCategories
  );

  return {
    randomGameplayTime,
    eligibleWordIds,
  };
}

const timeRangeCalculator = (
  playerCount: number
): {
  minTime: number;
  maxTime: number;
} => {
  return {
    minTime: playerCount * 15,
    maxTime: playerCount * 25,
  };
};

function getRandomGameplayTime(minTime: number, maxTime: number): number {
  // min and max included
  return Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
}

const getEligibleWordIds = (
  useAllCategories: boolean,
  selectedCategories: [object]
): //TODO: check if this the correct way for returning array of number
number[] => {
  if (useAllCategories) {
    const ids = words.map(({ id }) => id);
    console.log("ids", ids);
    return ids;
  } else {
    //TODO: fix any
    const filteredCategories = selectedCategories
      .filter(({ selected }: any) => selected)
      .map(({ name }: any) => name);
    console.log("filteredCategories:", filteredCategories);
    const eligibleIds = words
      .filter(({ categories }) => {
        if (
          categories.some((category) => filteredCategories.includes(category))
        ) {
          return true;
        }
      })
      .map(({ id }) => id);
    console.log("EligibleIds:", eligibleIds);
    return eligibleIds;
  }
};
