import { GrowthBook, GrowthBookProvider, useFeature } from "@growthbook/growthbook-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// Create a GrowthBook instance
const growthbook = new GrowthBook({
  // enableDevMode: true allows you to use the Chrome DevTools Extension to test/debug.
  enableDevMode: true,
  trackingCallback: (experiment, result) => {  
  }
});
function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  // useEffect( () => {
    
  // Added Bootstrap JS in useeffect hook load page fully to use the window object
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
export default MyApp