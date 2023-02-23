import "tailwindcss/tailwind.css";
import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import "../styles/custom.css";
import { ThemeProvider } from "next-themes";

function App({ Component }) {
  return (
    <>
      <Head>
        <title>Becho</title>
        <meta name="description" content="becho" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <FullLayout>
          <Component />
        </FullLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
