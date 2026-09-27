import { SignIn } from '@hexclave/next';

export default function Login() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] py-16 px-4">
      <div className="max-w-md mx-auto">
        <SignIn />
      </div>
    </main>
  );
}
