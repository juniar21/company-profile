import Hero from "@/components/hero";
import Welcome from "@/app/home/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Page Home",
  openGraph: {},
};

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <div>
          <div className="w-full flex justify-center items-center mt-[30px]">
            <Welcome />
          </div>
          <div>
            <Hero />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}