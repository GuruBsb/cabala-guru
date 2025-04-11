# Cabala Guru

Aplicação web para cálculos de numerologia cabalística desenvolvida em React com TypeScript.

## Visão Geral do Projeto

O Cabala Guru é uma aplicação web focada em cálculos de numerologia cabalística. A aplicação oferece uma interface moderna e responsiva, utilizando Tailwind CSS para estilização, com um sistema completo de navegação e áreas públicas e privadas.

## Tecnologias Principais
- React 19.1.0
- TypeScript
- Vite 6.2.5
- Tailwind CSS 3.4.1
- React Router DOM 7.5.0
- Supabase

## Estrutura de Diretórios
```
src/
├── components/
│   ├── AdminRoute.tsx
│   ├── CalculatorForm.tsx
│   ├── ProtectedRoute.tsx
│   ├── ResultTabs.tsx
│   ├── VirtualKeyboard.tsx
│   ├── UI/
│   │   └── Navbar.tsx
│   └── tabs/
│       ├── ArcanosTab.tsx
│       ├── QuadroTab.tsx
│       └── TrianguloTab.tsx
├── pages/
│   ├── Home.tsx
│   ├── Calculator.tsx
│   ├── AreaLogada.tsx
│   ├── Tutorial.tsx
│   ├── Suporte.tsx
│   ├── Sobre.tsx
│   ├── Recursos.tsx
│   ├── Contato.tsx
│   └── Planos.tsx
├── types/
│   ├── api.ts
│   └── globals.d.ts
└── contexts/
    └── AuthContext.tsx
```

## Funcionalidades

- Sistema completo de rotas com áreas públicas e privadas
- Navegação responsiva com menu mobile
- Formulário de calculadora numerológica com validação
- Sistema de abas para exibição dos resultados
- Páginas informativas sobre a plataforma
- Sistema de autenticação

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:5173](http://localhost:5173) para visualizá-lo no navegador.

### `npm run build`

Compila o aplicativo para produção na pasta `dist`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

### `npm run preview`

Inicia um servidor local para visualizar a versão de produção compilada.

### `npm run lint`

Executa a verificação de linting no código.

## Licença

Este projeto está sob licença privada.