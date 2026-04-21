import { StackClientApp } from '@stackframe/stack';

const projectId = import.meta.env.VITE_STACK_PROJECT_ID;
const publishableClientKey = import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY;

if (!projectId || !publishableClientKey) {
  throw new Error(
    'Missing Stack Auth env vars: VITE_STACK_PROJECT_ID and VITE_STACK_PUBLISHABLE_CLIENT_KEY'
  );
}

export const stackApp = new StackClientApp({
  projectId,
  publishableClientKey,
  tokenStore: 'cookie',
  urls: {
    signIn: '/login',
    signUp: '/signup',
    afterSignIn: '/',
    afterSignUp: '/',
    afterSignOut: '/',
  },
});
