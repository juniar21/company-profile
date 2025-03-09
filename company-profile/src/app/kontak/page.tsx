import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsFillPhoneFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Background from "@/components/background";
import Motion from "@/components/motiontwo";


export default function Kontak() {
  return (
    <div>
      <Background namepage="Kontak" />
      <div className="container mx-auto">
        <div className="p-4">
          <Motion direction="left" >

          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center lg:w-1/4 max-sm:w-full sm:w-1/2">
              <FaMapMarkerAlt className="w-[45px] h-[80px] text-amber-800" />
              <p className="font-bold text-[20px]">Physical Address</p>
              <p>
                304 North Cardinal St. <br />
                Dorchester Center, MA 02124
              </p>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-1/4 max-sm:w-full sm:w-1/2">
              <IoTimeSharp className="w-[60px] h-[100px] text-amber-800" />
              <p className="font-bold text-[20px]">Work Hours</p>
              <p>
                Monday to Friday: 7am – 7pm <br />
                Weekend: 10am – 5pm4
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/4 max-sm:w-full sm:w-1/2">
              <IoMdMail className="w-[60px] h-[110px] text-amber-800" />
              <p className="font-bold text-[20px]">Email Address</p>
              <p>
                info@company.com <br />
                contact@company.com
              </p>
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/4 max-sm:w-full sm:w-1/2">
              <BsFillPhoneFill className="w-[60px] h-[100px] text-amber-800" />
              <p className="font-bold text-[20px]">Phone Numbers</p>
              <p>
                1-555-123-4567 <br />
                1-800-123-4567
              </p>
            </div>
          </div>
          </Motion>

          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-start items-center mt-[70px] text-[40px] gap-5 w-full">
              <p>We’d love To Hear From You!</p>
              <div className="text-[15px] w-full max-w-[600px]">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-slate-500">
                      First name & Last name:
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-slate-800 p-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-slate-500">Email Address:</label>
                    <input
                      type="text"
                      className="border-b-2 border-b-slate-800 p-2"
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-slate-500">Subject:</label>
                    <input
                      type="text"
                      className="border-b-2 border-b-slate-800 p-2"
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="text-slate-500">
                      Comment or Message:
                    </label>
                    <textarea className="border-b-2 border-b-slate-800 p-2 h-[150px]"></textarea>
                  </div>
                </form>
                <Button
                  variant="destructive"
                  className="mt-6 bg-green-500 w-full"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
