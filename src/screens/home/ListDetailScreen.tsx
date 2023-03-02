import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeStackParamList } from '../../navigators/HomeNavigator';

type ListDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'ListDetail'>;

const ListDetailScreen = ({ route }: ListDetailScreenProps) => {
    const { title } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>{title}</Text>
            </Layout>
        </SafeAreaView>
    );
};

export default ListDetailScreen;
