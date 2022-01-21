import TheButton from "../_partials/TheButton";

export default function HomeShpopingCard({ name, price, slug, image }: Items) {
  return (
    <div className="h-full w-1/2">
      <div
        className="bg-no-repeat bg-cover bg-center rounded-lg flex flex-col h-32 w-full justify-between overflow-hidden md:h-64"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="pt-2">
        <div className="font-medium text-lg pb-1 text-gray-900 ">{name}</div>
        <div className={`font-bold text-xl pb-2 !!price ? 'text-primary' : ''`}>
          {!!price ? `₦${price.toLocaleString()}` : "N/A"}
        </div>
        <TheButton secondary={true} dense={true} mobileWide={true}>
          buy now
        </TheButton>
      </div>
    </div>
  );
}

export function HomeFeaturedShoppingCard({ name, price, slug, image }: Items) {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center rounded-lg flex flex-col  minw-full justify-between overflow-hidden lg:w-1/3"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-right p-4 pr-0">
        <button className="bg-primary font-bold text-sm text-white py-1 px-2 uppercase">
          featured
        </button>
      </div>
      <div className="p-16 md:p-0" />
      <div className="opacity-85">
        <div className="bg-gradient-to-t from-black flex space-x-2 p-4 justify-between items-center">
          <div>
            <div className="font-medium text-white pb-1 md:text-lg">{name}</div>
            <div
              className={`font-bold text-xl pb-2 !!price ? 'text-primary' : ''`}
            >
              {!!price ? `₦${price.toLocaleString()}` : "N/A"}
            </div>
          </div>
          <TheButton secondary={true} dense={true}>
            buy now
          </TheButton>
        </div>
      </div>
    </div>
  );
}

interface Items {
  name: string;
  price: number;
  slug: string;
  image: string;
}
