import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GameSettingsProvider } from "@/context/gameSettingsContext";
import { ThemeProvider } from "@/context/themeContext";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider mode="light">
        <ThemeProvider>
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
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
