import styles from "../styles/sidebar.module.css"
import { SidebarItem } from "../components/SidebarItem"

export const Sidebar = () => (
  <div className={styles.sidebar}>
    <p className={styles.header}>Your new gang</p>
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
