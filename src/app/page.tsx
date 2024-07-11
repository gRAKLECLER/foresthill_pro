import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div style={{ background: '#00a9a1', width: '100%', textAlign: 'center', padding: "28px", color: '#ffff', fontSize: '20px' }}>
        <h4 className={styles.title}> Les fonctionnalités de votre Espace Pro</h4>
      </div>
      <section className={styles.mainSection} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '1rem' }}>
        <Link className={styles.iconLogo} href='Contremarques'>
          <Image src="http://www.forest-hill.pro/wp-content/uploads/2015/09/pie-custom-2.png" alt="" width={100} height={100} style={{ objectFit: 'contain', padding: '1rem' }}/>
          <h6>CONTREMARQUES</h6>
        </Link>
        <Link className={styles.iconLogo} href='/Actualites'>
          <Image src="http://www.forest-hill.pro/wp-content/uploads/2017/12/actus.png" alt="" width={100} height={100} style={{ objectFit: 'contain', padding: '1rem', borderRadius: '100%' }}/>
          <h6>ACTUALITES</h6>
       </Link>
        <Link className={styles.iconLogo} href='Contact'>
          <Image src="http://www.forest-hill.pro/wp-content/uploads/2015/09/pie-custom-4-2.png" alt="" width={100} height={100} style={{ objectFit: 'contain', padding: '1rem', borderRadius: '100%' }}/>
          <h6>CONTACT</h6>
        </Link>
      </section>
    </main>
  );
}
