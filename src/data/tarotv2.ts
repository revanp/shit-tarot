export type Language = "id" | "en"

export type LocalizedCardContent = {
  name: string
  subtitle: string
  ceremonialLabel: string
  ceremonialText: string
  fortune: string
  advice: string
}

export type TarotCard = {
  id: string
  number: string
  illustrationKey: string
  en: LocalizedCardContent
  idLang: LocalizedCardContent
}

export const TAROT_CARDS: TarotCard[] = [
  {
    id: "0-the-fool",
    number: "0",
    illustrationKey: "fool",
    en: {
      name: "THE FOOL",
      ceremonialLabel: "THE 0",
      subtitle: "Lord of Bad Decisions",
      ceremonialText: "No plan. No money. Somehow still confident.",
      fortune: "You are about to make a decision so stupid you will later call it a 'learning experience' because admitting you're an idiot hurts more.",
      advice: "Just do it. Regret is basically character development anyway."
    },
    idLang: {
      name: "SANG PENGEMBARA",
      ceremonialLabel: "KARTU 0",
      subtitle: "Raja Keputusan Goblok",
      ceremonialText: "Gak punya rencana, gak punya duit, tapi pede.",
      fortune: "Lu bentar lagi bikin keputusan tolol yang nanti lu sebut 'pengalaman hidup' karena ngaku goblok ternyata terlalu sakit.",
      advice: "Gas aja. Nyesel kan bisa dijadiin character development."
    }
  },
  {
    id: "1-the-magician",
    number: "I",
    illustrationKey: "magician",
    en: {
      name: "THE MAGICIAN",
      ceremonialLabel: "THE I",
      subtitle: "Professional Bullshit Engineer",
      ceremonialText: "Turning five minutes of work into a three-day productivity system.",
      fortune: "You bought another tool to avoid doing the thing. At this point your productivity stack has more infrastructure than your actual career.",
      advice: "Open another tab. Surely this one will fix your life."
    },
    idLang: {
      name: "SANG PESULAP",
      ceremonialLabel: "KARTU I",
      subtitle: "Engineer Bullshit Profesional",
      ceremonialText: "Kerjaan 5 menit dibikin jadi sistem produktivitas 3 hari.",
      fortune: "Lu beli tool lagi biar gak ngerjain kerjaannya. Stack produktivitas lu sekarang infrastrukturnya lebih niat daripada karier lu.",
      advice: "Buka tab baru lagi. Siapa tau hidup lu bener di tab ke-47."
    }
  },
  {
    id: "2-the-high-priestess",
    number: "II",
    illustrationKey: "high-priestess",
    en: {
      name: "THE HIGH PRIESTESS",
      ceremonialLabel: "THE II",
      subtitle: "Queen of Delusion & Seen Zone",
      ceremonialText: "Reading meaning into a message that clearly meant nothing.",
      fortune: "They replied 'wkwk'. You wrote a thesis about it. They were probably replying while taking a shit.",
      advice: "Check their last seen again. Self-respect is overrated."
    },
    idLang: {
      name: "SANG PENDETA",
      ceremonialLabel: "KARTU II",
      subtitle: "Ratu Halusinasi & Seen Zone",
      ceremonialText: "Nyari makna dari chat yang sebenernya gak ada maknanya.",
      fortune: "Dia bales 'wkwk'. Lu bedah kayak skripsi. Dia kemungkinan bales sambil boker.",
      advice: "Cek last seen lagi. Harga diri juga gak bisa dicairin."
    }
  },
  {
    id: "3-the-empress",
    number: "III",
    illustrationKey: "empress",
    en: {
      name: "THE EMPRESS",
      ceremonialLabel: "THE III",
      subtitle: "Spoiled by Her Own Delusion",
      ceremonialText: "Buying little treats because life is hard.",
      fortune: "Your account is dying but you keep ordering things because apparently being financially irresponsible is now called self-care.",
      advice: "Buy it. Being broke with good taste is still being broke."
    },
    idLang: {
      name: "SANG PERMAISURI",
      ceremonialLabel: "KARTU III",
      subtitle: "Dimanja Delusi Sendiri",
      ceremonialText: "Checkout kecil-kecilan karena hidup katanya berat.",
      fortune: "Saldo lu sekarat tapi lu checkout lagi karena sekarang boros namanya self-care.",
      advice: "Beli aja. Miskin tapi estetik tetep miskin."
    }
  },
  {
    id: "4-the-emperor",
    number: "IV",
    illustrationKey: "emperor",
    en: {
      name: "THE EMPEROR",
      ceremonialLabel: "THE IV",
      subtitle: "CEO of Nobody Asked",
      ceremonialText: "Demanding respect while being completely useless at home.",
      fortune: "You want to be treated like the man of the house but still need three reminders to take the trash out.",
      advice: "Raise your voice. Maybe volume will compensate for competence."
    },
    idLang: {
      name: "SANG KAISAR",
      ceremonialLabel: "KARTU IV",
      subtitle: "CEO yang Gak Ada yang Minta",
      ceremonialText: "Nuntut dihormatin padahal di rumah aja gak berguna.",
      fortune: "Lu pengen diperlakukan kayak kepala keluarga tapi buang sampah aja harus diingetin tiga kali.",
      advice: "Naikin volume suara. Siapa tau volume bisa nutupin inkompetensi."
    }
  },
  {
    id: "5-the-hierophant",
    number: "V",
    illustrationKey: "hierophant",
    en: {
      name: "THE HIEROPHANT",
      ceremonialLabel: "THE V",
      subtitle: "Unemployed Life Coach",
      ceremonialText: "Giving advice nobody asked for.",
      fortune: "Someone with a broken life is about to explain how you should live yours. Smile. Their confidence is the only thing they have left.",
      advice: "Nod slowly. Then do the exact opposite."
    },
    idLang: {
      name: "SANG HIEROFAN",
      ceremonialLabel: "KARTU V",
      subtitle: "Motivator Pengangguran",
      ceremonialText: "Ngasih nasihat yang gak ada yang minta.",
      fortune: "Orang yang hidupnya berantakan bakal ngajarin lu cara hidup. Senyum aja. Percaya dirinya doang yang masih utuh.",
      advice: "Angguk pelan. Abis itu lakuin kebalikannya."
    }
  },
  {
    id: "6-the-lovers",
    number: "VI",
    illustrationKey: "lovers",
    en: {
      name: "THE LOVERS",
      ceremonialLabel: "THE VI",
      subtitle: "Two Idiots, One Red Flag",
      ceremonialText: "Chemistry strong enough to override common sense.",
      fortune: "You know they're bad for you. They know they're bad for you. Somehow you're both calling it 'complicated'.",
      advice: "Date them. Your therapist needs job security."
    },
    idLang: {
      name: "SEPASANG KEKASIH",
      ceremonialLabel: "KARTU VI",
      subtitle: "Dua Badut, Satu Red Flag",
      ceremonialText: "Chemistry cukup kuat buat matiin logika.",
      fortune: "Lu tau dia gak baik buat lu. Dia juga tau. Tapi kalian tetep nyebutnya 'rumit'.",
      advice: "Jadian aja. Terapis lu juga butuh job security."
    }
  },
  {
    id: "7-the-chariot",
    number: "VII",
    illustrationKey: "chariot",
    en: {
      name: "THE CHARIOT",
      ceremonialLabel: "THE VII",
      subtitle: "No Brakes, Just Ego",
      ceremonialText: "Moving fast because slowing down means thinking.",
      fortune: "You are not ambitious. You are just running from the consequences of the last thing you did.",
      advice: "Keep going. Apparently burnout is your personality now."
    },
    idLang: {
      name: "KERETA PERANG",
      ceremonialLabel: "KARTU VII",
      subtitle: "Rem Blong, Modal Ego",
      ceremonialText: "Ngebut karena berhenti berarti harus mikir.",
      fortune: "Lu bukan ambisius. Lu cuma kabur dari konsekuensi kelakuan lu kemarin.",
      advice: "Lanjutin aja. Kayaknya burnout udah jadi personality lu."
    }
  },
  {
    id: "8-strength",
    number: "VIII",
    illustrationKey: "strength",
    en: {
      name: "STRENGTH",
      ceremonialLabel: "THE VIII",
      subtitle: "One More Email Away",
      ceremonialText: "Pretending to be professional while mentally committing workplace crimes.",
      fortune: "You are calm because murder is illegal and HR has cameras.",
      advice: "Reply 'noted'. Make sure they can feel the threat."
    },
    idLang: {
      name: "KEKUATAN BATIN",
      ceremonialLabel: "KARTU VIII",
      subtitle: "Satu Email Lagi Meledak",
      ceremonialText: "Pura-pura profesional sambil di kepala udah banting meja.",
      fortune: "Lu keliatan kalem karena bunuh orang ilegal dan kantor ada CCTV.",
      advice: "Balas 'noted'. Biar dia bisa ngerasain ancamannya."
    }
  },
  {
    id: "9-the-hermit",
    number: "IX",
    illustrationKey: "hermit",
    en: {
      name: "THE HERMIT",
      ceremonialLabel: "THE IX",
      subtitle: "Do Not Disturb Forever",
      ceremonialText: "Social battery dead. Phone alive. Unfortunately.",
      fortune: "You don't need alone time anymore. You need sunlight, a shower, and one person brave enough to ask if you're okay.",
      advice: "Stay in bed. The outside world can wait for your tax return."
    },
    idLang: {
      name: "SANG PETAPA",
      ceremonialLabel: "KARTU IX",
      subtitle: "Jangan Diganggu Selamanya",
      ceremonialText: "Baterai sosial mati. HP masih nyala. Sialnya.",
      fortune: "Lu bukan butuh me time lagi. Lu butuh matahari, mandi, dan satu orang yang cukup nekat nanya lu baik-baik aja.",
      advice: "Tetep rebahan. Dunia luar juga gak terlalu butuh lu."
    }
  },
  {
    id: "10-wheel-of-fortune",
    number: "X",
    illustrationKey: "wheel-of-fortune",
    en: {
      name: "WHEEL OF FORTUNE",
      ceremonialLabel: "THE X",
      subtitle: "Randomized Suffering",
      ceremonialText: "The universe has selected today's bullshit.",
      fortune: "Something annoying is coming. Not catastrophic. Just annoying enough to ruin your entire mood.",
      advice: "Don't worry. Tomorrow can be worse."
    },
    idLang: {
      name: "RODA TAKDIR",
      ceremonialLabel: "KARTU X",
      subtitle: "Undian Kesialan",
      ceremonialText: "Semesta udah milih jatah apes lu hari ini.",
      fortune: "Ada sesuatu yang ngeselin bakal dateng. Gak fatal, cuma cukup buat ngerusak mood seharian.",
      advice: "Santai. Besok masih bisa lebih parah."
    }
  },
  {
    id: "11-justice",
    number: "XI",
    illustrationKey: "justice",
    en: {
      name: "JUSTICE",
      ceremonialLabel: "THE XI",
      subtitle: "Consequences Department",
      ceremonialText: "Past-you has filed a complaint against present-you.",
      fortune: "Congratulations. The problem you're dealing with is exactly the problem you kept telling yourself you'd handle later.",
      advice: "Take responsibility. Or blame Mercury. Whatever helps you sleep."
    },
    idLang: {
      name: "KEADILAN",
      ceremonialLabel: "KARTU XI",
      subtitle: "Departemen Konsekuensi",
      ceremonialText: "Lu yang dulu ngadu ke lu yang sekarang.",
      fortune: "Selamat. Masalah yang lu hadapin sekarang persis masalah yang dulu lu bilang 'nanti aja gue urusin'.",
      advice: "Ngaku salah. Atau salahin Mercury. Yang penting lu bisa tidur."
    }
  },
  {
    id: "12-the-hanged-man",
    number: "XII",
    illustrationKey: "hanged-man",
    en: {
      name: "THE HANGED MAN",
      ceremonialLabel: "THE XII",
      subtitle: "Professional Procrastinator",
      ceremonialText: "Doing nothing with impressive commitment.",
      fortune: "You have enough time to finish it. You just don't have enough courage to start.",
      advice: "Scroll first. Panic later. It's your brand."
    },
    idLang: {
      name: "SANG TERGANTUNG",
      ceremonialLabel: "KARTU XII",
      subtitle: "Spesialis Nanti Dulu",
      ceremonialText: "Gak ngapa-ngapain dengan dedikasi luar biasa.",
      fortune: "Waktu lu sebenernya cukup. Lu cuma gak punya nyali buat mulai.",
      advice: "Scroll dulu. Panik belakangan. Itu brand lu."
    }
  },
  {
    id: "13-death",
    number: "XIII",
    illustrationKey: "death",
    en: {
      name: "DEATH",
      ceremonialLabel: "THE XIII",
      subtitle: "End of Your Delusion",
      ceremonialText: "Something has to die. Hopefully the fantasy that they will change.",
      fortune: "That chapter is over. Stop rereading it like the ending is going to suddenly become better.",
      advice: "Delete the chat. You know damn well you're not getting the closure you want."
    },
    idLang: {
      name: "KEMATIAN",
      ceremonialLabel: "KARTU XIII",
      subtitle: "Akhir dari Halusinasi",
      ceremonialText: "Ada yang harus mati. Semoga halusinasi bahwa dia bakal berubah.",
      fortune: "Bab itu udah selesai. Berhenti dibaca ulang kayak ending-nya bakal berubah.",
      advice: "Hapus chatnya. Lu tau sendiri closure yang lu mau gak bakal dateng."
    }
  },
  {
    id: "14-temperance",
    number: "XIV",
    illustrationKey: "temperance",
    en: {
      name: "TEMPERANCE",
      ceremonialLabel: "THE XIV",
      subtitle: "Bad Habits, Good Excuses",
      ceremonialText: "Trying to balance terrible decisions with one healthy choice.",
      fortune: "You drank water once and now think your five hours of sleep and daily caffeine addiction are balanced.",
      advice: "Have one vegetable. You deserve the Nobel Prize for wellness."
    },
    idLang: {
      name: "KESEIMBANGAN",
      ceremonialLabel: "KARTU XIV",
      subtitle: "Kebiasaan Jelek, Alasan Bagus",
      ceremonialText: "Nyoba menyeimbangkan keputusan goblok dengan satu keputusan sehat.",
      fortune: "Lu minum air sekali terus ngerasa pola hidup lu udah balance, padahal tidur 5 jam dan kopi 6 gelas.",
      advice: "Makan satu sayur. Selamat, lu layak dapet Nobel kesehatan."
    }
  },
  {
    id: "15-the-devil",
    number: "XV",
    illustrationKey: "devil",
    en: {
      name: "THE DEVIL",
      ceremonialLabel: "THE XV",
      subtitle: "You Know Exactly What You're Doing",
      ceremonialText: "Bad idea. Great dopamine.",
      fortune: "You are not confused. You know exactly what you're doing. You just want someone to tell you it's okay.",
      advice: "Do it. At least be honest about the disaster you're choosing."
    },
    idLang: {
      name: "SANG IBLIS",
      ceremonialLabel: "KARTU XV",
      subtitle: "Lu Tau Lu Ngapain",
      ceremonialText: "Ide jelek. Dopamin mantap.",
      fortune: "Lu bukan bingung. Lu tau persis lu lagi ngapain. Lu cuma pengen ada yang bilang 'gapapa'.",
      advice: "Gas. Minimal jujur aja kalau lu emang milih kehancuran."
    }
  },
  {
    id: "16-the-tower",
    number: "XVI",
    illustrationKey: "tower",
    en: {
      name: "THE TOWER",
      ceremonialLabel: "THE XVI",
      subtitle: "Everything Is Fine, Bro",
      ceremonialText: "The situation is completely under control. Obviously.",
      fortune: "Your life is falling apart in real time and you're still saying 'aman'. Bro, the ceiling is gone.",
      advice: "Take a screenshot. Nobody will believe this later."
    },
    idLang: {
      name: "SANG MENARA",
      ceremonialLabel: "KARTU XVI",
      subtitle: "Aman Kok Bro",
      ceremonialText: "Situasinya terkendali kok. Jelas.",
      fortune: "Hidup lu runtuh live di depan mata tapi lu masih bilang 'aman'. Bro, plafonnya udah ilang.",
      advice: "Screenshot dulu. Nanti gak ada yang percaya."
    }
  },
  {
    id: "17-the-star",
    number: "XVII",
    illustrationKey: "star",
    en: {
      name: "THE STAR",
      ceremonialLabel: "THE XVII",
      subtitle: "Professional Copium Dealer",
      ceremonialText: "Hope with absolutely no supporting evidence.",
      fortune: "You have no reason to believe it will work. That's never stopped you before.",
      advice: "Keep hoping. Delusion is cheaper than therapy."
    },
    idLang: {
      name: "SANG BINTANG",
      ceremonialLabel: "KARTU XVII",
      subtitle: "Bandar Copium Profesional",
      ceremonialText: "Harapan tanpa satu pun bukti pendukung.",
      fortune: "Lu gak punya alasan buat percaya ini bakal berhasil. Tapi emang kapan lu peduli bukti?",
      advice: "Terus berharap. Halusinasi lebih murah daripada terapi."
    }
  },
  {
    id: "18-the-moon",
    number: "XVIII",
    illustrationKey: "moon",
    en: {
      name: "THE MOON",
      ceremonialLabel: "THE XVIII",
      subtitle: "3 AM Brainrot",
      ceremonialText: "Your brain has opened 47 tabs and none of them are real.",
      fortune: "At 3 AM you will remember one awkward sentence from 2014 and decide it explains why everyone secretly hates you.",
      advice: "Go to sleep. Nothing gets solved after midnight except your ability to ruin tomorrow."
    },
    idLang: {
      name: "SANG BULAN",
      ceremonialLabel: "KARTU XVIII",
      subtitle: "Otak Rusak Jam 3 Pagi",
      ceremonialText: "Otak lu buka 47 tab dan semuanya gak penting.",
      fortune: "Jam 3 pagi lu bakal inget satu kalimat awkward dari 2014 terus mutusin itu alasan semua orang diam-diam benci lu.",
      advice: "Tidur. Abis tengah malam gak ada masalah yang kelar, cuma besok lu yang makin capek."
    }
  },
  {
    id: "19-the-sun",
    number: "XIX",
    illustrationKey: "sun",
    en: {
      name: "THE SUN",
      ceremonialLabel: "THE XIX",
      subtitle: "Suspiciously Good Day",
      ceremonialText: "Everything is going well. That's the problem.",
      fortune: "You are happy today for no obvious reason. Enjoy it before life remembers your address.",
      advice: "Don't get comfortable. Something stupid is probably loading."
    },
    idLang: {
      name: "SANG MATAHARI",
      ceremonialLabel: "KARTU XIX",
      subtitle: "Hari Bagus yang Mencurigakan",
      ceremonialText: "Semuanya lancar. Nah, itu masalahnya.",
      fortune: "Hari ini lu bahagia tanpa alasan jelas. Nikmatin sebelum hidup inget alamat rumah lu.",
      advice: "Jangan nyaman-nyaman. Kayaknya ada kebodohan yang lagi loading."
    }
  },
  {
    id: "20-judgement",
    number: "XX",
    illustrationKey: "judgement",
    en: {
      name: "JUDGEMENT",
      ceremonialLabel: "THE XX",
      subtitle: "Your Search History Has Witnesses",
      ceremonialText: "The trial has begun and you are representing yourself.",
      fortune: "Everything you've been avoiding is coming back. Including the consequences and that embarrassing search from two years ago.",
      advice: "Delete nothing. Panic is more authentic."
    },
    idLang: {
      name: "PENGHAKIMAN",
      ceremonialLabel: "KARTU XX",
      subtitle: "History Browser Punya Saksi",
      ceremonialText: "Sidangnya mulai dan lu jadi pengacara diri sendiri.",
      fortune: "Semua yang lu hindarin balik lagi. Termasuk konsekuensi dan search memalukan dua tahun lalu.",
      advice: "Jangan hapus apa-apa. Panik lebih autentik."
    }
  },
  {
    id: "21-the-world",
    number: "XXI",
    illustrationKey: "world",
    en: {
      name: "THE WORLD",
      ceremonialLabel: "THE XXI",
      subtitle: "Same Shit, New Season",
      ceremonialText: "You completed the journey and learned absolutely nothing.",
      fortune: "New year, new job, new relationship, same stupid behavior. At least you're consistent.",
      advice: "Start over again. You clearly enjoy this."
    },
    idLang: {
      name: "SANG DUNIA",
      ceremonialLabel: "KARTU XXI",
      subtitle: "Masalah Sama, Season Baru",
      ceremonialText: "Perjalanan selesai dan lu gak belajar apa-apa.",
      fortune: "Tahun baru, kerjaan baru, pasangan baru, kelakuan gobloknya sama. Minimal konsisten.",
      advice: "Mulai lagi. Kayaknya lu emang suka begini."
    }
  },
]