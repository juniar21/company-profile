import Background from "@/components/background";
import CardMe from "@/components/cardMe";

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
      </div>
    </div>
  );
}
