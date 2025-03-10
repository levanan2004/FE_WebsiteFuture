"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import AvatarAccount from "./AvatarAccount";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("Scroll", handleScroll);
  });

  return (
    <header className="btn-header">
      <div className="h-full flex items-center">
        <Link href={"/"}>
          <Image
            src={"/assets/logo.png"}
            alt="Shop LMHT"
            width={60}
            height={60}
            className="rounded-4xl ml-3"
          />
        </Link>
        <p className="text-white text-[15px] font-bold ml-2">
          <Link
            href={"/"}
            className="hover:text-[#9f22d6]/90 transition duration-500"
          >
            <span>Future Shop</span>
            <br></br>
            <span>Mua Hàng Giá Rẻ</span>
          </Link>
        </p>
      </div>
      <ul className="btn-header-ul">
        <li>
          <Link href={"/"}>Trang chủ</Link>
        </li>
        <li>
          <Link href={"/tutorials_buy"}>Sản phẩm</Link>
        </li>
        <li>
          <Link href={"/tutorials_security"}>Liên hệ</Link>
        </li>
        <li>
          <Link href={"/reputation"}>Tin tức</Link>
        </li>
        <li>
          <Link href={"/about"}>Giới thiệu</Link>
        </li>
        <li>
          <Link href={"/hire"}>Tuyển dụng</Link>
        </li>

        {/* Dropdown Menu */}
        <li className="relative hover:border-none">
          <i
            className="bx bxs-user-circle text-white text-3xl transition duration-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && <AvatarAccount />}
        </li>
      </ul>
    </header>
  );
};
export default Header;
