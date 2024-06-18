import Image from "next/image";
import img from "../../assets/images/star.svg";

export default function about() {
  return (
    <div className="flex items-center justify-around">
      <div>
        <h1 className="text-[24px] font-semibold">Описание</h1>
        <div className="bg-white w-[500px] h-[500px] py-[70px] px-[70px]">
          <h1 className="text-[24px] font-semibold">
            Гантель виниловая, 2 х 3 кг
          </h1>
          <p className="text-[14px] mt-[28px] mb-[53px]">
            В составе томатов в большом количестве содержатся сахара, клетчатка,
            пектины, бета-каротин, витамины.
          </p>

          <ul className="flex flex-wrap gap-4">
            <li className="w-[150px]">
              <h3>Вес гантела:</h3>
              <p>5кг</p>
            </li>
            <li className="w-[150px]">
              <h3>Цвета:</h3>
              <p>Синий, Красный</p>
            </li>
            <li className="w-[150px]">
              <h3>Вес гантела:</h3>
              <p>5кг</p>
            </li>
            <li className="w-[150px]">
              <h3>Цвета:</h3>
              <p>Синий, Красный</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-[24px] font-semibold">
          Гантель виниловая, 2 х 3 кг
        </h1>
        <div className="w-[500px] h-[500px] bg-white py-[40px] px-[70px]">
          <div className="w-[400px]">
            <h1>Шахзод Анваров</h1>
            <h2 className="opacity-[0.7] mb-5">клиент</h2>
            <p>
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <Image src={img} alt="" className="mt-5" />
          </div>
          <div className="w-[400px] mt-6">
            <h1>Шахзод Анваров</h1>
            <h2 className="opacity-[0.7] mb-5">клиент</h2>
            <p>
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <Image src={img} alt="" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
