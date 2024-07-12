
'use client'
import { useRouter } from 'next/navigation';
const ListPage = () => {

    const router = useRouter()

    const handleLogout = () => {
        router.push('/Signup')
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.setItem('user', '{}')
    }

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <h1>List Page</h1>
        <button className='button' onClick={handleLogout}>Logout</button>
      </main>
  );
};

export default ListPage;