import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/primaryButton";
import { useRouter } from "expo-router";

interface Styles {
  gameTitleContainer: ViewStyle;
  gameTitleText: TextStyle;
  playButton: ViewStyle;
  playButtonText: TextStyle;
}

const styles: Styles = StyleSheet.create({
  gameTitleContainer: {
    flex: 1,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  gameTitleText: {
    fontWeight: "bold",
    fontSize: 50,
  },
  playButton: {
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "black",
  },
  playButtonText: {
    color: "white",
  },
});

const Index: FC = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/gameplay");
  };

  return (
    <View style={styles.gameTitleContainer}>
      <Text style={styles.gameTitleText}>Rapid Rush</Text>
      <PrimaryButton text="Play" onPress={handlePress} />
    </View>
  );
};

export default Index;
