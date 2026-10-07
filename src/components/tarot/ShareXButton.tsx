"use client"

import React, { useState, useRef } from "react"
import { TarotCard, Language } from "@/data/tarot"
import { getCardContent } from "@/lib/tarot"
import { TarotShareCard } from "./TarotShareCard"
import { generateCardImageBlob, downloadBlob } from "@/lib/image-generator"

interface ShareXButtonProps {
  card: TarotCard
  lang?: Language
}

export function ShareXButton({ card, lang = "id" }: ShareXButtonProps) {
  const [isSharing, setIsSharing] = useState(false)
  const shareCardRef = useRef<HTMLDivElement>(null)
  const content = getCardContent(card, lang)

  const handleShareToX = async () => {
    if (isSharing || !shareCardRef.current) return

    try {
      setIsSharing(true)
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(15)
      }

      const tweetText =
        lang === "id"
          ? `Aku dapet kartu "${content.name}" di Shit Tarot 💀\n\n"${content.fortune}"\n\nPetunjuk: ${content.advice}\n\nCek takdir lu: https://shittarot.revanpratamas.com`
          : `I drew "${content.name}" on Shit Tarot 💀\n\n"${content.fortune}"\n\nGuidance: ${content.advice}\n\nCheck your fate: https://shittarot.revanpratamas.com`

      const blob = await generateCardImageBlob(shareCardRef.current)

      if (blob) {
        const file = new File([blob], `shit-tarot-${card.id}.png`, {
          type: "image/png",
        })

        // Check if Web Share API with files is supported (e.g. mobile Safari / Chrome)
        if (
          typeof navigator !== "undefined" &&
          typeof navigator.canShare === "function" &&
          navigator.canShare({ files: [file] })
        ) {
          try {
            await navigator.share({
              title: "SHIT TAROT",
              text: tweetText,
              files: [file],
            })
            setIsSharing(false)
            return
          } catch (shareErr) {
            // User cancelled share dialog or share failed, fallback gracefully
            if ((shareErr as Error)?.name === "AbortError") {
              setIsSharing(false)
              return
            }
          }
        }

        // Desktop Fallback: Download image and open X tweet intent composer
        downloadBlob(blob, `shit-tarot-${card.id}.png`)
      }

      // Open Twitter/X Intent Composer
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
      window.open(tweetUrl, "_blank", "noopener,noreferrer")
      setIsSharing(false)
    } catch (err) {
      console.error("Failed to share to X:", err)
      setIsSharing(false)
    }
  }

  const shareLabel = lang === "id" ? "BAGIKAN KE X" : "SHARE ON X"
  const processingLabel = lang === "id" ? "MENYIAPKAN..." : "PREPARING..."

  return (
    <>
      {/* Hidden Tarot Card for Off-screen High-Res Image Generation */}
      <div className="fixed -left-[9999px] -top-[9999px] pointer-events-none" aria-hidden="true">
        <TarotShareCard ref={shareCardRef} card={card} lang={lang} />
      </div>

      <button
        type="button"
        onClick={handleShareToX}
        disabled={isSharing}
        aria-label={shareLabel}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded border border-[#806228]/50 bg-[#1e150f]/80 hover:bg-[#2c1e14] text-[#d6c2a0] hover:text-[#f4ebd9] font-serif text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c08] disabled:opacity-60 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          {isSharing ? (
            <svg
              className="animate-spin w-3.5 h-3.5 text-[#c59b48]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            // X (formerly Twitter) official SVG logo
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-[#c59b48]">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          )}
          {isSharing ? processingLabel : shareLabel}
        </span>
      </button>
    </>
  )
}
