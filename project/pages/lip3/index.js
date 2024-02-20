import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip3.module.css";
import Link from "next/link";
export default function lip3(){
    return(
        <div>
            <Navigator2/>
            <Link href="/" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>KATE Lip Monster</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://s2.konvy.com/static/team/2022/1101/16672988798216.jpg"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>KATE Lip Monster 3g</h2>
            </div>
            <div className={styles.c}>
                Price : 436 baht
            </div>
            <div className={styles.d}>
                Brand : KATE Lip Monster<br></br>Color : 05 Dark Fig #B45D59<br></br>Tone : Warm Tone<br></br>Glowy : 4/5<br></br>Matte : 0/5<br></br>Long Lasting : 5/5
            </div>
            <div className={styles.e}>
                SHADE COLORS
            </div>
            <div className={styles.f}>
                05 - Dark Fig (Warm Tone)<br></br>103 - Flame in My Heart (Natural Tone)<br></br>13 - Tispy at 3:00 (Cool Tone)
            </div>
            <Link href="/lip3" className={styles.g}></Link>
            <Link href="/lip3" className={styles.g1}>05</Link>
            <Link href="/lip10" className={styles.h}></Link>
            <Link href="/lip10" className={styles.h1}>103</Link>
            <Link href="/lip17" className={styles.i}></Link>
            <Link href="/lip17" className={styles.i1}>13</Link>
            
        </div>
    )
}