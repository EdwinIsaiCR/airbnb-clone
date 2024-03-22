
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
/* import { Provider } from "react-redux";
import { wrapper } from "../redux/store"; */
/* import { PaypalScriptProvider } from "@paypal/react-paypal-js"; */

export default function App({ Component, pageProps:{ session, ...pageProps} }) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
      {/* <PaypalScriptProvider deferLoaing={true}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </PaypalScriptProvider> */}
      </SessionProvider>
    </ChakraProvider>
  );
}