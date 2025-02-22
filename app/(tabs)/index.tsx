import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.gameTitleContainer}>
      <Text style={styles.gameTitleText}>Rapid Rush</Text>
      <Pressable style={styles.playButton}>
        <Text style={styles.playButtonText}>Play</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
