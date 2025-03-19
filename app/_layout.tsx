import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GameSettingsProvider } from "./context/gameSettingsContext";

export default function Layout() {
  return (
    <GluestackUIProvider mode="light">
      <GameSettingsProvider>
        <Stack>
          {/* TODO: remove this when appropriate */}
          {/* <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="gameplay"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="roundOver"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </GameSettingsProvider>
    </GluestackUIProvider>
  );
}
