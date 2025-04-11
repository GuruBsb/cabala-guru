import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e Links da Esquerda */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/home">
                <img 
                  src="https://cabala.guru/imgapp/Logo-Cabala-guru.webp" 
                  alt="Cabala Guru" 
                  className="h-8" 
                />
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/home" className="text-gray-700 hover:text-[#016CFA] px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/sobre" className="text-gray-700 hover:text-[#016CFA] px-3 py-2 text-sm font-medium">
                Sobre
              </Link>
              <Link to="/recursos" className="text-gray-700 hover:text-[#016CFA] px-3 py-2 text-sm font-medium">
                Recursos
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-[#016CFA] px-3 py-2 text-sm font-medium">
                Contato
              </Link>
              <Link to="/planos" className="text-gray-700 hover:text-[#016CFA] px-3 py-2 text-sm font-medium">
                Planos
              </Link>
            </div>
          </div>
          
          {/* Botões da Direita */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-[#016CFA] px-4 py-2 text-sm font-medium">
              Login
            </Link>
            <Link to="/cadastro" className="bg-[#016CFA] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
              Testar Grátis
            </Link>
          </div>
          
          {/* Menu Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#016CFA] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Dropdown Mobile */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <Link 
            to="/home" 
            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/sobre" 
            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            to="/recursos" 
            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Recursos
          </Link>
          <Link 
            to="/contato" 
            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contato
          </Link>
          <Link 
            to="/planos" 
            className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Planos
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link 
              to="/login" 
              className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/cadastro" 
              className="bg-[#016CFA] text-white block mt-2 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testar Grátis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 