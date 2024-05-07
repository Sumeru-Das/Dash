import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-color-2 px-6 py-4 lg:px-10 ">
      <Link href="/" className="flex items-center gap-2 glassmorphism">
        <Image
          src="/icons/logo.svg"
          width={49}
          height={42}
          alt="yoom logo"
          className="max-sm:size-10 pl-2 "
        />
        <p className="text-[26px] font-extrabold text-black max-sm:hidden pr-2 ">
          Dash
        </p>
      </Link>
      <div className="flex-between gap-10">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
