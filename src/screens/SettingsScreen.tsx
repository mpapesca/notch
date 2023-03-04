import { Button, Layout, Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { SafeAreaView } from '../components';
import { ThemeContext } from '../contexts';

const SettingsScreen = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Settings</Text>
                <Button onPress={themeContext.toggleTheme}>Toggle Theme</Button>
            </Layout>
        </SafeAreaView>
    );
};

export default SettingsScreen;
