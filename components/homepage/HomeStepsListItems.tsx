import TheButton from "../_partials/TheButton";

export default function HomeStepsListItems() {
  const steps = [
    "Lorem ipsum dolor sit amet, consectetur",
    "Lorem ipsum dolor consectetur sit amet",
    "Lorem dolor sit ipsum amet, consectetur",
  ];
  return (
    <section className="bg-gray-100 py-8">
      <header className="bg-primary text-white md:text-lg">
        <div className="container font-bold mx-auto text-center tracking-wide p-4 py-6 capitalize">
          three steps to list your items on ConnectNigeria
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-x-4 justify-evenly items-center md:flex-row">
          {steps.map((step, i) => (
            <div key={i} className="max-w-sm py-8 md:py-16">
              <div className="border-primary rounded-full flex font-bold mx-auto border-4 h-20 text-primary text-3xl w-20 justify-center items-center">
                {i + 1}
              </div>
              <div className="font-bold text-lg text-center pt-4 md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <TheButton secondary={true}>List Now</TheButton>
        </div>
      </div>
    </section>
  );
}
