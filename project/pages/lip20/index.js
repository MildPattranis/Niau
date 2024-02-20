import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip20.module.css";
import Link from "next/link";
export default function lip20(){
    return(
        <div>
            <Navigator2/>
            <Link href="/cooltone" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>Barenbliss</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://api.watsons.co.th/medias/zoom-side-306349.jpg?context=bWFzdGVyfGltYWdlc3wyMzMwMzN8aW1hZ2UvanBlZ3xhRFV3TDJnM015OHhNakUwTWpJM01qWTBNekV3TWk5WFZFTlVTQzB6TURZek5Ea3RjMmxrWlM1cWNHY3w1MzJiMDNiMGE3Y2Y2YzYyYzMwN2Y1NzI1NWM3NGYwZDUwN2I0YzQ4YTBkOWFhOWM2MmFjZGMzM2JiZjc2OWMy"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>Barenbliss Peach Makes Perfect Lip Tint 3ml</h2>
            </div>
            <div className={styles.c}>
                Price : 199 baht
            </div>
            <div className={styles.d}>
                Brand : Barenbliss Peach Makes Perfect Lip Tint<br></br>Color : 12 Fly High #CD5167<br></br>Tone : Cool Tone<br></br>Glowy : 5/5<br></br>Matte : 0/5<br></br>Long Lasting : 4/5
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