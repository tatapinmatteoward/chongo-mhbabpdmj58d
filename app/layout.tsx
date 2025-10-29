import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PC Fix Blog",
  description: "A simple blog offering step-by-step guides and tips for diagnosing and resolving the most common errors and issues on personal computers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold">
                PC Fix Blog
              </a>
              <div className="flex items-center space-x-8">
                <a href="/" className="hover:text-primary transition">
                  Home
                </a>
                <a href="/about/" className="hover:text-primary transition">
                  About
                </a>
                
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        
        <footer className="border-t mt-20">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-muted-foreground">
            <p className="text-sm">&copy; {new Date().getFullYear()} PC Fix Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
