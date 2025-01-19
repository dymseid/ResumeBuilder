import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md items-center">
      <div className="flex items-center gap-3">
        <Link to={"/dashboard"}>
          <img
            src="/logo.svg"
            className="cursor-pointer"
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
        <span className="text-3xl font-bold">JobFolio</span>
      </div>
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <Link to={"/auth/sign-in"}>
            <Button>Sign In</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
