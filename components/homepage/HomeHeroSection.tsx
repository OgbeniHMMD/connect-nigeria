import Link from "next/link";
import TheButton from "../_partials/TheButton";

export default function HomeHeroSection() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-fixed flex h-full p-8 justify-center items-end lg:p-24"
      style={{ backgroundImage: `url(/images/hero-bg.jpeg)` }}
    >
      <Link href="#shopping">
        <a>
          <TheButton>Shop now</TheButton>
        </a>
      </Link>
    </section>
  );
}
