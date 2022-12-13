import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';

import Navbar from 'containers/common/Navbar';
import { wrapper } from 'store.js';

import 'bootswatch/flatly/bootstrap.min.css';
import 'sanitize.css/sanitize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'index.css';

export default function MyApp({
    Component,
    ...rest
}) {
  const { store } = wrapper.useWrappedStore(rest);
  
  const title = rest.pageProps.title || 'Neg 5 Stats';
  return (
    <>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />
        <Provider store={store}>
            <Navbar />
            <Component {...rest.pageProps} />
        </Provider>
    </>
  )
}
