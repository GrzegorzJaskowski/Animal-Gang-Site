import styles from "../styles/sidebar.module.css"
import { SidebarItem } from "../components/SidebarItem"
import { useEffect, useState } from "react"

export const Sidebar = () => {
  const [active, setActive] = useState()
  function changeActive(set: undefined) {
    setActive(set)
    console.log(set)
  }

  return (
    <div className={styles.sidebar}>
      <p className={styles.header}>Your new gang</p>
      <div className={styles.itemBox}>
        <SidebarItem
          text="Polar Bear"
          active={active}
          changeActive={changeActive}
        />
        <SidebarItem
          text="Cheetah"
          active={active}
          changeActive={changeActive}
        />
        <SidebarItem text="Panda" active={active} changeActive={changeActive} />
        <SidebarItem text="Fox" active={active} changeActive={changeActive} />
        <SidebarItem
          text="Squirrel"
          active={active}
          changeActive={changeActive}
        />
        <SidebarItem
          text="Butterfly"
          active={active}
          changeActive={changeActive}
        />
        <SidebarItem
          text="Elephant"
          active={active}
          changeActive={changeActive}
        />
      </div>
    </div>
  )
}
