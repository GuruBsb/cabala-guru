import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/UI/Navbar';
import AreaLogada from './pages/AreaLogada';
import Cadastro from './pages/Cadastro';
import Calculator from './pages/Calculator';
import CompletarCadastro from './pages/CompletarCadastro';
import ConfirmacaoDeEmail from './pages/ConfirmacaoDeEmail';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Login from './pages/Login';
import MinhaConta from './pages/MinhaConta';
import Planos from './pages/Planos';
import RecuperaSenha from './pages/RecuperaSenha';
import Recursos from './pages/Recursos';
import Sobre from './pages/Sobre';
import Suporte from './pages/Suporte';
import Tutorial from './pages/Tutorial';

// Layout com Navbar para rotas públicas
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas com Navbar */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/home" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/cadastro" element={<PublicLayout><Cadastro /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/recuperasenha" element={<PublicLayout><RecuperaSenha /></PublicLayout>} />
        <Route path="/confirmacaodeemail" element={<PublicLayout><ConfirmacaoDeEmail /></PublicLayout>} />
        <Route path="/sobre" element={<PublicLayout><Sobre /></PublicLayout>} />
        <Route path="/recursos" element={<PublicLayout><Recursos /></PublicLayout>} />
        <Route path="/contato" element={<PublicLayout><Contato /></PublicLayout>} />
        <Route path="/planos" element={<PublicLayout><Planos /></PublicLayout>} />
        
        {/* Rotas que requerem autenticação mas não perfil completo */}
        <Route path="/completarcadastro" element={
          <ProtectedRoute requireCompleteProfile={false}>
            <CompletarCadastro />
          </ProtectedRoute>
        } />
        
        {/* Rotas que requerem autenticação e perfil completo */}
        <Route path="/calculadora" element={
          <ProtectedRoute>
            <Calculator />
          </ProtectedRoute>
        } />
        <Route path="/arealogada" element={
          <ProtectedRoute>
            <AreaLogada />
          </ProtectedRoute>
        } />
        <Route path="/tutorial" element={
          <ProtectedRoute>
            <Tutorial />
          </ProtectedRoute>
        } />
        <Route path="/suporte" element={
          <ProtectedRoute>
            <Suporte />
          </ProtectedRoute>
        } />
        <Route path="/minhaconta" element={
          <ProtectedRoute>
            <MinhaConta />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;