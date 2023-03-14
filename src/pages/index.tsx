import { Sidebar } from "../components/Sidebar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
    </div>
  )
}
