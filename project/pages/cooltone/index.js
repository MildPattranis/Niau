import styles from ".//cool.module.css";
import Link from "next/link";
import Navigator from "@/components/NavigatorBar"
export default function cool() {
  return (
    <div className={styles.body}>
      <Navigator/>
        <div className={styles.head1}>
          <h2>Cool Tone</h2>
        </div>
        <Link href="/" className={styles.warm}>
          Warm Tone
        </Link>
        <Link href="/naturaltone" className={styles.natural}>
          Natural Tone
        </Link>
        <Link href="/cooltone" className={styles.cool}>
          Cool Tone
        </Link>
        <Link href="/lip15" className={styles.lip1}>
          <img src="https://www.konvy.com/static/team/2020/1118/16056730324375_600x600.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip16" className={styles.lip2}>
          <img src="https://dollfacedcosmetics.co.uk/cdn/shop/products/Screenshot2023-03-04200121_grande.png?v=1677962796"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip17" className={styles.lip3}>
          <img src="https://s2.konvy.com/static/team/2022/1101/16672968644372.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip18" className={styles.lip4}>
          <img src="https://s2.konvy.com/static/team/2024/0112/17050272088228.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip19" className={styles.lip5}>
          <img src="https://cdn.thebeautrium.com/image-product/B0059006.png"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip20" className={styles.lip6}>
          <img src="https://api.watsons.co.th/medias/zoom-side-306349.jpg?context=bWFzdGVyfGltYWdlc3wyMzMwMzN8aW1hZ2UvanBlZ3xhRFV3TDJnM015OHhNakUwTWpJM01qWTBNekV3TWk5WFZFTlVTQzB6TURZek5Ea3RjMmxrWlM1cWNHY3w1MzJiMDNiMGE3Y2Y2YzYyYzMwN2Y1NzI1NWM3NGYwZDUwN2I0YzQ4YTBkOWFhOWM2MmFjZGMzM2JiZjc2OWMy"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip21" className={styles.lip7}>
          <img src="https://m.media-amazon.com/images/I/41qDsgCtz-L._AC_UF1000,1000_QL80_.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip15" className={styles.lipp1}>
          REVLON Matte Lipstick<br></br>004 Pink About It<br></br>189 baht
        </Link>
        <Link href="/lip16" className={styles.lipp2}>
          REVLON Matte Lipstick<br></br>445 Teak Rose<br></br>189 baht
        </Link>
        <Link href="/lip17" className={styles.lipp3}>
          KATE Lip Monster<br></br>13 Tispy at 3:00<br></br>436 baht
        </Link>
        <Link href="/lip18" className={styles.lipp4}>
          Maybeline New York<br></br>Superstay Vinyl Ink Longwear Liquid<br></br>15 Peachy<br></br>289 baht
        </Link>
        <Link href="/lip19" className={styles.lipp5}>
          2P Original<br></br>Oh My Tint Velvet And Smooth<br></br>OMT 10<br></br>89 baht
        </Link>
        <Link href="/lip20" className={styles.lipp6}>
          Barenbliss<br></br>Peach Makes Perfect Lip Tint<br></br>12 Fly High<br></br>199 baht
        </Link>
        <Link href="/lip21" className={styles.lipp7}>
          BBIA Glow Lip Tint<br></br>03 Mauve<br></br>285 baht
        </Link>
    </div>
  )
}
