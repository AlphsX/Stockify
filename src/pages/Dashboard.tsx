import React from "react";
import type { Product } from "../types";
import { Package, Wallet, PackageX } from "lucide-react";

interface Props {
  products: Product[];
}

const Dashboard: React.FC<Props> = ({ products }) => {
  // TODO: คำนวณจำนวนรายการสินค้าทั้งหมดที่มีอยู่ในสต๊อก
  const totalProducts = products.length; // นับจำนวนรายการสินค้าทั้งหมด

  // TODO: คำนวณมูลค่ารวมของสต๊อกสินค้า (price * quantity ของทุกรายการ)
  // Hint: ลองใช้ Array.reduce() ในการบวกรวมข้อมูล
  const totalValue = products.reduce((acc, p) => acc + p.price * p.quantity, 0); // รวมมูลค่าสินค้าทุกชิ้นเข้าด้วยกัน

  // TODO: คำนวณจำนวนสินค้าที่ของหมด (quantity === 0)
  // Hint: ลองใช้ Array.filter() ในการกรองข้อมูล
  const outOfStockCount = products.filter((p) => p.quantity === 0).length; // กรองสินค้าที่ quantity === 0 แล้วนับจำนวน

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-medium text-gray-900 tracking-tight mb-2">
        Dashboard
      </h1>
      <p className="text-lg text-gray-500 mb-10 tracking-wide">
        Here is the summary of your inventory.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Products */}
        <div className="bg-white rounded-3xl p-6 flex flex-col transition-all relative overflow-hidden group border border-gray-100 hover:border-gray-200 hover:shadow-sm">
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
            <Package className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-6 z-10">
            <Package className="w-6 h-6" />
          </div>
          <h2 className="text-gray-500 font-medium text-xs tracking-widest uppercase mb-1 z-10">
            Total Unique Products
          </h2>
          <p className="text-5xl leading-none font-normal text-gray-900 z-10">
            {totalProducts}
          </p>
        </div>

        {/* Total Value */}
        <div className="bg-white rounded-3xl p-6 flex flex-col transition-all relative overflow-hidden group border border-gray-100 hover:border-gray-200 hover:shadow-sm">
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
            <Wallet className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6 z-10">
            <Wallet className="w-6 h-6" />
          </div>
          <h2 className="text-gray-500 font-medium text-xs tracking-widest uppercase mb-1 z-10">
            Total Inventory Value
          </h2>
          <p className="text-5xl leading-none font-normal text-gray-900 z-10">
            <span className="text-xl align-top text-gray-500 mr-1">฿</span>
            {totalValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        {/* Out of Stock */}
        <div className="bg-white rounded-3xl p-6 flex flex-col transition-all relative overflow-hidden group border border-gray-100 hover:border-gray-200 hover:shadow-sm">
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
            <PackageX className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6 z-10">
            <PackageX className="w-6 h-6" />
          </div>
          <h2 className="text-red-500 font-medium text-xs tracking-widest uppercase mb-1 z-10">
            Out of Stock Items
          </h2>
          <p className="text-5xl leading-none font-normal text-gray-900 z-10">
            {outOfStockCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
