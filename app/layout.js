import { Nunito_Sans } from "next/font/google";

import "../styles/index.scss";
import "../styles/globals.css";

import TranslateWrapper from "@/components/translateWrapper";
import GenericWrapper from "@/components/genericWrapper";

const myFont = Nunito_Sans({ subsets: ["latin"], weight: ['600', "800"] });

export const metadata = {
  title: "Hiretop",
  description: "Connectez les talents tech aux opportunités d'innovation,Bridging Tech Talents to Innovation Opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <TranslateWrapper>
          <GenericWrapper>
            {children}
          </GenericWrapper>
        </TranslateWrapper>
      </body>
    </html>
  );
}
