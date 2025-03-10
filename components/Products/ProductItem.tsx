import React from "react";
import { ProductType } from "@/entities/product";
import { formatCurrency } from "@/utils/format_Currency";

interface ProductProps {
  product: ProductType;
}
const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-full h-full group relative">
      <div>
        <img src={product.img_url} className="object-contain" />
      </div>
      {/* Mua Ngay */}
      {/* Lớp phủ xuất hiện khi hover */}
      <div className="absolute bg-black opacity-0 group-hover:opacity-60 hover:opacity-85 flex items-center justify-center transition-all duration-500 h-1/5 inset-x-0 bottom-0 rounded-b-2xl">
        <span className="text-white font-bold text-2xl">
          <i className="bx bxs-cart  pr-2"></i>Mua Ngay
        </span>
      </div>
      {/* Lớp phủ xuất hiện khi hover */}
      {/* Mua Ngay */}
      <div className="bg-cyan-100 py-4 px-2  rounded-b-2xl">
        <h2 className="text-[18px] text-black font-bold truncate">
          {product.name}
        </h2>
        <h3 className="text-[14px]">
          Loại: <span className="font-bold">{product.type}</span>
        </h3>
        <p className="text-[13px] line-through">
          Giá gốc: {formatCurrency(product.rootPrice)}
        </p>
        <p className="text-[13px] text-red-500">
          Giảm: {formatCurrency(product.discountPrice)}
        </p>
        <p className="text-[13px] font-bold">
          Chỉ còn:{" "}
          <span className="text-[18px]">
            {formatCurrency(product.pricePresent)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
