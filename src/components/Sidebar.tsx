import styles from "../styles/sidebar.module.css"
import { Inter } from "next/font/google"
import { SidebarItem } from "../components/SidebarItem"
const inter = Inter({ subsets: ["cyrillic"] })

export const Sidebar = () => (
  <div className={styles.sidebar}>
    <h1 className={`${styles.header} ${inter.className}`}>Your new gang</h1>
    <div className={styles.itemBox}>
      <SidebarItem text="Polar Bear" />
      <SidebarItem text="Cheetah" />
      <SidebarItem text="Panda" />
      <SidebarItem text="Fox" />
      <SidebarItem text="Squirrel" />
      <SidebarItem text="Butterfly" />
      <SidebarItem text="Elephant" />
    </div>
  </div>
)
