import Link from 'next/link'
import './style.css'

const ContremarquesPage = () => {
    return (
        <section style={{ minHeight: '100vh' }}>
            <div className="headContent">
                <h1>
                    <span>Contremarques (Création et Liste)</span>
                </h1>
                    <div> 
                        <div>
                            <a href="/">FOREST HILL - Espace Pro</a>
                            <span >&nbsp;/&nbsp;</span><span >Contremarques (Création et Liste)</span>
                        </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
                <Link href={'/Signin'} className='button'>Connectez-vous</Link>
            </div>
        </section>
    )
}

export default ContremarquesPage