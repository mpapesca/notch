import { Text, ListItem, Button, Input, Card } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { ListRenderItem, ScrollView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigators/HomeNavigator';
import { TList } from '../../data/list';
import * as listApi from '../../apis/list-api';
import { List, Modal, Screen } from '../../components';

type ListsScreenProps = NativeStackScreenProps<HomeStackParamList, 'Lists'>;

const ListsScreen = ({ navigation }: ListsScreenProps) => {
    const [lists, setLists] = useState<TList[]>([]);
    const [visible, setVisible] = useState(false);
    const [newList, setNewList] = useState<TList>({ title: '', entries: [] });

    useEffect(() => {
        const retrievedLists = listApi.getLists();
        setLists(retrievedLists);
    }, []);

    const renderItem = ({ item: list }: { item: TList }) => {
        return (
            <Card
                style={{ marginVertical: 8 }}
                status='primary'
                onPress={() =>
                    navigation.navigate('ListDetail', {
                        list,
                    })
                }
            >
                <Text category='h3'>{list.title}</Text>
            </Card>
        );
    };

    const openAddModal = () => {
        setVisible(true);
    };

    const saveNewList = () => {
        const oldLists = JSON.parse(JSON.stringify(lists));
        setNewList({ title: '', entries: [] });
        setLists([...oldLists, newList]);
        setVisible(false);
    };

    const modal = (
        <Modal
            title='Details'
            visible={visible}
            animationType='slide'
            onCancel={() => setVisible(false)}
            onSubmit={() => saveNewList()}
        >
            <Input
                label={`Title`}
                placeholder={`Enter your new list's title...`}
                onChangeText={(title) => setNewList({ ...newList, title })}
                style={{ marginVertical: 8 }}
            />
        </Modal>
    );

    return (
        <Screen>
            <List data={lists} renderItem={renderItem as ListRenderItem<unknown>} />
            <Button onPress={openAddModal} style={{ margin: 8 }}>
                Add
            </Button>
            {modal}
        </Screen>
    );
};

export default ListsScreen;
