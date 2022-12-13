import "regenerator-runtime/runtime";

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  static async getInitialProps(ctx) {
    const documentProps = await Document.getInitialProps(ctx);
    return {
      ...documentProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
