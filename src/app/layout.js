import StarryBackground from "@/components/StarryBackground";
import { Providers } from "./providers";
import "@fontsource/unifrakturcook"; // 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StarryBackground/>{children}</Providers>
      </body>
    </html>
  );
}
