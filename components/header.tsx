import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import {
  AlignLeftOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function header() {
  return (
    <header className="bg-[#1F1D14]">
      <nav className="py-1 flex justify-around items-center container mx-auto">
        <div className="flex items-center gap-[80px] ">
          <div className="flex max-w-[70px] text-[20px] font-semibold gap-[11px] text-white">
            <Image src={logo} alt="" width={50} height={50} />
            <h1>Sport Product</h1>
          </div>
          <ul className="text-white flex gap-3">
            <li className="text-[16px]">
              <Link href={"/products"}>Продукты</Link>
            </li>
            <li className="text-[16px]">
              <p>Контакты</p>
            </li>
            <li className="text-[16px]">
              <Link href={"#"}>Оплата и Доставка</Link>
            </li>
            <li className="text-[16px]">
              <Link href={"#"}>Новости</Link>
            </li>
            <li className="text-[16px]">
              <Link href={"#"}>О нас</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <a
            className="text-white text-[16px] flex gap-1"
            href="tel:+998971566690"
          >
            <PhoneOutlined />
            +998 (97) 156-66-90
          </a>
          <a
            className="text-white text-[16px] flex gap-1"
            href="mailto:bahtiyorov.nozim@gmail.com"
          >
            <MailOutlined />
            bahtiyorov.nozim@gmail.com
          </a>
        </div>
      </nav>
      <div className="bg-white py-2">
        <div className="container mx-auto flex justify-around gap-[150px]">
          <div className="flex gap-3">
            <button className="bg-[#1F1D14] text-white flex items-center py-[10px] px-[40px] gap-3 rounded-lg">
              <AlignLeftOutlined />
              <p>Каталог</p>
            </button>
            <label
              htmlFor="input"
              className="w-[300px] bg-[#F2F2F2] flex items-center rounded-lg"
            >
              <input type="text" className="bg-transparent w-full outline-none p-2" />
              <span className="w-[40px] h-[20px]">
                <SearchOutlined />
              </span>
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <button className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg">
              <UserOutlined />
            </button>
            <button className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg">
              <HeartOutlined />
            </button>
            <button className="px-[30px] py-[8px] bg-[#F2F2F2] rounded-lg flex gap-1 items-center">
              <ShoppingCartOutlined />
              Корзина
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
