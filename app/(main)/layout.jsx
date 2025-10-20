"use client";

import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* When the user is signed in */}
      <SignedIn>
        <div className="container mx-auto mt-24 mb-20 px-4">
          {children}
        </div>
      </SignedIn>

      {/* When the user is NOT signed in */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default MainLayout;
