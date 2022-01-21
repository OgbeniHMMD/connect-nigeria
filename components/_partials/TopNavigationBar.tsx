import Link from "next/link";

export default function TopNavigationBar() {
  const links = ["businesses", "cars", "deals", "real estate", "events"];

  return (
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
  );
}
