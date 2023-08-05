import Header from "@/components/common/Header";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/common/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
