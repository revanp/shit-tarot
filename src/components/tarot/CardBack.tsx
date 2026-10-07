import React from "react"

export function CardBack() {
  const ink = "#18120d"
  const gold = "#b38f47"
  const darkGold = "#806228"
  const bg = "#221912"
  const parchment = "#f0e3cc"

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#241a12] border-[3px] border-[#3d2c1e] shadow-inner select-none">
      {/* Outer intricate border frame */}
      <div className="absolute inset-2 border-2 border-[#b38f47]/60 rounded-lg pointer-events-none" />
      <div className="absolute inset-3 border border-[#806228]/40 rounded pointer-events-none" />

      {/* SVG Ornamental Pattern */}
      <svg
        viewBox="0 0 280 440"
        className="w-full h-full p-2"
        fill="none"
        stroke={gold}
        strokeWidth="1.2"
      >
        {/* Corner Ornaments */}
        {/* Top Left */}
        <path d="M 20 40 L 40 40 A 20 20 0 0 1 20 60 Z" fill={gold} fillOpacity="0.15" stroke={gold} />
        <circle cx="32" cy="52" r="3" fill={gold} />
        {/* Top Right */}
        <path d="M 260 40 L 240 40 A 20 20 0 0 0 260 60 Z" fill={gold} fillOpacity="0.15" stroke={gold} />
        <circle cx="248" cy="52" r="3" fill={gold} />
        {/* Bottom Left */}
        <path d="M 20 400 L 40 400 A 20 20 0 0 0 20 380 Z" fill={gold} fillOpacity="0.15" stroke={gold} />
        <circle cx="32" cy="388" r="3" fill={gold} />
        {/* Bottom Right */}
        <path d="M 260 400 L 240 400 A 20 20 0 0 1 260 380 Z" fill={gold} fillOpacity="0.15" stroke={gold} />
        <circle cx="248" cy="388" r="3" fill={gold} />

        {/* Outer Filigree Ring */}
        <circle cx="140" cy="220" r="105" stroke={darkGold} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="140" cy="220" r="95" stroke={gold} strokeWidth="1.5" />
        <circle cx="140" cy="220" r="85" stroke={darkGold} strokeWidth="0.8" strokeDasharray="6 2" />

        {/* Sacred Geometry: Interlocking Squares and Stars */}
        <rect x="75" y="155" width="130" height="130" stroke={gold} strokeWidth="1.2" transform="rotate(45 140 220)" />
        <rect x="75" y="155" width="130" height="130" stroke={gold} strokeWidth="1.2" />

        {/* Concentric Center Rings */}
        <circle cx="140" cy="220" r="55" fill="#1b130e" stroke={gold} strokeWidth="1.8" />
        <circle cx="140" cy="220" r="45" stroke={darkGold} strokeWidth="1" strokeDasharray="4 2" />

        {/* Mystical All-Seeing Eye / Sun Center */}
        {/* Eye Outline */}
        <path d="M 105 220 Q 140 195 175 220 Q 140 245 105 220 Z" fill="#2d1e14" stroke={gold} strokeWidth="1.6" />
        {/* Iris & Pupil */}
        <circle cx="140" cy="220" r="14" fill="#120c08" stroke={gold} strokeWidth="1.4" />
        <circle cx="140" cy="220" r="6" fill={gold} />

        {/* Radiating Sun Rays from Center */}
        <line x1="140" y1="145" x2="140" y2="125" stroke={gold} strokeWidth="1.4" />
        <line x1="140" y1="295" x2="140" y2="315" stroke={gold} strokeWidth="1.4" />
        <line x1="65" y1="220" x2="45" y2="220" stroke={gold} strokeWidth="1.4" />
        <line x1="215" y1="220" x2="235" y2="220" stroke={gold} strokeWidth="1.4" />

        <line x1="87" y1="167" x2="73" y2="153" stroke={gold} strokeWidth="1.2" />
        <line x1="193" y1="273" x2="207" y2="287" stroke={gold} strokeWidth="1.2" />
        <line x1="87" y1="273" x2="73" y2="287" stroke={gold} strokeWidth="1.2" />
        <line x1="193" y1="167" x2="207" y2="153" stroke={gold} strokeWidth="1.2" />

        {/* Top & Bottom Celestial Crescent Moons */}
        {/* Top Moon */}
        <path d="M 130 75 Q 140 65 150 75 Q 142 80 130 75 Z" fill={gold} stroke={gold} strokeWidth="1" />
        <circle cx="140" cy="92" r="2.5" fill={gold} />
        {/* Bottom Moon */}
        <path d="M 130 365 Q 140 375 150 365 Q 142 360 130 365 Z" fill={gold} stroke={gold} strokeWidth="1" />
        <circle cx="140" cy="348" r="2.5" fill={gold} />

        {/* Esoteric micro-inscriptions & linework */}
        <circle cx="140" cy="220" r="130" stroke={darkGold} strokeWidth="0.6" strokeDasharray="1 4" />
      </svg>

      {/* Subtle aged vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-60" />
    </div>
  )
}
