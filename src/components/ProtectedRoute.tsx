import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUser, isProfileComplete } from '../lib/supabase';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireCompleteProfile?: boolean;
}

export default function ProtectedRoute({ children, requireCompleteProfile = true }: ProtectedRouteProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getUser();
        const profileCompleted = await isProfileComplete();
        
        setIsAuthenticated(!!user);
        setProfileComplete(profileCompleted);
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setIsAuthenticated(false);
        setProfileComplete(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-[#016CFA] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireCompleteProfile && !profileComplete) {
    return <Navigate to="/completarcadastro" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}