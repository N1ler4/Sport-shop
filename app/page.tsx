"use client";
import { Carousel } from "antd";
import Image from "next/image";
import "./globals.css";
import img1 from "../assets/images/pngwing 1.png";
import img2 from "../assets/images/Group 48097028.png";
import img3 from "../assets/images/Group 48097038.png";
import img4 from "../assets/images/pngwing 3.png";
import img5 from "../assets/images/pngegg (34) 3.png";
import img6 from "../assets/images/pngegg (34) 9.png";
import img7 from "../assets/images/pngegg (34) 10.png";
import { HeartOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "400px",
  color: "#1F1D14",
  textAlign: "center",
  background: "#fff",
};

export default function Home() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  const arr2 = [];
  for (let i = 0; i < 4; i++) {
    arr2.push(i);
  }

  return (
    <div className="mt-6">
      <div className="flex justify-around flex-wrap">
        <div className="max-w-[800px] h-[500px]">
          <Carousel arrows infinite={true} autoplay>
            {arr.map((e) => (
              <div key={e}>
                <div
                  style={contentStyle}
                  className="relative flex justify-between items-center px-2 text-[#1F1D14] "
                >
                  <div className="w-[300px] h-[300px] bg-[#d32f2f] z-[1] absolute rounded-full right-[60px]"></div>
                  <div className="absolute w-[700px] h-[300px] bg-[#BDD400] z-[1] rotate-[115deg] bottom-0 right-[-300px]"></div>
                  <div className="flex flex-col items-start text-start max-w-[350px] z-[999] ml-5">
                    <h1 className="font-extrabold text-[28px]">
                      Бутсы Nike Phantom GT2 Elite FG
                    </h1>
                    <button className="py-[10px] px-[15px] border-2 border-[#FBD029] rounded-lg">
                      Подробности
                    </button>
                  </div>
                  <Image
                    src={img1}
                    width={350}
                    height={350}
                    className="bg-contain z-[999]"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col flex-wrap">
          <div className="w-[320px] h-[200px]">
            <Image src={img2} alt="123" />
          </div>
          <div className="w-[320px] h-[200px]">
            {" "}
            <Image src={img3} alt="123" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full mb-[70px]">
        <div className="container mx-auto">
          <h1 className="text-[24px] mb-5">Каталог</h1>
          <Carousel infinite={true} autoplay>
            {arr.map((e) => (
              <div key={e}>
                <div className="flex justify-between flex-wrap">
                  <div className="w-[180px] h-[240px] bg-blue-300 flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-red-300 flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>{" "}
                  <div className="w-[180px] h-[240px] bg-yellow-300 flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>{" "}
                  <div className="w-[180px] h-[240px] bg-purple-300 flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>{" "}
                  <div className="w-[180px] h-[240px] bg-gray-300 flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
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
