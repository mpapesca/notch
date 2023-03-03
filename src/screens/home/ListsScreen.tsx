import {
    Text,
    List,
    ListItem,
    Button,
    Modal,
    Layout,
    Input,
    ButtonGroup,
    Divider,
} from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigators/HomeNavigator';
import { TList } from '../../data/list';
import * as listApi from '../../apis/list-api';

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
            <ListItem
                onPress={() =>
                    navigation.navigate('ListDetail', {
                        list,
                    })
                }
                onLongPress={() => console.log('long press')}
            >
                <Text category='h2'>{list.title}</Text>
            </ListItem>
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
            style={{ width: '90%' }}
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}
        >
            <Layout style={{ flex: 1, padding: 16, borderRadius: 8 }}>
                <Text style={{ alignSelf: 'center' }} category='h2'>
                    Details
                </Text>
                <View style={{ flex: 1, margin: 8 }}>
                    <Input
                        label='Title'
                        placeholder={`Enter your new list's title...`}
                        onChangeText={(title) => setNewList({ ...newList, title })}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        status='danger'
                        appearance='outline'
                        style={{ flex: 1, margin: 8 }}
                        onPress={() => setVisible(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        status='primary'
                        style={{ flex: 1, margin: 8 }}
                        onPress={() => saveNewList()}
                    >
                        Save
                    </Button>
                </View>
            </Layout>
        </Modal>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <List data={lists} renderItem={renderItem} />
            <Button onPress={openAddModal} style={{ margin: 8 }}>
                Add
            </Button>
            {modal}
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
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default ListsScreen;
