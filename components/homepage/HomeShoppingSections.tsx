import HomeShoppingCard, { HomeFeaturedShoppingCard } from "./HomeShoppingCard";
import listings from "../../public/dummy-data.json";

export default function HomeShoppingSection({ white }: Props) {
  return (
    <section id="shopping">
      {listings.map((shop, i) => (
        <section
          key={i}
          id={shop.name}
          className={`py-12 md:py-20 ${i % 2 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <h2 className="font-bold text-lg uppercase lg:text-2xl">
                {shop.name}
              </h2>
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

            <div className="space-y-8 pt-8 justify-between md:flex md:space-x-8 md:space-y-0 md:pt-12">
              <HomeFeaturedShoppingCard
                name={shop.featured.name}
                slug={shop.featured.slug}
                price={shop.featured.price}
                image={shop.featured.image}
              />
              <div className="flex flex-grow space-x-4 justify-between md:space-x-8">
                {shop.items.map((item, i) => (
                  <HomeShoppingCard
                    key={i}
                    name={item.name}
                    slug={item.slug}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

interface Props {
  white?: boolean;
}
