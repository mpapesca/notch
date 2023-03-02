import { DrawerScreenProps } from '@react-navigation/drawer';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootDrawerParamList } from '../navigators/RootNavigator';

type ProfileScreenProps = DrawerScreenProps<RootDrawerParamList, 'Profile'>;

const ProfileScreen = ({ route, navigation }: ProfileScreenProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Profile</Text>
            </Layout>
        </SafeAreaView>
    );
};

export default ProfileScreen;
