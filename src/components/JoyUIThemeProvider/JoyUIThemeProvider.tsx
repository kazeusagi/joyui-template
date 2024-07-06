'use client';

import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import { ReactNode } from 'react';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const notosansjp = Noto_Sans_JP({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export function JoyUIThemeProvider({ children }: Props) {
  const theme = extendTheme({
    fontFamily: {
      body: [
        roboto.style.fontFamily,
        notosansjp.style.fontFamily,
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
