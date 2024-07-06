import { JoyUIThemeProvider } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Joy UI Template',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <JoyUIThemeProvider>{children}</JoyUIThemeProvider>
      </body>
    </html>
  );
}
