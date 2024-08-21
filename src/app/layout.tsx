import type { Metadata } from "next";
import "./globals.css";
import RecoilContextProvider from "./lib/recoilContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "LeetClone",
  description: "Clone of leetcode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
      <ToastContainer />
    </html>
  );
}
