import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip21.module.css";
import Link from "next/link";
export default function lip21(){
    return(
        <div>
            <Navigator2/>
            <Link href="/cooltone" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>BBIA Glow Lip Tint</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://m.media-amazon.com/images/I/41qDsgCtz-L._AC_UF1000,1000_QL80_.jpg"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>BBIA Glow Lip Tint 32ml</h2>
            </div>
            <div className={styles.c}>
                Price : 285 baht
            </div>
            <div className={styles.d}>
                Brand : BBIA Glow Lip Tint<br></br>Color : 03 Mauve #A5404D<br></br>Tone : Cool Tone<br></br>Glowy : 5/5<br></br>Matte : 0/5<br></br>Long Lasting : 4/5
            </div>
            <div className={styles.e}>
                SHADE COLORS
            </div>
            <div className={styles.f}>
                06 - Sand (Warm Tone)<br></br>04 - Cinnamon (Natural Tone)<br></br>03 - Mauve (Cool Tone)
            </div>
            <Link href="/lip7" className={styles.g}></Link>
            <Link href="/lip7" className={styles.g1}>06</Link>
            <Link href="/lip14" className={styles.h}></Link>
            <Link href="/lip14" className={styles.h1}>04</Link>
            <Link href="/lip21" className={styles.i}></Link>
            <Link href="/lip21" className={styles.i1}>03</Link>
            
        </div>
    )
}