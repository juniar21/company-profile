import Image from "next/image";
import FadeContent from "./fadecontent";

interface ICard {
  link: string;
  name: string;
  description: string;
  price: string;
}

export default function CardMe({ link, name, description, price }: ICard) {
  return (
    <FadeContent>
      <div className="flex border border-amber-800 gap-2 xl:w-[600px] rounded-md hover:scale-110">
        <Image
          src={link}
          width={150}
          height={100}
          alt="card"
          className="max-sm:w-[100px] xl:w-[180px] "
        />
        <div className="flex items-center w-1/2">
          <div className="justify-center">
            <p className="text-[20px] font-bold">{name}</p>
            <p className="text-[15px]">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <p className="font-bold">{price}</p>
        </div>
      </div>
    </FadeContent>
  );
}
