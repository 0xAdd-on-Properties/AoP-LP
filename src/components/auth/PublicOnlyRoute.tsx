import { Navigate } from 'react-router-dom';
import { useUser } from '@stackframe/stack';
import type { ReactNode } from 'react';

interface PublicOnlyRouteProps {
  children: ReactNode;
}

export default function PublicOnlyRoute({ children }: PublicOnlyRouteProps) {
  const user = useUser();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
