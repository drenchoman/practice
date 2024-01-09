import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Used for HEAD metadata
export const metadata = {
  title: 'Next.js 14 Course',
  description: 'Generated by create next app',
};
// children is the content of the Page

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
