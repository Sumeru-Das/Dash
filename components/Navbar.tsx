import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-color-2 px-6 py-4 lg:px-10 ">
      <Link href="/" className="flex items-center gap-2 glassmorphism w-fit">
        <Image
          src="/icons/logo.svg"
          width={49}
          height={42}
          alt="yoom logo"
          className="p-2 "
        />
        <p className="text-[26px] font-extrabold text-black max-sm:hidden pr-2 ">
          Dash
        </p>
      </Link>
      <div className="flex-between gap-10">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
          <SignOutButton>
            <Button className="glassmorphism2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
              </svg>
            </Button>
          </SignOutButton>
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
