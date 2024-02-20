import Navigator2 from "@/components/NavigatorBar2"
import styles from ".//lip2.module.css";
import Link from "next/link";
export default function lip2(){
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
                <img src="https://api.watsons.co.th/medias/zoom-side-147603.jpg?context=bWFzdGVyfGltYWdlc3w5MDA0MzR8aW1hZ2UvanBlZ3xhR0UzTDJobVl5ODVOREV4TVRneE16YzVOakUwTDFkVVExUklMVEUwTnpZd015MXphV1JsTG1wd1p3fDMxZTU1ZTljODBmYTFiZmJlZWQzM2MwNGU2N2RkNGMwMjI3N2Y5ZmNjYmNiMmE2MmE5MGUyYzYzOGRkM2EwNTM"
                width={350} height={350} alt="not found"/>
            </div>
            <div className={styles.b}>
                <h2>REVLON Matte Lipstick 4.2g</h2>
            </div>
            <div className={styles.c}>
                Price : 189 baht
            </div>
            <div className={styles.d}>
                Brand : REVLON Matte Stick<br></br>Color : 365 Mango Blossom #C15C40<br></br>Tone : Warm Tone<br></br>Glowy : 0/5<br></br>Matte : 5/5<br></br>Long Lasting : 1/5
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