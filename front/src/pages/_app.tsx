const { library } = require("@fortawesome/fontawesome-svg-core");
const { fas } = require("@fortawesome/free-solid-svg-icons");
import "@/styles/globals/base.css";
import type { AppProps } from "next/app";

library.add(fas);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
