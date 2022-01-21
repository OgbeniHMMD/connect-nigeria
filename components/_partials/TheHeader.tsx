import Link from "next/link";
import TheButton from "./TheButton";

export default function TheHeader() {
  return (
    <header className="container flex mx-auto w-full p-4 justify-between items-center lg:py-8">
      <Link href="/">
        <a className="">
          <img src="/images/logo.png" className="h-auto w-58" alt="logo" />
        </a>
      </Link>

      <div className="font-medium text-xl text-primary italic hidden md:block">
        Bringing you our products and deals
      </div>

      <div>
        <TheButton>List now</TheButton>
      </div>
    </header>
  );
}
