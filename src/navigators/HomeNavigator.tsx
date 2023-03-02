import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListsScreen from '../screens/home/ListsScreen';
import ListDetailScreen from '../screens/home/ListDetailScreen';

export type HomeStackParamList = {
    Lists: undefined;
    ListDetail: {
        title: string;
    };
};

const { Navigator, Screen } = createNativeStackNavigator<HomeStackParamList>();

const RootDrawerNavigator = () => {
    return (
        <Navigator initialRouteName='Lists' screenOptions={{ headerShown: false }}>
            <Screen name='Lists' component={ListsScreen} />
            <Screen name='ListDetail' component={ListDetailScreen} />
        </Navigator>
    );
};

export default RootDrawerNavigator;
