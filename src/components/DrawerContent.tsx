import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer, Icon, DrawerItem, IndexPath } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import DrawerHeader from './DrawerHeader';

const DrawerContent = ({ navigation, state }: DrawerContentComponentProps) => {
    return (
        <SafeAreaView>
            <Drawer
                header={DrawerHeader}
                selectedIndex={new IndexPath(state.index)}
                onSelect={(index) => {
                    console.log({ index, routeNames: state.routeNames });
                    navigation.navigate(state.routeNames[index.row]);
                }}
            >
                {/* <Icon name='home' /> */}
                <DrawerItem title='Home' accessoryLeft={<Icon name='home' />} />
                <DrawerItem title='Settings' accessoryLeft={<Icon name='settings' />} />
                <DrawerItem title='Profile' accessoryLeft={<Icon name='person' />} />
            </Drawer>
        </SafeAreaView>
    );
};

export default DrawerContent;
