import PublicOnlyRoute from '@/src/components/auth/PublicOnlyRoute';
import Login from '@/src/pages/Login';

export default function Page() {
  return <PublicOnlyRoute><Login /></PublicOnlyRoute>;
}
