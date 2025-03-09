"use client";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDefault() {
  return (
    <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent>
        <CarouselItem >
          <Image className="w-full md:h-[900px] xs:h-[300px] h-[500px]"
            src={"/background.jpg"}
            alt="Image 1"
            height={300}
            width={300}
            />
        </CarouselItem>
        <CarouselItem >
          <Image className="w-full md:h-[900px] xs:h-[300px] h-[500px] xs:w-full"
            src={"/backgorund2.jpg"}
            alt="Image 2"
            height={300}
            width={300}
            />
        </CarouselItem>
        <CarouselItem >
          <Image className="w-full md:h-[900px] xs:h-[300px] h-[500px] xs:w-full"
            src={"/background3.jpg"}
            alt="Image 3"
            height={300}
            width={300}
            />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

