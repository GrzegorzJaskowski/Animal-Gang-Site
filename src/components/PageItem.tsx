import styles from "../styles/pageItem.module.css"
import Image from "next/image"

export const PageItem = (props: {
  text: string
  title: string
  image: string
  wordId: number
}) => {
  var splitted = props.text.split(" ")
  var beg = ""
  var end = ""
  var color = ""
  for (let i = 0; i < props.wordId - 1; i++) {
    beg += splitted[i] + " "
  }
  color += splitted[props.wordId - 1] + " "
  for (let i = props.wordId; i < splitted.length; i++) {
    end += splitted[i] + " "
  }
  return (
    <div className={styles.pageItem}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.text}>
        {beg}
        <span className={styles.span}> {color} </span>
        {end}
      </p>
      <Image
        className={styles.image}
        src={props.image}
        alt={props.image}
        width={817}
        height={431}
      />
    </div>
  )
}
