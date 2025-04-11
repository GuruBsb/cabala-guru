import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../lib/supabase';

export default function Home() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getUser();
        setIsAuthenticated(!!user);
        
        // Redirecionar automaticamente para a área logada se o usuário estiver autenticado
        if (user) {
          navigate('/arealogada');
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#FEFEFE] flex flex-col items-center justify-center p-6">
      {isAuthenticated === null ? (
        <div className="w-10 h-10 border-4 border-blue-400 border-t-[#016CFA] rounded-full animate-spin"></div>
      ) : isAuthenticated ? (
        // O usuário será redirecionado automaticamente, mas mostramos um loader enquanto isso
        <div className="w-10 h-10 border-4 border-blue-400 border-t-[#016CFA] rounded-full animate-spin"></div>
      ) : (
        <div className="space-y-8 w-full max-w-md">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <img 
                src="https://cabala.guru/imgapp/Logo-Cabala-guru.webp" 
                alt="Cabala Guru" 
                className="h-16" 
              />
            </div>
            <p className="text-gray-600">Bem-vindo ao sistema de numerologia cabalística</p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => navigate('/login')}
              className="bg-[#016CFA] text-white text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Entrar no Sistema
            </button>
            <button
              onClick={() => navigate('/cadastro')}
              className="border border-[#016CFA] text-[#016CFA] text-sm px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Criar Nova Conta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}