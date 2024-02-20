import styles from ".//natural.module.css";
import Link from "next/link";
import Navigator from "@/components/NavigatorBar"
export default function natural() {
  return (
    <div className={styles.body}>
      <Navigator/>
        <div className={styles.head1}>
          <h2>Natural Tone</h2>
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
        <Link href="/lip8" className={styles.lip1}>
          <img src="https://down-th.img.susercontent.com/file/th-11134207-7r98x-lnnrlvlbviuod4"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip9" className={styles.lip2}>
          <img src="https://cdn11.bigcommerce.com/s-n94hgv17gh/images/stencil/800x800/attribute_rule_images/2693_source_1648697070.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip10" className={styles.lip3}>
          <img src="https://cdn.thebeautrium.com/image-product/B0068371.png"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip11" className={styles.lip4}>
          <img src="https://s2.konvy.com/static/team/2022/1221/16716070274410.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip12" className={styles.lip5}>
          <img src="https://media.multybeauty.com/v1/file/l82ph1664367532448.png"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip13" className={styles.lip6}>
          <img src="https://s2.konvy.com/static/team/2023/0221/16769673909792.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip14" className={styles.lip7}>
          <img src="https://m.media-amazon.com/images/I/41UZUgRp5yL._AC_UF1000,1000_QL80_.jpg"
          width={200} height={200} alt="not found"/>
        </Link>
        <Link href="/lip8" className={styles.lipp1}>
          REVLON Matte Lipstick<br></br>003 Mauve It Over<br></br>189 baht
        </Link>
        <Link href="/lip9" className={styles.lipp2}>
          REVLON Matte Lipstick<br></br>356 Soft Suede<br></br>189 baht
        </Link>
        <Link href="/lip10" className={styles.lipp3}>
          KATE Lip Monster<br></br>103 Flame in My Heart<br></br>436 baht
        </Link>
        <Link href="/lip11" className={styles.lipp4}>
          Maybeline New York<br></br>Superstay Vinyl Ink Longwear Liquid<br></br>120 Punchy<br></br>289 baht
        </Link>
        <Link href="/lip12" className={styles.lipp5}>
          2P Original<br></br>Oh My Tint Velvet And Smooth<br></br>OMT 03<br></br>89 baht
        </Link>
        <Link href="/lip13" className={styles.lipp6}>
          Barenbliss<br></br>Peach Makes Perfect Lip Tint<br></br>05 Good Vibes<br></br>199 baht
        </Link>
        <Link href="/lip14" className={styles.lipp7}>
          BBIA Glow Lip Tint<br></br>04 Cinnamon<br></br>285 baht
        </Link>
    </div>
  )
}
