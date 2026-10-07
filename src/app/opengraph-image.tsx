import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"

export const alt = "SHIT TAROT : The Ancient Art of Making Shit Up"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const [cinzelBold, ebGaramondRegular, ebGaramondItalic] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Cinzel-Bold.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/EBGaramond-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/EBGaramond-Italic.ttf")),
  ])

  // Reusable Corner Star SVG
  const StarIcon = ({ size = 16, color = "#b38f47" }: { size?: number; color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,0 14.5,9.5 24,12 14.5,14.5 12,24 9.5,14.5 0,12 9.5,9.5" />
    </svg>
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#120c08",
          backgroundImage:
            "radial-gradient(circle at 65% 45%, #2c1910 0%, #160e09 50%, #0c0704 100%)",
          color: "#f4ebd9",
          fontFamily: "'EB Garamond', serif",
          overflow: "hidden",
          padding: "48px 56px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Subtle Candlelight Warm Glow in background */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "120px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(214, 158, 64, 0.22) 0%, rgba(138, 70, 24, 0.08) 45%, transparent 70%)",
          }}
        />

        {/* Ornate Double Border Frame */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            right: "18px",
            bottom: "18px",
            border: "2px solid rgba(179, 143, 71, 0.45)",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "26px",
            left: "26px",
            right: "26px",
            bottom: "26px",
            border: "1px solid rgba(128, 98, 40, 0.28)",
            borderRadius: "8px",
          }}
        />

        {/* 4 Corner Ornate Star Glyphs */}
        <div style={{ position: "absolute", top: "34px", left: "34px", display: "flex" }}>
          <StarIcon size={18} color="#b38f47" />
        </div>
        <div style={{ position: "absolute", top: "34px", right: "34px", display: "flex" }}>
          <StarIcon size={18} color="#b38f47" />
        </div>
        <div style={{ position: "absolute", bottom: "34px", left: "34px", display: "flex" }}>
          <StarIcon size={18} color="#b38f47" />
        </div>
        <div style={{ position: "absolute", bottom: "34px", right: "34px", display: "flex" }}>
          <StarIcon size={18} color="#b38f47" />
        </div>

        {/* Left Section: Branding & Divination Pitch */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "530px",
          }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              backgroundColor: "rgba(179, 143, 71, 0.12)",
              border: "1px solid rgba(179, 143, 71, 0.35)",
              borderRadius: "20px",
              alignSelf: "flex-start",
              marginBottom: "18px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e2ba66" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
            </svg>
            <span
              style={{
                fontFamily: "Cinzel",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#e2ba66",
                textTransform: "uppercase",
              }}
            >
              OCCULT DIVINATION TABLE
            </span>
          </div>

          {/* Main Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "14px",
            }}
          >
            <h1
              style={{
                fontFamily: "Cinzel",
                fontSize: "52px",
                fontWeight: 700,
                letterSpacing: "4px",
                color: "#fcf8ee",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              SHIT TAROT
            </h1>
            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: "italic",
                fontSize: "25px",
                color: "#c59b48",
                letterSpacing: "0.5px",
                margin: "6px 0 0 0",
              }}
            >
              The Ancient Art of Making Shit Up
            </p>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "19px",
              color: "#dcd1bd",
              lineHeight: 1.45,
              margin: "0 0 24px 0",
            }}
          >
            An antique occult fortune-teller’s table disguised as serious
            divination. 22 Major Arcana cards packed with existential roast,
            brutal honesty, and questionable cosmic advice.
          </p>

          {/* Feature Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 12px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(179, 143, 71, 0.28)",
                borderRadius: "6px",
                fontSize: "13px",
                color: "#eedab8",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="9" y1="7" x2="15" y2="7" />
                <line x1="9" y1="12" x2="15" y2="12" />
              </svg>
              <span>22 Major Arcana</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 12px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(179, 143, 71, 0.28)",
                borderRadius: "6px",
                fontSize: "13px",
                color: "#eedab8",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#d4af37">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
              </svg>
              <span>100% Brutal Truth</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                padding: "6px 12px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(179, 143, 71, 0.28)",
                borderRadius: "6px",
                fontSize: "13px",
                color: "#eedab8",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <path d="M12 3a15 15 0 0 1 0 18" />
                <path d="M12 3a15 15 0 0 0 0 18" />
              </svg>
              <span>Bilingual ID / EN</span>
            </div>
          </div>

          {/* Web Address Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderTop: "1px solid rgba(179, 143, 71, 0.25)",
              paddingTop: "14px",
            }}
          >
            <span
              style={{
                fontFamily: "Cinzel",
                fontSize: "12px",
                letterSpacing: "2.5px",
                color: "#c59b48",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              SHITTAROT.REVANPRATAMAS.COM
            </span>
            <span style={{ color: "rgba(179, 143, 71, 0.4)", fontSize: "10px" }}>
              •
            </span>
            <span
              style={{
                fontStyle: "italic",
                fontSize: "14px",
                color: "#8c714d",
              }}
            >
              Draw your fate & blame yourself.
            </span>
          </div>
        </div>

        {/* Right Section: Visual 3-Card Occult Fan */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "530px",
            height: "480px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Card 1: The Fool (Left) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              left: "15px",
              top: "70px",
              width: "195px",
              height: "315px",
              backgroundColor: "#f4ebd9",
              color: "#1c150e",
              borderRadius: "10px",
              border: "3px solid #dfcfb3",
              padding: "10px 10px 8px 10px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.75)",
              transform: "rotate(-11deg)",
            }}
          >
            {/* Number */}
            <div
              style={{
                fontFamily: "Cinzel",
                fontSize: "12px",
                fontWeight: 700,
                color: "#5c3e21",
                marginBottom: "4px",
              }}
            >
              0
            </div>
            {/* Illustration */}
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "195px",
                backgroundColor: "#faf4e8",
                border: "1px solid rgba(28, 21, 14, 0.25)",
                borderRadius: "4px",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                marginBottom: "6px",
              }}
            >
              <svg
                viewBox="0 0 240 280"
                width="160"
                height="180"
                fill="none"
                stroke="#1c150e"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="205" cy="40" r="18" fill="#ede1ca" stroke="#9e7d3b" strokeWidth="1.5" />
                <path d="M0 270 L85 270 Q130 265 140 220 L150 180 L135 150 Q115 160 100 170" fill="#dfd0b5" strokeWidth="2" />
                <path d="M125 145 L145 175 L162 182" strokeWidth="2.2" />
                <path d="M115 145 L110 178 L122 186" strokeWidth="2.2" />
                <path d="M100 95 C95 125, 105 148, 128 148 C140 148, 142 125, 138 95 Z" fill="#ede1ca" strokeWidth="1.6" />
                <path d="M102 100 L68 70 L50 60" strokeWidth="2" />
                <circle cx="60" cy="65" r="14" fill="#d8c5a2" strokeWidth="1.5" />
                <circle cx="126" cy="74" r="12" fill="#ede1ca" strokeWidth="1.6" />
                <path d="M120 65 Q110 40 95 38 Q115 50 122 62" fill="#782222" strokeWidth="1.2" />
                <rect x="150" y="86" width="16" height="26" rx="2" fill="#fffdfa" stroke="#1c150e" strokeWidth="1.5" />
                <rect x="153" y="90" width="10" height="18" fill="#e8dcc4" />
                <path d="M80 160 Q88 150 96 155 Q102 162 98 172 L90 178 L78 174 Z" fill="#ede1ca" strokeWidth="1.5" />
              </svg>
            </div>
            {/* Title */}
            <div
              style={{
                fontFamily: "Cinzel",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#1c150e",
              }}
            >
              THE FOOL
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "10px",
                color: "#6b533e",
                marginTop: "1px",
              }}
            >
              Lord of Clowns
            </div>
          </div>

          {/* Card 3: The Tower (Right) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              right: "15px",
              top: "70px",
              width: "195px",
              height: "315px",
              backgroundColor: "#f4ebd9",
              color: "#1c150e",
              borderRadius: "10px",
              border: "3px solid #dfcfb3",
              padding: "10px 10px 8px 10px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.75)",
              transform: "rotate(11deg)",
            }}
          >
            {/* Number */}
            <div
              style={{
                fontFamily: "Cinzel",
                fontSize: "12px",
                fontWeight: 700,
                color: "#5c3e21",
                marginBottom: "4px",
              }}
            >
              XVI
            </div>
            {/* Illustration */}
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "195px",
                backgroundColor: "#faf4e8",
                border: "1px solid rgba(28, 21, 14, 0.25)",
                borderRadius: "4px",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                marginBottom: "6px",
              }}
            >
              <svg
                viewBox="0 0 240 280"
                width="160"
                height="180"
                fill="none"
                stroke="#1c150e"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M40 20 L95 65 L82 72 L120 100" stroke="#9e7d3b" strokeWidth="3" fill="none" />
                <path d="M78 95 L65 245 L175 245 L162 95 Z" fill="#dfd0b5" stroke="#1c150e" strokeWidth="2" />
                <rect x="90" y="125" width="16" height="24" rx="8" fill="#ff4422" stroke="#1c150e" strokeWidth="1.2" />
                <rect x="134" y="125" width="16" height="24" rx="8" fill="#ff4422" stroke="#1c150e" strokeWidth="1.2" />
                <rect x="35" y="115" width="38" height="18" rx="2" fill="#fffdfa" stroke="#1c150e" strokeWidth="1.2" />
                <rect x="165" y="135" width="42" height="18" rx="2" fill="#fffdfa" stroke="#1c150e" strokeWidth="1.2" />
              </svg>
            </div>
            {/* Title */}
            <div
              style={{
                fontFamily: "Cinzel",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#1c150e",
              }}
            >
              THE TOWER
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "10px",
                color: "#6b533e",
                marginTop: "1px",
              }}
            >
              Total Shitshow
            </div>
          </div>

          {/* Card 2: The Magician (Center, Hero Card) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              top: "22px",
              width: "225px",
              height: "365px",
              backgroundColor: "#f4ebd9",
              color: "#1c150e",
              borderRadius: "12px",
              border: "3.5px solid #d4af37",
              padding: "12px 12px 10px 12px",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(212, 175, 55, 0.35)",
            }}
          >
            {/* Roman Numeral */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "5px",
              }}
            >
              <span style={{ width: "14px", height: "1px", backgroundColor: "#8c6d48" }} />
              <span
                style={{
                  fontFamily: "Cinzel",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#5c3e21",
                }}
              >
                I
              </span>
              <span style={{ width: "14px", height: "1px", backgroundColor: "#8c6d48" }} />
            </div>

            {/* Illustration Frame */}
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "225px",
                backgroundColor: "#faf4e8",
                border: "1.5px solid rgba(28, 21, 14, 0.3)",
                borderRadius: "4px",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
                marginBottom: "8px",
              }}
            >
              <svg
                viewBox="0 0 240 280"
                width="190"
                height="210"
                fill="none"
                stroke="#1c150e"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Infinity symbol over head */}
                <path
                  d="M102 38 C90 38 82 48 92 56 C102 64 114 48 120 48 C126 48 138 64 148 56 C158 48 150 38 138 38 C126 38 126 56 120 48 C114 40 114 38 102 38 Z"
                  fill="none"
                  stroke="#9e7d3b"
                  strokeWidth="2.4"
                />
                {/* Magician figure */}
                <circle cx="120" cy="74" r="14" fill="#ede1ca" strokeWidth="1.6" />
                <path
                  d="M102 96 C98 135 94 175 90 215 L150 215 C146 175 142 135 138 96 Z"
                  fill="#ede1ca"
                  strokeWidth="1.6"
                />
                <path d="M120 96 L120 215" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M138 108 L170 85 L182 62" strokeWidth="2" />
                <line x1="178" y1="68" x2="198" y2="40" stroke="#9e7d3b" strokeWidth="2.5" />
                <circle cx="200" cy="38" r="3" fill="#782222" stroke="none" />
                <path d="M102 108 L78 132 L72 158" strokeWidth="2" />
                {/* Altar */}
                <rect x="40" y="170" width="160" height="75" fill="#dfd0b5" strokeWidth="1.8" />
                <line x1="40" y1="184" x2="200" y2="184" strokeWidth="1.2" />
                {/* Mini Terminal Screen */}
                <rect
                  x="114"
                  y="142"
                  width="46"
                  height="30"
                  rx="2"
                  fill="#1c150e"
                  stroke="#9e7d3b"
                  strokeWidth="1.4"
                />
                {/* Pentacle Coin */}
                <circle cx="178" cy="158" r="10" fill="#ede1ca" stroke="#9e7d3b" strokeWidth="1.4" />
                <polygon
                  points="178,150 181,156 187,156 182,160 184,166 178,162 172,166 174,160 169,156 175,156"
                  fill="#9e7d3b"
                />
                {/* Table Legs */}
                <rect x="48" y="245" width="14" height="30" fill="#ede1ca" strokeWidth="1.4" />
                <rect x="178" y="245" width="14" height="30" fill="#ede1ca" strokeWidth="1.4" />
              </svg>
            </div>

            {/* Card Name */}
            <div
              style={{
                fontFamily: "Cinzel",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#1c150e",
              }}
            >
              THE MAGICIAN
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "11px",
                color: "#6b533e",
                marginTop: "1px",
              }}
            >
              Master of Bullshit & Overengineering
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cinzel",
          data: cinzelBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "EB Garamond",
          data: ebGaramondRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "EB Garamond",
          data: ebGaramondItalic,
          style: "italic",
          weight: 400,
        },
      ],
    }
  )
}
