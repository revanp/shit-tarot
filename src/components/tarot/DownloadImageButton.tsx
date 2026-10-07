"use client"

import React, { useState, useRef } from "react"
import { TarotCard, Language } from "@/data/tarot"
import { TarotShareCard } from "./TarotShareCard"
import { generateCardImageBlob, downloadBlob } from "@/lib/image-generator"

interface DownloadImageButtonProps {
  card: TarotCard
  lang?: Language
}

export function DownloadImageButton({ card, lang = "id" }: DownloadImageButtonProps) {
  const [status, setStatus] = useState<"idle" | "generating" | "saved">("idle")
  const shareCardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (status === "generating" || !shareCardRef.current) return

    try {
      setStatus("generating")
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(15)
      }

      const blob = await generateCardImageBlob(shareCardRef.current)
      if (blob) {
        const filename = `shit-tarot-${card.id}-${lang}.png`
        downloadBlob(blob, filename)
        setStatus("saved")
      } else {
        setStatus("idle")
      }

      setTimeout(() => {
        setStatus("idle")
      }, 2500)
    } catch (err) {
      console.error("Failed to generate tarot image:", err)
      setStatus("idle")
    }
  }

  const defaultLabel = lang === "id" ? "UNDUH GAMBAR" : "DOWNLOAD IMAGE"
  const generatingLabel = lang === "id" ? "MEMBUAT GAMBAR..." : "GENERATING..."
  const savedLabel = lang === "id" ? "GAMBAR TERSIMPAN" : "IMAGE SAVED"

  return (
    <>
      {/* Hidden Tarot Card for Off-screen High-Res Image Generation */}
      <div className="fixed -left-[9999px] -top-[9999px] pointer-events-none" aria-hidden="true">
        <TarotShareCard ref={shareCardRef} card={card} lang={lang} />
      </div>

      <button
        type="button"
        onClick={handleDownload}
        disabled={status === "generating"}
        aria-label={defaultLabel}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded border border-[#806228]/50 bg-[#1e150f]/80 hover:bg-[#2c1e14] text-[#d6c2a0] hover:text-[#f4ebd9] font-serif text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c08] disabled:opacity-60 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          {status === "generating" ? (
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
          ) : status === "saved" ? (
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 stroke-[#c59b48]"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 stroke-[#c59b48]"
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          )}
          {status === "generating"
            ? generatingLabel
            : status === "saved"
            ? savedLabel
            : defaultLabel}
        </span>
      </button>
    </>
  )
}
