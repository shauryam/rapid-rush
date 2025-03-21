// TODO: convert to Typescript

import React, { createContext, useState } from "react";
import { getAllCategories } from "@/services/dataService";

const GameSettingsContext = createContext({
  //TODO: change to number somehow
  playerCount: "8",
  //TODO: check if the argument needs to be present? Where should be the implementation where using funciton
  setPlayerCount: (count) => {},
  useAllCategories: true,
  setUseAllCategories: (prev) => {},
  categorySelection: [],
  //TODO: check if the argument needs to be present? Where should be the implementation where using funciton
  setCategorySelection: (prev) => {},
});

// TODO: Get rid of default export warning

const GameSettingsProvider = ({ children }) => {
  const [playerCount, setPlayerCount] = useState(8);
  const [useAllCategories, setUseAllCategories] = useState(true);

  const allCategoriesUnselected = getAllCategories().map(({ name }) => ({
    name,
    selected: false,
  }));

  const [categorySelection, setCategorySelection] = useState(
    allCategoriesUnselected
  );

  return (
    <GameSettingsContext.Provider
      value={{
        playerCount,
        setPlayerCount,
        useAllCategories,
        setUseAllCategories,
        categorySelection,
        setCategorySelection,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

export { GameSettingsContext, GameSettingsProvider };
