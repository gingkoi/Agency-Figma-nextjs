import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main_bg h-full font-roboto ">
      <div className="lg:max-w-[1400px] w-screen px-5 lg:mx-auto">
        <Navbar />
        <Hero />
        <Offers />
        <Testimonials />
        <Plans />
      </div>
    </main>
  );
}
