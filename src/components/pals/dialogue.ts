// Bilingual (EN/ID) encounter dialogue database for the Pixel Pals.

export interface MatchupLine {
  a: { en: string; id: string };
  b: { en: string; id: string };
}

export const MATCHUPS: Record<string, MatchupLine> = {
  "naruto:sasuke": {
    a: { en: "SASUKEEE! Come back to the village!", id: "SASUKEEE! Balik ke desa sekarang juga!" },
    b: { en: "Usuratonkachi... Out of my way. CHIDORI!", id: "Usuratonkachi... Kamu berisik. CHIDORI!" },
  },
  "naruto:sakura": {
    a: { en: "Sakura-chan! Watch my new jutsu!", id: "Sakura-chan! Lihat jurus baruku!" },
    b: { en: "SHANNARO! Stop fooling around, Naruto!", id: "SHANNARO! Jangan bikin ulah terus, Naruto!" },
  },
  "naruto:luffy": {
    a: { en: "Straw Hat! Ramen eating contest, let's go!", id: "Topi jerami! Tanding makan ramen yuk!" },
    b: { en: "Meat first! Join my pirate crew, ninja!", id: "Daging dulu! Gabung jadi kru bajak lautku!" },
  },
  "naruto:saitama": {
    a: { en: "Your head is so shiny! Who's your sensei?!", id: "Kepalamu berkilau banget! Siapa gurumu?!" },
    b: { en: "Orange kid... where's the supermarket sale?", id: "Bocah oranye, di mana minimarket diskonan?" },
  },
  "naruto:kaneki": {
    a: { en: "You look so dark... you need Talk no Jutsu!", id: "Tatapanmu suram... kamu butuh Talk no Jutsu!" },
    b: { en: "What's 1000 minus 7...? Stay back.", id: "1000 minus 7 berapa...? Jangan dekat." },
  },
  "sakura:sasuke": {
    a: { en: "Sasuke-kun!! Kyaaa~ so cool!", id: "Sasuke-kun!! Kyaaa~ keren banget!" },
    b: { en: "Hmph. Annoying as ever...", id: "Hmph... Menyebalkan." },
  },
  "luffy:saitama": {
    a: { en: "GOMU GOMU NO PISTOL! Brawl with me!", id: "GOMU GOMU NO PISTOL! Adu jotos yuk!" },
    b: { en: "Consecutive Normal Punches.", id: "Serius... Pukulan Biasa." },
  },
  "kirito:sasuke": {
    a: { en: "Black coat, black hair... nice taste.", id: "Jaket hitam, rambut hitam... seleraku banget." },
    b: { en: "A dual-wielder? Show me your blade.", id: "Pengguna dua pedang? Tunjukkan pedangmu." },
  },
  "kirito:asuna": {
    a: { en: "Asuna... let's stay in this world a bit longer.", id: "Asuna... tinggal di dunia ini lebih lama yuk." },
    b: { en: "Kirito-kun, dinner's ready! Log out now!", id: "Kirito-kun, makan malam siap! Logout sekarang!" },
  },
  "kaneki:sasuke": {
    a: { en: "Your pain... is nothing compared to mine.", id: "Rasa sakitmu... belum seberapa dibandingku." },
    b: { en: "One red eye? Don't mistake it for Sharingan.", id: "Mata merah sebelah? Jangan samakan dengan Sharingan." },
  },
  "kaneki:saitama": {
    a: { en: "My Kagune shattered on your skin?!", id: "Kaguneku hancur kena kulitmu?!" },
    b: { en: "Can those tentacles be soup ingredients?", id: "Tentakel itu... bisa dibuat sup?" },
  },
  "sakura:saitama": {
    a: { en: "Sensei! Teach me that 1-hit punch secret!", id: "Sensei! Ajarkan rahasia pukulan 1 hit!" },
    b: { en: "100 pushups, 100 situps, 10km run. Daily.", id: "100 pushup, 100 situp, lari 10km. Harian." },
  },
  "luffy:kaneki": {
    a: { en: "Red tentacles! Squid meat?! YUMMY!", id: "Tentakel merah! Daging cumi?! ENAK!" },
    b: { en: "How do you keep laughing in this cruel world...?", id: "Kenapa kamu bisa tertawa di dunia kejam ini...?" },
  },
  "subaru:saitama": {
    a: { en: "You're strong AND bald?! Teach me both!", id: "Kamu kuat DAN botak?! Ajari aku keduanya!" },
    b: { en: "Dying's temporary. Grocery sales are forever.", id: "Mati itu sementara. Diskon sembako selamanya." },
  },
  "kirito:naruto": {
    a: { en: "Ninjutsu doesn't work inside SAO, kid.", id: "Ninjutsu tidak berlaku di dalam SAO, nak." },
    b: { en: "Then I'll punch you the Naruto way!", id: "Kalau begitu aku pukul dengan gaya Naruto!" },
  },
  "asuna:sakura": {
    a: { en: "Rapier skills: 5 hits in one second!", id: "Skill rapier: 5 tusukan dalam satu detik!" },
    b: { en: "Cute. My punches break the ground.", id: "Imut. Pukulanku memecahkan tanah." },
  },
  "subaru:kaneki": {
    a: { en: "You died too?! High five, ghoul bro!", id: "Kamu mati juga?! Toz dulu, bro ghoul!" },
    b: { en: "Dying isn't a handshake event...", id: "Mati bukan acara jabat tangan..." },
  },
  "luffy:asuna": {
    a: { en: "You look strong! Join my crew! You can cook!", id: "Kamu kuat! Gabung kruku! Kamu bisa masak!" },
    b: { en: "I cook for ONE person. And he's not you.", id: "Aku masak untuk SATU orang. Bukan kamu." },
  },
};

export const GENERAL: Record<string, { en: string; id: string }> = {
  naruto: { en: "Believe it! I won't lose!", id: "Dattebayo! Aku nggak bakal kalah!" },
  sasuke: { en: "Don't get in my way.", id: "Jangan halangi jalanku." },
  sakura: { en: "SHANNAROOOO!!", id: "SHANNAROOOO!!" },
  luffy: { en: "I'm gonna be King of the Pirates!", id: "Aku akan jadi Raja Bajak Laut!" },
  kaneki: { en: "This world is what's wrong...", id: "Yang salah adalah dunia ini..." },
  saitama: { en: "Just a hero for fun.", id: "Cuma pahlawan hobi aja." },
  subaru: { en: "Return by Death... not again!", id: "Kembali dengan Kematian... jangan lagi!" },
  kirito: { en: "The death game starts now.", id: "Permainan mematikan dimulai sekarang." },
  asuna: { en: "Stay behind me, I'll take point!", id: "Di belakangku, aku yang di depan!" },
};

export function getDialogue(idA: string, idB: string, locale: "en" | "id") {
  const key1 = `${idA}:${idB}`;
  const key2 = `${idB}:${idA}`;
  if (MATCHUPS[key1]) return { textA: MATCHUPS[key1].a[locale], textB: MATCHUPS[key1].b[locale] };
  if (MATCHUPS[key2]) return { textA: MATCHUPS[key2].b[locale], textB: MATCHUPS[key2].a[locale] };
  return {
    textA: GENERAL[idA]?.[locale] ?? "Hmph!",
    textB: GENERAL[idB]?.[locale] ?? "Bring it!",
  };
}
