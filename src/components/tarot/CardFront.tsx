import React from "react"
import { TarotCard, Language } from "@/data/tarot"
import { getCardContent } from "@/lib/tarot"
import { CardIllustration } from "./CardIllustration"

interface CardFrontProps {
  card: TarotCard
  lang?: Language
}

export function CardFront({ card, lang = "id" }: CardFrontProps) {
  const content = getCardContent(card, lang)

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#f4ebd9] text-[#1c150e] border-[3px] border-[#dfcfb3] shadow-md flex flex-col justify-between p-3 select-none">
      {/* Subtle aged paper grain & vignette */}
      <div className="absolute inset-0 bg-parchment-texture pointer-events-none opacity-40 mix-blend-multiply" />
      <div className="absolute inset-0 border border-[#b39b7d]/60 rounded-lg pointer-events-none" />
      <div className="absolute inset-1.5 border-[0.75px] border-[#1c150e]/30 rounded-md pointer-events-none" />

      {/* Top Header: Roman Numeral & Ornamental Flourish */}
      <div className="relative z-10 text-center pt-1 pb-0.5">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1px] w-6 bg-[#8c6d48]/50" />
          <span className="font-serif font-bold text-xs tracking-widest text-[#5c3e21]">
            {card.number}
          </span>
          <span className="h-[1px] w-6 bg-[#8c6d48]/50" />
        </div>
      </div>

      {/* Central Engraved Illustration Area */}
      <div className="relative z-10 flex-1 my-1 px-1 flex items-center justify-center">
        <div className="w-full h-full max-h-[260px] relative border border-[#1c150e]/40 rounded-sm bg-[#faf4e8]/60 p-1 flex items-center justify-center overflow-hidden">
          {/* Inner illustration border */}
          <div className="absolute inset-0.5 border border-[#8c6d48]/30 pointer-events-none" />
          
          <CardIllustration illustrationKey={card.illustrationKey} />
        </div>
      </div>

      {/* Bottom Footer: Card Title & Subtitle */}
      <div className="relative z-10 text-center pb-1 pt-0.5">
        <h3 className="font-serif font-black text-sm tracking-wider uppercase text-[#1c150e]">
          {content.name}
        </h3>
        <p className="font-serif italic text-[10px] text-[#6b533e] tracking-tight mt-0.5">
          {content.subtitle}
        </p>
      </div>
    </div>
  )
}
