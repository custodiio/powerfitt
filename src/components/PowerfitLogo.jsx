import React from "react";

export default function PowerfitLogo({ size = "default", className = "" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  const dimension = isSmall ? 36 : isLarge ? 56 : 44;

  return (
    <div className={`powerfitt-brand-logo ${className}`}>
      <svg 
        width={dimension} 
        height={dimension} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-svg"
      >
        <defs>
          <linearGradient id="instaRing" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#E50914" />
            <stop offset="100%" stopColor="#FF007A" />
          </linearGradient>
          <linearGradient id="redGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2A3A" />
            <stop offset="100%" stopColor="#B30006" />
          </linearGradient>
        </defs>

        {/* Outer Gradient Ring */}
        <circle cx="50" cy="50" r="47" stroke="url(#instaRing)" strokeWidth="4" fill="#0C0E14" />

        {/* Inner Border */}
        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="#090B10" />

        {/* Muscular Arm & Dumbbell Silhouette */}
        <g transform="translate(18, 14) scale(0.64)">
          {/* Dumbbell Plates */}
          <rect x="74" y="32" width="6" height="24" rx="3" fill="#FFFFFF" />
          <rect x="82" y="28" width="6" height="32" rx="3" fill="#E50914" />
          <rect x="70" y="41" width="22" height="6" rx="2" fill="#E2E8F0" />
          
          {/* Bicep Muscle & Forearm */}
          <path 
            d="M20 74 C 20 54, 30 38, 48 38 C 62 38, 72 44, 76 52 C 78 56, 75 64, 68 66 C 58 68, 54 62, 46 62 C 38 62, 34 68, 28 74 Z" 
            fill="#FFFFFF" 
          />
          {/* Muscle Detail / Shadow Arc */}
          <path 
            d="M36 48 C 42 42, 54 44, 60 50 C 52 52, 44 54, 36 60 Z" 
            fill="url(#redGlow)" 
          />
        </g>

        {/* Lightning Accent Bolt */}
        <path d="M50 8L44 20H50L46 28L56 16H50L52 8Z" fill="#E50914" />

        {/* Bottom Curved Subtext / Badge */}
        <text 
          x="50" 
          y="85" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontSize="8.5" 
          fontWeight="900" 
          fontFamily="Outfit, sans-serif" 
          letterSpacing="1.2"
        >
          POWERFITT
        </text>
      </svg>

      <div className="brand-text-wrap">
        <div className="brand-name-main">
          <span>POWER</span>
          <span className="brand-name-red">FITT</span>
        </div>
        <span className="brand-tag-city">ACADEMIA • RIO VERDE</span>
      </div>
    </div>
  );
}
