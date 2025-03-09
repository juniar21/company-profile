import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-7 bg-amber-700 pt-[40px] h-[200px] bg-[url(/footer.jpg)]">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="font-bold font-mono text-[30px]"> Sopai Coffee Shop</div>
        <div className="flex gap-2">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>GALERY</p>
          <p>CONTACT</p>
        </div>
        <div className="flex gap-3">
          <FaSquareXTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
        <p className="text-[8px]">
          Copyright @2021 All right reserved | This Template is Made By Juniar
          Arrang Bua
        </p>
      </div>
    </div>
  );
}
