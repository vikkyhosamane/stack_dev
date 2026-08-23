"use client";

import { signOut } from "next-auth/react";
import ROUTES from "@/constants/routes";
import { Button } from "@base-ui/react";

const LogoutButton = () => {
  return (
    <Button type="button" onClick={() => signOut({ redirectTo: ROUTES.SIGN_IN })}>
      LogOut
    </Button>
  );
};

export default LogoutButton;
