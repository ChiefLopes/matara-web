


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      // <NextIntlClientProvider>
      <body>{children}</body>
      // </NextIntlClientProvider>
    );
}
