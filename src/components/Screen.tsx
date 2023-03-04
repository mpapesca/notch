import React from 'react';
import { View } from 'react-native';
import SafeAreaView from './SafeAreaView';

type Props = {
    children: JSX.Element[];
};

const Screen = ({ children }: Props) => {
    return (
        <SafeAreaView>
            <View style={{ flex: 1, padding: 16 }}>{children}</View>
        </SafeAreaView>
    );
};

export default Screen;
