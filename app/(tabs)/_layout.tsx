import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Play",
          headerShown: false,
          tabBarIcon: () => <Feather name="play" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="settings-outline" />,
        }}
      />
      <Tabs.Screen
        name="instructions"
        options={{
          title: "Game Instructions",
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="format-list-bulleted" />,
        }}
      />
    </Tabs>
  );
}
