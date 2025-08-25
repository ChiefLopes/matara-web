


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      // <NextIntlClientProvider>
      <main>{children}</main>
      // </NextIntlClientProvider>
    );
}
