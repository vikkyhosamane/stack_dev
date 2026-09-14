"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={async (data) => {
          console.log("Submitted Data:", data);
          return { success: true };
        }}
      />
    </div>
  );
};

export default SignIn;
