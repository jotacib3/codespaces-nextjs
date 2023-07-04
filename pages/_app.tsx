import '../global.css'

if (process.env.NODE_ENV === 'development') {
  // Enable API mocking in the browser
  const { default: createBrowserWorker } = require('mocks/browser')
  createBrowserWorker();
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
