import React, { forwardRef } from "react"
import { TarotCard, Language } from "@/data/tarot"
import { getCardContent } from "@/lib/tarot"
import { CardIllustration } from "./CardIllustration"

interface TarotShareCardProps {
  card: TarotCard
  lang?: Language
}

export const TarotShareCard = forwardRef<HTMLDivElement, TarotShareCardProps>(
  ({ card, lang = "id" }, ref) => {
    const content = getCardContent(card, lang)

    const actualFateLabel = lang === "id" ? "TAKDIR ASLIMU" : "YOUR ACTUAL FATE"
    const oracleRevealsLabel = lang === "id" ? "SABDA KOSMIK BERKATA" : "THE ORACLE REVEALS"
    const adviceLabel = lang === "id" ? "Petunjuk Ritual:" : "Ceremonial Advice:"
    const brandTagline =
      lang === "id"
        ? "Seni kuno mengarang omong kosong"
        : "The ancient art of making shit up"
    const conclusionLabel =
      lang === "id"
        ? "Kartu telah bersabda. Salahkan diri sendiri."
        : "The cards have spoken. Blame yourself."

    return (
      <div
        ref={ref}
        style={{
          width: "600px",
          backgroundColor: "#120c08",
          color: "#f4ebd9",
          fontFamily: "var(--font-eb-garamond), Georgia, serif",
        }}
        className="p-8 relative overflow-hidden text-[#f4ebd9] select-none"
      >
        {/* Ornate Double Border Frame */}
        <div className="absolute inset-3 border-2 border-[#b38f47]/50 rounded-lg pointer-events-none" />
        <div className="absolute inset-5 border border-[#806228]/30 rounded pointer-events-none" />

        {/* Corner Accents */}
        <span className="absolute top-6 left-6 text-[#b38f47] text-xs">✦</span>
        <span className="absolute top-6 right-6 text-[#b38f47] text-xs">✦</span>
        <span className="absolute bottom-6 left-6 text-[#b38f47] text-xs">✦</span>
        <span className="absolute bottom-6 right-6 text-[#b38f47] text-xs">✦</span>

        {/* Brand Header */}
        <div className="text-center pt-2 pb-5 border-b border-[#b38f47]/20">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#b38f47]/60" />
            <h1 className="font-serif font-black tracking-[0.3em] text-xl text-[#f4ebd9] uppercase">
              SHIT TAROT
            </h1>
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#b38f47]/60" />
          </div>
          <p className="font-serif italic text-xs text-[#c59b48] tracking-widest mt-1">
            {brandTagline}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="my-6 flex gap-6 items-start">
          {/* Miniature Card Visual */}
          <div className="w-[170px] flex-shrink-0 rounded-lg overflow-hidden bg-[#f4ebd9] text-[#1c150e] border-2 border-[#dfcfb3] p-2.5 shadow-xl flex flex-col items-center">
            {/* Roman Numeral */}
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="h-[1px] w-3 bg-[#8c6d48]/50" />
              <span className="font-serif font-bold text-[10px] tracking-widest text-[#5c3e21]">
                {card.number}
              </span>
              <span className="h-[1px] w-3 bg-[#8c6d48]/50" />
            </div>

            {/* Illustration */}
            <div className="w-full h-[155px] border border-[#1c150e]/30 rounded-sm bg-[#faf4e8] p-1 flex items-center justify-center overflow-hidden mb-1.5">
              <CardIllustration illustrationKey={card.illustrationKey} />
            </div>

            {/* Card Name */}
            <h3 className="font-serif font-black text-xs text-center tracking-wider uppercase text-[#1c150e] leading-tight">
              {content.name}
            </h3>
            <p className="font-serif italic text-[9px] text-[#6b533e] text-center tracking-tight mt-0.5 leading-none">
              {content.subtitle}
            </p>
          </div>

          {/* Reading & Fortune Text */}
          <div className="flex-1 space-y-3.5">
            {/* Ceremonial Prophecy */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif text-[10px] tracking-[0.2em] text-[#c59b48] uppercase">
                  {content.ceremonialLabel}
                </span>
              </div>
              <p className="font-serif italic text-xs text-[#d0bf9f] leading-relaxed">
                &ldquo;{content.ceremonialText}&rdquo;
              </p>
            </div>

            {/* Actual Fate Box */}
            <div className="bg-[#1b120c] border border-[#4a3420] rounded-lg p-3.5 relative mt-2 shadow-md">
              <div className="absolute -top-2 left-3 px-1.5 bg-[#1b120c] text-[#c59b48] text-[8px] font-serif uppercase tracking-wider border border-[#4a3420]/50 rounded">
                {oracleRevealsLabel}
              </div>
              <p className="font-serif text-sm text-[#ffeed4] font-medium leading-snug mt-1">
                &ldquo;{content.fortune}&rdquo;
              </p>

              {/* Ritual Guidance */}
              <div className="mt-3 pt-2.5 border-t border-[#b38f47]/25">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs">🕯️</span>
                  <span className="text-[#e2ba66] font-serif font-bold uppercase text-[9px] tracking-wider">
                    {adviceLabel}
                  </span>
                </div>
                <p className="font-serif italic text-xs text-[#fff1dc]/90 leading-relaxed">
                  &ldquo;{content.advice}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#b38f47]/20 flex items-center justify-between text-[10px] text-[#8c6d48] font-serif tracking-widest uppercase">
          <span>{conclusionLabel}</span>
          <span className="text-[#c59b48] font-bold">✦ SHITTAROT.REVANPRATAMAS.COM</span>
        </div>
      </div>
    )
  }
)

TarotShareCard.displayName = "TarotShareCard"
