import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export async function getInitialProps (ctx) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })
  const initialProps = await Document.getInitialProps(ctx).finally(() => {
    sheet.seal()
  })
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
      </>
    )
  }
}
export default function MyDocument () {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
