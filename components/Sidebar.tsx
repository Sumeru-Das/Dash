"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-color-2 p-6 pt-28 text-color-1 max-sm:hidden lg:w-[264px] ">
      <div className="flex flex-1 flex-col gap-6 mt-10">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center py-4  rounded-lg justify-start",
                {
                  "underline decoration-4 underline-offset-4 border-[2px] pl-2 border-color-3": isActive,
                }
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={30}
                height={30}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
