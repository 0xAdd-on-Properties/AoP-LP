import { StackClientApp } from '@hexclave/next';

export const stackApp = new StackClientApp({
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID!,
  publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY!,
  tokenStore: 'cookie',
  devTool: false,
  urls: {
    signIn: '/login',
    signUp: '/signup',
    afterSignIn: '/',
    afterSignUp: '/',
    afterSignOut: '/',
  },
});
