import styles from "../styles/sidebarItem.module.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const SidebarItem = ({ text }: { text: string }): JSX.Element => (
  <div className={styles.sidebarItem}>
    <h1 className={inter.className}>{text}</h1>
  </div>
)
