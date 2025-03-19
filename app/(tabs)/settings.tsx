import { Text } from "@/components/ui/text";

import { StyleSheet, TextInput, View } from "react-native";
import React, { useContext } from "react";
import CategoryPill from "../components/categoryPill";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Switch } from "@/components/ui/switch";
import { GameSettingsContext } from "../context/gameSettingsContext";

//TODO: move interface
interface CategorySelection {
  name: string;
  selected: boolean;
}
const Settings: React.FC = () => {
  const {
    playerCount,
    setPlayerCount,
    useAllCategories,
    setUseAllCategories,
    categorySelection,
    setCategorySelection,
  } = useContext(GameSettingsContext);

  const toggleCategorySelection = (changedCategoryIndex: number): void => {
    //TODO: fix type "any"
    setCategorySelection((prevCategories: any) => {
      return prevCategories.map((category: any, i: any) => {
        return i === changedCategoryIndex
          ? {
              ...category,
              selected: !category.selected,
            }
          : category;
      });
    });
  };
  const allCategoriesSwitchHandler = (): void => {
    // TODO: change prevState from any to appropriate type
    setUseAllCategories((prevState: any) => !prevState);
  };

  function playerCountChangeHandler(count: string): void {
    console.log("Count:", count);
    setPlayerCount(count);
  }

  return (
    <VStack style={styles.outerContainer}>
      <HStack style={styles.settingsRowContainer}>
        <Text size="xl">Number of Players</Text>
        <TextInput
          value={playerCount}
          defaultValue="8"
          onChangeText={playerCountChangeHandler}
          keyboardType="number-pad"
          style={styles.playerCountInput}
          className="w-50 h-50 border-3"
          textAlign="center"
        />
      </HStack>
      <Divider></Divider>
      <HStack style={styles.settingsRowContainer}>
        <Text size="xl">All Categories</Text>
        <Switch
          value={useAllCategories}
          // defaultValue={true}
          onToggle={allCategoriesSwitchHandler}
        ></Switch>
      </HStack>
      {!useAllCategories ? (
        <View style={styles.categoriesContainer}>
          {/* TODO: fix "any" */}
          {categorySelection.map((category: any, index) => (
            <CategoryPill
              key={index}
              category={category.name}
              selected={category.selected}
              onPress={() => toggleCategorySelection(index)}
            />
          ))}
        </View>
      ) : null}
    </VStack>
  );
};
const styles = StyleSheet.create({
  playerCountInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 50,
    paddingVertical: 5,
    borderRadius: 8,
  }, //to be removed after gluestack impl
  outerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  headingText: {
    fontWeight: "bold",
  },
  settingsRowContainer: {
    justifyContent: "space-between",
  },
});
export default Settings;
