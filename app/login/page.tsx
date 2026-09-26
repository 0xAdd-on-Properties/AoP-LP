import PublicOnlyRoute from '@/src/components/auth/PublicOnlyRoute';
import Login from '@/src/screens/Login';

export default function Page() {
  return <PublicOnlyRoute><Login /></PublicOnlyRoute>;
}
