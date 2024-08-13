import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { withAuthenticator, Authenticator, useTheme } from '@aws-amplify/ui-react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

import MyAppHeader from './layout/MyAppHeader';
import MyAppFooter from './layout/MyAppFooter';

Amplify.configure(awsExports);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const {
    tokens: { colors },
  } = useTheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const formFields = {
    signIn: {
      username: {
        labelHidden: false,
        placeholder: 'Enter your username here',
        isRequired: true,
        label: 'Username:'
      },
    },
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Authenticator.Provider>
        <Authenticator
          Container={(props) => (
          // reuse default `Container` and apply custom background
            <Authenticator.Container
              {...props}
              style={{ backgroundColor: colors.pink[20] }}
            />
          )}
          Header={MyAppHeader}
          Footer={MyAppFooter}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </Authenticator>  
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default RootLayout
