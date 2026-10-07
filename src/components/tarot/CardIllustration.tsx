import React from "react"

interface CardIllustrationProps {
  illustrationKey: string
  className?: string
}

export function CardIllustration({ illustrationKey, className = "" }: CardIllustrationProps) {
  const ink = "#1c150e"
  const paper = "#ede1ca"
  const mutedGold = "#9e7d3b"
  const accentRed = "#782222"

  switch (illustrationKey) {
    case "fool":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Background etching */}
          <path d="M10 240 Q 60 220, 110 235 T 230 220" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.5" />
          <path d="M10 248 Q 70 230, 130 245 T 230 235" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
          {/* Radiant Sun in top right */}
          <circle cx="205" cy="40" r="18" fill={paper} stroke={mutedGold} strokeWidth="1.5" />
          <path d="M205 14 L205 6 M205 66 L205 74 M179 40 L171 40 M231 40 L239 40 M186 21 L180 15 M224 59 L230 65 M186 59 L180 65 M224 21 L230 15" stroke={mutedGold} strokeWidth="1.2" />
          {/* Cliff edge */}
          <path d="M0 270 L85 270 Q130 265 140 220 L150 180 L135 150 Q115 160 100 170" fill="#dfd0b5" stroke={ink} strokeWidth="1.8" />
          {/* Cliff shading hatching */}
          <path d="M145 190 L110 260 M140 205 L115 265 M135 220 L120 270 M148 182 L130 240" stroke={ink} strokeWidth="0.8" opacity="0.6" />
          {/* Traveler Body walking off cliff */}
          {/* Legs */}
          <path d="M125 145 L145 175 L162 182" strokeWidth="2.2" />
          <path d="M115 145 L110 178 L122 186" strokeWidth="2.2" />
          {/* Ornate Tunic */}
          <path d="M100 95 C95 125, 105 148, 128 148 C140 148, 142 125, 138 95 Z" fill={paper} strokeWidth="1.6" />
          <circle cx="118" cy="115" r="3" fill={accentRed} stroke="none" />
          <circle cx="120" cy="130" r="3" fill={mutedGold} stroke="none" />
          {/* Arms: Holding walking stick with bundle over shoulder, but looking down at smartphone */}
          <path d="M102 100 L68 70 L50 60" strokeWidth="1.8" />
          {/* Knapsack bundle */}
          <circle cx="60" cy="65" r="14" fill="#d8c5a2" strokeWidth="1.5" />
          <path d="M52 60 Q60 65 68 60 M55 72 Q60 68 65 72" strokeWidth="1" />
          {/* Hand holding phone in front of face */}
          <path d="M130 102 L148 108 L152 98" strokeWidth="1.8" />
          {/* Smartphone device */}
          <rect x="150" y="86" width="16" height="26" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.5" />
          <rect x="153" y="90" width="10" height="18" fill="#e8dcc4" stroke="none" />
          {/* Glowing screen lines */}
          <path d="M155 94 L161 94 M155 98 L159 98 M155 102 L161 102" stroke={ink} strokeWidth="0.8" />
          {/* Head looking straight into the screen */}
          <circle cx="126" cy="74" r="12" fill={paper} strokeWidth="1.6" />
          {/* Feather in cap */}
          <path d="M120 65 Q110 40 95 38 Q115 50 122 62" fill={accentRed} strokeWidth="1.2" />
          {/* Little dog jumping & barking at cliff edge */}
          <path d="M80 160 Q88 150 96 155 Q102 162 98 172 L90 178 L78 174 Z" fill={paper} strokeWidth="1.5" />
          <path d="M96 152 L102 146" strokeWidth="1.2" /> {/* Dog ears */}
          <path d="M78 168 L72 162" strokeWidth="1.2" /> {/* Dog tail */}
          <path d="M104 150 L110 148 M106 154 L114 154" stroke={ink} strokeWidth="0.8" /> {/* Bark lines */}
          {/* Butterfly / ethereal glyph */}
          <path d="M175 140 Q180 132 185 140 Q180 148 175 140 Z M185 140 Q190 132 195 140 Q190 148 185 140 Z" fill={mutedGold} strokeWidth="0.8" />
        </svg>
      )

    case "magician":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Infinity symbol over head */}
          <path d="M102 38 C90 38 82 48 92 56 C102 64 114 48 120 48 C126 48 138 64 148 56 C158 48 150 38 138 38 C126 38 126 56 120 48 C114 40 114 38 102 38 Z" fill="none" stroke={mutedGold} strokeWidth="2" />
          {/* Magician figure */}
          <circle cx="120" cy="74" r="14" fill={paper} strokeWidth="1.6" />
          <path d="M102 96 C98 135 94 175 90 215 L150 215 C146 175 142 135 138 96 Z" fill={paper} strokeWidth="1.6" />
          {/* Robe details */}
          <path d="M120 96 L120 215" strokeWidth="1" strokeDasharray="3 3" />
          {/* Right hand pointing wand up */}
          <path d="M138 108 L170 85 L182 62" strokeWidth="2" />
          <line x1="178" y1="68" x2="198" y2="40" stroke={mutedGold} strokeWidth="2.5" />
          <circle cx="200" cy="38" r="3" fill={accentRed} stroke="none" />
          {/* Left hand pointing wand down at table */}
          <path d="M102 108 L78 132 L72 158" strokeWidth="2" />
          {/* Mystic Altar / Table */}
          <rect x="40" y="170" width="160" height="75" fill="#dfd0b5" strokeWidth="1.8" />
          <line x1="40" y1="184" x2="200" y2="184" strokeWidth="1.2" />
          {/* Objects on altar: Pentacle, Chalice, Sword, and a Terminal Shell Prompt with Floppy Disk */}
          {/* Floppy disk & USB */}
          <rect x="52" y="152" width="22" height="22" rx="2" fill="#fffdfa" strokeWidth="1.2" />
          <rect x="57" y="152" width="12" height="8" fill="#cbb792" strokeWidth="0.8" />
          {/* Chalice / Coffee Mug */}
          <path d="M88 152 L92 168 L98 168 L102 152 Z" fill={paper} strokeWidth="1.2" />
          <path d="M102 156 C107 156 107 164 102 164" strokeWidth="1" />
          <path d="M92 146 Q95 142 98 146" stroke={accentRed} strokeWidth="0.8" /> {/* Steam */}
          {/* Mini Terminal Screen */}
          <rect x="114" y="142" width="46" height="30" rx="2" fill="#1c150e" stroke={mutedGold} strokeWidth="1.4" />
          <text x="118" y="154" fill="#a0dc85" fontSize="8" fontFamily="monospace" stroke="none">&gt; bash</text>
          <text x="118" y="164" fill="#ede0c8" fontSize="7" fontFamily="monospace" stroke="none">sleep 99</text>
          {/* Pentacle Coin */}
          <circle cx="178" cy="158" r="10" fill={paper} stroke={mutedGold} strokeWidth="1.4" />
          <polygon points="178,150 181,156 187,156 182,160 184,166 178,162 172,166 174,160 169,156 175,156" fill={mutedGold} stroke="none" />
          {/* Table Legs */}
          <rect x="48" y="245" width="14" height="30" fill={paper} strokeWidth="1.4" />
          <rect x="178" y="245" width="14" height="30" fill={paper} strokeWidth="1.4" />
        </svg>
      )

    case "high-priestess":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Twin Pillars */}
          {/* Pillar B (Left) */}
          <rect x="25" y="40" width="28" height="195" fill="#1c150e" stroke={ink} strokeWidth="1.6" />
          <text x="34" y="140" fill={paper} fontSize="18" fontFamily="serif" fontWeight="bold" stroke="none">B</text>
          <path d="M20 40 L58 40 L50 48 L28 48 Z M20 235 L58 235 L50 227 L28 227 Z" fill={ink} />
          {/* Pillar J (Right) */}
          <rect x="187" y="40" width="28" height="195" fill={paper} stroke={ink} strokeWidth="1.6" />
          <text x="196" y="140" fill={ink} fontSize="18" fontFamily="serif" fontWeight="bold" stroke="none">J</text>
          <path d="M182 40 L220 40 L212 48 L190 48 Z M182 235 L220 235 L212 227 L190 227 Z" fill={paper} />
          {/* Veil with Pomegranates & Wifi arcs */}
          <path d="M53 50 C90 60 150 60 187 50 L187 180 C150 170 90 170 53 180 Z" fill="#e5d7bc" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.85" />
          {/* Seated Priestess */}
          {/* Lunar Horned Crown with sphere */}
          <circle cx="120" cy="56" r="8" fill={mutedGold} stroke={ink} strokeWidth="1.4" />
          <path d="M106 50 C114 62 126 62 134 50" stroke={ink} strokeWidth="1.6" />
          {/* Head & Veil */}
          <circle cx="120" cy="76" r="12" fill={paper} strokeWidth="1.4" />
          <path d="M108 78 C102 105 95 145 92 215 L148 215 C145 145 138 105 132 78 Z" fill={paper} strokeWidth="1.5" />
          {/* Solar Cross on breast */}
          <path d="M120 102 L120 118 M112 110 L128 110" stroke={accentRed} strokeWidth="2" />
          {/* Sacred Scroll labeled TORA / README */}
          <rect x="94" y="132" width="52" height="32" rx="4" fill="#dfcfb0" stroke={ink} strokeWidth="1.5" />
          <path d="M94 136 C98 132 106 132 110 136 L110 164 C106 160 98 160 94 164 Z M136 136 C140 132 146 132 150 136" fill="#cfbe9b" />
          <text x="100" y="148" fill={accentRed} fontSize="7" fontFamily="serif" fontWeight="bold" stroke="none">README</text>
          <text x="103" y="157" fill={ink} fontSize="6" fontFamily="sans-serif" stroke="none">UNREAD</text>
          {/* Crescent moon at her feet */}
          <path d="M100 245 C112 238 128 238 140 245 C132 248 108 248 100 245 Z" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
        </svg>
      )

    case "empress":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Diadem with 12 stars */}
          <path d="M104 55 Q120 48 136 55" stroke={mutedGold} strokeWidth="2" />
          <circle cx="108" cy="48" r="2.5" fill={mutedGold} stroke="none" />
          <circle cx="120" cy="44" r="3" fill={accentRed} stroke="none" />
          <circle cx="132" cy="48" r="2.5" fill={mutedGold} stroke="none" />
          {/* Head & Rich Robe */}
          <circle cx="120" cy="70" r="13" fill={paper} strokeWidth="1.5" />
          <path d="M96 92 C85 130 80 180 72 235 L168 235 C160 180 155 130 144 92 Z" fill={paper} strokeWidth="1.6" />
          {/* Robe Pomegranate / Heart Pattern */}
          <circle cx="112" cy="120" r="4" fill={accentRed} stroke="none" />
          <circle cx="128" cy="120" r="4" fill={accentRed} stroke="none" />
          <circle cx="120" cy="145" r="4" fill={accentRed} stroke="none" />
          {/* Sceptre in right hand */}
          <line x1="140" y1="105" x2="168" y2="75" stroke={mutedGold} strokeWidth="2.2" />
          <circle cx="170" cy="73" r="5" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          {/* Shield with Venus Symbol */}
          <path d="M152 160 C152 195 185 195 185 160 Z" fill="#e2d4bc" stroke={ink} strokeWidth="1.6" />
          <circle cx="168" cy="172" r="5" stroke={accentRed} strokeWidth="1.4" />
          <line x1="168" y1="177" x2="168" y2="187" stroke={accentRed} strokeWidth="1.4" />
          <line x1="164" y1="182" x2="172" y2="182" stroke={accentRed} strokeWidth="1.4" />
          {/* Overflowing chat notification bubbles */}
          <rect x="42" y="110" width="38" height="24" rx="6" fill="#fffdfa" stroke={ink} strokeWidth="1.4" />
          <path d="M48 134 L44 140 L54 134 Z" fill="#fffdfa" stroke={ink} strokeWidth="1.2" />
          <circle cx="74" cy="110" r="7" fill={accentRed} stroke={ink} strokeWidth="1" />
          <text x="70" y="113" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" stroke="none">99+</text>
          {/* Second bubble */}
          <rect x="34" y="146" width="44" height="24" rx="6" fill="#fffdfa" stroke={ink} strokeWidth="1.4" />
          <circle cx="72" cy="146" r="7" fill={accentRed} stroke={ink} strokeWidth="1" />
          <text x="68" y="149" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" stroke="none">342</text>
          {/* Wheat field at bottom */}
          <path d="M30 240 Q40 215 50 240 M60 240 Q70 210 80 240 M160 240 Q170 215 180 240 M190 240 Q200 210 210 240" stroke={mutedGold} strokeWidth="1.5" />
        </svg>
      )

    case "emperor":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Cube Stone Throne with Ram Heads */}
          <rect x="55" y="100" width="130" height="140" fill="#d8c7a8" stroke={ink} strokeWidth="2" />
          <path d="M55 100 Q40 90 45 120 Q55 120 55 105" fill="#c4b08e" stroke={ink} strokeWidth="1.4" />
          <path d="M185 100 Q200 90 195 120 Q185 120 185 105" fill="#c4b08e" stroke={ink} strokeWidth="1.4" />
          {/* Emperor Figure */}
          <circle cx="120" cy="74" r="14" fill={paper} strokeWidth="1.6" />
          {/* Crown & Long Beard */}
          <path d="M110 64 L114 56 L120 62 L126 56 L130 64 Z" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          <path d="M112 82 Q120 115 128 82" fill="#fffdf8" stroke={ink} strokeWidth="1.2" />
          {/* Imperial Robes & Armor */}
          <path d="M96 98 L88 200 L152 200 L144 98 Z" fill={accentRed} stroke={ink} strokeWidth="1.6" />
          <rect x="105" y="102" width="30" height="35" fill="#c4b08e" stroke={ink} strokeWidth="1.2" />
          {/* Left hand holding imperial orb */}
          <circle cx="158" cy="140" r="9" fill={mutedGold} stroke={ink} strokeWidth="1.4" />
          <line x1="158" y1="128" x2="158" y2="135" stroke={ink} strokeWidth="1.2" />
          {/* Right hand pointing angrily at the WiFi router */}
          <line x1="90" y1="135" x2="70" y2="160" strokeWidth="2" />
          {/* WiFi Router sitting on stone plinth */}
          <rect x="25" y="195" width="46" height="20" rx="2" fill="#1c150e" stroke={mutedGold} strokeWidth="1.4" />
          <line x1="33" y1="195" x2="33" y2="180" stroke={ink} strokeWidth="1.8" />
          <line x1="43" y1="195" x2="43" y2="180" stroke={ink} strokeWidth="1.8" />
          {/* Blinking red error light */}
          <circle cx="58" cy="205" r="3" fill="#ff2222" stroke="none" />
          <path d="M28 175 Q33 170 38 175" stroke="#ff2222" strokeWidth="1" strokeDasharray="1 2" />
        </svg>
      )

    case "hierophant":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Triple Crown (Papal Tiara) */}
          <path d="M108 52 L132 52 L128 44 L112 44 Z M110 44 L130 44 L126 36 L114 36 Z M112 36 L128 36 L120 28 Z" fill={mutedGold} stroke={ink} strokeWidth="1.3" />
          {/* Hierophant Figure */}
          <circle cx="120" cy="68" r="12" fill={paper} strokeWidth="1.5" />
          <path d="M96 88 L85 210 L155 210 L144 88 Z" fill={paper} stroke={ink} strokeWidth="1.6" />
          {/* Triple Cross Staff in left hand */}
          <line x1="82" y1="40" x2="82" y2="200" stroke={mutedGold} strokeWidth="2.2" />
          <line x1="72" y1="65" x2="92" y2="65" stroke={mutedGold} strokeWidth="2" />
          <line x1="75" y1="75" x2="89" y2="75" stroke={mutedGold} strokeWidth="1.8" />
          <line x1="78" y1="85" x2="86" y2="85" stroke={mutedGold} strokeWidth="1.5" />
          {/* Right hand in blessing gesture */}
          <path d="M138 100 L150 92 L152 82" strokeWidth="1.8" />
          {/* Two Disciples at feet reading legacy monolithic code */}
          <path d="M60 215 Q75 190 85 225 Z" fill="#c4b08e" stroke={ink} strokeWidth="1.4" />
          <path d="M155 225 Q165 190 180 215 Z" fill="#c4b08e" stroke={ink} strokeWidth="1.4" />
          {/* Crossed Golden Keys of Saint Peter */}
          <line x1="105" y1="230" x2="135" y2="250" stroke={mutedGold} strokeWidth="2" />
          <line x1="135" y1="230" x2="105" y2="250" stroke={mutedGold} strokeWidth="2" />
          {/* Ancient Stone Monolith tablet in background */}
          <rect x="95" y="112" width="50" height="42" fill="#dfd0b5" stroke={ink} strokeWidth="1.2" />
          <text x="100" y="125" fill={ink} fontSize="6" fontFamily="monospace" stroke="none">LEGACY.v1</text>
          <text x="100" y="135" fill={accentRed} fontSize="5" fontFamily="monospace" stroke="none">DO NOT TOUCH</text>
          <text x="100" y="145" fill={ink} fontSize="5" fontFamily="monospace" stroke="none">PROD BREAKS</text>
        </svg>
      )

    case "lovers":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Angel Raphael with spreading wings in clouds */}
          <circle cx="120" cy="50" r="14" fill={paper} strokeWidth="1.5" />
          <path d="M102 45 C80 30 50 40 42 65 C60 70 85 62 104 55" fill="#f0e6d2" stroke={ink} strokeWidth="1.2" />
          <path d="M138 45 C160 30 190 40 198 65 C180 70 155 62 136 55" fill="#f0e6d2" stroke={ink} strokeWidth="1.2" />
          {/* Radiant Sun behind Angel */}
          <circle cx="120" cy="50" r="28" stroke={mutedGold} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          {/* Left Figure (User awaiting food) */}
          <circle cx="75" cy="140" r="11" fill={paper} strokeWidth="1.5" />
          <path d="M62 160 C62 195 65 230 65 250 L88 250 C88 230 88 195 88 160 Z" fill={paper} strokeWidth="1.4" />
          {/* User's arm reaching out */}
          <path d="M85 168 L108 170" strokeWidth="1.8" />
          {/* Right Figure (Delivery Driver with helmet and thermal delivery bag) */}
          <circle cx="165" cy="138" r="13" fill="#1c150e" stroke={ink} strokeWidth="1.5" /> {/* Helmet */}
          <path d="M156 138 L174 138" stroke={mutedGold} strokeWidth="2" /> {/* Helmet visor */}
          <path d="M152 160 C152 195 152 230 152 250 L178 250 C178 230 178 195 178 160 Z" fill="#2d3748" stroke={ink} strokeWidth="1.4" />
          {/* Thermal Food Delivery Backpack */}
          <rect x="175" y="152" width="28" height="42" rx="3" fill={accentRed} stroke={ink} strokeWidth="1.5" />
          <text x="179" y="176" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="sans-serif" stroke="none">EATS</text>
          {/* Driver holding phone with OTP prompt */}
          <path d="M155 168 L128 170" strokeWidth="1.8" />
          <rect x="112" y="160" width="18" height="26" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.4" />
          <text x="114" y="172" fill={accentRed} fontSize="6" fontWeight="bold" fontFamily="sans-serif" stroke="none">OTP?</text>
        </svg>
      )

    case "chariot":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Starry Canopy */}
          <path d="M60 45 L180 45 L170 85 L70 85 Z" fill="#2c2218" stroke={mutedGold} strokeWidth="1.5" />
          <circle cx="85" cy="65" r="2" fill={mutedGold} stroke="none" />
          <circle cx="120" cy="65" r="2.5" fill={mutedGold} stroke="none" />
          <circle cx="155" cy="65" r="2" fill={mutedGold} stroke="none" />
          {/* Charioteer in Armor */}
          <circle cx="120" cy="100" r="13" fill={paper} strokeWidth="1.6" />
          <path d="M100 120 L94 175 L146 175 L140 120 Z" fill={paper} stroke={ink} strokeWidth="1.6" />
          {/* Armored Chariot Base */}
          <rect x="68" y="165" width="104" height="45" fill="#dfd0b5" stroke={ink} strokeWidth="1.8" />
          <circle cx="70" cy="210" r="16" fill={paper} stroke={ink} strokeWidth="1.8" />
          <circle cx="170" cy="210" r="16" fill={paper} stroke={ink} strokeWidth="1.8" />
          {/* Two Sphinxes / Beasts pulling in chaos */}
          {/* Left Beast (Dark, labeled COFFEE) */}
          <path d="M40 230 C50 205 75 215 80 245 Z" fill="#1c150e" stroke={ink} strokeWidth="1.5" />
          <text x="44" y="240" fill={paper} fontSize="6" fontFamily="sans-serif" fontWeight="bold" stroke="none">CAFFEINE</text>
          {/* Right Beast (Light, labeled SLEEP) */}
          <path d="M160 245 C165 215 190 205 200 230 Z" fill={paper} stroke={ink} strokeWidth="1.5" />
          <text x="168" y="240" fill={ink} fontSize="6" fontFamily="sans-serif" fontWeight="bold" stroke="none">BURNOUT</text>
          {/* Panic lines & speed trails */}
          <line x1="20" y1="180" x2="50" y2="180" stroke={accentRed} strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="15" y1="195" x2="55" y2="195" stroke={accentRed} strokeWidth="1.2" strokeDasharray="4 2" />
        </svg>
      )

    case "strength":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Infinity symbol over Maiden's head */}
          <path d="M96 38 C86 38 78 46 86 54 C96 62 108 46 114 46 C120 46 132 62 142 54 C150 46 142 38 132 38 C122 38 120 54 114 46 C108 38 106 38 96 38 Z" stroke={mutedGold} strokeWidth="1.8" />
          {/* Gentle Maiden */}
          <circle cx="114" cy="72" r="12" fill={paper} strokeWidth="1.5" />
          <path d="M96 92 C88 135 82 185 75 240 L135 240 C130 185 125 135 120 92 Z" fill={paper} stroke={ink} strokeWidth="1.6" />
          {/* Flower Garland */}
          <path d="M102 65 Q114 58 126 65" stroke={mutedGold} strokeWidth="2" />
          {/* Great Lion */}
          <path d="M125 180 C135 150 175 145 190 175 C205 205 185 245 145 245 Z" fill="#d4b47d" stroke={ink} strokeWidth="1.8" />
          <path d="M140 185 C145 170 170 170 168 190 C168 200 155 205 142 195 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Maiden gently holding open the lion's mouth */}
          <path d="M110 115 L140 175" strokeWidth="1.8" />
          <path d="M120 120 L146 190" strokeWidth="1.8" />
          {/* Speech banner scroll */}
          <rect x="25" y="125" width="70" height="28" rx="3" fill="#fffdfa" stroke={ink} strokeWidth="1.2" />
          <text x="30" y="138" fill={accentRed} fontSize="6" fontFamily="sans-serif" fontWeight="bold" stroke="none">"I CANNOT DEAL</text>
          <text x="32" y="147" fill={accentRed} fontSize="6" fontFamily="sans-serif" fontWeight="bold" stroke="none">WITH THIS TODAY"</text>
        </svg>
      )

    case "hermit":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Lone Mountain Peak */}
          <path d="M10 260 L115 110 L230 260 Z" fill="#dfd0b5" stroke={ink} strokeWidth="1.6" />
          <path d="M115 110 L140 260" stroke={ink} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          {/* Cloaked Hermit Figure */}
          <circle cx="115" cy="85" r="10" fill={paper} strokeWidth="1.5" />
          <path d="M110 95 Q115 125 120 95" fill="#fffdf8" stroke={ink} strokeWidth="1.2" /> {/* Long beard */}
          <path d="M95 105 C90 145 80 200 75 245 L155 245 C150 200 140 145 135 105 Z" fill="#2d241e" stroke={ink} strokeWidth="1.6" />
          {/* Long Walking Staff */}
          <line x1="88" y1="80" x2="88" y2="245" stroke={mutedGold} strokeWidth="2.2" />
          {/* Lantern of Truth in right hand */}
          <line x1="130" y1="110" x2="162" y2="120" strokeWidth="2" />
          <rect x="154" y="120" width="22" height="32" rx="2" fill="#fffef0" stroke={mutedGold} strokeWidth="1.6" />
          {/* Glowing Star inside lantern */}
          <polygon points="165,128 167,133 172,133 168,136 170,141 165,138 160,141 162,136 158,133 163,133" fill={accentRed} stroke="none" />
          {/* Do Not Disturb door hanger / Airplane mode icon floating above */}
          <circle cx="185" cy="65" r="14" fill="#fffdfa" stroke={ink} strokeWidth="1.4" />
          <path d="M178 65 L192 65" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
        </svg>
      )

    case "wheel-of-fortune":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Alchemical Circles */}
          <circle cx="120" cy="140" r="75" stroke={ink} strokeWidth="1.8" />
          <circle cx="120" cy="140" r="55" fill="#dfd0b5" stroke={ink} strokeWidth="1.5" />
          {/* 8 Spokes */}
          <line x1="120" y1="65" x2="120" y2="215" stroke={mutedGold} strokeWidth="1.8" />
          <line x1="45" y1="140" x2="195" y2="140" stroke={mutedGold} strokeWidth="1.8" />
          <line x1="67" y1="87" x2="173" y2="193" stroke={mutedGold} strokeWidth="1.8" />
          <line x1="67" y1="193" x2="173" y2="87" stroke={mutedGold} strokeWidth="1.8" />
          {/* Sector texts */}
          <text x="106" y="80" fill={accentRed} fontSize="6" fontFamily="sans-serif" fontWeight="bold" stroke="none">DELIVERED</text>
          <text x="135" y="115" fill={ink} fontSize="6" fontFamily="sans-serif" stroke="none">DELAYED</text>
          <text x="105" y="208" fill={ink} fontSize="6" fontFamily="sans-serif" stroke="none">LOST</text>
          <text x="56" y="143" fill={ink} fontSize="6" fontFamily="sans-serif" stroke="none">RETURN</text>
          {/* Center Hub */}
          <circle cx="120" cy="140" r="14" fill={paper} stroke={ink} strokeWidth="1.8" />
          {/* Sphinx perched on top */}
          <path d="M108 55 Q120 40 132 55 L138 65 L102 65 Z" fill={mutedGold} stroke={ink} strokeWidth="1.4" />
          <line x1="130" y1="48" x2="145" y2="40" stroke={ink} strokeWidth="1.5" /> {/* Sword */}
          {/* Anubis rising on the right */}
          <path d="M185 130 Q198 145 185 165 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Typhon descending on the left */}
          <path d="M55 130 Q42 145 55 165 Z" fill="#1c150e" stroke={ink} strokeWidth="1.4" />
        </svg>
      )

    case "justice":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Enthroned Justice figure */}
          <circle cx="120" cy="68" r="12" fill={paper} strokeWidth="1.5" />
          {/* Blindfold */}
          <rect x="108" y="64" width="24" height="6" fill="#1c150e" stroke="none" />
          {/* Crown */}
          <path d="M110 56 L130 56 L125 48 L115 48 Z" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          {/* Robes */}
          <path d="M96 88 L85 225 L155 225 L144 88 Z" fill={accentRed} stroke={ink} strokeWidth="1.6" />
          {/* Upright Sword of Truth in right hand */}
          <line x1="165" y1="45" x2="165" y2="145" stroke={mutedGold} strokeWidth="2.5" />
          <line x1="155" y1="125" x2="175" y2="125" stroke={ink} strokeWidth="2" />
          {/* Scales of Justice in left hand */}
          <line x1="102" y1="95" x2="65" y2="105" strokeWidth="1.8" />
          <line x1="45" y1="105" x2="85" y2="105" stroke={mutedGold} strokeWidth="2" />
          {/* Left Pan */}
          <line x1="45" y1="105" x2="38" y2="130" stroke={ink} strokeWidth="1" />
          <line x1="45" y1="105" x2="52" y2="130" stroke={ink} strokeWidth="1" />
          <path d="M35 130 Q45 138 55 130 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Right Pan weighed down heavily by giant Terms & Conditions scroll */}
          <line x1="85" y1="105" x2="78" y2="148" stroke={ink} strokeWidth="1" />
          <line x1="85" y1="105" x2="92" y2="148" stroke={ink} strokeWidth="1" />
          <path d="M75 148 Q85 156 95 148 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Heavy T&C document on the scale */}
          <rect x="72" y="125" width="26" height="22" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.2" />
          <text x="75" y="135" fill={accentRed} fontSize="5" fontWeight="bold" fontFamily="sans-serif" stroke="none">TERMS</text>
          <text x="75" y="142" fill={ink} fontSize="4" fontFamily="sans-serif" stroke="none">AGREED</text>
        </svg>
      )

    case "hanged-man":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Living Wood Gallows (Tau Cross) */}
          <path d="M40 30 L200 30 L190 45 L50 45 Z" fill="#8c6d48" stroke={ink} strokeWidth="1.8" />
          <rect x="40" y="30" width="16" height="230" fill="#8c6d48" stroke={ink} strokeWidth="1.8" />
          <rect x="184" y="30" width="16" height="230" fill="#8c6d48" stroke={ink} strokeWidth="1.8" />
          {/* Suspended Rope from beam */}
          <line x1="120" y1="45" x2="120" y2="85" stroke={mutedGold} strokeWidth="2.5" />
          {/* Suspended upside-down figure */}
          {/* Right leg bound to rope */}
          <path d="M120 85 L120 120" strokeWidth="2.2" />
          {/* Left leg bent behind knee forming numeral 4 */}
          <path d="M120 105 L145 105 L120 120" strokeWidth="2.2" />
          {/* Torso */}
          <path d="M108 120 L132 120 L128 165 L112 165 Z" fill="#2d4059" stroke={ink} strokeWidth="1.6" />
          {/* Inverted Head with serene golden halo */}
          <circle cx="120" cy="182" r="12" fill={paper} strokeWidth="1.5" />
          <circle cx="120" cy="182" r="22" stroke={mutedGold} strokeWidth="1.4" strokeDasharray="3 3" />
          {/* Hands behind back holding unplugged power cord */}
          <path d="M112 145 L98 155 L108 165" strokeWidth="1.6" />
          <path d="M128 145 L142 155 L132 165" strokeWidth="1.6" />
          {/* Power Cable and Plug */}
          <path d="M142 155 Q150 170 148 185" stroke={accentRed} strokeWidth="1.8" />
          <rect x="142" y="185" width="12" height="12" fill="#1c150e" stroke={ink} strokeWidth="1.2" />
          <line x1="145" y1="197" x2="145" y2="204" stroke={mutedGold} strokeWidth="1.5" />
          <line x1="151" y1="197" x2="151" y2="204" stroke={mutedGold} strokeWidth="1.5" />
        </svg>
      )

    case "death":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Skeleton Knight on Pale Horse */}
          {/* Armored Skeleton Head */}
          <circle cx="95" cy="82" r="11" fill={paper} strokeWidth="1.6" />
          <circle cx="92" cy="80" r="2.5" fill="#1c150e" stroke="none" />
          <circle cx="98" cy="80" r="2.5" fill="#1c150e" stroke="none" />
          <line x1="90" y1="88" x2="100" y2="88" stroke={ink} strokeWidth="1.5" />
          {/* Black Armor */}
          <path d="M82 98 L75 155 L115 155 L108 98 Z" fill="#1c150e" stroke={ink} strokeWidth="1.6" />
          {/* Pale Horse */}
          <path d="M50 160 Q80 140 120 155 Q160 170 180 200 L170 250 L140 250 L110 200 L60 250 L40 250 Z" fill="#ede1ca" stroke={ink} strokeWidth="1.8" />
          {/* Black Banner held by Skeleton */}
          <line x1="105" y1="50" x2="105" y2="150" stroke={mutedGold} strokeWidth="2.5" />
          <rect x="105" y="50" width="70" height="48" fill="#1c150e" stroke={ink} strokeWidth="1.5" />
          {/* Dying Streak Flame on banner */}
          <path d="M140 85 C132 75 142 62 140 55 C148 65 148 78 140 85 Z" fill={accentRed} stroke="none" />
          <text x="114" y="92" fill="#fff" fontSize="6" fontFamily="sans-serif" fontWeight="bold" stroke="none">STREAK: 0</text>
          {/* Dying 1% battery icon at bottom */}
          <rect x="185" y="235" width="24" height="12" rx="2" stroke={accentRed} strokeWidth="1.4" />
          <rect x="187" y="237" width="3" height="8" fill={accentRed} stroke="none" />
        </svg>
      )

    case "temperance":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Winged Angel with sun symbol on forehead */}
          <circle cx="120" cy="70" r="13" fill={paper} strokeWidth="1.5" />
          <circle cx="120" cy="65" r="3" fill={mutedGold} stroke="none" />
          {/* Majestic Wings */}
          <path d="M96 68 C65 45 40 65 32 105 C60 100 85 92 102 85" fill="#f2e7d5" stroke={ink} strokeWidth="1.4" />
          <path d="M144 68 C175 45 200 65 208 105 C180 100 155 92 138 85" fill="#f2e7d5" stroke={ink} strokeWidth="1.4" />
          {/* Flowing Robes */}
          <path d="M102 88 L92 230 L148 230 L138 88 Z" fill={paper} stroke={ink} strokeWidth="1.6" />
          {/* Square with triangle inside robe */}
          <rect x="112" y="98" width="16" height="16" fill="#dfd0b5" stroke={ink} strokeWidth="1.2" />
          <polygon points="120,100 126,112 114,112" fill={accentRed} stroke="none" />
          {/* Two Chalices / Mugs being poured between each other */}
          {/* Top Chalice (Caffeine / Espresso) */}
          <path d="M85 130 L95 130 L92 144 L88 144 Z" fill={mutedGold} stroke={ink} strokeWidth="1.4" />
          <text x="70" y="126" fill={accentRed} fontSize="5" fontFamily="sans-serif" fontWeight="bold" stroke="none">ESPRESSO</text>
          {/* Bottom Chalice (Melatonin) */}
          <path d="M145 165 L155 165 L152 179 L148 179 Z" fill={mutedGold} stroke={ink} strokeWidth="1.4" />
          <text x="138" y="190" fill="#2d4059" fontSize="5" fontFamily="sans-serif" fontWeight="bold" stroke="none">MELATONIN</text>
          {/* Liquid Stream flowing magically diagonally */}
          <path d="M90 144 Q120 150 150 165" stroke={mutedGold} strokeWidth="2.5" />
          {/* One foot on land, one foot in water */}
          <path d="M70 240 Q120 230 170 240" stroke="#3182ce" strokeWidth="1.5" />
        </svg>
      )

    case "devil":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Horned Beast on Half-Altar plinth */}
          <rect x="85" y="120" width="70" height="50" fill="#1c150e" stroke={ink} strokeWidth="1.8" />
          {/* Inverted Pentagram on forehead */}
          <polygon points="120,44 123,52 131,52 125,57 127,65 120,60 113,65 115,57 109,52 117,52" fill={accentRed} stroke="none" />
          {/* Beast Head & Horns */}
          <circle cx="120" cy="72" r="15" fill="#dfd0b5" strokeWidth="1.6" />
          <path d="M106 62 Q90 40 92 25 Q104 38 112 58" fill={paper} stroke={ink} strokeWidth="1.5" />
          <path d="M134 62 Q150 40 148 25 Q136 38 128 58" fill={paper} stroke={ink} strokeWidth="1.5" />
          {/* Bat-like wings */}
          <path d="M95 85 C60 65 30 90 25 125 C50 118 75 110 95 105" fill="#2c2218" stroke={ink} strokeWidth="1.4" />
          <path d="M145 85 C180 65 210 90 215 125 C190 118 165 110 145 105" fill="#2c2218" stroke={ink} strokeWidth="1.4" />
          {/* Two Chained Humans happily tapping credit cards */}
          {/* Left Human */}
          <circle cx="62" cy="190" r="10" fill={paper} strokeWidth="1.4" />
          <path d="M52 205 L48 255 L76 255 L72 205 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Right Human */}
          <circle cx="178" cy="190" r="10" fill={paper} strokeWidth="1.4" />
          <path d="M168 205 L164 255 L192 255 L188 205 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Iron Chains linked to the altar */}
          <path d="M85 145 Q65 160 65 180" stroke={mutedGold} strokeWidth="1.8" strokeDasharray="3 2" />
          <path d="M155 145 Q175 160 175 180" stroke={mutedGold} strokeWidth="1.8" strokeDasharray="3 2" />
          {/* Credit Card in hands with 1-Click Buy */}
          <rect x="105" y="215" width="30" height="20" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.4" />
          <text x="108" y="228" fill={accentRed} fontSize="5" fontWeight="bold" fontFamily="sans-serif" stroke="none">BUY NOW</text>
        </svg>
      )

    case "tower":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Lightning Bolt striking the crown of the tower */}
          <path d="M40 20 L95 65 L82 72 L120 100" stroke={mutedGold} strokeWidth="3" fill="none" />
          <polygon points="120,95 125,102 115,105" fill={accentRed} stroke="none" />
          {/* Medieval Stone Tower on mountain */}
          <path d="M78 95 L65 245 L175 245 L162 95 Z" fill="#dfd0b5" stroke={ink} strokeWidth="2" />
          {/* Shattered Crown roof falling off */}
          <path d="M70 90 L120 60 L170 90 L160 98 L80 98 Z" fill="#8c6d48" stroke={ink} strokeWidth="1.6" transform="rotate(12 120 75)" />
          {/* Tower Windows bursting into fire */}
          <rect x="90" y="125" width="16" height="24" rx="8" fill="#ff4422" stroke={ink} strokeWidth="1.2" />
          <rect x="134" y="125" width="16" height="24" rx="8" fill="#ff4422" stroke={ink} strokeWidth="1.2" />
          {/* Falling Browser Tabs and Objects instead of people */}
          {/* Tab 1 */}
          <rect x="35" y="115" width="38" height="18" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.2" transform="rotate(-20 54 124)" />
          <text x="40" y="127" fill={ink} fontSize="5" fontFamily="monospace" stroke="none" transform="rotate(-20 54 124)">Tab (48)</text>
          {/* Tab 2 */}
          <rect x="165" y="135" width="42" height="18" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.2" transform="rotate(25 186 144)" />
          <text x="170" y="147" fill={accentRed} fontSize="5" fontFamily="monospace" stroke="none" transform="rotate(25 186 144)">Error 500</text>
          {/* Tab 3 */}
          <rect x="45" y="180" width="36" height="16" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.2" transform="rotate(-10 63 188)" />
          <text x="48" y="191" fill={ink} fontSize="5" fontFamily="monospace" stroke="none" transform="rotate(-10 63 188)">Cart ($820)</text>
          {/* Falling Coffee Cup */}
          <path d="M175 195 L182 210 L190 210 L195 195 Z" fill={paper} stroke={ink} strokeWidth="1.2" transform="rotate(45 185 202)" />
        </svg>
      )

    case "star":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Central Great 8-Pointed Star of Hope */}
          <polygon points="120,25 125,45 145,50 125,55 120,75 115,55 95,50 115,45" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          {/* 7 Surrounding Smaller Stars */}
          <circle cx="65" cy="45" r="3" fill={mutedGold} stroke="none" />
          <circle cx="175" cy="45" r="3" fill={mutedGold} stroke="none" />
          <circle cx="45" cy="80" r="2.5" fill={mutedGold} stroke="none" />
          <circle cx="195" cy="80" r="2.5" fill={mutedGold} stroke="none" />
          <circle cx="75" cy="100" r="2" fill={mutedGold} stroke="none" />
          <circle cx="165" cy="100" r="2" fill={mutedGold} stroke="none" />
          <circle cx="120" cy="95" r="2.5" fill={accentRed} stroke="none" />
          {/* Maiden kneeling beside sacred pool */}
          <circle cx="108" cy="120" r="11" fill={paper} strokeWidth="1.4" />
          <path d="M96 135 C88 165 85 195 82 225 L125 225 C120 195 115 165 110 135 Z" fill={paper} stroke={ink} strokeWidth="1.5" />
          {/* Two Urns pouring water onto earth and pool */}
          <path d="M72 155 Q62 165 72 180" stroke={mutedGold} strokeWidth="2" />
          <path d="M125 155 Q135 165 125 180" stroke={mutedGold} strokeWidth="2" />
          {/* Streams of water */}
          <path d="M68 180 Q60 210 50 240" stroke="#3182ce" strokeWidth="1.5" />
          <path d="M130 180 Q145 210 160 240" stroke="#3182ce" strokeWidth="1.5" />
          {/* Distant Courier Delivery Van on hill with radiant halo */}
          <rect x="155" y="132" width="38" height="20" rx="3" fill="#dfd0b5" stroke={ink} strokeWidth="1.4" />
          <circle cx="165" cy="152" r="5" fill="#1c150e" stroke={ink} strokeWidth="1.2" />
          <circle cx="183" cy="152" r="5" fill="#1c150e" stroke={ink} strokeWidth="1.2" />
          <text x="158" y="144" fill={accentRed} fontSize="5" fontWeight="bold" fontFamily="sans-serif" stroke="none">2 STOPS</text>
        </svg>
      )

    case "moon":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Radiant Moon Face with crescent */}
          <circle cx="120" cy="65" r="28" fill={paper} stroke={ink} strokeWidth="1.6" />
          <path d="M120 37 C135 50 135 80 120 93 C105 80 105 50 120 37 Z" fill="#e5d7bc" stroke={ink} strokeWidth="1.2" />
          {/* Droplets of Yods falling from moon */}
          <path d="M102 105 Q106 112 102 118" stroke={mutedGold} strokeWidth="2" />
          <path d="M138 105 Q134 112 138 118" stroke={mutedGold} strokeWidth="2" />
          {/* Twin Watchtowers on horizon */}
          <rect x="35" y="120" width="22" height="65" fill="#dfd0b5" stroke={ink} strokeWidth="1.5" />
          <rect x="183" y="120" width="22" height="65" fill="#dfd0b5" stroke={ink} strokeWidth="1.5" />
          {/* Two Dogs / Jackals howling at the moon */}
          <path d="M68 205 Q78 180 92 195 L88 220 Z" fill="#1c150e" stroke={ink} strokeWidth="1.4" />
          <path d="M172 205 Q162 180 148 195 L152 220 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Pool at bottom with Crustacean / Crawfish emerging with recurring $14.99 receipt */}
          <path d="M20 235 Q120 220 220 235 L220 265 L20 265 Z" fill="#cad5e2" stroke={ink} strokeWidth="1.5" />
          {/* Crawfish claws */}
          <path d="M110 245 Q120 230 130 245" stroke={accentRed} strokeWidth="2.5" />
          {/* Receipt in claws */}
          <rect x="105" y="215" width="30" height="22" rx="1" fill="#fffdfa" stroke={ink} strokeWidth="1.2" />
          <text x="108" y="225" fill={accentRed} fontSize="5" fontWeight="bold" fontFamily="monospace" stroke="none">-$14.99</text>
          <text x="108" y="233" fill={ink} fontSize="4" fontFamily="monospace" stroke="none">RECURRING</text>
        </svg>
      )

    case "sun":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Great Smiling Golden Sun with 16 straight and wavy rays */}
          <circle cx="120" cy="65" r="32" fill={paper} stroke={mutedGold} strokeWidth="2" />
          <circle cx="112" cy="60" r="3" fill={ink} stroke="none" />
          <circle cx="128" cy="60" r="3" fill={ink} stroke="none" />
          <path d="M112 74 Q120 82 128 74" stroke={ink} strokeWidth="1.6" />
          {/* Sun Rays */}
          <line x1="120" y1="25" x2="120" y2="10" stroke={mutedGold} strokeWidth="2" />
          <line x1="120" y1="105" x2="120" y2="120" stroke={mutedGold} strokeWidth="2" />
          <line x1="80" y1="65" x2="65" y2="65" stroke={mutedGold} strokeWidth="2" />
          <line x1="160" y1="65" x2="175" y2="65" stroke={mutedGold} strokeWidth="2" />
          {/* Brick Garden Wall */}
          <rect x="40" y="165" width="160" height="40" fill="#dfd0b5" stroke={ink} strokeWidth="1.6" />
          <line x1="40" y1="185" x2="200" y2="185" stroke={ink} strokeWidth="1.2" />
          {/* Sunflowers above wall */}
          <circle cx="65" cy="155" r="8" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          <circle cx="95" cy="150" r="8" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          <circle cx="145" cy="150" r="8" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          <circle cx="175" cy="155" r="8" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          {/* Naked Child on White Horse holding red banner */}
          <circle cx="120" cy="175" r="9" fill={paper} strokeWidth="1.4" />
          <path d="M110 185 L105 230 L135 230 L130 185 Z" fill={paper} stroke={ink} strokeWidth="1.4" />
          {/* Red banner fluttering with "MEETING CANCELLED" */}
          <path d="M130 160 Q170 145 195 160 L185 180 Q160 165 130 175 Z" fill={accentRed} stroke={ink} strokeWidth="1.2" />
          <text x="140" y="172" fill="#fff" fontSize="5" fontWeight="bold" fontFamily="sans-serif" stroke="none">CANCELLED</text>
        </svg>
      )

    case "judgement":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Archangel Gabriel in radiant clouds */}
          <circle cx="120" cy="55" r="14" fill={paper} strokeWidth="1.6" />
          <path d="M96 50 C65 35 45 55 35 85 C65 80 90 70 102 62" fill="#f0e6d2" stroke={ink} strokeWidth="1.4" />
          <path d="M144 50 C175 35 195 55 205 85 C175 80 150 70 138 62" fill="#f0e6d2" stroke={ink} strokeWidth="1.4" />
          {/* Great Golden Trumpet with Cross Banner */}
          <line x1="120" y1="62" x2="120" y2="120" stroke={mutedGold} strokeWidth="2.5" />
          <polygon points="110,120 130,120 138,135 102,135" fill={mutedGold} stroke={ink} strokeWidth="1.2" />
          <rect x="120" y="75" width="35" height="28" fill="#fffdfa" stroke={ink} strokeWidth="1.2" />
          <line x1="137" y1="75" x2="137" y2="103" stroke={accentRed} strokeWidth="2" />
          <line x1="120" y1="89" x2="155" y2="89" stroke={accentRed} strokeWidth="2" />
          {/* Figures rising from graves holding Git commits */}
          <rect x="40" y="195" width="45" height="40" fill="#dfd0b5" stroke={ink} strokeWidth="1.4" />
          <circle cx="62" cy="180" r="9" fill={paper} strokeWidth="1.2" />
          <rect x="155" y="195" width="45" height="40" fill="#dfd0b5" stroke={ink} strokeWidth="1.4" />
          <circle cx="178" cy="180" r="9" fill={paper} strokeWidth="1.2" />
          {/* Git Log Scroll */}
          <rect x="92" y="170" width="56" height="50" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.4" />
          <text x="96" y="182" fill={accentRed} fontSize="5" fontWeight="bold" fontFamily="monospace" stroke="none">git commit -m</text>
          <text x="96" y="192" fill={ink} fontSize="4" fontFamily="monospace" stroke="none">"fix stuff final"</text>
          <text x="96" y="202" fill={ink} fontSize="4" fontFamily="monospace" stroke="none">"actual final v2"</text>
        </svg>
      )

    case "world":
      return (
        <svg viewBox="0 0 240 280" className={`w-full h-full ${className}`} fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {/* Laurel Wreath oval border */}
          <ellipse cx="120" cy="140" rx="58" ry="78" fill="#eadeca" stroke={mutedGold} strokeWidth="3" strokeDasharray="6 3" />
          {/* Red ribbons tying top and bottom of wreath */}
          <path d="M110 60 Q120 68 130 60 Q120 54 110 60 Z" fill={accentRed} stroke={ink} strokeWidth="1" />
          <path d="M110 220 Q120 228 130 220 Q120 214 110 220 Z" fill={accentRed} stroke={ink} strokeWidth="1" />
          {/* Dancing figure in center holding two wands */}
          <circle cx="120" cy="100" r="11" fill={paper} strokeWidth="1.5" />
          <path d="M110 115 C105 145 105 175 115 190 L125 190 C135 175 135 145 130 115 Z" fill={paper} stroke={ink} strokeWidth="1.5" />
          <path d="M102 125 L85 110" strokeWidth="2" />
          <line x1="82" y1="95" x2="88" y2="135" stroke={mutedGold} strokeWidth="2.2" />
          <path d="M138 125 L155 110" strokeWidth="2" />
          <line x1="152" y1="95" x2="158" y2="135" stroke={mutedGold} strokeWidth="2.2" />
          {/* Four corner celestial beasts: Man, Eagle, Bull, Lion */}
          {/* Top Left: Man / Angel */}
          <circle cx="35" cy="40" r="8" fill={paper} strokeWidth="1.2" />
          {/* Top Right: Eagle */}
          <path d="M200 35 Q210 25 215 45 Z" fill={paper} stroke={ink} strokeWidth="1.2" />
          {/* Bottom Left: Bull */}
          <path d="M30 240 Q45 225 45 250 Z" fill={paper} stroke={ink} strokeWidth="1.2" />
          {/* Bottom Right: Lion */}
          <path d="M200 240 Q215 225 215 250 Z" fill={paper} stroke={ink} strokeWidth="1.2" />
          {/* Purchase Certificate for 4 new domains */}
          <rect x="95" y="148" width="50" height="22" rx="2" fill="#fffdfa" stroke={ink} strokeWidth="1.2" />
          <text x="98" y="158" fill={accentRed} fontSize="4" fontWeight="bold" fontFamily="sans-serif" stroke="none">BOUGHT 4 DOMAINS</text>
          <text x="104" y="165" fill={ink} fontSize="4" fontFamily="sans-serif" stroke="none">$52.00 / YR</text>
        </svg>
      )

    default:
      return null
  }
}
