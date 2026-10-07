"use client"

import React, { useState, useRef } from "react"
import { TarotCard as TarotCardType, Language } from "@/data/tarot"
import { CardBack } from "./CardBack"
import { CardFront } from "./CardFront"

interface TarotCardProps {
  card?: TarotCardType | null
  isFlipped: boolean
  isInteractive?: boolean
  onClick?: () => void
  className?: string
  priority?: boolean
  lang?: Language
}

export function TarotCard({
  card,
  isFlipped,
  isInteractive = false,
  onClick,
  className = "",
  lang = "id"
}: TarotCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteractive || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Subtle tilt angle capped at +/- 6 degrees
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isInteractive && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault()
      onClick?.()
    }
  }

  const cardName = card ? (lang === "id" ? card.idLang.name : card.en.name) : "Mystical tarot card"

  return (
    <div
      ref={cardRef}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={`${cardName} tarot card`}
      onClick={isInteractive ? onClick : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      style={{ perspective: "1200px" }}
      className={`relative w-[240px] h-[380px] sm:w-[280px] sm:h-[440px] outline-none transition-transform duration-300 ${
        isInteractive ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-4 focus-visible:ring-offset-[#120c08] rounded-xl" : ""
      } ${className}`}
    >
      {/* 3D Transform Container */}
      <div
        className="w-full h-full relative transition-transform duration-700 ease-out transform-gpu rounded-xl"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          // Fix: rotateY is (isFlipped ? 180 : 0) + tilt.y, ensuring the card stays opened on front face!
          transform: `rotateX(${tilt.x}deg) rotateY(${(isFlipped ? 180 : 0) + tilt.y}deg)`,
          boxShadow: isFlipped
            ? "0 22px 48px -10px rgba(0, 0, 0, 0.75), 0 0 25px rgba(179, 143, 71, 0.15)"
            : "0 16px 36px -8px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)"
        }}
      >
        {/* Card Back Face (Face visible initially at 0deg) */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          <CardBack />
        </div>

        {/* Card Front Face (Revealed on 180deg flip) */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {card ? <CardFront card={card} lang={lang} /> : <CardBack />}
        </div>
      </div>
    </div>
  )
}
