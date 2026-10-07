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
      name: "the fool",
      ceremonialLabel: "the 0",
      subtitle: "bad decisions, no thoughts",
      ceremonialText: "no plan. no money. still confident.",
      fortune: "lu bakal bikin keputusan goblok terus nyebutnya pengalaman hidup. ngaku salah kan gengsi.",
      advice: "gas aja. nanti juga lu yang nanggung."
    },
    idLang: {
      name: "sang pengembara",
      ceremonialLabel: "kartu 0",
      subtitle: "keputusan goblok, otak kosong",
      ceremonialText: "gak ada rencana. gak ada duit. tetep pede.",
      fortune: "lu bakal bikin keputusan goblok terus nyebutnya pengalaman hidup. ngaku salah kan gengsi.",
      advice: "gas aja. nanti juga lu yang nanggung."
    }
  },
  {
    id: "1-the-magician",
    number: "I",
    illustrationKey: "magician",
    en: {
      name: "the magician",
      ceremonialLabel: "the i",
      subtitle: "professional bullshit engineer",
      ceremonialText: "building a system to avoid doing one task.",
      fortune: "lu punya 12 tools produktivitas. kerjaan lu tetep belum kelar. keren.",
      advice: "install satu lagi. siapa tau masalahnya kurang aplikasi."
    },
    idLang: {
      name: "sang pesulap",
      ceremonialLabel: "kartu i",
      subtitle: "tukang ngibul profesional",
      ceremonialText: "bikin sistem biar gak ngerjain satu tugas.",
      fortune: "lu punya 12 tools produktivitas. kerjaan lu tetep belum kelar. keren.",
      advice: "install satu lagi. siapa tau masalahnya kurang aplikasi."
    }
  },
  {
    id: "2-the-high-priestess",
    number: "II",
    illustrationKey: "high-priestess",
    en: {
      name: "the high priestess",
      ceremonialLabel: "the ii",
      subtitle: "queen of delusion",
      ceremonialText: "overthinking a message that meant nothing.",
      fortune: "dia bales wkwk. lu bikin analisis 8 halaman. dia bales sambil boker.",
      advice: "cek last seen lagi. harga diri lu juga udah gak online."
    },
    idLang: {
      name: "sang pendeta",
      ceremonialLabel: "kartu ii",
      subtitle: "ratu halu",
      ceremonialText: "mikirin chat yang sebenernya gak ada artinya.",
      fortune: "dia bales wkwk. lu bikin analisis 8 halaman. dia bales sambil boker.",
      advice: "cek last seen lagi. harga diri lu juga udah gak online."
    }
  },
  {
    id: "3-the-empress",
    number: "III",
    illustrationKey: "empress",
    en: {
      name: "the empress",
      ceremonialLabel: "the iii",
      subtitle: "financially irresponsible princess",
      ceremonialText: "buying little treats with money you don't have.",
      fortune: "saldo tinggal 14 ribu. lu checkout kopi 48 ribu. matematika emang bukan passion lu.",
      advice: "beli aja. miskin tapi estetik tetep miskin."
    },
    idLang: {
      name: "sang permaisuri",
      ceremonialLabel: "kartu iii",
      subtitle: "putri boros bersertifikat",
      ceremonialText: "checkout pake duit yang sebenernya gak ada.",
      fortune: "saldo tinggal 14 ribu. lu checkout kopi 48 ribu. matematika emang bukan passion lu.",
      advice: "beli aja. miskin tapi estetik tetep miskin."
    }
  },
  {
    id: "4-the-emperor",
    number: "IV",
    illustrationKey: "emperor",
    en: {
      name: "the emperor",
      ceremonialLabel: "the iv",
      subtitle: "ceo of nobody asked",
      ceremonialText: "demanding respect. forgetting basic chores.",
      fortune: "lu mau diperlakukan kayak kepala keluarga. piring sendiri aja nunggu diservis.",
      advice: "naikin suara. siapa tau kompetensi lu ikut naik."
    },
    idLang: {
      name: "sang kaisar",
      ceremonialLabel: "kartu iv",
      subtitle: "bos besar gak guna",
      ceremonialText: "nuntut dihormatin. buang sampah aja lupa.",
      fortune: "lu mau diperlakukan kayak kepala keluarga. piring sendiri aja nunggu diservis.",
      advice: "naikin suara. siapa tau kompetensi lu ikut naik."
    }
  },
  {
    id: "5-the-hierophant",
    number: "V",
    illustrationKey: "hierophant",
    en: {
      name: "the hierophant",
      ceremonialLabel: "the v",
      subtitle: "unemployed life coach",
      ceremonialText: "giving advice nobody asked for.",
      fortune: "hidupnya berantakan. ceramahnya 2 jam. emang percaya diri gak butuh bukti.",
      advice: "angguk aja. terus jangan ditiru."
    },
    idLang: {
      name: "sang hierofan",
      ceremonialLabel: "kartu v",
      subtitle: "motivator pengangguran",
      ceremonialText: "ngasih nasihat yang gak ada yang minta.",
      fortune: "hidupnya berantakan. ceramahnya 2 jam. emang percaya diri gak butuh bukti.",
      advice: "angguk aja. terus jangan ditiru."
    }
  },
  {
    id: "6-the-lovers",
    number: "VI",
    illustrationKey: "lovers",
    en: {
      name: "the lovers",
      ceremonialLabel: "the vi",
      subtitle: "two idiots, one red flag",
      ceremonialText: "chemistry kuat. logika mati.",
      fortune: "lu tau dia red flag. dia tau lu juga problematik. cocok sih.",
      advice: "jadian aja. therapist lu juga perlu makan."
    },
    idLang: {
      name: "sepasang kekasih",
      ceremonialLabel: "kartu vi",
      subtitle: "dua badut, satu red flag",
      ceremonialText: "chemistry kuat. logika mati.",
      fortune: "lu tau dia red flag. dia tau lu juga problematik. cocok sih.",
      advice: "jadian aja. therapist lu juga perlu makan."
    }
  },
  {
    id: "7-the-chariot",
    number: "VII",
    illustrationKey: "chariot",
    en: {
      name: "the chariot",
      ceremonialLabel: "the vii",
      subtitle: "no brakes, just ego",
      ceremonialText: "moving fast to avoid thinking.",
      fortune: "lu bukan ambisius. lu cuma kabur dari masalah pake kecepatan tinggi.",
      advice: "lanjut. burnout udah jadi kepribadian lu."
    },
    idLang: {
      name: "kereta perang",
      ceremonialLabel: "kartu vii",
      subtitle: "rem blong, modal ego",
      ceremonialText: "ngebut biar gak sempet mikir.",
      fortune: "lu bukan ambisius. lu cuma kabur dari masalah pake kecepatan tinggi.",
      advice: "lanjut. burnout udah jadi kepribadian lu."
    }
  },
  {
    id: "8-strength",
    number: "VIII",
    illustrationKey: "strength",
    en: {
      name: "strength",
      ceremonialLabel: "the viii",
      subtitle: "one email away",
      ceremonialText: "professional outside. pengen banting meja inside.",
      fortune: "lu sabar bukan karena dewasa. karena hr masih punya cctv.",
      advice: "balas 'noted'. bikin dia takut."
    },
    idLang: {
      name: "kekuatan batin",
      ceremonialLabel: "kartu viii",
      subtitle: "satu email lagi meledak",
      ceremonialText: "profesional di luar. pengen banting meja di dalam.",
      fortune: "lu sabar bukan karena dewasa. karena hr masih punya cctv.",
      advice: "balas 'noted'. bikin dia takut."
    }
  },
  {
    id: "9-the-hermit",
    number: "IX",
    illustrationKey: "hermit",
    en: {
      name: "the hermit",
      ceremonialLabel: "the ix",
      subtitle: "do not disturb forever",
      ceremonialText: "social battery mati. hp masih nyala.",
      fortune: "lu bilang butuh me time. udah tiga hari gak mandi, bro.",
      advice: "rebahan aja. matahari juga gak nyariin lu."
    },
    idLang: {
      name: "sang petapa",
      ceremonialLabel: "kartu ix",
      subtitle: "jangan ganggu selamanya",
      ceremonialText: "baterai sosial mati. hp masih nyala.",
      fortune: "lu bilang butuh me time. udah tiga hari gak mandi, bro.",
      advice: "rebahan aja. matahari juga gak nyariin lu."
    }
  },
  {
    id: "10-wheel-of-fortune",
    number: "X",
    illustrationKey: "wheel-of-fortune",
    en: {
      name: "wheel of fortune",
      ceremonialLabel: "the x",
      subtitle: "randomized suffering",
      ceremonialText: "the universe has selected your problem.",
      fortune: "hari ini ada aja yang rusak. belum tentu hidup lu. mungkin charger. dulu.",
      advice: "santai. besok bisa lebih tolol."
    },
    idLang: {
      name: "roda takdir",
      ceremonialLabel: "kartu x",
      subtitle: "undian kesialan",
      ceremonialText: "semesta udah milih masalah lu.",
      fortune: "hari ini ada aja yang rusak. belum tentu hidup lu. mungkin charger. dulu.",
      advice: "santai. besok bisa lebih tolol."
    }
  },
  {
    id: "11-justice",
    number: "XI",
    illustrationKey: "justice",
    en: {
      name: "justice",
      ceremonialLabel: "the xi",
      subtitle: "consequences department",
      ceremonialText: "past-you has filed a complaint.",
      fortune: "ini masalah yang lu tunda dari bulan lalu. selamat, sekarang udah pake bunga.",
      advice: "ngaku salah atau salahin zodiak. terserah."
    },
    idLang: {
      name: "keadilan",
      ceremonialLabel: "kartu xi",
      subtitle: "departemen konsekuensi",
      ceremonialText: "lu yang dulu ngadu ke lu yang sekarang.",
      fortune: "ini masalah yang lu tunda dari bulan lalu. selamat, sekarang udah pake bunga.",
      advice: "ngaku salah atau salahin zodiak. terserah."
    }
  },
  {
    id: "12-the-hanged-man",
    number: "XII",
    illustrationKey: "hanged-man",
    en: {
      name: "the hanged man",
      ceremonialLabel: "the xii",
      subtitle: "professional nanti dulu",
      ceremonialText: "doing nothing with full commitment.",
      fortune: "deadline lu besok. lu malah nonton orang renovasi rumah orang lain.",
      advice: "scroll dulu. panik itu urusan lu nanti."
    },
    idLang: {
      name: "sang tergantung",
      ceremonialLabel: "kartu xii",
      subtitle: "spesialis nanti dulu",
      ceremonialText: "gak ngapa-ngapain dengan dedikasi penuh.",
      fortune: "deadline lu besok. lu malah nonton orang renovasi rumah orang lain.",
      advice: "scroll dulu. panik itu urusan lu nanti."
    }
  },
  {
    id: "13-death",
    number: "XIII",
    illustrationKey: "death",
    en: {
      name: "death",
      ceremonialLabel: "the xiii",
      subtitle: "end of your delusion",
      ceremonialText: "some things need to end. preferably the fantasy.",
      fortune: "dia gak bakal berubah. lu juga gak bakal move on kalau masih ngecek story-nya.",
      advice: "hapus chatnya. besok lu cari lagi."
    },
    idLang: {
      name: "kematian",
      ceremonialLabel: "kartu xiii",
      subtitle: "akhir halu lu",
      ceremonialText: "ada yang harus selesai. terutama halusinasi lu.",
      fortune: "dia gak bakal berubah. lu juga gak bakal move on kalau masih ngecek story-nya.",
      advice: "hapus chatnya. besok lu cari lagi."
    }
  },
  {
    id: "14-temperance",
    number: "XIV",
    illustrationKey: "temperance",
    en: {
      name: "temperance",
      ceremonialLabel: "the xiv",
      subtitle: "bad habits, good excuses",
      ceremonialText: "one healthy choice. seven terrible ones.",
      fortune: "lu minum air putih sekali terus ngerasa hidup udah balance. tidur lu masih 4 jam.",
      advice: "makan sayur sekali. wellness era dimulai."
    },
    idLang: {
      name: "keseimbangan",
      ceremonialLabel: "kartu xiv",
      subtitle: "kebiasaan jelek, alasan bagus",
      ceremonialText: "satu pilihan sehat. tujuh keputusan tolol.",
      fortune: "lu minum air putih sekali terus ngerasa hidup udah balance. tidur lu masih 4 jam.",
      advice: "makan sayur sekali. wellness era dimulai."
    }
  },
  {
    id: "15-the-devil",
    number: "XV",
    illustrationKey: "devil",
    en: {
      name: "the devil",
      ceremonialLabel: "the xv",
      subtitle: "you know exactly what you're doing",
      ceremonialText: "bad idea. good dopamine.",
      fortune: "lu bukan bingung. lu cuma berharap ada yang ngebolehin lu bikin keputusan goblok.",
      advice: "gas. minimal jangan pura-pura kaget pas hancur."
    },
    idLang: {
      name: "sang iblis",
      ceremonialLabel: "kartu xv",
      subtitle: "lu tau persis kelakuan lu",
      ceremonialText: "ide jelek. dopamin mantap.",
      fortune: "lu bukan bingung. lu cuma berharap ada yang ngebolehin lu bikin keputusan goblok.",
      advice: "gas. minimal jangan pura-pura kaget pas hancur."
    }
  },
  {
    id: "16-the-tower",
    number: "XVI",
    illustrationKey: "tower",
    en: {
      name: "the tower",
      ceremonialLabel: "the xvi",
      subtitle: "everything is fine, bro",
      ceremonialText: "everything is under control. katanya.",
      fortune: "hidup lu runtuh live. lu masih bilang aman. plafon aja udah cabut.",
      advice: "screenshot dulu. nanti lu bilang ini character development."
    },
    idLang: {
      name: "sang menara",
      ceremonialLabel: "kartu xvi",
      subtitle: "aman kok, bro",
      ceremonialText: "semua terkendali. katanya.",
      fortune: "hidup lu runtuh live. lu masih bilang aman. plafon aja udah cabut.",
      advice: "screenshot dulu. nanti lu bilang ini character development."
    }
  },
  {
    id: "17-the-star",
    number: "XVII",
    illustrationKey: "star",
    en: {
      name: "the star",
      ceremonialLabel: "the xvii",
      subtitle: "professional copium dealer",
      ceremonialText: "hope. no evidence. full confidence.",
      fortune: "lu gak punya alasan buat yakin ini berhasil. tapi dari dulu fakta emang gak pernah ganggu lu.",
      advice: "terus berharap. realita juga gak kangen lu."
    },
    idLang: {
      name: "sang bintang",
      ceremonialLabel: "kartu xvii",
      subtitle: "bandar copium",
      ceremonialText: "harapan. tanpa bukti. pede maksimal.",
      fortune: "lu gak punya alasan buat yakin ini berhasil. tapi dari dulu fakta emang gak pernah ganggu lu.",
      advice: "terus berharap. realita juga gak kangen lu."
    }
  },
  {
    id: "18-the-moon",
    number: "XVIII",
    illustrationKey: "moon",
    en: {
      name: "the moon",
      ceremonialLabel: "the xviii",
      subtitle: "3 am brainrot",
      ceremonialText: "47 tabs open. none useful.",
      fortune: "jam 3 pagi lu inget malu pas smp terus yakin semua orang masih inget. mereka aja lupa nama lu.",
      advice: "tidur. besok lu bisa malu sama hal baru."
    },
    idLang: {
      name: "sang bulan",
      ceremonialLabel: "kartu xviii",
      subtitle: "otak rusak jam 3 pagi",
      ceremonialText: "47 tab kebuka. gak ada yang guna.",
      fortune: "jam 3 pagi lu inget malu pas smp terus yakin semua orang masih inget. mereka aja lupa nama lu.",
      advice: "tidur. besok lu bisa malu sama hal baru."
    }
  },
  {
    id: "19-the-sun",
    number: "XIX",
    illustrationKey: "sun",
    en: {
      name: "the sun",
      ceremonialLabel: "the xix",
      subtitle: "suspiciously good day",
      ceremonialText: "things are going well. suspicious.",
      fortune: "lu bahagia hari ini. nikmatin aja sebelum hidup inget lu masih punya cicilan.",
      advice: "jangan nyaman. semesta lagi ngetik."
    },
    idLang: {
      name: "sang matahari",
      ceremonialLabel: "kartu xix",
      subtitle: "hari bagus mencurigakan",
      ceremonialText: "hidup lagi lancar. mencurigakan.",
      fortune: "lu bahagia hari ini. nikmatin aja sebelum hidup inget lu masih punya cicilan.",
      advice: "jangan nyaman. semesta lagi ngetik."
    }
  },
  {
    id: "20-judgement",
    number: "XX",
    illustrationKey: "judgement",
    en: {
      name: "judgement",
      ceremonialLabel: "the xx",
      subtitle: "your search history has witnesses",
      ceremonialText: "the trial begins. you're your own lawyer.",
      fortune: "semua yang lu hindarin balik lagi. termasuk konsekuensi dan keputusan yang lu bilang 'cuma sekali'.",
      advice: "hapus history. masalahnya tetep ada, tapi ya lumayan."
    },
    idLang: {
      name: "penghakiman",
      ceremonialLabel: "kartu xx",
      subtitle: "history browser punya saksi",
      ceremonialText: "sidang dimulai. lu jadi pengacara sendiri.",
      fortune: "semua yang lu hindarin balik lagi. termasuk konsekuensi dan keputusan yang lu bilang 'cuma sekali'.",
      advice: "hapus history. masalahnya tetep ada, tapi ya lumayan."
    }
  },
  {
    id: "21-the-world",
    number: "XXI",
    illustrationKey: "world",
    en: {
      name: "the world",
      ceremonialLabel: "the xxi",
      subtitle: "same shit, new season",
      ceremonialText: "full circle. zero lessons.",
      fortune: "pasangan baru, kerjaan baru, masalahnya sama. ternyata common denominator-nya lu.",
      advice: "mulai lagi. konsistensi lu emang di kebodohan."
    },
    idLang: {
      name: "sang dunia",
      ceremonialLabel: "kartu xxi",
      subtitle: "masalah sama, season baru",
      ceremonialText: "muter penuh. gak belajar apa-apa.",
      fortune: "pasangan baru, kerjaan baru, masalahnya sama. ternyata common denominator-nya lu.",
      advice: "mulai lagi. konsistensi lu emang di kebodohan."
    }
  },
]