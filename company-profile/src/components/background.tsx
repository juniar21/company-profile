interface IPage {
    namepage: string
}


export default function Background({namepage} : IPage) {
    return (
        <div>
              <div className="absolut bg-[url(/komentar2.jpg)] w-full h-[400px]"></div>
              <div className="flex relative top-[-300px] justify-center items-center text-[100px] max-sm:scale-75 text-white font-bold mb-[-80px]">{namepage}</div>
        </div>
    )
    
}