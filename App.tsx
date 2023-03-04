import * as eva from '@eva-design/eva';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import RootDrawerNavigator from './src/navigators/RootNavigator';
import { ThemeContext } from './src/contexts';
import { useState } from 'react';

export default function App() {
    const [themeTitle, setThemeTitle] = useState('light');
    const [theme, setTheme] = useState(eva.light);
    const [navTheme, setNavTheme] = useState(DefaultTheme);

    const toggleTheme = () => {
        console.log('toggle theme');
        const [nextTheme, nextThemeTitle, nextNavTheme] =
            themeTitle === 'light'
                ? [eva.dark, 'dark', DarkTheme]
                : [eva.light, 'light', DefaultTheme];
        setThemeTitle(nextThemeTitle);
        setTheme(nextTheme);
        setNavTheme(nextNavTheme);
    };

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ApplicationProvider {...eva} theme={theme}>
                    <NavigationContainer theme={navTheme}>
                        <RootDrawerNavigator />
                    </NavigationContainer>
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    );
}
