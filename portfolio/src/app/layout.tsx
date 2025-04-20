import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Alex Morgan | Frontend Developer',
  description: 'Personal portfolio website of Alex Morgan, a frontend developer specializing in React and modern web technologies.',
  keywords: ['frontend developer', 'react developer', 'web developer', 'portfolio', 'javascript', 'typescript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 