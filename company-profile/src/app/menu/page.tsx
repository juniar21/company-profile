import Background from "@/components/background";
import CardMe from "@/components/cardMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Page Menu",
};


const IsianCard = [
  {
    link: "/menu2.jpg",
    name: "Irish Coffee",
    description: "An espresso pulled long",
    price: "Rp35.000",
  },
  {
    link: "/menu3.jpg",
    name: "Green Tea",
    description: "An espresso pulled long",
    price: "Rp40.000",
  },
  {
    link: "/menu4.jpg",
    name: "Cold Coffee",
    description: "An espresso pulled long",
    price: "Rp45.000",
  },
  {
    link: "/menu5.jpg",
    name: "Amareto",
    description: "An espresso pulled long",
    price: "Rp37.000",
  },
  {
    link: "/menu6.jpg",
    name: "Cappucino",
    description: "An espresso pulled long",
    price: "Rp50.000",
  },
  {
    link: "/menu7.jpg",
    name: "Americano",
    description: "An espresso pulled long",
    price: "Rp40.000",
  },
];

const IsianCard2 = [
  {
    link: "/food1.jpeg",
    name: "Pork Belly",
    description: "Steak, Ginger Flakes, Pepper",
    price: "Rp35.000",
  },
  {
    link: "/food2.jpeg",
    name: "Salmon Grilled",
    description: "Steak, Ginger Flakes, Pepper",
    price: "Rp40.000",
  },
  {
    link: "/food3.jpeg",
    name: "Crispy Tuna",
    description: "Steak, Ginger Flakes, Pepper",
    price: "Rp45.000",
  },
  {
    link: "/food4.jpeg",
    name: "Ginger Steak",
    description: "Steak, Ginger Flakes, Pepper",
    price: "Rp37.000",
  },
  {
    link: "/food5.jpeg",
    name: "Spinach Shrimp",
    description: "Steak, Ginger Flakes, Pepper",
    price: "Rp50.000",
  },
  {
    link: "/food6.jpeg",
    name: "Chicken Stew",
    description: "Steak, Ginger Flakes, Pepper",
    price: "Rp40.000",
  },
];

export default function Menu() {
  return (
    <div>
      <Background namepage="Menu" />
      <div className="container mx-auto">
        <div className="p-4 text-center">
          <p className="text-[60px] text-amber-950">
            Drink <span className="font-bold text-black">Menu</span>
          </p>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-5 justify-center items-center text-center">
            {IsianCard.map((item, idx) => {
              return (
                <div key={idx}>
                  <CardMe
                    link={item.link}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-4 text-center">
          <p className="text-[60px] text-amber-950">
            Food <span className="font-bold text-black">Menu</span>
          </p>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-5 justify-center items-center text-center">
            {IsianCard2.map((item, idx) => {
              return (
                <div key={idx}>
                  <CardMe
                    link={item.link}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
