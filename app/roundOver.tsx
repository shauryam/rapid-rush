import { Text } from "@/components/ui/text";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function roundOver() {
  return (
    <View style={styles.container}>
      <Text>Boom! Which team it blast on?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
});
