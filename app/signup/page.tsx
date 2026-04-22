import PublicOnlyRoute from '@/src/components/auth/PublicOnlyRoute';
import Signup from '@/src/pages/Signup';

export default function Page() {
  return <PublicOnlyRoute><Signup /></PublicOnlyRoute>;
}
