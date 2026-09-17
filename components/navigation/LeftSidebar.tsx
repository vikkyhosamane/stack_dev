import Link from "next/link";
import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-66.5 dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-6">
        <Link
          href={ROUTES.SIGN_IN}
          className="button-primary small-medium btn-secondary block min-h-10.25 w-full rounded-lg px-4 py-3 text-center shadow-none"
        >
          <Image src="/icons/account.svg" alt="Account" width={20} height={20} className="inverted-colors lg:hidden" />
          <span className="primary-text-gradient hidden lg:inline">Sign In</span>
        </Link>

        <Link
          href={ROUTES.SIGN_UP}
          className="small-medium light-border-2 btn-tertiary text-dark-400_light900 block min-h-10.25 w-full rounded-lg px-4 py-3 text-center shadow-none"
        >
          <Image src="/icons/account.svg" alt="Account" width={20} height={20} className="inverted-colors lg:hidden" />
          <span className="primary-text-gradient hidden lg:inline">Sign Up</span>
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
