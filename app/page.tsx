import ProductList from "@/components/Products/ProductList";
import ServiceSection from "@/components/Selection";
import { Section } from "lucide-react";

export default function Home() {
  const listItem = [
    {
      img_url: "/assets/products/product_1.png",
      name: "Baby Three Tai Thỏ Màu - Rabbit",
      type: "Thỏ Thị Trấn V2",
      rootPrice: 2500000,
      discountPrice: 2000000,
      pricePresent: 500000,
    },
    {
      img_url: "/assets/products/product_2.png",
      name: "Baby Three Tai Thỏ Màu - Fox",
      type: "Thỏ Thị Trấn V2",
      rootPrice: 1500000,
      discountPrice: 1000000,
      pricePresent: 500000,
    },
    {
      img_url: "/assets/products/product_3.png",
      name: "Baby Three Tai Thỏ Màu - Dinasaur",
      type: "Thỏ Thị Trấn V2",
      rootPrice: 1300000,
      discountPrice: 1000000,
      pricePresent: 300000,
    },
    {
      img_url: "/assets/products/product_4.png",
      name: "Baby Three Tai Thỏ Màu - Elephant",
      type: "Thỏ Thị Trấn V2",
      rootPrice: 1000000,
      discountPrice: 500000,
      pricePresent: 500000,
    },
    {
      img_url: "/assets/products/product_5.png",
      name: "Baby Three Tai Thỏ Màu - Kitten",
      type: "Thỏ Thị Trấn V2",
      rootPrice: 2600000,
      discountPrice: 2000000,
      pricePresent: 600000,
    },
    {
      img_url: "/assets/products/product_6.png",
      name: "Baby Three Tai Thỏ Màu - Panda",
      type: "Thỏ Thị Trấn V2",
      rootPrice: 1300000,
      discountPrice: 900000,
      pricePresent: 400000,
    },
  ];

  return (
    <div className="h-full w-full mt-[86px]">
      <div className="w-full">
        <div className="absolute bg-[#ffe77d] opacity-75 w-full h-[400px]"></div>
        <div className="flex grid-cols-4 -z-10-">
          <img
            src="/assets/banner2.png"
            className="relative w-full h-[400px] object-contain"
          />

          <img
            src="/assets/banner.png"
            alt="Banner"
            className="relative w-full h-[400px] object-contain"
          />
          <img
            src="/assets/banner1.png"
            className="relative w-full h-[400px] object-contain"
          />
        </div>
      </div>
      <ServiceSection />
      {/* SẢN PHẨM HOT */}
      <div className="border-b-4 border-black mt-10 mx-10 w-3xs"></div>
      <div className="py-4 px-10">
        <h1 className="text-[40px] font-[700] text-black">SẢN PHẨM HOT</h1>
        <ProductList ListProduct={listItem} />
      </div>
      <ServiceSection />
      {/* HÀNG TỒN KHO - GIÁ RẺ*/}
      <div className="border-b-4 border-black mt-10 mx-10 w-3xs"></div>
      <div className="py-4 px-10">
        <h1 className="text-[40px] font-[700] text-black">
          HÀNG TỒN KHO - GIÁ RẺ
        </h1>
        <ProductList ListProduct={listItem} />
      </div>
    </div>
  );
}
