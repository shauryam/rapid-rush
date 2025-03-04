import { getWord } from "@/services/dataService";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import PrimaryButton from "./components/primaryButton";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const Gameplay: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(getWord());

  const getNextWord = (): void => {
    const nextWord = getWord();
    setCurrentWord(nextWord);
  };

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
