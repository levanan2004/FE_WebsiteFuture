import { ProductType } from "@/entities/product";
import ProductItem from "./ProductItem";

interface ProductListProps {
  ListProduct: ProductType[];
}
const ProductList: React.FC<ProductListProps> = ({ ListProduct }) => {
  return (
    <div className="grid grid-cols-4 gap-x-12 gap-y-12 py-6 px-12">
      {ListProduct.map((item, index) => (
        <ProductItem product={item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
