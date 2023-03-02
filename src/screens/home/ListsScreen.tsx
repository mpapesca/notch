import { Text, List, ListItem } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigators/HomeNavigator';

type TList = {
    title: string;
};

type ListsScreenProps = NativeStackScreenProps<HomeStackParamList, 'Lists'>;

const ListsScreen = ({ navigation }: ListsScreenProps) => {
    const lists: TList[] = [
        {
            title: 'List 1',
        },
        {
            title: 'List 2',
        },
        {
            title: 'List 3',
        },
        {
            title: 'List 4',
        },
        {
            title: 'List 5',
        },
    ];

    const renderItem = ({ item }: { item: TList }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('ListDetail', {
                        title: item.title,
                    })
                }
                onLongPress={() => console.log('long press')}
            >
                <Text category='h2'>{item.title}</Text>
            </ListItem>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <List data={lists} renderItem={renderItem} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    listItem: {
        fontSize: 32,
    },
    container: {
        maxHeight: 180,
    },
});

export default ListsScreen;
