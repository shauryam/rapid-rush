import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const Gameplay: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gameplay loading...</Text>
    </View>
  );
};

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Gameplay;
