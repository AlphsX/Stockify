import React from "react";
import type { Product } from "../types";
import { AlertTriangle, MinusCircle, PlusCircle, Trash2 } from "lucide-react";

interface Props {
  product: Product;
  onUpdateQuantity: (id: number, delta: number) => void;
  onDelete: (id: number) => void;
}

const ProductItem: React.FC<Props> = ({
  product,
  onUpdateQuantity,
  onDelete,
}) => {
  return (
    <tr
      className={`group transition-colors ${product.quantity === 0 ? "bg-red-50" : "hover:bg-gray-50 bg-white"}`}
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {product.quantity === 0 && (
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          )}
          <div>
            {/* TODO: Step 3 - สร้าง Interactive UI ด้วย Conditional Styling */}
            {/* product.quantity === 0 : "text-red-700"*/}
            <p
              className={`font-medium ${product.quantity === 0 ? "text-red-700" : "text-gray-900"}`}
            >
              {product.name}
            </p>
            {product.quantity === 0 && (
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                Out of stock
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 hidden sm:table-cell">
        <span className="text-gray-500">฿{product.price.toFixed(2)}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-1">
          <span
            className={`text-lg font-medium mr-2 min-w-[2ch] ${product.quantity === 0 ? "text-red-700" : "text-gray-900"}`}
          >
            {product.quantity}
          </span>
          <div className="flex flex-col gap-0.5 sm:flex-row relative z-10">
            {/* TODO: สร้าง Callback function เมื่อปุ่มลบปริมาณเปลี่ยน */}
            <button
              onClick={() => onUpdateQuantity(product.id, -1)} // hook up กับฟังก์ชัน onUpdateQuantity
              disabled={product.quantity === 0}
              className="p-1 text-gray-500 hover:text-red-600 hover:bg-white rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors bg-gray-100 sm:bg-transparent sm:hover:bg-gray-100"
            >
              <MinusCircle className="w-6 h-6" />
            </button>
            {/* TODO: สร้าง Callback function เมื่อปุ่มเพิ่มปริมาณเปลี่ยน */}
            <button
              onClick={() => onUpdateQuantity(product.id, 1)} // hook up กับฟังก์ชัน onUpdateQuantity
              className="p-1 text-gray-500 hover:text-green-600 hover:bg-white rounded-full transition-colors bg-gray-100 sm:bg-transparent sm:hover:bg-gray-100"
            >
              <PlusCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        {/* TODO: เรียกใช้ฟังก์ชัน onDelete เมื่อคลิกปุ่ม */}
        <button
          onClick={() => onDelete(product.id)} // hook up กับฟังก์ชัน onDelete ที่รับ id ของสินค้าที่ต้องการลบ
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-white rounded-full transition-colors inline-flex relative z-10 bg-gray-100"
          title="Delete Product"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
