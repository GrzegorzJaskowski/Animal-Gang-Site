import styles from "../styles/sidebarItem.module.css"

function scrollToItem() {}

export const SidebarItem = (props: { text: string }) => {
  var id = "#"
  id += props.text.toLowerCase()
  return (
    // <a href={id} className={styles.sidebarItem}>
    //   <p className={styles.header}>{props.text}</p>
    // </a>

    <div className={styles.sidebarItem}>
      <p className={styles.header}>{props.text}</p>
    </div>
  )
}
