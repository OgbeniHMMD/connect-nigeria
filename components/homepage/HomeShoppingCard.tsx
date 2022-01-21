import TheButton from "../_partials/TheButton";

export default function HomeShpopingCard() {
  return (
    <div className="h-full w-1/2">
      <div
        className="bg-no-repeat bg-cover bg-center rounded-lg flex flex-col h-32 w-full justify-between overflow-hidden md:h-64"
        style={{ backgroundImage: `url(/images/dummy-car.jpeg)` }}
      />
      <div className="pt-2">
        <div className="font-medium text-lg pb-1 text-gray-900 ">
          Foreign used Toyota
        </div>
        <div className="font-bold text-xl text-primary pb-2"> ₦2,400,000</div>
        <TheButton secondary={true} dense={true}>
          buy now
        </TheButton>
      </div>
    </div>
  );
}

export function HomeFeaturedShoppingCard() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center rounded-lg flex flex-col  minw-full justify-between overflow-hidden lg:w-1/3"
      style={{ backgroundImage: `url(/images/dummy-car.jpeg)` }}
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
            <div className="font-medium text-white pb-1 md:text-lg">
              Foreign used Toyota
            </div>
            <div className="font-bold text-lg text-primary md:text-xl">
              ₦2,400,000
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
