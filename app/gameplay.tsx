import { getWord } from "@/services/dataService";
import React, { useContext, useState, useRef } from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";
import PrimaryButton from "./components/primaryButton";
import gameSetup from "./helpers/gameSetup";
import { GameSettingsContext } from "@/context/gameSettingsContext";
import { router } from "expo-router";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const Gameplay: React.FC = () => {
  const { playerCount, useAllCategories, categorySelection } =
    useContext(GameSettingsContext);

  console.log("Player count in game:", playerCount);

  // Convert playerCount to a number and handle errors
  const numberOfPlayers = parseInt(playerCount);
  if (isNaN(numberOfPlayers)) {
    console.error("Invalid player count");
    return null; // Render nothing or handle the error appropriately
  }

  // Use useRef to store game constraints persistently
  const gameConstraintsRef = useRef(
    gameSetup({
      playerCount: numberOfPlayers,
      useAllCategories,
      selectedCategories: categorySelection,
    })
  );

  const { randomGameplayTime, eligibleWordIds } = gameConstraintsRef.current;

  console.log("Game Constraints:", { randomGameplayTime, eligibleWordIds });

  const [currentWord, setCurrentWord] = useState(getWord(eligibleWordIds));

  const getNextWord = (): void => {
    const nextWord = getWord(eligibleWordIds);
    setCurrentWord(nextWord);
  };

  // Navigate to the "roundOver" page after the gameplay time ends
  setTimeout(() => {
    router.push("/roundOver");
  }, randomGameplayTime * 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {currentWord.charAt(0).toUpperCase() + currentWord.slice(1)}
      </Text>
      <PrimaryButton text="Next" onPress={getNextWord} />
    </View>
  );
};

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Gameplay;
