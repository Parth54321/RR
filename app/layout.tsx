import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Founder Portfolio Platform',
  description: 'Investor-grade AI systems engineering brand platform.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
