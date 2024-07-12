// components/AuthGuard.tsx
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/List');
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
