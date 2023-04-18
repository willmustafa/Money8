const { library } = require("@fortawesome/fontawesome-svg-core");
const { fas } = require("@fortawesome/free-solid-svg-icons");
import Layout from "@/layouts/default/Layout";
import { wrapper } from "@/store/store";
import "@/styles/globals/base.css";
import "@/styles/globals/global.css";
import "@/styles/globals/react-datepicker.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

library.add(fas);

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <title>Money 8</title>
        <meta name="description" content="Controle financeiro pessoal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </main>
    </Provider>
  );
}
