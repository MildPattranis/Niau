import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip1.module.css";
import Link from "next/link";
export default function lip1(){
    return(
        <div>
            <Navigator2/>
            <Link href="/" className={styles.back}>
                Back
            </Link>
            <div className={styles.a}>
                <h1>REVLON Matte Lipstick</h1>
            </div>
            <div className={styles.pic}>
                <img src="https://api.watsons.co.th/medias/zoom-front-208727.jpg?context=bWFzdGVyfGltYWdlc3w4OTI4MzF8aW1hZ2UvanBlZ3xhRFZpTDJneVlpODVOREV4TWpFMU5UVTJOak00TDFkVVExUklMVEl3T0RjeU55MW1jbTl1ZEM1cWNHY3w1ZTI4NGNiMTI0MjE4NWI3YmQ3YmFjYjM2NDc5NGYzODM1YzkzZTE0MjY1ZTZiNDJlNTEwNTk4ZmI2NjNlYjEw"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>REVLON Matte Lipstick 4.2g</h2>
            </div>
            <div className={styles.c}>
                Price : 189 baht
            </div>
            <div className={styles.d}>
                Brand : REVLON Matte Stick<br></br>Color : 009 Fabulous Fig #8F3E35<br></br>Tone : Warm Tone<br></br>Glowy : 0/5<br></br>Matte : 5/5<br></br>Long Lasting : 1/5
            </div>
            <div className={styles.e}>
                SHADE COLORS
            </div>
            <div className={styles.f}>
                009 - Fabulous Fig (Warm Tone)<br></br>365 - Mango Blossom (Warm Tone)<br></br>003 - Mauve It Over (Natural Tone)<br></br>356 - Soft Suede (Natural Tone)<br></br>004 - Pink About It (Cool Tone)<br></br>445 - Teak Rose (Cool Tone)
            </div>
            <Link href="/lip1" className={styles.g}></Link>
            <Link href="/lip1" className={styles.g1}>009</Link>
            <Link href="/lip2" className={styles.h}></Link>
            <Link href="/lip2" className={styles.h1}>365</Link>
            <Link href="/lip8" className={styles.i}></Link>
            <Link href="/lip8" className={styles.i1}>003</Link>
            <Link href="/lip9" className={styles.j}></Link>
            <Link href="/lip9" className={styles.j1}>356</Link>
            <Link href="/lip15" className={styles.k}></Link>
            <Link href="/lip15" className={styles.k1}>004</Link>
            <Link href="/lip16" className={styles.l}></Link>
            <Link href="/lip16" className={styles.l1}>445</Link>
        </div>
    )
}