
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CTAButton from '@/components/ui/buttons/CTAButton';
import ScrollButton from '@/components/ui/buttons/ScrollButton';
import StandardButton from '@/components/ui/buttons/StandardButton';


const proximaNova = localFont({
  src: [
    {
      path: './fonts/proximanova_black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/proximanova_extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/proximanova_bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/proximanova_regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/proximanova_light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable} font-sans antialiased`}>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                {/* Your logo or brand name here */}
              </div>
              
              <div className="hidden md:flex md:items-center md:space-x-4">
                <StandardButton>
                  What We Offer
                </StandardButton>
                
                <StandardButton variant="outline">
                  Our Team
                </StandardButton>
                
                <CTAButton href="/about">
                  Tell us more about you
                </CTAButton>
              </div>

              <div className="md:hidden">
                <StandardButton>
                  Menu
                </StandardButton>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          {children}
        </main>

        <footer className="mt-8 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-center">
              <ScrollButton targetId="top">
                Back to Top
              </ScrollButton>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}