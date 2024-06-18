import Image from "next/image";
import img4 from "../../assets/images/pngegg (44) 1.png";
import img from "../../assets/images/Rectangle 24275.png";
import img2 from "../../assets/images/Rectangle 24276.png"
import { TruckOutlined } from "@ant-design/icons";

export default function final() {
  return (
    <div>
      <div className="container mx-auto p-2">
        <h1 className="text-[24px] mb-[40px] mt-[70px]">Полезное</h1>
        <div className="flex justify-center gap-3">
          <div className="w-[600px] h-[400px] bg-white p-[35px]">
            <h1 className="text-[hsl(49,22%,10%)] text-[32px]">
              Как правильно выбрать эллиптический тренажер?
            </h1>
            <p className="text-[16px] opacity-[0.7] mt-[20px]">
              Эллиптические тренажёры популярны среди людей любого возраста и с
              разным уровнем физической подготовкb Эллиптические тренажёры
              популярны среди людей любого возраста и с разным уровнем
              физической подготовки...
            </p>
          </div>

          <div className="w-[600px] flex flex-col justify-between">
            <div className="h-[350px] bg-white grid justify-center items-center">
              <Image src={img4} alt="" />
            </div>
            <button className="h-[40px] bg-white">Посмотреть Все</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2">
        <h1 className="text-[24px] mt-[70px] mb-[40px]">Примущества</h1>
        <div className="flex justify-around gap-2">
          <div className="w-[250px] h-[250px] bg-white px-[32px] py-[100px] relative">
            <div className="absolute w-[25px] h-[25px] bg-yellow-300 rounded-lg left-[50px] z-[10]"></div>
            <div className="relative z-[999]">
              <TruckOutlined className="text-[48px]" />
              <p>Доставка по всему Узбекистану</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] bg-white px-[32px] py-[100px] relative">
            <div className="absolute w-[25px] h-[25px] bg-yellow-300 rounded-lg left-[50px] z-[10]"></div>
            <div className="relative z-[999]">
              <TruckOutlined className="text-[48px]" />
              <p>Доставка по всему Узбекистану</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] bg-white px-[32px] py-[100px] relative">
            <div className="absolute w-[25px] h-[25px] bg-yellow-300 rounded-lg left-[50px] z-[10]"></div>
            <div className="relative z-[999]">
              <TruckOutlined className="text-[48px]" />
              <p>Доставка по всему Узбекистану</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] bg-white px-[32px] py-[100px] relative">
            <div className="absolute w-[25px] h-[25px] bg-yellow-300 rounded-lg left-[50px] z-[10]"></div>
            <div className="relative z-[999]">
              <TruckOutlined className="text-[48px]" />
              <p>Доставка по всему Узбекистану</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2">
        <h1 className="text-[24px] mt-[70px] mb-[40px]">О нас</h1>
        <div className="grid justify-center">
          <Image src={img} alt="" width={1200} />
        </div>
      </div>
      <div className="container mx-auto p-2 mb-[80px] mt-[80px]">
        <div className="grid justify-center">
          <Image src={img2} alt="" width={1000} />
        </div>
      </div>
    </div>
  );
}
