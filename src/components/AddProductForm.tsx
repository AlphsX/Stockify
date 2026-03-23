import React, { useState } from "react";
import { Plus, PackagePlus } from "lucide-react";

interface Props {
  onSubmit: (name: string, price: number, initialQuantity: number) => void;
}

const AddProductForm: React.FC<Props> = ({ onSubmit }) => {
  // TODO: สร้าง State สำหรับเก็บค่า Input
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: ตรวจสอบว่า name ไม่เป็นค่าว่าง (Hint: ใช้ name.trim())
    // ถ่ายทอดค่าไปยัง Props onSubmit และอย่าลืมเซ็ต name ให้กลับเป็นค่าว่าง ('')
    if (!name.trim() || !price || !qty) return; // ! ตรวจสอบว่า name.trim() เป็นค่าว่างหรือไม่ ถ้าเป็นค่าว่างให้ return ออกไปเลย

    // TODO: เพิ่มการตรวจสอบความถูกต้องของจำนวนสินค้า (ต้องเป็นจำนวนเต็มเท่านั้น)
    if (qty.includes(".")) return; // บล็อกทันทีถ้ามีจุดทศนิยม

    onSubmit(name.trim(), parseFloat(price), parseInt(qty, 10));
    setName(""); // รีเซ็ตค่า name ให้เป็นค่าว่างหลังจากส่งข้อมูลแล้ว
    setPrice(""); // รีเซ็ตค่า price ให้เป็นค่าว่างหลังจากส่งข้อมูลแล้ว
    setQty(""); // รีเซ็ตค่า qty ให้เป็นค่าว่างหลังจากส่งข้อมูลแล้ว
  };

  return (
    <div className="bg-white rounded-3xl p-6 sticky top-8 border border-gray-100 hover:shadow-sm transition-all">
      <h2 className="text-xl font-medium text-gray-900 tracking-tight mb-6 flex items-center gap-2">
        <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center">
          <PackagePlus className="w-5 h-5" />
        </span>
        Add New Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1.5 ml-1">
            Product Name
          </label>
          <input
            type="text"
            // TODO: ผูกค่า value กับ State name และดักจับ onChange เพื่ออัปเดต State
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} // ดักจับการเปลี่ยนแปลงของ input และอัปเดต State name
            className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-blue-700 bg-gray-100 transition-colors text-sm"
            placeholder="e.g. Wireless Mouse"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1.5 ml-1">
              Price (฿)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              // TODO: ผูกค่า value กับ State price และดักจับ onChange เพื่ออัปเดต State
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }} // ดักจับการเปลี่ยนแปลงของ input และอัปเดต State price
              onBlur={() => price && setPrice(parseFloat(price).toFixed(2))}
              className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-blue-700 bg-gray-100 transition-colors text-sm"
              placeholder="0.00"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1.5 ml-1">
              Initial Qty
            </label>
            <input
              type="number"
              min="0"
              step="1"
              // TODO: ผูกค่า value กับ State qty และดักจับ onChange เพื่ออัปเดต State
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }} // ดักจับการเปลี่ยนแปลงของ input และอัปเดต State qty
              onKeyDown={(e) => {
                if (
                  e.key === "." ||
                  e.key === "e" ||
                  e.key === "+" ||
                  e.key === "-"
                ) {
                  e.preventDefault(); // บล็อกไม่ให้พิมพ์จุดทศนิยมหรือค่าที่ไม่ใช่ตัวเลข
                }
              }}
              className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-blue-700 bg-gray-100 transition-colors text-sm"
              placeholder="0"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
