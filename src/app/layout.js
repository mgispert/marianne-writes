import ClientBackground from "@/components/ClientBackground";
import { Providers } from "./providers";
import "@fontsource/unifrakturcook";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    <ClientBackground />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
