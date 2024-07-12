// pages/auth/signin.tsx
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../Signup/style.css'
import Link from 'next/link';

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const handleRegister = (event: React.FormEvent) => {
      event.preventDefault();
      sessionStorage.setItem('user', JSON.stringify({email: email, password: password}))
      router.push('/Signin')

    };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleRegister} className='form'>
            <h2>Enregistrez-vous</h2>
            <div className='form_input'>
                <label htmlFor="email">Email :</label>
                <input
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form_input'>
                <label htmlFor="password">Mot de passe :</label>
                <input
                type="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className='form_button' type="submit">Inscription</button>
            <Link href={'/Signin'}>Se connecter</Link>
        </form>
    </main>
  );
}
