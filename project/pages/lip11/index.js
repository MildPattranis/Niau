import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip11.module.css";
import Link from "next/link";
export default function lip11(){
    return(
        <div>
            <Navigator2/>
            <Link href="/naturaltone" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>Maybeline New York</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://s2.konvy.com/static/team/2022/1221/16716070274410.jpg"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>Maybeline New York Superstay Vinyl Ink Longwear Liquid 4.2ml</h2>
            </div>
            <div className={styles.c}>
                Price : 289 baht
            </div>
            <div className={styles.d}>
                Brand : Maybeline New York Superstay Vinyl Ink Longwear Liquid<br></br>Color : 120 Punchy #C37877<br></br>Tone : Natural Tone<br></br>Glowy : 2/5<br></br>Matte : 2/5<br></br>Long Lasting : 5/5
            </div>
            <div className={styles.e}>
                SHADE COLORS
            </div>
            <div className={styles.f}>
                130 - Extra (Warm Tone)<br></br>120 - Punchy (Natural Tone)<br></br>15 - Peachy (Cool Tone)
            </div>
            <Link href="/lip4" className={styles.g}></Link>
            <Link href="/lip4" className={styles.g1}>130</Link>
            <Link href="/lip11" className={styles.h}></Link>
            <Link href="/lip11" className={styles.h1}>120</Link>
            <Link href="/lip18" className={styles.i}></Link>
            <Link href="/lip18" className={styles.i1}>15</Link>
            
        </div>
    )
}