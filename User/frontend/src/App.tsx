import { BrowserRouter } from "react-router-dom";
import ConfigRoutes from "./mainroute/configRoutes";
import { LanguageProvider } from "./LanguageContext"; // path ปรับตามที่เก็บจริง
import { useState, useEffect } from "react";
import CosmeticLoader from "../src/component//Loader/CosmeticLoader"; // ตัว Loader Component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ตัวอย่าง: โหลดข้อมูล 2-3 วินาที
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      {loading && <CosmeticLoader />} 
      <BrowserRouter>
        <ConfigRoutes />
      </BrowserRouter>
    </LanguageProvider>

  );
}

export default App;
