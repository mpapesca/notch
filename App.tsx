import * as eva from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';

import RootDrawerNavigator from './src/navigators/RootNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    <RootDrawerNavigator />
                </NavigationContainer>
            </ApplicationProvider>
        </>
    );
}