import React from "react";
import "./CosmeticLoader.css";

const CosmeticLoader: React.FC = () => {
  return (
    <div className="cosmetic-loader-overlay">
      <div className="cosmetic-loader">
        <div className="circle pink"></div>
        <div className="circle purple"></div>
        <div className="circle yellow"></div>
      </div>
      <p className="loader-text">กำลังโหลดความงาม...</p>
    </div>
  );
};

export default CosmeticLoader;
