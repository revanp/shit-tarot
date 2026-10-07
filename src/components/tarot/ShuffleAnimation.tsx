"use client"

import React, { useEffect, useState } from "react"
import { TarotCard as TarotCardType, Language } from "@/data/tarot"
import { CardBack } from "./CardBack"
import { CardFront } from "./CardFront"

interface ShuffleAnimationProps {
  card: TarotCardType
  lang?: Language
  onComplete: () => void
}

export function ShuffleAnimation({ card, lang = "id", onComplete }: ShuffleAnimationProps) {
  // Stages:
  // 0: Initial focus
  // 1: Spread cards wide
  // 2: Riffle shuffle / cross cuts
  // 3: Draw selected card
  // 4: Settle & Flip
  const [stage, setStage] = useState<number>(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      setIsFlipped(true)
      const timer = setTimeout(() => {
        onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }

    // Sequence timing:
    const t1 = setTimeout(() => setStage(1), 150) // spread
    const t2 = setTimeout(() => setStage(2), 650) // riffle shuffle
    const t3 = setTimeout(() => setStage(3), 1250) // isolate drawn card
    const t4 = setTimeout(() => {
      setStage(4)
      setIsFlipped(true)
    }, 1750) // flip
    const t5 = setTimeout(() => {
      onComplete()
    }, 2400) // transition to reading screen

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [onComplete])

  return (
    <div className="relative w-full max-w-lg h-[440px] flex items-center justify-center select-none" style={{ perspective: "1200px" }}>
      {/* Background auxiliary shuffle cards */}
      {/* Left wing deck cards */}
      <div
        className="absolute w-[220px] h-[350px] sm:w-[260px] sm:h-[410px] rounded-xl transition-all duration-500 ease-out"
        style={{
          transform:
            stage === 1
              ? "translateX(-90px) rotate(-14deg) scale(0.95)"
              : stage === 2
              ? "translateX(-30px) translateY(-10px) rotate(-6deg) scale(0.98)"
              : stage >= 3
              ? "translateX(0px) rotate(0deg) scale(0.92) opacity-0"
              : "translateX(0px) rotate(0deg)",
          opacity: stage >= 3 ? 0 : 0.85,
          zIndex: 10
        }}
      >
        <CardBack />
      </div>

      {/* Right wing deck cards */}
      <div
        className="absolute w-[220px] h-[350px] sm:w-[260px] sm:h-[410px] rounded-xl transition-all duration-500 ease-out"
        style={{
          transform:
            stage === 1
              ? "translateX(90px) rotate(14deg) scale(0.95)"
              : stage === 2
              ? "translateX(30px) translateY(10px) rotate(6deg) scale(0.98)"
              : stage >= 3
              ? "translateX(0px) rotate(0deg) scale(0.92) opacity-0"
              : "translateX(0px) rotate(0deg)",
          opacity: stage >= 3 ? 0 : 0.85,
          zIndex: 10
        }}
      >
        <CardBack />
      </div>

      {/* Secondary ghost cut cards for rich riffle animation */}
      <div
        className="absolute w-[220px] h-[350px] sm:w-[260px] sm:h-[410px] rounded-xl transition-all duration-400 ease-out pointer-events-none"
        style={{
          transform:
            stage === 1
              ? "translateY(-30px) rotate(-4deg)"
              : stage === 2
              ? "translateX(-60px) rotate(8deg)"
              : "translateX(0px) scale(0.9)",
          opacity: stage === 1 || stage === 2 ? 0.7 : 0,
          zIndex: 8
        }}
      >
        <CardBack />
      </div>

      {/* Primary Chosen Card */}
      <div
        className="relative w-[240px] h-[380px] sm:w-[280px] sm:h-[440px] transition-all duration-700 ease-out"
        style={{
          transform:
            stage === 0
              ? "scale(1) translateY(0px)"
              : stage === 1
              ? "scale(1.03) translateY(-15px)"
              : stage === 2
              ? "scale(1.05) translateY(-25px)"
              : stage === 3
              ? "scale(1.08) translateY(-10px)"
              : "scale(1) translateY(0px)",
          zIndex: 30
        }}
      >
        <div
          className="w-full h-full relative transition-transform duration-700 ease-out transform-gpu rounded-xl"
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
            transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
            boxShadow: isFlipped
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 30px rgba(179, 143, 71, 0.2)"
              : "0 20px 40px -10px rgba(0, 0, 0, 0.8)"
          }}
        >
          {/* Card Back */}
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

          {/* Card Front */}
          <div
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <CardFront card={card} lang={lang} />
          </div>
        </div>
      </div>
    </div>
  )
}
