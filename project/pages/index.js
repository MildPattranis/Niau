import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navigator from "@/components/NavigatorBar"
export default function Product() {
  return (
    <div className={styles.body}>
      <Navigator/>
        <div className={styles.head}>
          <h3>Product Detail</h3>
        </div>
        {<Link href="/lip1">
          <img src="https://i.pinimg.com/originals/9e/fb/c0/9efbc0f6e77c62aa1ca64e02b05efcfe.png"
          width={250} height={250} alt="not found"/>
        </Link>}
        
    </div>
  )
}
