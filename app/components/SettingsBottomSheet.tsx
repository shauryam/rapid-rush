import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { headingStyle } from '@/components/ui/heading/styles';
import { HStack } from '@/components/ui/hstack';
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@/components/ui/select';
import { Text } from '@/components/ui/text'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet'
import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ChevronDownIcon } from "@/components/ui/icon"
import { VStack } from '@/components/ui/vstack';
import { Switch } from '@/components/ui/switch';

interface SettingsBottomSheetProps {
    ref: React.RefObject<BottomSheet>;
    snapPoints: Array<string | number>;
}

const SettingsBottomSheet = forwardRef<BottomSheet, SettingsBottomSheetProps>(
    ({ snapPoints }, ref) => {
        return (
            <BottomSheet
                ref={ref}
                index={-1}
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
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5
    },
    categoriesToggle: {
        alignItems: 'center',
        gap: 10
    }
})


export default SettingsBottomSheet