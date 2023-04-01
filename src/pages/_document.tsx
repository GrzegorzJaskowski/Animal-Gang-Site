import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head></Head>
      <body
        style={{
          margin: "0 auto",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
