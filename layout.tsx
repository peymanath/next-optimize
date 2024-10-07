import { PropsWithChildren } from 'react';
import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='fa-IR'
      dir='rtl'>
      <body>
        {children}
      </body>
    </html>
  );
}
