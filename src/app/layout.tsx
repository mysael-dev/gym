
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={'antialiased'} suppressHydrationWarning>
        <ThemeToggle/>
        {children}
      </body>
    </html>
  );
}
