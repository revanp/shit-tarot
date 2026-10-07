"use client"

import React, { useEffect, useState } from "react"
import { TarotCard, Language } from "@/data/tarot"
import { getCardContent } from "@/lib/tarot"
import { CopyFateButton } from "./CopyFateButton"

interface FateTextProps {
  card: TarotCard
  lang?: Language
  isActive?: boolean
  onReset: () => void
}

export function FateText({ card, lang = "id", isActive = true, onReset }: FateTextProps) {
  // Reveal steps:
  // 1: Card Title & Subtitle
  // 2: Ceremonial Prophecy
  // 3: "YOUR ACTUAL FATE" Header
  // 4: The Stupid Fortune
  // 5: Guidance & Actions
  const [step, setStep] = useState<number>(0)
  const content = getCardContent(card, lang)

  useEffect(() => {
    if (!isActive) {
      setStep(0)
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setStep(5)
      return
    }

    setStep(0)
    const t1 = setTimeout(() => setStep(1), 150) // Title
    const t2 = setTimeout(() => setStep(2), 550) // Ceremonial prophecy
    const t3 = setTimeout(() => setStep(3), 1150) // Header: YOUR ACTUAL FATE
    const t4 = setTimeout(() => setStep(4), 1650) // Punchline
    const t5 = setTimeout(() => setStep(5), 2350) // Advice & CTAs

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [card, isActive])

  const actualFateLabel = lang === "id" ? "TAKDIR ASLIMU" : "YOUR ACTUAL FATE"
  const oracleRevealsLabel = lang === "id" ? "SABDA KOSMIK BERKATA" : "THE ORACLE REVEALS"
  const adviceLabel = lang === "id" ? "Petunjuk Ritual:" : "Ceremonial Advice:"
  const conclusionLabel = lang === "id" ? "KARTU TELAH BERSABDA. SALAHKAN DIRI SENDIRI." : "THE CARDS HAVE SPOKEN. BLAME YOURSELF."
  const askAgainLabel = lang === "id" ? "TANYA KARTU LAGI" : "ASK THE CARDS AGAIN"

  return (
    <div className="w-full max-w-xl text-center space-y-6 select-none">
      {/* Step 1: Card Ceremonial Label & Name */}
      <div
        className={`transition-all duration-700 ease-out ${
          step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-1">
          <span className="h-[1px] w-8 bg-[#c59b48]/40" />
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#c59b48] uppercase">
            {content.ceremonialLabel}
          </span>
          <span className="h-[1px] w-8 bg-[#c59b48]/40" />
        </div>
        <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#f4ebd9] tracking-wider uppercase">
          {content.name}
        </h2>
      </div>

      {/* Step 2: Ceremonial Prophecy */}
      <div
        className={`transition-all duration-700 ease-out ${
          step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="font-serif italic text-base sm:text-lg text-[#d0bf9f] max-w-md mx-auto leading-relaxed px-4">
          &ldquo;{content.ceremonialText}&rdquo;
        </p>
      </div>

      {/* Step 3 & 4: The Punchline */}
      <div
        className={`transition-all duration-700 ease-out ${
          step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Ornate Divider */}
        <div className="flex items-center justify-center gap-4 my-4 opacity-70">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#c59b48]/60" />
          <span className="text-[#c59b48] text-xs">✦</span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#c59b48]/60" />
        </div>

        <span className="inline-block text-[11px] font-serif font-semibold tracking-[0.3em] text-[#a64040] uppercase mb-2">
          {actualFateLabel}
        </span>

        {/* Step 4: Stupid Fortune */}
        <div
          className={`transition-all duration-700 ease-out ${
            step >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-[#1b120c]/80 border border-[#4a3420]/70 rounded-lg p-5 sm:p-6 shadow-2xl relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 bg-[#1b120c] text-[#c59b48] text-[9px] font-serif uppercase tracking-widest border border-[#4a3420]/50 rounded">
              {oracleRevealsLabel}
            </div>
            <p className="font-serif text-lg sm:text-xl text-[#ffeed4] font-medium leading-relaxed">
              &ldquo;{content.fortune}&rdquo;
            </p>
            
            {/* Prominent Petunjuk Ritual Box */}
            <div className="mt-5 p-4 sm:p-5 rounded-lg bg-[#271910] border-2 border-[#b38f47]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-left relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#b38f47]/30">
                <span className="text-[#e2ba66] text-base sm:text-lg">🕯️</span>
                <span className="text-[#e2ba66] font-serif font-black uppercase text-xs sm:text-sm tracking-[0.2em]">
                  {adviceLabel}
                </span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-[#fff1dc] leading-relaxed">
                &ldquo;{content.advice}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 5: Solemn Closing & Actions */}
      <div
        className={`space-y-5 transition-all duration-700 ease-out ${
          step >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="font-serif text-[10px] sm:text-xs tracking-[0.25em] text-[#78614a] uppercase">
          {conclusionLabel}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {/* Ask Again Primary Ceremonial CTA */}
          <button
            type="button"
            onClick={onReset}
            aria-label={askAgainLabel}
            className="w-full sm:w-auto px-7 py-3 rounded border-2 border-[#b38f47] bg-gradient-to-b from-[#2a1d13] to-[#1a110a] hover:from-[#3a281a] hover:to-[#22160d] text-[#f4ebd9] font-serif text-sm tracking-widest uppercase transition-all duration-200 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(179,143,71,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c08] cursor-pointer"
          >
            {askAgainLabel}
          </button>

          {/* Copy My Fate */}
          <CopyFateButton card={card} lang={lang} />
        </div>
      </div>
    </div>
  )
}
