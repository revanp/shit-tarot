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
      subtitle: "Lord of Absolute Clowns",
      ceremonialText: "No thoughts behind those eyes, only vibes and imminent financial ruins.",
      fortune: "You are about to do something so incomprehensibly stupid that even God will mute your prayers out of sheer secondhand embarrassment.",
      advice: "Don't think, your brain isn't built for that anyway. Full send and blame mercury retrograde when your life explodes."
    },
    idLang: {
      name: "SANG PENGEMBARA",
      ceremonialLabel: "KARTU 0",
      subtitle: "Raja Segala Badut",
      ceremonialText: "Kepala kosong melompong, dompet sekarat, tapi percaya diri nembus langit ketujuh.",
      fortune: "Lu lagi mau ngelakuin tindakan yang tololnya gak ada obat. Malaikat pencatat amal aja capek geleng-geleng kepala liat kelakuan lu.",
      advice: "Gak usah mikir, otak lu gak bakal sanggup. Gas aja terus, ntar pas hancur lebur tinggal nyalahin konspirasi elit global."
    }
  },
  {
    id: "1-the-magician",
    number: "I",
    illustrationKey: "magician",
    en: {
      name: "THE MAGICIAN",
      ceremonialLabel: "THE I",
      subtitle: "Master of Bullshit & Overengineering",
      ceremonialText: "Using 500 AI tools and RGB setups to avoid doing 5 minutes of honest work.",
      fortune: "You have 3 monitors, a mechanical keyboard that sounds like an assault rifle, and 4 AI assistants, yet your biggest achievement today is moving a Jira ticket and taking a 4-hour nap.",
      advice: "Spend another $200 on a productivity app you will uninstall by Thursday."
    },
    idLang: {
      name: "SANG PESULAP",
      ceremonialLabel: "KARTU I",
      subtitle: "Dukun Ngibul & Overthinking",
      ceremonialText: "Pake 10 tools AI canggih cuma buat hindarin kerjaan riil 5 menit.",
      fortune: "Setup meja kerja udah kayak ruang kendali NASA, keyboard mekanik berisik, kopi estetik, tapi kerjaan lu seharian cuma nge-scroll reels sambil pura-pura sibuk alt-tab pas ada orang lewat.",
      advice: "Beli kursus self-improvement sejuta rupiah lagi, biar punya alibi baru buat nunda kerjaan."
    }
  },
  {
    id: "2-the-high-priestess",
    number: "II",
    illustrationKey: "high-priestess",
    en: {
      name: "THE HIGH PRIESTESS",
      ceremonialLabel: "THE II",
      subtitle: "Queen of Delusion & Stalking",
      ceremonialText: "Staring into the void waiting for a toxic ex who doesn't even remember your surname.",
      fortune: "You are analyzing a dry 3-word reply from your crush like it's a sacred ancient prophecy. They didn't forget the emoji, sweetie, they are actively flirting with 4 other people.",
      advice: "Check their follower count for the 50th time today. Surely that 1 new follow is your soulmate's downfall."
    },
    idLang: {
      name: "SANG PENDETA WANITA",
      ceremonialLabel: "KARTU II",
      subtitle: "Ratu Delusi & Stalker Ulung",
      ceremonialText: "Menatap layar kosong nungguin chat dari orang yang bahkan lupa lu masih hidup.",
      fortune: "Chat 'wkwk' doang dari gebetan lu bedah kayak skripsi 200 halaman. Padahal dia bales gitu sambil boker dan lagi deketin 3 orang lain di second account-nya.",
      advice: "Cek following IG-nya tiap 15 menit. Siapa tahu ada akun baru yang bisa lu stalk sampe ke silsilah keluarganya."
    }
  },
  {
    id: "3-the-empress",
    number: "III",
    illustrationKey: "empress",
    en: {
      name: "THE EMPRESS",
      ceremonialLabel: "THE III",
      subtitle: "Gluttonous Dopamine Gremlin",
      ceremonialText: "Consuming trash content and $15 iced lattes until your heart vibrates.",
      fortune: "Your bank account has $3.12 left, your spine is curved like a cooked shrimp, yet you just ordered an artisan coffee because 'you survived a minor emotional inconvenience'.",
      advice: "Order another midnight feast on delivery. Bankruptcy is a problem for tomorrow's version of you."
    },
    idLang: {
      name: "SANG PERMAISURI",
      ceremonialLabel: "KARTU III",
      subtitle: "Ratu Manja Penghambur Saldo",
      ceremonialText: "Dopamin hancur, tabungan sekarat, tulang belakang melengkung kayak udang rebus.",
      fortune: "Saldo rekening lu sisa Rp 14.500, tapi lu tetep checkout kopi susu gula aren ekstra shot karena ngerasa 'aku deserve self-reward abis bangun tidur jam 1 siang'.",
      advice: "Gojek makanan lagi jam 1 malem. Masalah jatuh miskin mah urusan lu besok pagi pas saldo udah nol."
    }
  },
  {
    id: "4-the-emperor",
    number: "IV",
    illustrationKey: "emperor",
    en: {
      name: "THE EMPEROR",
      ceremonialLabel: "THE IV",
      subtitle: "Ego-Tripping Control Freak",
      ceremonialText: "Trying to micromanage the universe while incapable of fixing own sleep schedule.",
      fortune: "You demand absolute respect and structure, yet you cannot even convince yourself to drink a single glass of water before 4 PM or get out of bed on the first 12 alarms.",
      advice: "Yell at an inanimate object. It's the only thing in your house that won't pack its bags and leave."
    },
    idLang: {
      name: "SANG KAISAR",
      ceremonialLabel: "KARTU IV",
      subtitle: "Diktator Jam Tidur Rusak",
      ceremonialText: "Sok mau ngatur takdir dunia padahal bangun pagi aja kudu pasang 12 alarm berurutan.",
      fortune: "Gaya lu sok paling dominan dan berjiwa pemimpin, padahal nyuruh diri sendiri minum air putih sebelum jam 4 sore aja lu gagal total.",
      advice: "Maki-maki router wifi atau pintu kamar. Cuma itu barang yang gak bakal ngebales bacot lu atau mutusin lu."
    }
  },
  {
    id: "5-the-hierophant",
    number: "V",
    illustrationKey: "hierophant",
    en: {
      name: "THE HIEROPHANT",
      ceremonialLabel: "THE V",
      subtitle: "Preachy LinkedIn Philosopher",
      ceremonialText: "Regurgitating unhinged hustle culture garbage nobody in the room asked for.",
      fortune: "Someone who has failed at every single endeavor in their life is about to give you a 2-hour lecture on 'grindset mindset' and why waking up at 4 AM to take cold baths cures poverty.",
      advice: "Smile politely, nod like a bobblehead, and mentally calculate how to fake your own death to escape the conversation."
    },
    idLang: {
      name: "SANG HIEROFAN",
      ceremonialLabel: "KARTU V",
      subtitle: "Suhu Bacot & Motivator Gadungan",
      ceremonialText: "Muntahin quotes motivasi basi yang gak pernah dia praktekin sendiri di dunia nyata.",
      fortune: "Lu bakal ketemu orang sok bijak yang hidupnya sendiri berantakan tapi hobi banget ceramahin lu soal 'mindset orang sukses' dan investasi kripto bodong.",
      advice: "Senyum sambil ngangguk-ngangguk, pasang headset, bayangin lu dorong dia ke selokan terdekat."
    }
  },
  {
    id: "6-the-lovers",
    number: "VI",
    illustrationKey: "lovers",
    en: {
      name: "THE LOVERS",
      ceremonialLabel: "THE VI",
      subtitle: "Codependent Clown Fiesta",
      ceremonialText: "Ignoring 99 glaring red flags because they have great aesthetic and hair.",
      fortune: "You are about to sprint directly into the arms of someone who will drain your bank account, ruin your mental health, and give you trust issues requiring 8 years of therapy.",
      advice: "Send the risky text at 2:30 AM. We love a self-destructive romantic arc."
    },
    idLang: {
      name: "SEPASANG KEKASIH",
      ceremonialLabel: "KARTU VI",
      subtitle: "Badut Cinta Kolektor Red Flag",
      ceremonialText: "Mengabaikan 99 bendera merah menyala cuma gara-gara selera musiknya indie dan mukanya cakep.",
      fortune: "Lu lagi lari kencang menuju pelukan orang yang bakal ngancurin kesehatan mental lu, morotin duit lu, dan bikin lu trauma 5 tahun ke depan. Tapi yaudahlah ya, anaknya estetik.",
      advice: "Kirim chat kangen jam 2 pagi. Hancurkan sisa harga diri lu sampai ke titik minus tak terhingga."
    }
  },
  {
    id: "7-the-chariot",
    number: "VII",
    illustrationKey: "chariot",
    en: {
      name: "THE CHARIOT",
      ceremonialLabel: "THE VII",
      subtitle: "Crashing at Mach 3",
      ceremonialText: "No brakes, no steering wheel, no insurance, pure unadulterated mania.",
      fortune: "You are accelerating at 140 mph directly into a concrete wall of burnout, catastrophic decisions, and physical exhaustion. And you refuse to tap the brakes.",
      advice: "Honk the horn. If your life is going to crash, make sure the entire neighborhood wakes up to watch."
    },
    idLang: {
      name: "KERETA PERANG",
      ceremonialLabel: "KARTU VII",
      subtitle: "Rem Blong Menuju Jurang",
      ceremonialText: "Gak ada rem, gak ada SIM, gak ada asuransi, modal nekat dan panik stadium 4.",
      fortune: "Lu lagi ngebut 140 km/jam lurus menuju tembok burnout dan depresi klinis. Dan hebatnya lu sama sekali gak ada niatan buat ngerem.",
      advice: "Pencet klakson sekencang-kencangnya. Kalo emang mau nabrak, minimal bikin heboh satu kelurahan."
    }
  },
  {
    id: "8-strength",
    number: "VIII",
    illustrationKey: "strength",
    en: {
      name: "STRENGTH",
      ceremonialLabel: "THE VIII",
      subtitle: "Suppressing Violent Rage",
      ceremonialText: "Maintaining a polite fake smile while planning 4 consecutive felonies in your head.",
      fortune: "You are one passive-aggressive email away from biting someone's jugular. Your inner beast isn't tamed; it's just waiting for HR to look the other way.",
      advice: "Type 'Per my previous email, as per discussed' with maximum homicidal intent."
    },
    idLang: {
      name: "KEKUATAN BATIN",
      ceremonialLabel: "KARTU VIII",
      subtitle: "Nahan Emosi Pengen Nampol",
      ceremonialText: "Senyum manis di luar, di dalam hati udah ngebayangin banting meja dan lempar kursi.",
      fortune: "Lu tinggal butuh satu chat 'P' atau 'bisa tolong dicek lagi?' buat meledak dan ngacak-ngacak seisi kantor. Stok sabar lu udah di level minus.",
      advice: "Tarik napas, ketik 'Noted dengan hormat' sambil neken tuts keyboard sekuat tenaga kayak mau matahin tombol Enter."
    }
  },
  {
    id: "9-the-hermit",
    number: "IX",
    illustrationKey: "hermit",
    en: {
      name: "THE HERMIT",
      ceremonialLabel: "THE IX",
      subtitle: "Feral Goblin in a Dark Room",
      ceremonialText: "Rotting in bed with blinds closed smelling like instant ramen and dry shampoo.",
      fortune: "You haven't seen natural sunlight in 72 hours. Your social skills have officially regressed to a caveman grunting at microwave beeps.",
      advice: "Hiss violently at anyone who knocks on your front door and mute all group chats until 2028."
    },
    idLang: {
      name: "SANG PETAPA",
      ceremonialLabel: "KARTU IX",
      subtitle: "Siluman Kasur Bau Indomie",
      ceremonialText: "Membusuk di kamar gelap tanpa matahari, bau minyak telon campur kuah micin.",
      fortune: "Udah 3 hari lu gak liat sinar matahari. Skill sosial lu udah anjlok setara manusia purba yang cuma bisa ngedumel pas kuota internet abis.",
      advice: "Matiin lampu kamar, pasang mode Do Not Disturb, mendesis kayak ular kalo ada keluarga yang ngetuk pintu."
    }
  },
  {
    id: "10-wheel-of-fortune",
    number: "X",
    illustrationKey: "wheel-of-fortune",
    en: {
      name: "WHEEL OF FORTUNE",
      ceremonialLabel: "THE X",
      subtitle: "Gambler's Ruin & Pure Bad Luck",
      ceremonialText: "The universe spinning a roulette wheel to decide which organ or appliance fails today.",
      fortune: "Karma is loading a brand-new customized disaster just for you. Will it be a sudden root canal, your laptop screen dying, or stepping on a wet sock? Stay tuned.",
      advice: "Bet on black. Or just lay flat on the carpet so gravity can't locate you."
    },
    idLang: {
      name: "RODA TAKDIR",
      ceremonialLabel: "KARTU X",
      subtitle: "Judi Nasib & Apes Beruntun",
      ceremonialText: "Semesta lagi muter roda buat milih kesialan apa yang bakal nimpa lu hari ini.",
      fortune: "Nasib lu lagi diundi: apakah hari ini lu bakal kena tilang, dompet ilang, atau ketumpahan kuah seblak pedas di celana putih? Peluang apesnya 100%.",
      advice: "Pasrah aja. Kalo perlu rebahan di lantai jangan gerak, biar gravitasi lupa kalo lu masih hidup."
    }
  },
  {
    id: "11-justice",
    number: "XI",
    illustrationKey: "justice",
    en: {
      name: "JUSTICE",
      ceremonialLabel: "THE XI",
      subtitle: "Karmic Bitch-Slap",
      ceremonialText: "The direct consequences of your own stupidity arriving with a steel chair.",
      fortune: "You spent months saying 'eh, that's a problem for future me'. Well congratulations! You are now 'future me', and past you was an irredeemable scumbag.",
      advice: "Blame the government, your zodiac sign, or the economy. Never, under any circumstances, take personal responsibility."
    },
    idLang: {
      name: "KEADILAN",
      ceremonialLabel: "KARTU XI",
      subtitle: "Tamparan Karma Tanpa Ampun",
      ceremonialText: "Akibat kelakuan bego lu sendiri datang bawa kursi besi smackdown.",
      fortune: "Dulu lu selalu bilang 'ah itu mah urusan gue di masa depan'. Selamat ya! Sekarang lu adalah si 'gue di masa depan' itu, dan lu yang masa lalu bener-bener gak punya otak.",
      advice: "Salahin pemerintah, zodiak, atau weton lu. Pokoknya jangan pernah ngaku salah."
    }
  },
  {
    id: "12-the-hanged-man",
    number: "XII",
    illustrationKey: "hanged-man",
    en: {
      name: "THE HANGED MAN",
      ceremonialLabel: "THE XII",
      subtitle: "Professional Paralysis & Dissociation",
      ceremonialText: "Suspended upside down doing absolutely nothing and calling it 'mental healing'.",
      fortune: "You have 14 urgent deadlines screaming at you. Your response? Lie horizontally on the floor, stare at a TikTok video of a capybara, and dissociate for 5 hours.",
      advice: "Don't move. If you stay perfectly still, maybe the deadlines will assume you're dead and find someone else."
    },
    idLang: {
      name: "SANG TERGANTUNG",
      ceremonialLabel: "KARTU XII",
      subtitle: "Lumpuh Total & Menolak Produktif",
      ceremonialText: "Tergantung gak berdaya, kerjaan numpuk, tapi malah asyik nonton drama seleb.",
      fortune: "Ada 10 deadline ngejer lu kayak rentenir. Respon lu apa? Rebahan telentang mangap sambil nonton live jualan baju yang gak bakal lu beli selama 4 jam berturut-turut.",
      advice: "Jangan gerak. Pura-pura mati aja siapa tahu bos lu ngira lu udah meninggal dan kerjaannya dialihin ke orang lain."
    }
  },
  {
    id: "13-death",
    number: "XIII",
    illustrationKey: "death",
    en: {
      name: "DEATH",
      ceremonialLabel: "THE XIII",
      subtitle: "Ego Obliteration & Broken Dreams",
      ceremonialText: "The final funeral for the last remaining shred of your youthful optimism.",
      fortune: "Something vital is dying today. Specifically, your dreams, your metabolism, your posture, and that 1-year gym membership you used exactly twice.",
      advice: "Pour one out for your dignity and embrace your true destiny as an exhausted biological shell."
    },
    idLang: {
      name: "KEMATIAN",
      ceremonialLabel: "KARTU XIII",
      subtitle: "Kuburan Cita-Cita & Metabolisme",
      ceremonialText: "Upacara pemakaman sisa-sisa harapan masa muda lu yang udah membusuk.",
      fortune: "Ada hal berharga yang mati hari ini: mimpi masa kecil lu, metabolisme tubuh lu yang makin melar, dan kartu member gym 1 tahun yang baru lu datengin 2 kali.",
      advice: "Tabur bunga di atas dompet lu, ikhlaskan bahwa lu emang ditakdirkan jadi manusia jompo."
    }
  },
  {
    id: "14-temperance",
    number: "XIV",
    illustrationKey: "temperance",
    en: {
      name: "TEMPERANCE",
      ceremonialLabel: "THE XIV",
      subtitle: "Unhinged Coping Mechanisms",
      ceremonialText: "Balancing 4 energy drinks with anxiety meds like a medieval mad scientist.",
      fortune: "Your idea of 'balance' is drinking 5 espresso shots to wake up, then chugging 3 beers to pass out. That's not inner peace, that's biological terrorism on your liver.",
      advice: "Drink half a glass of lukewarm tap water. Congratulations, you're officially a wellness influencer."
    },
    idLang: {
      name: "KESEIMBANGAN",
      ceremonialLabel: "KARTU XIV",
      subtitle: "Alkimia Kopi Saset & Tolak Angin",
      ceremonialText: "Menyeimbangkan 5 cangkir kopi hitam sama tolak angin biar lambung gak meledak.",
      fortune: "Konsep 'balance' lu adalah minum kopi 5 gelas biar melek, terus malemnya minum obat tidur biar bisa merem. Itu bukan keseimbangan jiwa, itu penyiksaan organ dalam berencana.",
      advice: "Minum air putih segelas kecil. Selamat, lu resmi jadi pegiat gaya hidup sehat."
    }
  },
  {
    id: "15-the-devil",
    number: "XV",
    illustrationKey: "devil",
    en: {
      name: "THE DEVIL",
      ceremonialLabel: "THE XV",
      subtitle: "Unhinged Degeneracy & Vices",
      ceremonialText: "Chained to self-destruction and grinning like a maniac the entire time.",
      fortune: "You know this decision is toxic. You know this person is manipulative. You know this 3 AM shopping spree will bankrupt you. But it feels delicious, doesn't it?",
      advice: "Double down. If you're riding a highway to hell, you might as well get the VIP front-row seat."
    },
    idLang: {
      name: "SANG IBLIS",
      ceremonialLabel: "KARTU XV",
      subtitle: "Budak Maksiat & Dosa Harian",
      ceremonialText: "Terbelenggu kebiasaan buruk tapi malah dinikmati dengan cengengesan.",
      fortune: "Lu tau ini toxic. Lu tau orang ini manipulatif. Lu tau checkout barang ini bikin lu makan promag akhir bulan. Tapi lu tetep lakuin karena lu doyan siksaan batin, dasar manusia aneh.",
      advice: "Gas pol sekalian. Kalo udah kepalang masuk lubang dosa, mending gali sekalian sampe tembus ke inti bumi."
    }
  },
  {
    id: "16-the-tower",
    number: "XVI",
    illustrationKey: "tower",
    en: {
      name: "THE TOWER",
      ceremonialLabel: "THE XVI",
      subtitle: "Total Shitshow Apocalypse",
      ceremonialText: "Everything is on fire, the roof collapsed, and you are standing there looking goofy.",
      fortune: "Whatever fragile illusion of stability you held is about to violently implode. Production server crashed, your pants ripped in public, and you accidentally liked an ex's 2017 photo.",
      advice: "Grab popcorn, pull up a lawn chair, and watch your life burn in glorious 4K resolution."
    },
    idLang: {
      name: "SANG MENARA",
      ceremonialLabel: "KARTU XVI",
      subtitle: "Kehancuran Total Tanpa Sisa",
      ceremonialText: "Semua kebakar, atap roboh, dan lu cuma bisa melongo kayak orang bego.",
      fortune: "Segala kepalsuan hidup lu bakal hancur lebur hari ini. Server kantor jebol, celana lu robek di mall, dan lu gak sengaja kepencet love foto IG mantan dari 7 tahun lalu.",
      advice: "Beli popcorn, duduk santai, tonton kehancuran hidup lu dengan resolusi 4K."
    }
  },
  {
    id: "17-the-star",
    number: "XVII",
    illustrationKey: "star",
    en: {
      name: "THE STAR",
      ceremonialLabel: "THE XVII",
      subtitle: "Industrial Copium Factory",
      ceremonialText: "Inhaling lethal doses of copium wishing on a dead space satellite.",
      fortune: "You think you see a glimmer of light at the end of the dark tunnel! Sadly, it's not hope; it's a high-speed freight train packed with unpaid bills and unresolved family trauma.",
      advice: "Take a deep hit of that copium vape. Reality was boring anyway."
    },
    idLang: {
      name: "SANG BINTANG",
      ceremonialLabel: "KARTU XVII",
      subtitle: "Pabrik Copium & Harapan Palsu",
      ceremonialText: "Nghisap copium dosis tinggi sambil ngarep keajaiban yang gak bakal dateng.",
      fortune: "Lu ngeliat seberkas cahaya terang di ujung terowongan gelap! Sayangnya, itu bukan masa depan cerah, tapi lampu lokomotif kereta yang siap nabrak lu bolak-balik.",
      advice: "Tarik napas dalem-dalem, hisap copium lu. Realita mah pahit, mending halu terus sampe kiamat."
    }
  },
  {
    id: "18-the-moon",
    number: "XVIII",
    illustrationKey: "moon",
    en: {
      name: "THE MOON",
      ceremonialLabel: "THE XVIII",
      subtitle: "Schizo-Paranoid Delirium",
      ceremonialText: "Fabricating 500 apocalyptic scenarios with 0% basis in reality at 3:30 AM.",
      fortune: "Your brain is convincing you that your entire friend group has a secret chat dedicated to mocking your laugh, and that the shadow in your laundry pile is an ancient demon.",
      advice: "Stare at the ceiling and replay a humiliating moment from middle school until the sun rises."
    },
    idLang: {
      name: "SANG BULAN",
      ceremonialLabel: "KARTU XVIII",
      subtitle: "Halusinasi Paranoik Jam 3 Pagi",
      ceremonialText: "Mikirin 500 skenario terburuk yang 100% dibikin-bikin sama otak lu sendiri.",
      fortune: "Jam 3 pagi otak lu mulai drama: yakin 100% kalo semua temen lu punya grup WA tanpa lu buat ngomongin kejelekan lu, dan ada hantu penunggu dispenser lagi ngeliatin lu tidur.",
      advice: "Inget-inget lagi momen lu kepeleset di depan gebetan pas SMP, rasakan malunya sampai subuh."
    }
  },
  {
    id: "19-the-sun",
    number: "XIX",
    illustrationKey: "sun",
    en: {
      name: "THE SUN",
      ceremonialLabel: "THE XIX",
      subtitle: "Brief Euphoria Before the Trap Springs",
      ceremonialText: "A momentary flash of serotonin before the universe remembers to humiliate you.",
      fortune: "You feel inexplicably cheerful today. Beware! The universe is simply seasoning you with false hope before tossing you into the deep fryer.",
      advice: "Enjoy this 10-minute window of joy before receiving a 'can we talk?' message from your manager."
    },
    idLang: {
      name: "SANG MATAHARI",
      ceremonialLabel: "KARTU XIX",
      subtitle: "Senang Sesaat Sebelum Dibantai",
      ceremonialText: "Serotonin numpang lewat sebentar sebelum semesta nampol lu lagi.",
      fortune: "Lu ngerasa hari ini kok damai dan lancar banget ya? Hati-hati. Semesta cuma lagi ngasih lu bumbu marinasi biar pas lu digeprek nanti rasanya lebih gurih.",
      advice: "Nikmati 10 menit kebahagiaan ini sebelum ada chat 'bisa call sebentar?' dari bos lu."
    }
  },
  {
    id: "20-judgement",
    number: "XX",
    illustrationKey: "judgement",
    en: {
      name: "JUDGEMENT",
      ceremonialLabel: "THE XX",
      subtitle: "The Final Roast & Reckoning",
      ceremonialText: "Your incognito search history being projected on a jumbo screen at the pearly gates.",
      fortune: "The cosmic tribunal has reached a unanimous verdict: you are guilty of catastrophic laziness, atrocious taste in human beings, and squandering every ounce of your potential.",
      advice: "Burn your phone. Delete all search history. If anyone confronts you, pretend to have amnesia."
    },
    idLang: {
      name: "PENGHAKIMAN",
      ceremonialLabel: "KARTU XX",
      subtitle: "Sidang Dosa & Pengadilan Aib",
      ceremonialText: "Riwayat incognito browser lu dibacain keras-keras pake speaker masjid.",
      fortune: "Semua aib lu bakal kebongkar. Sidang kosmis menyatakan lu bersalah atas kemalasan tingkat dewa, selera pasangan yang busuk, dan pembunuhan massal terhadap potensi diri lu sendiri.",
      advice: "Bakar HP lu sekarang. Hapus search history browser. Kalo ditanya siapa-siapa, ngaku gila aja."
    }
  },
  {
    id: "21-the-world",
    number: "XXI",
    illustrationKey: "world",
    en: {
      name: "THE WORLD",
      ceremonialLabel: "THE XXI",
      subtitle: "Congratulations, You Learned Nothing",
      ceremonialText: "Completing a full 360-degree journey right back into the same exact dumpster fire.",
      fortune: "You went through all that suffering, debt, and heartbreak, only to end up right back at square one, fully prepared to repeat the exact same blunder with a new person.",
      advice: "Buy a new $30 daily planner, write 'New Era, New Me' on page 1, and abandon it by Tuesday."
    },
    idLang: {
      name: "SANG DUNIA",
      ceremonialLabel: "KARTU XXI",
      subtitle: "Muter-Muter Gak Ada Kemajuan",
      ceremonialText: "Keliling dunia 360 derajat cuma buat jatuh ke lubang kebodohan yang sama persis.",
      fortune: "Lu udah ngelewatin patah hati, nangis darah, dan dompet kering, cuma buat balik lagi ke titik awal dan ngulangin kebodohan yang sama persis tapi sama orang yang beda.",
      advice: "Beli buku agenda baru 100 ribu, tulis 'Tahun Ini Gue Berubah' di halaman pertama, terus lupain sampe tahun depan."
    }
  }
]
