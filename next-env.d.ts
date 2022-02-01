// / <reference types="next" />
// / <reference types="next/image-types/global" />
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
