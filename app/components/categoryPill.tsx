import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";

interface CategoryPillProps {
  category: string;
  selected: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

interface Styles {
  button: ViewStyle;
  selectedText: TextStyle;
  unselectedText: TextStyle;
  unselectedButton: ViewStyle;
  selectedButton: ViewStyle;
}

const CategoryPill: React.FC<CategoryPillProps> = ({
  category,
  selected,
  onPress,
}) => {
  return (
    <View>
      <Pressable
        style={[
          styles.button,
          selected ? styles.selectedButton : styles.unselectedButton,
        ]}
        onPress={onPress}
      >
        <Text style={[selected ? styles.selectedText : styles.unselectedText]}>
          {category}
        </Text>
      </Pressable>
    </View>
  );
};

const styles: Styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
  },
  unselectedText: {
    color: "black",
  },
  selectedText: {
    color: "white",
  },
  unselectedButton: {
    backgroundColor: "white",
  },
  selectedButton: {
    backgroundColor: "black",
  },
});

export default CategoryPill;
