import styles from "../styles/sidebarItem.module.css"

export const SidebarItem = (props: { text: string }) => {
  function handleClick() {
    document
      .getElementById(props.text.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div onClick={handleClick} className={styles.sidebarItem}>
      <p className={styles.header}>{props.text}</p>
    </div>
  )
}
