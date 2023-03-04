import React, { useEffect, useState } from 'react';
import {
    LayoutChangeEvent,
    Modal as ReactNativeModal,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { Button, Text, useTheme } from '@ui-kitten/components';
import SafeAreaView from './SafeAreaView';

type ModalProps = {
    title: string;
    onSubmit?: Function;
    onCancel: Function;
    scrollable?: boolean;
} & React.ComponentProps<typeof ReactNativeModal>;

const Modal = ({
    children,
    title,
    onSubmit,
    onCancel,
    scrollable = true,
    ...props
}: ModalProps) => {
    const [containerHeight, setContainerHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);

    const theme = useTheme();

    const handleSubmit = () => {
        onSubmit?.();
    };

    const handleCancel = () => {
        onCancel();
    };

    useEffect(() => {
        handleScrollability();
    }, [containerHeight, contentHeight]);

    const updateContentHeight = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
        setContentHeight(layout.height);
    };
    const updateContainerHeight = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
        setContainerHeight(layout.height);
    };

    const handleScrollability = () => {
        if (contentHeight > containerHeight && !isScrollable) {
            setIsScrollable(true);
        } else if (isScrollable) {
            setIsScrollable(false);
        }
    };

    const content = scrollable ? (
        <ScrollView
            style={styles.content}
            scrollEnabled={isScrollable}
            onLayout={updateContainerHeight}
        >
            <View onLayout={updateContentHeight}>{children}</View>
        </ScrollView>
    ) : (
        <View style={styles.content}>{children}</View>
    );

    return (
        <ReactNativeModal {...props}>
            <SafeAreaView
                style={{
                    ...styles.safeAreaView,
                }}
            >
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: theme['background-basic-color-1'],
                    }}
                >
                    <Text style={{ alignSelf: 'center' }} category='h2'>
                        {title}
                    </Text>
                    {content}
                    <View style={{ flexDirection: 'row' }}>
                        <Button
                            status='danger'
                            appearance='outline'
                            style={styles.button}
                            onPress={handleCancel}
                        >
                            Cancel
                        </Button>
                        {onSubmit && (
                            <Button status='primary' style={styles.button} onPress={handleSubmit}>
                                Submit
                            </Button>
                        )}
                    </View>
                </View>
            </SafeAreaView>
        </ReactNativeModal>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    content: {
        flex: 1,
    },
    button: { flex: 1, margin: 8 },
});

export default Modal;
