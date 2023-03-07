const { library } = require("@fortawesome/fontawesome-svg-core");
const { fas } = require("@fortawesome/free-solid-svg-icons");
import { wrapper } from "@/store/store";
import "@/styles/globals/base.css";
import "@/styles/globals/react-datepicker.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

library.add(fas);

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />;
    </Provider>
  );
}
