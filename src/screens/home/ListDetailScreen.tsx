import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Divider, Layout, List, ListItem, Modal, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
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
            <ListItem onPress={() => selectEntry(entry)}>
                <View>
                    <Text category='h2'>{entry.title}</Text>
                    <Text>Details: {entry.details.length}</Text>
                </View>
            </ListItem>
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
            style={{
                height: '80%',
                width: '90%',
            }}
            visible={visible && !!selectedEntry}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}
        >
            <Layout
                style={{
                    flex: 1,
                    padding: 16,
                    borderRadius: 8,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                }}
            >
                <Text style={{ alignSelf: 'center' }} category='h2'>
                    Details
                </Text>
                <List data={selectedEntry?.details ?? []} renderItem={renderDetail} />
                <Button onPress={() => setVisible(false)}>Close</Button>
            </Layout>
        </Modal>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>{list.title}</Text>
                <List
                    style={{ flexDirection: 'column', flex: 1, width: '100%' }}
                    renderItem={renderItem}
                    data={list.entries}
                />
                {modal}
            </Layout>
        </SafeAreaView>
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
