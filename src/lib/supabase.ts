import { createClient, User } from '@supabase/supabase-js';

// URLs e chaves do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificar se as variáveis de ambiente estão definidas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Variáveis de ambiente do Supabase não definidas! Verifique o arquivo .env');
}

// NOTA: Quando usar esta configuração, você poderá ver um erro 404 no console relacionado a
// "GET https://xehxagwjuwynntiwlbjn.supabase.co/rest/v1/_realtime?select=*&limit=1"
// Este é um erro conhecido do Supabase e não afeta a funcionalidade da aplicação.
// Este endpoint não é necessário para a aplicação funcionar e pode ser ignorado.
// Futuras versões do Supabase podem corrigir este problema.

// Configuração padrão, conforme documentação oficial:
// https://supabase.com/docs/reference/javascript/initializing
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Para debug: Verificar eventos de autenticação
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event);
  if (session) {
    console.log('User session found');
  }
})

// Armazenamento em cache para getUser
let cachedUser: User | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 60000; // 1 minuto

/**
 * Obtém o usuário atualmente autenticado
 * Com implementação de cache para reduzir chamadas à API
 */
export const getUser = async () => {
  try {
    const currentTime = Date.now();
    
    // Se tiver um usuário em cache e o cache não expirou, retorne-o
    if (cachedUser && (currentTime - lastFetchTime < CACHE_TTL)) {
      return cachedUser;
    }
    
    // Usando a API padrão conforme documentação
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
    
    // Atualizar o cache
    cachedUser = data.user;
    lastFetchTime = currentTime;
    
    return data.user;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }
}

// Limpar cache quando o estado de autenticação mudar
supabase.auth.onAuthStateChange(() => {
  cachedUser = null;
  lastFetchTime = 0;
});

/**
 * Obtém a sessão atual
 */
export const getSession = async () => {
  try {
    // Usando a API padrão conforme documentação
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Erro ao buscar sessão:', error);
      return null;
    }
    return data.session;
  } catch (error) {
    console.error('Erro ao buscar sessão:', error);
    return null;
  }
}

/**
 * Verifica se o perfil do usuário está completo
 */
export const isProfileComplete = async () => {
  try {
    const user = await getUser();
    if (!user) return false;
    
    // Usando RPC para evitar problemas com RLS
    const { data, error } = await supabase
      .rpc('is_user_profile_complete', {
        user_id: user.id
      });
      
    if (error) {
      console.error('Erro ao verificar perfil:', error);
      return false;
    }
    
    return data || false;
  } catch (error) {
    console.error('Erro ao verificar perfil:', error);
    
    // Tentar um fallback direto à tabela como alternativa
    try {
      const user = await getUser();
      if (!user) return false;
      
      const { data, error } = await supabase
        .from('cadastro')
        .select('is_profile_complete')
        .eq('id', user.id)
        .single();
        
      if (error) {
        console.error('Erro ao verificar perfil (fallback):', error);
        return false;
      }
      
      return data?.is_profile_complete || false;
    } catch (fallbackError) {
      console.error('Erro no fallback:', fallbackError);
      return false;
    }
  }
}