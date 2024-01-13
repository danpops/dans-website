import React from 'react'
import Head from 'next/head'
import GlobalStyle from '@/lib/global'
import dynamic from 'next/dynamic'
import useThemeProvider from '@/hooks/useThemeProvider'

const ThemeProvider = dynamic(() => import('@/components/Layout/ThemeProvider'), { ssr: false })

export default function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  const themeProvider = useThemeProvider()
  return (
    <>
      <Head>
        <title>Dan Popovic - Portfolio</title>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width,height=device-height,initial-scale=1,maximum-scale=1'
        />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content={themeProvider.theme.marquee} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='description' content='Dan Popovic - Portfolio' />
      </Head>
      <ThemeProvider {...themeProvider}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ThemeProvider>
    </>
  )
}
