import { Carousel } from "antd";
import img1 from "../../assets/images/pngwing 1.png";
import img2 from "../../assets/images/Group 48097028.png";
import img3 from "../../assets/images/Group 48097038.png";
import img4 from "../../assets/images/pngwing 3.png";
import Image from "next/image";

export default function slider() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "400px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div>
      {" "}
      <div className="flex justify-center gap-5 flex-wrap">
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
    </div>
  );
}
