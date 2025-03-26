import React, { useRef } from "react";
import { useRouter } from "expo-router";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Center } from "@/components/ui/center";
import { StyleSheet, Image, Button, Pressable } from "react-native";
import {useTheme}  from "@/context/themeContext";
import PrimaryButton from '@/components/primaryButton';
import SecondaryButton from '@/components/secondaryButton';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView, useBottomSheet } from "@gorhom/bottom-sheet";
import SettingsBottomSheet from "./components/SettingsBottomSheet";

const Index: React.FC = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const bottomSheetRef = useRef<BottomSheet>(null);


  const styles = StyleSheet.create({
    appContainer: {
      backgroundColor: theme.colors.appBackground,
      justifyContent: "center",
      alignItems: "stretch",
      flex: 1,
      paddingHorizontal: 50
    },
    titleImage: {
      height: 200, // Set a fixed height
      width: "100%", // Set width to 100%
      resizeMode: "contain", // Ensure the image fits within its container
    },
    contentContainer: {
      alignItems: "stretch",
      justifyContent: "center"
    },
    buttonsContainer: {
      paddingHorizontal: 30,
      alignItems: "stretch"
    },
  });

  return (
    <Box style={styles.appContainer}>
      <VStack className="gap-6" style={styles.contentContainer}>
        <Image
          source={require("../assets/images/rapid-rush.png")}
          alt="Rapid Rush Logo"
          style={styles.titleImage}
        />
        <VStack className="gap-4" style={styles.buttonsContainer}>
          <PrimaryButton
            onPress={() => router.push('/gameplay')}
            title="PLAY"
          />
          <SecondaryButton
            onPress={() => bottomSheetRef.current?.snapToIndex(1)}
            title="Game Settings"
          />
          <SecondaryButton
            onPress={() => router.push('/instructions')}
            title="Instructions"
          />
        </VStack>
      </VStack>
      <SettingsBottomSheet 
        ref={bottomSheetRef}
        snapPoints={['90%']}>
        </SettingsBottomSheet>
    </Box>
  );
};

const styles = StyleSheet.create({
  outerContainer: {},
});

export default Index;
