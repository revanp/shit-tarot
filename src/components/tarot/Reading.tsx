"use client"

import React from "react"
import { TarotCard as TarotCardType, Language } from "@/data/tarot"
import { TarotCard } from "./TarotCard"
import { FateText } from "./FateText"

interface ReadingProps {
  card: TarotCardType
  lang?: Language
  onReset: () => void
}

export function Reading({ card, lang = "id", onReset }: ReadingProps) {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 py-4 px-4">
      {/* Revealed 3D Tarot Card in open face-up position */}
      <div className="flex-shrink-0 flex items-center justify-center animate-fade-in">
        <TarotCard
          card={card}
          lang={lang}
          isFlipped={true}
          isInteractive={true}
          className="scale-95 sm:scale-100"
        />
      </div>

      {/* Reading Reveal Content */}
      <div className="flex-1 w-full flex items-center justify-center">
        <FateText card={card} lang={lang} onReset={onReset} />
      </div>
    </div>
  )
}
