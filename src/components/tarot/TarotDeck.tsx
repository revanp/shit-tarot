"use client"

import React from "react"
import { CardBack } from "./CardBack"

interface TarotDeckProps {
  onClick?: () => void
  disabled?: boolean
  isHoverable?: boolean
}

export function TarotDeck({ onClick, disabled = false, isHoverable = true }: TarotDeckProps) {
  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label="Draw a card from the ancient tarot deck"
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault()
          onClick?.()
        }
      }}
      className={`relative w-[240px] h-[380px] sm:w-[280px] sm:h-[440px] group select-none outline-none ${
        disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"
      } ${!disabled && isHoverable ? "focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-4 focus-visible:ring-offset-[#120c08] rounded-xl" : ""}`}
    >
      {/* Heavy table shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/80 blur-xl rounded-full pointer-events-none" />

      {/* Layer 5 (Bottom card in stack) */}
      <div className="absolute inset-0 translate-y-3 -translate-x-2 rotate-[-2deg] rounded-xl bg-[#1a120b] border border-[#382618]/60 shadow-lg pointer-events-none opacity-90 transition-transform duration-500 group-hover:translate-y-4 group-hover:-translate-x-3 group-hover:rotate-[-3deg]" />

      {/* Layer 4 */}
      <div className="absolute inset-0 translate-y-2.5 translate-x-1.5 rotate-[1.5deg] rounded-xl bg-[#1d140d] border border-[#382618]/70 shadow-lg pointer-events-none opacity-90 transition-transform duration-500 group-hover:translate-y-3 group-hover:translate-x-2 group-hover:rotate-[2.5deg]" />

      {/* Layer 3 */}
      <div className="absolute inset-0 translate-y-1.5 -translate-x-1 rotate-[-1deg] rounded-xl bg-[#20160e] border border-[#44301e]/80 shadow-lg pointer-events-none transition-transform duration-500 group-hover:translate-y-2 group-hover:-translate-x-1.5" />

      {/* Layer 2 */}
      <div className="absolute inset-0 translate-y-1 translate-x-0.5 rotate-[0.5deg] rounded-xl bg-[#221810] border border-[#4d3622] shadow-md pointer-events-none transition-transform duration-500 group-hover:translate-y-1.5 group-hover:translate-x-1" />

      {/* Top Deck Card */}
      <div className="relative w-full h-full rounded-xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.01]">
        <CardBack />
        
        {/* Subtle candlelight reflection across the top card */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c59b48]/5 to-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  )
}
