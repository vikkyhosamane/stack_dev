"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";
import { toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

const SocialAuthForm = () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";

  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);
      toast.add({
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "There was an error signing in. Please try again.",
        type: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasses} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Logo"
          width={20}
          height={20}
          className="inverted-colors mr-2.5 object-contain"
        />
        <span>Sign in with GitHub</span>
      </Button>

      <Button className={buttonClasses} onClick={() => handleSignIn("google")}>
        <Image src="/icons/google.svg" alt="Google Logo" width={20} height={20} className="mr-2.5 object-contain" />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
