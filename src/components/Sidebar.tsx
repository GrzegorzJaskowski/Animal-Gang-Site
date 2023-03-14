import styles from "../styles/sidebar.module.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const Sidebar = () => (
  <div className={styles.sidebar}>
    <h1 className={inter.className}>Your new gang</h1>
  </div>
)
