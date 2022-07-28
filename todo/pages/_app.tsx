import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import styles from "../styles/App.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.main}>
    <Nav/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
