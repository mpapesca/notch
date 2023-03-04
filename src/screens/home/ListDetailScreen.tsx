import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Card, Divider, Layout, ListItem, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ListRenderItem } from 'react-native';
import { List, Modal, Screen } from '../../components';
import { TEntry } from '../../data/entry';
import { HomeStackParamList } from '../../navigators/HomeNavigator';

type ListDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'ListDetail'>;

const ListDetailScreen = ({ route }: ListDetailScreenProps) => {
    const { list } = route.params;

    const [visible, setVisible] = useState<boolean>(false);
    const [selectedEntry, setSelectedEntry] = useState<TEntry>();

    const selectEntry = (entry: TEntry) => {
        setSelectedEntry(entry);
        setVisible(true);
    };

    const renderItem = ({ item: entry }: { item: TEntry }) => {
        return (
            <Card style={{ marginVertical: 8 }} status='primary' onPress={() => selectEntry(entry)}>
                <Text category='h3'>{entry.title}</Text>
            </Card>
        );
    };

    const renderDetail = ({ item: detail }: { item: string }) => {
        return (
            <ListItem>
                <Text>{detail}</Text>
            </ListItem>
        );
    };

    const modal = (
        <Modal
            title='Details'
            visible={visible && !!selectedEntry}
            animationType='slide'
            onCancel={() => setVisible(false)}
            scrollable={false}
        >
            <List
                data={selectedEntry?.details ?? []}
                renderItem={renderDetail as ListRenderItem<unknown>}
            />
        </Modal>
    );

    return (
        <Screen>
            <Text category='h1'>{list.title}</Text>
            <Divider />
            <List
                style={{ flexDirection: 'column', flex: 1, width: '100%' }}
                renderItem={renderItem as ListRenderItem<unknown>}
                data={list.entries}
            />
            {modal}
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '80%',
    },
    backdrop: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
});

export default ListDetailScreen;
