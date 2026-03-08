import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'YummyBites - AI-Powered Recipe',
  description:
    "Discover delicious recipes tailored to your taste with YummyBites, the AI-powered recipe generator. Whether you're craving something sweet, savory, or healthy, YummyBites has you covered. Simply input your preferences and dietary restrictions, and let our AI create personalized recipes just for you. Say goodbye to mealtime stress and hello to a world of culinary possibilities with YummyBites!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: neobrutalism,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex justify-center items-center">
              <p className="text-stone-500 text-sm">Made by Piyush</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
