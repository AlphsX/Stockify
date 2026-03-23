import React from "react";
import type { Product } from "../types";
import { Search } from "lucide-react";
import ProductItem from "./ProductItem";

interface Props {
  products: Product[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onDelete: (id: number) => void;
}

const ProductList: React.FC<Props> = ({
  products,
  onUpdateQuantity,
  onDelete,
}) => {
  // TODO: สร้างเงื่อนไข ถ้า products ไม่มีข้อมูลเลย (length === 0)
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center flex flex-col items-center justify-center h-full min-h-[350px] border border-gray-100 hover:shadow-sm transition-all">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Search className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-2xl font-medium text-gray-900 mb-2 tracking-tight">
          No products found
        </h3>
        <p className="text-gray-500 text-lg">
          Try searching manually or add a new product.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-sm transition-all">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider hidden sm:table-cell">
              Price
            </th>
            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-4 font-medium text-gray-500 text-sm uppercase tracking-wider text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* TODO: ใช้ Array.map() เพื่อวนลูปสร้าง <ProductItem /> */}
          {/* Hint: อย่าลืมส่ง key={p.id} และส่ง Props ที่จำเป็นเข้าไปด้วย */}
          {products.map((p) => (
            <ProductItem
              key={p.id}
              product={p}
              onUpdateQuantity={onUpdateQuantity}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
