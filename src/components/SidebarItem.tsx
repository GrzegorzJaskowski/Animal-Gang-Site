import styles from "../styles/sidebarItem.module.css"

export const SidebarItem = (props: { text: string }) => {
  return (
    <div className={styles.sidebarItem}>
      <p className={styles.header}>{props.text}</p>
    </div>
  )
}
