import PublicOnlyRoute from '@/src/components/auth/PublicOnlyRoute';
import Signup from '@/src/screens/Signup';

export default function Page() {
  return <PublicOnlyRoute><Signup /></PublicOnlyRoute>;
}
