import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StackProvider, StackTheme } from '@stackframe/stack';
import App from './App.tsx';
import AuthStateSync from './components/auth/AuthStateSync.tsx';
import { stackApp } from './lib/stack.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StackProvider app={stackApp}>
      <StackTheme>
        <AuthStateSync />
        <App />
      </StackTheme>
    </StackProvider>
  </StrictMode>
);
