import { useEffect } from "react"
import styles from "../styles/sidebarItem.module.css"

export const SidebarItem = (props: {
  text: string
  active: undefined
  changeActive: (params: any) => any
}) => {
  function handleClick() {
    document
      .getElementById(props.text.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" })
    props.changeActive(props.text)
  }

  return (
    <div
      onClick={handleClick}
      className={
        props.active === props.text
          ? styles.sidebarItemActive
          : styles.sidebarItem
      }
    >
      <p
        className={
          props.active === props.text ? styles.headerActive : styles.header
        }
      >
        {props.text}
      </p>
    </div>
  )
}
