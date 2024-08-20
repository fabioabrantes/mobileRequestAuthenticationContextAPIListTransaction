import 'styled-components/native';

import {defaultTheme} from '../global/styles/themes';

type ThemeType = typeof defaultTheme;

declare module 'styled-components/native'{
  export interface DefaultTheme extends ThemeType{}
}