// pages/auth/signin.tsx
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../Signin/style.css'
import Link from 'next/link';

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const user = sessionStorage.getItem('user')

    const parsedUser = JSON.parse(user ?? '')
  
    const handleLogin = (event: React.FormEvent) => {
      event.preventDefault();
      
      
      if (email === parsedUser?.email && password === parsedUser?.password) {
        
        sessionStorage.setItem('isLoggedIn', 'true');

        router.push('/List');
      } else {
        alert('Identifiants incorrects');
      }
    };

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleLogin} className='form'>
            <h2>Connectez-vous</h2>
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
            <button className='form_button' type="submit">Se connecter</button>
            <Link href={'/Signup'}>Inscrivez-vous</Link>
        </form>
    </main>
  );
}
