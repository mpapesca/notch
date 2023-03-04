import React from 'react';
import { List as UiKittenList, useTheme } from '@ui-kitten/components';

type Props = React.ComponentProps<typeof UiKittenList>;

const List = ({ style, ...props }: Props) => {
    const theme = useTheme();
    return (
        <UiKittenList style={{ backgroundColor: theme['background-basic-color-1'] }} {...props} />
    );
};

export default List;
