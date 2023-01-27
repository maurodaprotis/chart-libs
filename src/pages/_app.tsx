import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Component {...pageProps} />
    </div>
  );
}
