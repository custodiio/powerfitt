import React from "react";

export default function PowerfitLogo({ size = "default", className = "" }) {
  const isLarge = size === "large";

  return (
    <div className={`powerfitt-brand-logo ${isLarge ? "brand-logo-large" : ""} ${className}`}>
      <div className="brand-logo-circle-glow">
        <img 
          src="/images/icone.png" 
          alt="PowerFitt Academia" 
          className="brand-logo-real-img"
        />
      </div>

      <div className="brand-text-wrap">
        <div className="brand-name-main">
          <span>POWER</span>
          <span className="text-accent-red">FITT</span>
        </div>
        <span className="brand-tag-city">@POWERFITT.ACADEMIA • RIO VERDE</span>
      </div>
    </div>
  );
}
