import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient.js";
import "./globals.css";

export const metadata = {
  title: "Ayurvedic Mass Gainer for Muscle Growth",
  description:
    "Increase muscle growth naturally with Pushtivardhanam. This powder provides the right balance of protein, carbs, and fat for optimal muscle growth in both women and men.",
  keywords:
    "weight gain powder, best protein powder for weight gain, weight gain supplements, best protein powder for muscle gain, weight gain powder for women, ayurvedic weight gain powder, ayurvedic weight gainer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
