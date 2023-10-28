import { Inter } from 'next/font/google';
import Nav from '../components/atoms/nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chelsea and Derek',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>{metadata.title}</title></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
