import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DrawerContent from '../components/DrawerContent';
import HomeNavigator, { HomeStackParamList } from './HomeNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootDrawerParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    Settings: undefined;
    Profile: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<RootDrawerParamList>();

const RootDrawerNavigator = () => {
    return (
        <Navigator
            initialRouteName='Home'
            screenOptions={{ swipeEnabled: false }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Screen name='Home' component={HomeNavigator} />
            <Screen name='Settings' component={SettingsScreen} />
            <Screen name='Profile' component={ProfileScreen} />
        </Navigator>
    );
};

export default RootDrawerNavigator;
