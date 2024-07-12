'use client'
import Link from 'next/link'
import './style.css'
import { useRouter } from 'next/navigation';


const ContremarquesPage = () => {

    const router = useRouter();
    


    const handleCLick = () => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn')
        if(isLoggedIn === 'true'){
            router.push('/List')
        }else {
            router.push('/Signin')
        }
    }

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
                <button className='button' onClick={handleCLick}>Connectez-vous</button>
            </div>
        </section>
    )
}

export default ContremarquesPage