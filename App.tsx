import { StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Roboto_400Regular, Roboto_700Bold,useFonts} from '@expo-google-fonts/roboto';

import {defaultTheme} from './src/global/styles/themes';

import {Routes} from './src/routes';
import {Loading} from './src/components/Loading';

import {AuthProviderContext} from './src/context/AuthProvider';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
        <AuthProviderContext>
          {
            !fontsLoaded ? <Loading size={14} color='#8b14f9' /> : <Routes/>
          }
        </AuthProviderContext>
      </ThemeProvider>
    </>
  );
}

