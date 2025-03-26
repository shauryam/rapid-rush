import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import React, { forwardRef, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Switch } from '@/components/ui/switch';
import { CircleMinus, CirclePlus } from 'lucide-react-native';
import { useTheme } from '@/context/themeContext';
import { GameSettingsContext } from '@/context/gameSettingsContext';

interface SettingsBottomSheetProps {
    ref: React.RefObject<BottomSheet>;
    snapPoints: Array<string | number>;
}

const SettingsBottomSheet = forwardRef<BottomSheet, SettingsBottomSheetProps>(
    ({ snapPoints }, ref) => {

        const { playerCount: currentPlayerCount } = useContext(GameSettingsContext)
        const [playerCount, setPlayerCount] = useState(currentPlayerCount)
        const { theme } = useTheme()
        
        const styles = StyleSheet.create({
            bottomSheet: {
                paddingVertical: 15,
                paddingHorizontal: 20
            },
            headingStyle: {
                marginBottom: 20
            },
            settingsContainer: {
                gap: 20
            },
            settingRow:  {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 5
            },
            playerCountChangeContainer: {
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'rgba(0, 0, 0, 0.5)',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 8,
                gap: 20,
            },
            playerCountChangeIcons: {
                color: theme.colors.appBackground
            },
            playerCountNumber: {
                width: 20,
                textAlign: 'center'
            },
            categoriesToggle: {
                alignItems: 'center',
                gap: 10
            }
        })

        return (
            <BottomSheet
                enablePanDownToClose
                ref={ref}
                index={-1}
                onChange={(changedSnapIndex) => {
                    if(changedSnapIndex === -1) {
                        setPlayerCount(currentPlayerCount);
                    }
                }}
                snapPoints={snapPoints}
                handleComponent={() => <></>}
                backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
            >
                <BottomSheetView style={[styles.bottomSheet]}>
                    <VStack>
                        <Center>
                            <Heading style={[styles.headingStyle]}>Game Settings</Heading>
                        </Center>
                        <VStack style={[styles.settingsContainer]}>
                            <HStack style={[styles.settingRow]}>
                                <Text size='xl'>Player Count</Text>
                                <View
                                    style={styles.playerCountChangeContainer}
                                >
                                    <CircleMinus color={theme.colors.primaryColor} onPress={() => setPlayerCount(playerCount - 1)}/>
                                        <Text size="lg" style={styles.playerCountNumber}>{playerCount}</Text>
                                    <CirclePlus color={theme.colors.primaryColor} onPress={() => setPlayerCount(playerCount + 1)}/>
                                </View>
                                
                            </HStack>
                            <HStack style={[styles.settingRow]}>
                                <Text size='xl'>Categories</Text>
                                <HStack style={[styles.categoriesToggle]}>
                                    <Text size='lg'>All</Text>
                                    <Switch 
                                        size='md'
                                    />
                                </HStack>
                            </HStack>
                        </VStack>
                    </VStack>
                </BottomSheetView>
            </BottomSheet>
        );
    }
);




export default SettingsBottomSheet