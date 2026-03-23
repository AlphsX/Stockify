import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sidebar from "./components/Sidebar";
import { useInventory } from "./hooks/useInventory";
import { useState } from "react";
import { PanelLeft } from "lucide-react";

function App() {
  // TODO: Step 2 - เรียกใช้งาน Custom Hook useInventory()
  // const { ... } = useInventory();
  const { products, addProduct, updateQuantity, deleteProduct } =
    useInventory(); // เรียกใช้งาน Custom Hook useInventory() เพื่อรับค่าและฟังก์ชันที่เกี่ยวข้องกับการจัดการ Inventory

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    // TODO: Step 1 - วางโครงสร้าง Routing โดยห่อหุ้มด้วย <BrowserRouter>
    <BrowserRouter>
      <div className="min-h-screen bg-white flex font-sans">
        {/* Navigation เมนู (Sidebar) */}
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* พื้นที่แสดงผลของ Route */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out flex flex-col h-screen overflow-hidden bg-white ${isSidebarOpen ? "md:pl-64 pl-0" : "pl-0"}`}
        >
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="fixed top-4 left-4 z-20 p-2 transition-colors group"
              title="Open Sidebar"
            >
              <PanelLeft className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
            </button>
          )}

          <main className="flex-1 overflow-y-auto w-full relative">
            <div className="absolute inset-x-0 top-0 h-80 bg-gray-100 z-0 rounded-b-[48px]"></div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8">
              {/* TODO: Step 1 - กำหนด <Routes> และ <Route> สำหรับหน้า '/' และ '/products' */}
              <Routes>
                {/* ส่ง Props ไปยัง Component 
                  <Route path="/" element={<Dashboard products={products} />} /> 
                */}
                <Route path="/" element={<Dashboard products={products} />} />
                <Route
                  path="/products"
                  element={
                    <Products
                      products={products}
                      onAdd={addProduct}
                      onUpdateQuantity={updateQuantity}
                      onDelete={deleteProduct}
                    />
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
