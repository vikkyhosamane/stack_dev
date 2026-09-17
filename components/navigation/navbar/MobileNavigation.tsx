import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/hamburger.svg"
          alt="Menu Icon"
          width={36}
          height={36}
          className="inverted-colors cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <SheetHeader>
          <SheetTitle className="hidden">Mobile Navigation</SheetTitle>
          <div className="w-full">
            <Link href="/" className="flex items-center gap-1">
              <Image src="images/site-logo.svg" alt="DevFlow Logo" width={24} height={24} />
              <div className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
                Dev
                <span className="text-primary-500">Flow</span>
              </div>
            </Link>

            <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
              <SheetClose>
                <section className="flex h-full flex-col gap-6 pt-16">
                  <NavLinks isMobileNav />
                </section>
              </SheetClose>

              <div className="flex flex-col gap-3">
                <SheetClose>
                  <Link
                    href={ROUTES.SIGN_IN}
                    className="button-primary small-medium btn-secondary block min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    <span className="primary-text-gradient">Sign In</span>
                  </Link>
                </SheetClose>

                <SheetClose>
                  <Link
                    href={ROUTES.SIGN_UP}
                    className="small-medium light-border-2 btn-tertiary text-dark-400_light900 block min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    <span className="primary-text-gradient">Sign Up</span>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
