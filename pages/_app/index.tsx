// #region Global Imports
import { AppProps } from 'next/app';
// #endregion Global Imports

/* eslint-disable react/jsx-props-no-spreading */
function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}
/* eslint-enable react/jsx-props-no-spreading */

export default App;
