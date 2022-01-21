import HomeShoppingCard, { HomeFeaturedShoppingCard } from "./HomeShoppingCard";

export default function HomeShoppingSection({ white }: Props) {
  return (
    <section
      id="car"
      className={`py-12 md:py-20 ${white ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <h2 className="font-bold text-lg uppercase lg:text-2xl">Cars</h2>
          <a className="flex font-bold space-x-2 text-primary items-center hover:underline">
            <div>List More</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </nav>

        <div className="space-y-8 py-8 justify-between md:flex md:space-x-8 md:space-y-0 md:py-12">
          <HomeFeaturedShoppingCard />
          <div className="flex flex-grow space-x-8 justify-between">
            <HomeShoppingCard />
            <HomeShoppingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

interface Props {
  white?: boolean;
}
