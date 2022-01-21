import Link from "next/link";

export default function TheFooter() {
  const socialLinks = [
    {
      title: "Instagram",
      icon: "/icons/instagram.svg",
      url: "#",
    },
    {
      title: "Facebook",
      icon: "/icons/facebook.svg",
      url: "#",
    },
    {
      title: "Twitter",
      icon: "/icons/twitter.svg",
      url: "#",
    },
    {
      title: "LinkedIn",
      icon: "/icons/linkedn.svg",
      url: "#",
    },
  ];

  return (
    <footer className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-4 text-center text-sm text-gray-800">
          <div className="flex justify-center">
            <Link href="/">
              <a className="">
                <img
                  src="/images/logo.png"
                  className="h-auto w-58"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div>
            26A, Awori Road, Off Corporation Drive, Dolphine Estate, Ikoyi,
            Lagos,Nigeria
          </div>
          <div>P:0809 800 5000</div>
          <div>E: businesses@connectnigeria.com</div>

          <div className="flex space-x-4 justify-center">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                title={link.title}
                className="rounded-full bg-gray-300 h-12 w-12"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
