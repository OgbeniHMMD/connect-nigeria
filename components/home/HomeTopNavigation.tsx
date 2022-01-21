import Link from "next/link";
import TheButton from "../_partials/TheButton";

export default function HomeTopNavigation() {
  const links = ["businesses", "cars", "deals", "real estate", "events"];

  return (
    <section>
      <div className="container flex mx-auto w-full p-4 justify-between items-center lg:py-8">
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
      </div>

      <nav className="bg-secondary font-bold text-white py-4 px-2 md:px-4">
        <div className="container divide-white flex mx-auto divide-x-2 items-center justify-between">
          {links.map((link) => (
            <Link href={`#${link}`} key={link}>
              <a className="w-full hover:underline">
                <div className="rounded text-center text-xs w-full capitalize md:text-sm lg:text-lg lg:p-2">
                  {link}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
