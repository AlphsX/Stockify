import React, { useState } from "react";
import type { Product } from "../types";
import { Search } from "lucide-react";
import AddProductForm from "../components/AddProductForm";
import ProductList from "../components/ProductList";

interface Props {
  products: Product[];
  onAdd: (name: string, price: number, initialQuantity: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onDelete: (id: number) => void;
}

const Products: React.FC<Props> = ({
  products,
  onAdd,
  onUpdateQuantity,
  onDelete,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-medium text-gray-900 tracking-tight mb-2">
            Manage Products
          </h1>
          <p className="text-gray-500 text-lg tracking-wide">
            Efficiently track, update, and manage your product lifecycle.
          </p>
        </div>

        {/* ระบบค้นหาสินค้า (Search Bar) */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search catalog by product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white rounded-full py-3 pl-5 pr-14 text-sm focus:outline-none focus:border-blue-700 transition-all text-gray-900 border border-gray-100 hover:shadow-sm"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          {/* TODO: เรียกใช้ <AddProductForm /> และส่ง Props onSubmit เข้าไป */}
          <AddProductForm onSubmit={onAdd} />
        </div>

        <div className="lg:col-span-2">
          {/* TODO: เรียกใช้ <ProductList /> และส่ง Props products, onDelete, onUpdateQuantity เข้าไป */}
          <ProductList
            products={filteredProducts}
            onUpdateQuantity={onUpdateQuantity}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
