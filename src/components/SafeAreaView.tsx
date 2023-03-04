import { useTheme } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView as ReactNativeSafeAreaView } from 'react-native';

type Props = React.ComponentProps<typeof ReactNativeSafeAreaView>;

const SafeAreaView = ({ children, ...props }: Props) => {
    const theme = useTheme();

    return (
        <ReactNativeSafeAreaView
            {...props}
            style={{ backgroundColor: theme['background-basic-color-1'], flex: 1 }}
        >
            {children}
        </ReactNativeSafeAreaView>
    );
};

export default SafeAreaView;
