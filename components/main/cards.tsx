import Image from "next/image";
import img5 from "../../assets/images/pngegg (34) 3.png";
import img6 from "../../assets/images/pngegg (34) 9.png";
import img7 from "../../assets/images/pngegg (34) 10.png";
import { HeartOutlined } from "@ant-design/icons";

export default function cards() {
  const arr2 = [];
  for (let i = 0; i < 4; i++) {
    arr2.push(i);
  }
  return (
    <div>
      {" "}
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-[24px]">Акция</h1>
          <div className="flex gap-3 ">
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              {"<"}
            </button>
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              {">"}
            </button>
          </div>
        </div>
        <div className="flex justify-around relative flex-wrap">
          {arr2.map((e) => (
            <div key={e} className="relative">
              <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative">
                <div className="absolute right-[20px] top-[20px] cursor-pointer">
                  <HeartOutlined />
                </div>
                <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                  <Image src={img5} alt="" />
                </div>
                <div className="px-3">
                  <h1>Бутса Nike Mercurial Superfly 8 FG</h1>
                  <p className="text-red-700 font-bold">500 000 uzs</p>
                  <span className="line-through opacity-[0.5] text-[#1F1D14] text-[12px]">
                    750 000
                  </span>
                </div>
                <button className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg">
                  Корзина
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-[70px]">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-[24px]">Новинки</h1>
          <div className="flex gap-3">
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              {"<"}
            </button>
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              {">"}
            </button>
          </div>
        </div>
        <div className="flex justify-around relative flex-wrap">
          {arr2.map((e) => (
            <div key={e} className="relative">
              <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative">
                <div className="absolute right-[20px] top-[20px] cursor-pointer">
                  <HeartOutlined />
                </div>
                <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                  <Image src={img6} alt="" />
                </div>
                <div className="px-3">
                  <h1>Бутса Nike Mercurial Superfly 8 FG</h1>
                  <p className="text-[#1F1D14] font-bold">500 000 uzs</p>
                </div>
                <button className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg">
                  Корзина
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-[70px]">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h1 className="text-[24px]">Продукты</h1>
          <div className="flex gap-3">
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              {"<"}
            </button>
            <button className="bg-white w-[40px] h-[40px] rounded-full">
              {">"}
            </button>
          </div>
        </div>
        <div className="flex justify-around relative flex-wrap">
          {arr2.map((e) => (
            <div key={e} className="relative">
              <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative">
                <div className="absolute right-[20px] top-[20px] cursor-pointer">
                  <HeartOutlined />
                </div>
                <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                  <Image src={img7} alt="" />
                </div>
                <div className="px-3">
                  <h1>Бутса Nike Mercurial Superfly 8 FG</h1>
                  <p className="text-[#1F1D14] font-bold">500 000 uzs</p>
                </div>
                <button className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg">
                  Корзина
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
