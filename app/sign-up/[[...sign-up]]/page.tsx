'use client';

import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
            card: "shadow-xl",
          },
        }}
        signInUrl="/sign-in"
        afterSignUpUrl="/dashboard" // ✅ always redirect to dashboard after sign-up
      />
    </div>
  );
};

export default SignUpPage;
