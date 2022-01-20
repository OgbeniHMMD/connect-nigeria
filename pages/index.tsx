import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white font-poppins">
      <Head>
        <title>ConnectNigeria.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <section className="flex flex-col h-screen justify-between">
          <header className="border-b">
            <div className="container flex mx-auto w-full p-4 justify-between items-center lg:py-8">
              <h1 className="font-bold text-3xl underline">Hello world!</h1>
              <div className="font-medium text-xl text-primary italic hidden md:block">
                Bringing you our products and deals
              </div>
              <div>
                <button className="bg-primary rounded font-bold text-sm text-white py-2 px-8 uppercase md:text-base lg:py-4 lg:px-12">
                  List now
                </button>
              </div>
            </div>
          </header>
          <nav className="bg-secondary font-bold text-white p-4">
            <div className="container divide-white flex mx-auto divide-x-2 justify-evenly">
              {[...new Array(5)].map((el, i) => (
                <Link href="#" key={i}>
                  <a className="w-full hover:underline">
                    <div className="rounded text-center text-sm w-full lg:text-lg lg:p-2">
                      ccc
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </nav>
          <section
            className="bg-no-repeat bg-cover bg-fixed flex h-full p-8 justify-center items-end lg:p-24"
            style={{ backgroundImage: `url(/images/hero-bg.jpeg)` }}
          >
            <button className="bg-primary rounded font-bold text-sm text-white py-2 px-8 uppercase md:text-base md:text-lg md:py-4 md:px-12">
              Shop now
            </button>
          </section>
        </section>

        <div className="py-12">
          <div className="container mx-auto">
            <nav className="flex justify-between items-center">
              <h2 className="font-bold text-lg uppercase lg:text-2xl">Cars</h2>
              <a className="font-medium text-primary">List More</a>
            </nav>
            <div className="py-8">xxx</div>
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 text-center text-sm text-gray-800">
            <div>
              26A, Awori Road, Off Corporation Drive, Dolphine Estate, Ikoyi,
              Lagos,Nigeria
            </div>
            <div>P:0809 800 5000</div>
            <div>E: businesses@connectnigeria.com</div>

            <div>social links here</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
