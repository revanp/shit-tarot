"use client"

import React, { useState } from "react"
import { TarotCard, Language } from "@/data/tarot"
import { formatShareFate } from "@/lib/tarot"

interface CopyFateButtonProps {
  card: TarotCard
  lang?: Language
}

export function CopyFateButton({ card, lang = "id" }: CopyFateButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(15)
      }
      const text = formatShareFate(card, lang)
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2400)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }
  }

  const defaultLabel = lang === "id" ? "SALIN TAKDIRKU" : "COPY MY FATE"
  const copiedLabel = lang === "id" ? "TERSALIN KE ALAM BAKA" : "COPIED TO THE VOID"

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={defaultLabel}
      className="inline-flex items-center justify-center px-5 py-2.5 rounded border border-[#806228]/50 bg-[#1e150f]/80 hover:bg-[#2c1e14] text-[#d6c2a0] hover:text-[#f4ebd9] font-serif text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c59b48] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c08]"
    >
      <span className="flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5 stroke-[#c59b48]"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {copied ? copiedLabel : defaultLabel}
      </span>
    </button>
  )
}
