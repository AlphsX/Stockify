import { useState } from "react";
import type { Product } from "../types"; // type

export const useInventory = () => {
  // TODO: สร้าง State สำหรับเก็บรายการ Products (กำหนดค่าเริ่มต้นได้ตามต้องการ)
  const [products, setProducts] = useState<Product[]>([]);

  // TODO: สร้างฟังก์ชัน addProduct รับพารามิเตอร์ name, price, initialQuantity เพื่อเพิ่มรายการใหม่
  const addProduct = (name: string, price: number, initialQuantity: number) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(), // ใช้ timestamp เป็น id ชั่วคราว
        name,
        price,
        quantity: Math.max(0, initialQuantity),
      },
    ]);
  };

  // TODO: สร้างฟังก์ชัน updateQuantity รับ id และ delta เพื่ออัปเดตจำนวนสินค้า
  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map(
        (product) =>
          product.id === id
            ? { ...product, quantity: Math.max(0, product.quantity + delta) } // true ให้เปลี่ยนสถานะของงานที่ตรงกับ id (ในที่นี้คืออัปเดตจำนวน)
            : product, // false ให้คืนค่าเดิมของงานที่ไม่ตรงกับ id
      ),
    );
  };

  // TODO: สร้างฟังก์ชัน deleteProduct รับพารามิเตอร์ id เพื่อลบงาน
  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id)); // ลบงานที่มี id ตรงกับพารามิเตอร์
  };

  // ส่งคืนค่าและฟังก์ชันทั้งหมด
  return { products, addProduct, updateQuantity, deleteProduct };
};
