"use client";
import Image from "next/image";
import CarouselDefault from "../../components/carousel";
import FadeContent from "@/components/fadecontent";

export default function Welcome() {
  return (
    <div className="mt-[-50px] max-lg:mt-[-45px]">
      <div className="relative w-full">
        <CarouselDefault />
        <div className="absolute top-0 left-0 w-full flex justify-center items-center text-white "></div>
        <div className="w-full flex justify-center items-center flex-col absolute md:top-[300px] mx-auto top-[200px]">
          <p className="font-bold lg:text-[80px] text-white text-[30px]">
            MORE THAN JUST COFFEE
          </p>

          <p className="text-white">
            Curabitur gravida accumsan quam at cursus. Phasellus vel purus vitae
            urna venenatis
          </p>
          <p className="text-white">
            pulvinar. Vivamus commodo velit sed dolor euismod consequat.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mx-auto mt-[40px]">
        <h1 className="font-bold text-[20px] text-amber-900">Welcome to</h1>
        <h2 className="font-bold md:text-[40px] text-[35px]">
          Sopai Coffee Shop
        </h2>
      </div>
      <div className="md:w-full flex flex-col justify-center items-center mt-6 text-[15px] ml-5 mr-5">
        <p>
          Nam rhoncus risus ac nisl convallis, id pretium sapien molestie.
          Vivamus lobortis at dui nec tincidunt. Pellentesque pellentesque
        </p>
        <p>
          egestas leo, eget commodo elit imperdiet at. Nam elementum posuere
          felis eget fermentum.
        </p>
      </div>
      <FadeContent>
        <div className="container mx-auto mt-8">
          <div className="p-2">
            <div className="flex flex-wrap justify-center max-md:flex-col gap-[50px]">
              <div className="flex flex-col md:w-[400px] md:h-[500px] gap-2 w-[350px] ">
                <Image
                  src={"/carousel1.jpg"}
                  alt="Image 1"
                  height={400}
                  width={400}
                />
                <p className="font-mono text-[25px] text-amber-800">
                  Beautiful Place
                </p>
                <p>
                  Donec felis libero, feugiat nec dignissim id, viverra in nisl.
                  Donec ligula tortor, viverra ut interdum sed, eleifend ac
                  nulla.
                </p>
              </div>

              <div className="flex flex-col md:w-[400px] md:h-[500px] gap-2 w-[350px] ">
                <Image
                  src={"/carousel2.jpg"}
                  alt="Image 2"
                  height={400}
                  width={400}
                />
                <p className="font-mono text-[25px] text-amber-800">
                  Great Service
                </p>
                <p>
                  Donec felis libero, feugiat nec dignissim id, viverra in nisl.
                  Donec ligula tortor, viverra ut interdum sed, eleifend ac
                  nulla.
                </p>
              </div>

              <div className="flex flex-col md:w-[400px] md:h-[500px] gap-2 w-[350px]">
                <Image
                  src={"/carousel3.jpg"}
                  alt="Image 3"
                  height={400}
                  width={400}
                />
                <p className="mt-7 font-mono text-[25px] text-amber-800">
                  Work Spot
                </p>
                <p>
                  Donec felis libero, feugiat nec dignissim id, viverra in nisl.
                  Donec ligula tortor, viverra ut interdum sed, eleifend ac
                  nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
}
