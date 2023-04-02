import styles from "../styles/sidebar.module.css"
import { SidebarItem } from "../components/SidebarItem"

export const Sidebar = () => {
  const active = "Polar Bear"

  return (
    <div className={styles.sidebar}>
      <p className={styles.header}>Your new gang</p>
      <div className={styles.itemBox}>
        <SidebarItem text="Polar Bear" active={active} />
        <SidebarItem text="Cheetah" active={active} />
        <SidebarItem text="Panda" active={active} />
        <SidebarItem text="Fox" active={active} />
        <SidebarItem text="Squirrel" active={active} />
        <SidebarItem text="Butterfly" active={active} />
        <SidebarItem text="Elephant" active={active} />
      </div>
    </div>
  )
}
