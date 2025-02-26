import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { FC } from "react";
import { Link } from "expo-router";

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
  return (
    <View style={styles.gameTitleContainer}>
      <Text style={styles.gameTitleText}>Rapid Rush</Text>
      <Link asChild href="/gameplay">
        <Pressable style={styles.playButton}>
          <Text style={styles.playButtonText}>Play</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Index;
