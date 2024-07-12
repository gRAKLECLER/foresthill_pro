
'use client'
import { useRouter } from 'next/navigation';
const ListPage = () => {

    const router = useRouter()

    const handleLogout = () => {
        router.push('/Signin')
        sessionStorage.removeItem('isLoggedIn')
    }

  return (
        <main style={{ minHeight: '80vh' }}>
        <h1>List Page</h1>
        <button onClick={handleLogout}>Logout</button>
        </main>
  );
};

export default ListPage;