import TheButton from "../_partials/TheButton";

export default function HomeShpopingCard({ white }) {
  return (
    <div className={`h-full w-1/2 ${white ? "bg-white" : "bg-gray-100"}`}>
      <div
        className="bg-no-repeat bg-cover bg-center rounded-lg flex flex-col h-64 w-full justify-between overflow-hidden "
        style={{ backgroundImage: `url(/images/dummy-car.jpeg)` }}
      />
      <div className="pt-2">
        <div className="font-medium text-lg pb-1 text-gray-900 ">
          Foreign used Toyota
        </div>
        <div className="font-bold text-primary pb-2"> ₦2,400,000</div>
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
      className="bg-no-repeat bg-cover bg-center rounded-lg flex flex-col min-h-80 w-full justify-between overflow-hidden md:min-h-full md:w-1/3"
      style={{ backgroundImage: `url(/images/dummy-car.jpeg)` }}
    >
      <div className="text-right p-4 pr-0">
        <button className="bg-primary font-bold text-white py-1 px-2 uppercase">
          featured
        </button>
      </div>
      <div className="opacity-85">
        <div className="bg-gradient-to-t from-black flex p-4 justify-between items-center">
          <div>
            <div className="font-medium text-lg text-white pb-1">
              Foreign used Toyota
            </div>
            <div className="font-bold text-primary"> ₦2,400,000</div>
          </div>
          <TheButton secondary={true} dense={true}>
            buy now
          </TheButton>
        </div>
      </div>
    </div>
  );
}
