import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  padding:0;
  margin:0;
  font-family: 'Roboto', sans-serif;
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Helmet>
        <link
          // rel="stylesheet"
          type="text/css"
          href="path-to-your-stylesheet.css"
        />
      </Helmet> */}
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
