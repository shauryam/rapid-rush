import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import CategoryPill from "../components/categoryPill";
import { getAllCategories } from "@/services/dataService";

interface CategorySelection {
  name: string;
  selected: boolean;
}

const Settings: React.FC = () => {
  const allCategories: CategorySelection[] = getAllCategories().map(
    ({ name }) => ({
      name,
      selected: false,
    })
  );

  const [categories, setCategories] =
    useState<CategorySelection[]>(allCategories);

  const toggleCategorySelection = (changedCategoryIndex: number): void => {
    setCategories((prevCategories) => {
      return prevCategories.map((category, i) => {
        return i === changedCategoryIndex
          ? { ...category, selected: !category.selected }
          : category;
      });
    });
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Game Length</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  headingText: {
    fontWeight: "bold",
  },
});

export default Settings;
