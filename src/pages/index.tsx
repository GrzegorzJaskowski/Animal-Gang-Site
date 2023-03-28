import { Sidebar } from "../components/Sidebar"
import { PageItem } from "../components/PageItem"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <Sidebar />
      <PageItem
        title="POLAR BEAR"
        text="Say hello to your new friend"
        image="/polarBear.png"
        wordId={6}
      />
      <PageItem
        title="CHEETAH"
        text="No petting before eating"
        image="/cheetah.png"
        wordId={4}
      />
      <PageItem
        title="PANDA"
        text="Eating always with pleasure"
        image="/panda.png"
        wordId={4}
      />
      <PageItem
        title="FOX"
        text="Sometimes quite suspicious"
        image="/fox.png"
        wordId={3}
      />
      <PageItem
        title="SQUIRREL"
        text="Staying curious"
        image="/squirrel.png"
        wordId={2}
      />
      <PageItem
        title="BUTTERFLY"
        text="Majestic every time of the day"
        image="/butterfly.png"
        wordId={1}
      />
      <PageItem
        title="ELEPHANT"
        text="It makes a huge difference"
        image="/elephant.png"
        wordId={4}
      />
    </div>
  )
}
