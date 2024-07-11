import Link from "next/link"
import "../Header/Header.css"
import Image from "next/image"

const Header = () => {
    return(
        <header className="header">
            <Link href={'/'}>
                <Image src="http://www.forest-hill.pro/wp-content/uploads/2017/12/logo-mobile-vert.png" alt="" width={300} height={150}/>
            </Link>
            <ul className="header_links">
                <Link href={'/'}>ACCUEIL</Link>
                <Link href={'/Contremarques'}>CONTREMARQUES (CRÉATION ET LISTE)</Link>
                <Link href={'/Actualites'}>ACTUALITES</Link>
                <Link href={'/Contact'}>CONTACT</Link>
            </ul>
        </header>
    )
}

export default Header