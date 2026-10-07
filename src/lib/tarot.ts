import { TAROT_CARDS, TarotCard, Language, LocalizedCardContent } from "@/data/tarot"

/**
 * Get localized content for a card.
 */
export function getCardContent(card: TarotCard, lang: Language): LocalizedCardContent {
  return lang === "id" ? card.idLang : card.en
}

/**
 * Select a random card from the deck, ensuring it is not the same as the previous card.
 */
export function getRandomCard(lastCardId?: string | null): TarotCard {
  if (!lastCardId) {
    const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length)
    return TAROT_CARDS[randomIndex]
  }

  const availableCards = TAROT_CARDS.filter((card) => card.id !== lastCardId)
  const randomIndex = Math.floor(Math.random() * availableCards.length)
  return availableCards[randomIndex]
}

/**
 * Formats a reading into shareable text for the clipboard.
 * Antislop clean: no em-dashes, concise, highly shareable.
 */
export function formatShareFate(card: TarotCard, lang: Language = "id"): string {
  const content = getCardContent(card, lang)

  if (lang === "id") {
    return [
      "SHIT TAROT",
      "Seni kuno mengarang omong kosong.",
      "",
      `${content.ceremonialLabel} : ${content.name}`,
      `"${content.ceremonialText}"`,
      "",
      "TAKDIR ASLIMU:",
      `"${content.fortune}"`,
      "",
      `Petunjuk: ${content.advice}`,
      "",
      "Kartu telah bersabda. Salahkan diri sendiri."
    ].join("\n")
  }

  return [
    "SHIT TAROT",
    "The ancient art of making shit up.",
    "",
    `${content.ceremonialLabel} : ${content.name}`,
    `"${content.ceremonialText}"`,
    "",
    "YOUR ACTUAL FATE:",
    `"${content.fortune}"`,
    "",
    `Guidance: ${content.advice}`,
    "",
    "The cards have spoken. Blame yourself."
  ].join("\n")
}
