import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip5.module.css";
import Link from "next/link";
export default function lip5(){
    return(
        <div>
            <Navigator2/>
            <Link href="/" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>2P Original</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://media.multybeauty.com/v1/file/kkmhv1664367532498.png"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>2P Original Oh My Tint Velvet And Smooth 2.2ml</h2>
            </div>
            <div className={styles.c}>
                Price : 89 baht
            </div>
            <div className={styles.d}>
                Brand : 2P Original Oh My Tint Velvet And Smooth<br></br>Color : OMT 09 #B7513C<br></br>Tone : Warm Tone<br></br>Glowy : 0/5<br></br>Matte : 5/5<br></br>Long Lasting : 2/5
            </div>
            <div className={styles.e}>
                SHADE COLORS
            </div>
            <div className={styles.f}>
                OMT - 09 (Warm Tone)<br></br>OMT - 03 (Natural Tone)<br></br>OMT - 10 (Cool Tone)
            </div>
            <Link href="/lip5" className={styles.g}></Link>
            <Link href="/lip5" className={styles.g1}>09</Link>
            <Link href="/lip12" className={styles.h}></Link>
            <Link href="/lip12" className={styles.h1}>03</Link>
            <Link href="/lip19" className={styles.i}></Link>
            <Link href="/lip19" className={styles.i1}>10</Link>
            
        </div>
    )
}