import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import CategoryPill from "../components/categoryPill";

const Settings: React.FC = () => {
  const [categories, setCategories] = useState([
    { name: "Indian Movies", selected: false },
    { name: "Animals", selected: false },
    { name: "Countries", selected: false },
    { name: "Cartoons", selected: false },
    { name: "Weather", selected: false },
    { name: "Sports", selected: false },
  ]);

  const toggleCategorySelection = (changedCategoryIndex: number) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category, i) => {
        return i === changedCategoryIndex
          ? { ...category, selected: !category.selected }
          : category;
      });
    });
  };

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <CategoryPill
          key={index}
          category={category.name}
          selected={category.selected}
          onPress={() => toggleCategorySelection(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
});

export default Settings;
