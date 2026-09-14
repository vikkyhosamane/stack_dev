"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", username: "", name: "" }}
        onSubmit={async (data) => {
          console.log("Submitted Data:", data);
          return { success: true };
        }}
      />
    </div>
  );
};

export default SignUp;
