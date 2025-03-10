import React from "react";
import ButtonForm from "./ButtonForm";

const AvatarAccount = () => {
  return (
    <ul className="absolute right-0 mt-5 w-40 text-[#ffe77d] shadow-lg gap-y-3 [&>li]:bg-[#531374] transition duration-500 [&>li]:rounded-3xl">
      <li className="mb-1">
        <ButtonForm href="/login" icon="bx bxs-user" text="Đăng Nhập" />
      </li>
      <li>
        <ButtonForm href="/register" icon="bx bxs-user-plus" text="Đăng Ký" />
      </li>
    </ul>
  );
};

export default AvatarAccount;
