import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';

const SettingsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Settings</Text>
            </Layout>
        </SafeAreaView>
    );
};

export default SettingsScreen;
