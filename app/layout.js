export const metadata = {
  title: "Respect Song ? Park to Help",
  description: "A cheerful, kid-friendly story and song about showing respect to elders.",
  themeColor: "#0ea5e9"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
