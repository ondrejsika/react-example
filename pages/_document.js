import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Html, Head, Main, NextScript } from 'next/document';
import { BaseStyles } from "@primer/components";



export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <BaseStyles>
            <p>
            <a href="/">Index</a> ~ <a href="/about-me">About me</a>
            </p>
            <Main />
          </BaseStyles>
          <NextScript />
        </body>
      </Html>
    );
  }
}