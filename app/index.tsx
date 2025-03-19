import React from "react";
import { useRouter } from "expo-router";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { StyleSheet } from "react-native";

const Index: React.FC = () => {
  const router = useRouter();

  return (
    <Box className="bg-purple-500 flex-1 justify-center items-center">
      <Center>
        <VStack className="gap-5">
          <Text className="text-white/85 text-5xl font-bold">Rapid Rush</Text>
          <VStack className="gap-3">
            <Button
              className="bg-yellow-500 rounded-full"
              onPress={() => router.push("/gameplay")}
            >
              <ButtonText className="font-medium text-lg font-semibold text-center">
                Play
              </ButtonText>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-white/70"
            >
              <ButtonText className="font-medium text-lg font-semibold text-center text-white/70">
                Settings
              </ButtonText>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 border-white/70"
            >
              <ButtonText className="font-medium text-lg font-semibold text-center text-white/70">
                Instructions
              </ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  outerContainer: {},
});

export default Index;
