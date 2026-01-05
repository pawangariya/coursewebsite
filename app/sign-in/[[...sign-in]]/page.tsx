import { SignIn } from '@clerk/nextjs';

export default async function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
            card: 'shadow-xl',
          },
        }}
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard" // ✅ THIS forces dashboard after login
      />
    </div>
  );
}
