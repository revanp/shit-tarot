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
          width: "540px",
          height: "960px",
          backgroundColor: "#120c08",
          color: "#f4ebd9",
          fontFamily: "var(--font-eb-garamond), Georgia, serif",
        }}
        className="p-7 relative overflow-hidden text-[#f4ebd9] select-none flex flex-col justify-between"
      >
        {/* Ornate Double Border Frame */}
        <div className="absolute inset-3 border-2 border-[#b38f47]/50 rounded-xl pointer-events-none" />
        <div className="absolute inset-5 border border-[#806228]/30 rounded-lg pointer-events-none" />

        {/* Corner Accents */}
        <span className="absolute top-6 left-6 text-[#b38f47] text-sm">✦</span>
        <span className="absolute top-6 right-6 text-[#b38f47] text-sm">✦</span>
        <span className="absolute bottom-6 left-6 text-[#b38f47] text-sm">✦</span>
        <span className="absolute bottom-6 right-6 text-[#b38f47] text-sm">✦</span>

        {/* 1. Header (Instagram Story Safe Area Top) */}
        <div className="text-center pt-3 pb-2">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#b38f47]/70" />
            <h1 className="font-serif font-black tracking-[0.35em] text-xl text-[#f4ebd9] uppercase">
              SHIT TAROT
            </h1>
            <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#b38f47]/70" />
          </div>
          <p className="font-serif italic text-xs text-[#c59b48] tracking-widest mt-0.5">
            {brandTagline}
          </p>
        </div>

        {/* 2. Tarot Card Visual (Centerpiece) */}
        <div className="flex flex-col items-center justify-center my-1">
          <div className="w-[190px] rounded-xl overflow-hidden bg-[#f4ebd9] text-[#1c150e] border-[3px] border-[#dfcfb3] p-2.5 shadow-2xl flex flex-col items-center">
            {/* Roman Numeral */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="h-[1px] w-4 bg-[#8c6d48]/50" />
              <span className="font-serif font-bold text-xs tracking-widest text-[#5c3e21]">
                {card.number}
              </span>
              <span className="h-[1px] w-4 bg-[#8c6d48]/50" />
            </div>

            {/* Illustration */}
            <div className="w-full h-[175px] border border-[#1c150e]/35 rounded-sm bg-[#faf4e8] p-1 flex items-center justify-center overflow-hidden mb-1.5">
              <CardIllustration illustrationKey={card.illustrationKey} />
            </div>

            {/* Card Name */}
            <h3 className="font-serif font-black text-xs text-center tracking-wider uppercase text-[#1c150e] leading-tight">
              {content.name}
            </h3>
            <p className="font-serif italic text-[10px] text-[#6b533e] text-center tracking-tight mt-0.5 leading-tight">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* 3. Prophecy & Fortune Reading */}
        <div className="space-y-3 px-2">
          {/* Ceremonial Prophecy */}
          <div className="text-center">
            <span className="font-serif text-[10px] tracking-[0.25em] text-[#c59b48] uppercase block mb-0.5">
              {content.ceremonialLabel}
            </span>
            <p className="font-serif italic text-xs text-[#d0bf9f] max-w-sm mx-auto leading-relaxed">
              &ldquo;{content.ceremonialText}&rdquo;
            </p>
          </div>

          {/* Actual Fate Box */}
          <div className="bg-[#1b120c]/90 border border-[#4a3420] rounded-lg p-3.5 relative shadow-xl">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 bg-[#1b120c] text-[#c59b48] text-[9px] font-serif uppercase tracking-widest border border-[#4a3420]/60 rounded">
              {actualFateLabel}
            </div>

            <p className="font-serif text-center text-sm text-[#ffeed4] font-medium leading-relaxed pt-1">
              &ldquo;{content.fortune}&rdquo;
            </p>

            {/* Ritual Guidance */}
            <div className="mt-3 p-2.5 rounded bg-[#271910] border border-[#b38f47]/40 text-left">
              <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-[#b38f47]/20">
                <span className="text-xs">🕯️</span>
                <span className="text-[#e2ba66] font-serif font-bold uppercase text-[9px] tracking-wider">
                  {adviceLabel}
                </span>
              </div>
              <p className="font-serif italic text-xs text-[#fff1dc] leading-relaxed">
                &ldquo;{content.advice}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 4. Footer (Instagram Story Safe Area Bottom) */}
        <div className="pt-2 pb-2 border-t border-[#b38f47]/20 flex items-center justify-between text-[10px] text-[#8c6d48] font-serif tracking-widest uppercase">
          <span className="truncate max-w-[260px]">{conclusionLabel}</span>
          <span className="text-[#c59b48] font-bold shrink-0">✦ SHITTAROT.REVANPRATAMAS.COM</span>
        </div>
      </div>
    )
  }
)

TarotShareCard.displayName = "TarotShareCard"
