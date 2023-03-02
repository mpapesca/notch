import React from 'react';
import { Avatar, Divider, Text } from '@ui-kitten/components';

const DrawerHeader = () => {
    return (
        <>
            <Avatar source={require('../../assets/icon.png')} size='giant' />
            <Text category='h1'>User Name</Text>
            <Divider />
        </>
    );
};

export default DrawerHeader;
