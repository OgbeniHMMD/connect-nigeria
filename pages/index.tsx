import Head from "next/head";
import HomeHeroSection from "../components/homepage/HomeHeroSection";
import HomeShoppingSection from "../components/homepage/HomeShoppingSections";
import HomeStepsListItems from "../components/homepage/HomeStepsListItems";
import TheFooter from "../components/_partials/TheFooter";
import TheHeader from "../components/_partials/TheHeader";
import TopNavigationBar from "../components/_partials/TopNavigationBar";

export default function HomePage() {
  return (
    <main className="bg-white font-body">
      <Head>
        <title>Bringing you our products and deals | ConnectNigeria.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col h-screen justify-between">
        <TheHeader />
        <TopNavigationBar />
        <HomeHeroSection />
      </header>

      <HomeShoppingSection />
      <HomeStepsListItems />
      <TheFooter />
    </main>
  );
}
