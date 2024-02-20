import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip6.module.css";
import Link from "next/link";
export default function lip6(){
    return(
        <div>
            <Navigator2/>
            <Link href="/" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>Barenbliss</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://www.konvy.com/static/team/2023/0221/16769669283355_600x600.jpg"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>Barenbliss Peach Makes Perfect Lip Tint 3ml</h2>
            </div>
            <div className={styles.c}>
                Price : 199 baht
            </div>
            <div className={styles.d}>
                Brand : Barenbliss Peach Makes Perfect Lip Tint<br></br>Color : 03 Take Change #E05849<br></br>Tone : Warm Tone<br></br>Glowy : 5/5<br></br>Matte : 0/5<br></br>Long Lasting : 4/5
            </div>
            <div className={styles.e}>
                SHADE COLORS
            </div>
            <div className={styles.f}>
                03 - Take Change (Warm Tone)<br></br>05 - Good Vibes (Natural Tone)<br></br>12 - Fly High (Cool Tone)
            </div>
            <Link href="/lip6" className={styles.g}></Link>
            <Link href="/lip6" className={styles.g1}>03</Link>
            <Link href="/lip13" className={styles.h}></Link>
            <Link href="/lip13" className={styles.h1}>05</Link>
            <Link href="/lip20" className={styles.i}></Link>
            <Link href="/lip20" className={styles.i1}>12</Link>
            
        </div>
    )
}