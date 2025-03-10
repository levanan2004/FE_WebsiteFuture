import Link from "next/link";
import React from "react";

interface ButtonFormProps {
  href: string;
  icon?: string;
  text: string;
}

const ButtonForm: React.FC<ButtonFormProps> = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      className="flex h-8 border-black border-2 rounded-2xl justify-center items-center cursor-pointer py-4 px-5 hover:shadow-lg shadow-[#9f22d6] transition duration-500"
    >
      {icon && <i className={`relative ${icon} mr-2`}></i>} {text}
    </Link>
  );
};

export default ButtonForm;
