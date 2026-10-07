"use client"

import React, { useState, useEffect } from "react"
import { TarotCard as TarotCardType, Language, TAROT_CARDS } from "@/data/tarot"
import { getRandomCard } from "@/lib/tarot"
import { TarotCard } from "./TarotCard"
import { CardBack } from "./CardBack"
import { FateText } from "./FateText"

type GameState = "idle" | "shuffling" | "reading"

export function TarotTable() {
  const [lang, setLang] = useState<Language>("id")
  const [gameState, setGameState] = useState<GameState>("idle")
  const [currentCard, setCurrentCard] = useState<TarotCardType>(TAROT_CARDS[0])
  const [lastCardId, setLastCardId] = useState<string | null>(null)
  
  // Animation sub-states for smooth persistent card choreography
  const [shuffleStage, setShuffleStage] = useState<number>(0)
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const handleRevealFate = () => {
    if (gameState === "shuffling") return

    // Pick new random card
    const selectedCard = getRandomCard(lastCardId)
    setCurrentCard(selectedCard)
    setLastCardId(selectedCard.id)

    // Reset flips and begin shuffle
    setIsFlipped(false)
    setShuffleStage(0)
    setGameState("shuffling")
  }

  // Shuffle sequence timer effect
  useEffect(() => {
    if (gameState !== "shuffling") return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsFlipped(true)
      setGameState("reading")
      return
    }

    const t1 = setTimeout(() => setShuffleStage(1), 150) // spread cards
    const t2 = setTimeout(() => setShuffleStage(2), 650) // riffle cut
    const t3 = setTimeout(() => setShuffleStage(3), 1200) // isolate chosen card
    const t4 = setTimeout(() => {
      setShuffleStage(4)
      setIsFlipped(true) // flip face-up in place
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(20)
      }
    }, 1650)
    const t5 = setTimeout(() => {
      // Transition to reading: card smoothly glides to left, reading fades in on right
      setGameState("reading")
    }, 2400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [gameState])

  const handleReset = () => {
    handleRevealFate()
  }

  const title = "SHIT TAROT"
  const subtitle = lang === "id" ? "Seni kuno mengarang omong kosong." : "The ancient art of making shit up."
  const ctaLabel = lang === "id" ? "UNGKAP TAKDIRKU" : "REVEAL MY FATE"
  const disclaimer1 = lang === "id" ? "Tidak ada ramalan asli yang terjadi." : "No actual divination is performed."
  const disclaimer2 = lang === "id" ? "Kartu-kartu ini kemungkinan besar cuma lagi nge-judge kamu." : "The cards are probably just judging you."
  const shufflingText = lang === "id" ? "MENGHUBUNGI DUKUN PALSU..." : "CONSULTING FAKE MYSTICS..."

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-8 overflow-x-hidden">
      {/* Background Altar Textures & Atmospheric Candlelight */}
      <div className="fixed inset-0 bg-[#120c08] pointer-events-none" />
      <div className="fixed inset-0 bg-wood-table opacity-70 pointer-events-none mix-blend-overlay" />
      <div className="fixed inset-0 bg-candlelight-glow pointer-events-none opacity-80" />
      <div className="fixed inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.95)] pointer-events-none z-10" />

      {/* Decorative Corner Filigree */}
      <div className="fixed top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#b38f47]/30 pointer-events-none z-20" />
      <div className="fixed top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#b38f47]/30 pointer-events-none z-20" />
      <div className="fixed bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#b38f47]/30 pointer-events-none z-20" />
      <div className="fixed bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#b38f47]/30 pointer-events-none z-20" />

      {/* Language Switcher */}
      <div className="relative z-30 w-full max-w-5xl flex justify-end pt-1 sm:pt-2">
        <div className="inline-flex items-center gap-1 p-1 rounded border border-[#806228]/50 bg-[#18110b]/90 text-xs font-serif shadow-lg">
          <button
            type="button"
            onClick={() => setLang("id")}
            className={`px-2.5 py-1 rounded transition-all duration-200 tracking-wider ${
              lang === "id"
                ? "bg-[#382618] text-[#ffeed4] font-bold shadow-sm border border-[#b38f47]/60"
                : "text-[#9c8266] hover:text-[#e5d5be]"
            }`}
          >
            INDONESIA
          </button>
          <span className="text-[#5c432d]">|</span>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-2.5 py-1 rounded transition-all duration-200 tracking-wider ${
              lang === "en"
                ? "bg-[#382618] text-[#ffeed4] font-bold shadow-sm border border-[#b38f47]/60"
                : "text-[#9c8266] hover:text-[#e5d5be]"
            }`}
          >
            ENGLISH
          </button>
        </div>
      </div>

      {/* Top Header / Brand */}
      <header className="relative z-20 text-center pt-2 sm:pt-4 space-y-2 select-none">
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c59b48]/60" />
          <span className="text-[#c59b48] text-sm">✦ 🜚 ✦</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c59b48]/60" />
        </div>

        <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#f4ebd9] tracking-[0.15em] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {title}
        </h1>

        <p className="font-serif italic text-sm sm:text-base text-[#c59b48]/90 tracking-wide">
          {subtitle}
        </p>
      </header>

      {/* Main Altar Stage with Continuous Animated Layout */}
      <section className="relative z-20 w-full max-w-5xl flex-1 flex flex-col items-center justify-center py-6 px-4">
        <div
          className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          {/* Persistent Tarot Card Element */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-[240px] h-[380px] sm:w-[280px] sm:h-[440px] flex items-center justify-center" style={{ perspective: "1200px" }}>
              {/* Auxiliary Deck Stack Layers (Visible only during Idle / Shuffling) */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  gameState === "reading" ? "opacity-0" : "opacity-100"
                }`}
              >
                {/* Layer cards for deck depth & shuffle wings */}
                <div
                  className="absolute inset-0 rounded-xl bg-[#1d140d] border border-[#382618]/70 shadow-lg transition-transform duration-500 ease-out"
                  style={{
                    transform:
                      gameState === "shuffling"
                        ? shuffleStage === 1
                          ? "translateX(-85px) rotate(-14deg) scale(0.95)"
                          : shuffleStage === 2
                          ? "translateX(-35px) translateY(-10px) rotate(-6deg) scale(0.98)"
                          : "translateX(0px) rotate(0deg) scale(0.92)"
                        : "translateY(10px) rotate(1.5deg)",
                    opacity: gameState === "shuffling" && shuffleStage >= 3 ? 0 : 0.85,
                    zIndex: 10
                  }}
                >
                  <CardBack />
                </div>

                <div
                  className="absolute inset-0 rounded-xl bg-[#20160e] border border-[#44301e]/80 shadow-lg transition-transform duration-500 ease-out"
                  style={{
                    transform:
                      gameState === "shuffling"
                        ? shuffleStage === 1
                          ? "translateX(85px) rotate(14deg) scale(0.95)"
                          : shuffleStage === 2
                          ? "translateX(35px) translateY(10px) rotate(6deg) scale(0.98)"
                          : "translateX(0px) rotate(0deg) scale(0.92)"
                        : "translateY(5px) rotate(-1deg)",
                    opacity: gameState === "shuffling" && shuffleStage >= 3 ? 0 : 0.85,
                    zIndex: 10
                  }}
                >
                  <CardBack />
                </div>
              </div>

              {/* The Active Primary Card */}
              <div
                className={`relative z-20 transition-transform duration-500 ease-out ${
                  gameState === "idle"
                    ? "hover:-translate-y-2 cursor-pointer"
                    : gameState === "shuffling"
                    ? shuffleStage === 1
                      ? "scale-105 -translate-y-4"
                      : shuffleStage === 2
                      ? "scale-105 -translate-y-6"
                      : "scale-100 translate-y-0"
                    : "scale-100 translate-y-0"
                }`}
                onClick={gameState === "idle" ? handleRevealFate : undefined}
              >
                <TarotCard
                  card={currentCard}
                  isFlipped={isFlipped}
                  isInteractive={gameState === "reading"}
                  lang={lang}
                />
              </div>
            </div>
          </div>

          {/* Reading Column (Smoothly reveals and slides in from right on desktop, expands below on mobile) */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col items-center lg:items-start justify-start ${
              gameState === "reading"
                ? "w-full max-w-xl lg:max-w-[540px] opacity-100 lg:ml-10 lg:pl-2 mt-6 lg:mt-0 pointer-events-auto max-h-[1400px]"
                : "w-0 max-w-0 lg:max-w-0 opacity-0 lg:ml-0 lg:pl-0 mt-0 pointer-events-none max-h-0"
            }`}
          >
            <div className="w-full max-w-xl min-w-[280px] sm:min-w-[420px] lg:min-w-[500px]">
              <FateText
                card={currentCard}
                lang={lang}
                isActive={gameState === "reading"}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>

        {/* Bottom Controls Slot (Maintains stable height during Idle & Shuffling to eliminate vertical jumping) */}
        <div
          className={`w-full max-w-md mx-auto transition-all duration-500 ease-out overflow-hidden flex flex-col items-center justify-center ${
            gameState === "reading"
              ? "max-h-0 opacity-0 mt-0 pointer-events-none"
              : "min-h-[140px] max-h-44 opacity-100 mt-6 pointer-events-auto"
          }`}
        >
          <div className="relative w-full flex items-center justify-center min-h-[110px]">
            {/* Intro CTA Controls */}
            <div
              className={`text-center space-y-3 transition-all duration-400 ease-out ${
                gameState === "idle"
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none absolute inset-x-0"
              }`}
            >
              <button
                type="button"
                onClick={handleRevealFate}
                aria-label={ctaLabel}
                className="px-10 py-3.5 rounded border-2 border-[#b38f47] bg-gradient-to-b from-[#332215] via-[#22160d] to-[#160e08] hover:from-[#442e1d] hover:to-[#22160d] text-[#f4ebd9] font-serif text-base sm:text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 shadow-[0_6px_25px_rgba(0,0,0,0.7),0_0_20px_rgba(179,143,71,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-4 focus-visible:ring-offset-[#120c08] cursor-pointer"
              >
                {ctaLabel}
              </button>

              <p className="font-serif text-[11px] sm:text-xs text-[#8c7458] leading-relaxed max-w-xs mx-auto select-none">
                {disclaimer1}<br />
                {disclaimer2}
              </p>
            </div>

            {/* Shuffling Status Indicator */}
            <div
              className={`text-center transition-all duration-400 ease-out ${
                gameState === "shuffling"
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none absolute inset-x-0"
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="inline-block w-2 h-2 rounded-full bg-[#c59b48] animate-ping" />
                <p className="font-serif italic text-xs sm:text-sm text-[#e2ba66] tracking-widest uppercase font-medium">
                  {shufflingText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Ceremonial Inscription */}
      <footer className="relative z-20 text-center pb-2 select-none">
        <p className="font-serif text-[10px] sm:text-[11px] text-[#6b553e] tracking-widest uppercase">
          MDCCCXXIV · ANNO TEMPORIS INUTILI · MMXXVI
        </p>
      </footer>
    </main>
  )
}
