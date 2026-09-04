// ==========================================================================
// PIXEL PALS ART — 12 anime characters, hand-drawn as pixel homage.
// All drawn facing RIGHT; flipping is handled at blit time.
// Canvas art grid: 18 wide x 26 tall (feet rest at row FEET_Y = 23).
// ==========================================================================

export const ART_W = 18;
export const ART_H = 26;
export const FEET_Y = 23;
export const HAND_Y = 0.5;

const off = document.createElement("canvas");
off.width = ART_W;
off.height = ART_H;
const octx = off.getContext("2d")!;
const R = (c: string, x: number, y: number, w = 1, h = 1) => {
  octx.fillStyle = c;
  octx.fillRect(Math.round(x), Math.round(y), w, h);
};

// ---------- shared legs (tight stride, feet stay on the ground line) ----------
function legsWalk(pants: string, shoe: string, f: number, bob: number, ox = 0) {
  const fr = f % 4;
  const yy = 18 + bob;
  let frontUp = 0;
  let backUp = 0;
  if (fr === 0 || fr === 1) frontUp = 1; // front foot steps
  if (fr === 2 || fr === 3) backUp = 1; // back foot steps
  R(pants, 7 + ox, yy - frontUp, 2, 3);
  R(shoe, 7 + ox, yy + 3 - frontUp, 2, 2);
  R(pants, 9 + ox, yy - backUp, 2, 3);
  R(shoe, 9 + ox, yy + 3 - backUp, 2, 2);
}
function legsIdle(pants: string, shoe: string, ox = 0) {
  R(pants, 7 + ox, 18, 2, 3); R(shoe, 7 + ox, 21, 2, 2);
  R(pants, 9 + ox, 18, 2, 3); R(shoe, 9 + ox, 21, 2, 2);
}
function legsWall(pants: string, shoe: string, ox = 0) {
  R(pants, 9 + ox, 19, 3, 2); R(pants, 11 + ox, 21, 3, 2);
  R(shoe, 14 + ox, 22, 2, 2);
  R(pants, 8 + ox, 20, 2, 2); R(shoe, 12 + ox, 23, 2, 2);
}
function legsHang(pants: string, shoe: string, f: number, ox = 0) {
  if (f % 2 === 0) {
    R(pants, 8 + ox, 20, 2, 3); R(shoe, 8 + ox, 23, 2, 2);
    R(pants, 11 + ox, 19, 2, 2); R(shoe, 11 + ox, 21, 2, 2);
  } else {
    R(pants, 8 + ox, 19, 2, 2); R(shoe, 8 + ox, 21, 2, 2);
    R(pants, 11 + ox, 20, 2, 3); R(shoe, 11 + ox, 23, 2, 2);
  }
}

// ---------- shared wall-climb (upright against wall, arms gripping, feet braced) ----------
function wallClimb(sleeve: string, hand: string, pants: string, shoe: string, frame: number) {
  const f = frame % 2;
  // both arms raised, gripping the wall
  R(sleeve, 10, 12, 2, 3);
  R(hand, 12, 10 + f * 2, 2, 2);
  R(sleeve, 12, 14, 2, 2);
  R(hand, 13, 15 + f, 2, 1);
  // legs: front bent with foot braced on wall, back leg hanging
  if (f === 0) {
    R(pants, 9, 17, 2, 2); R(shoe, 11, 18, 2, 2);
    R(pants, 7, 19, 2, 2); R(shoe, 7, 21, 2, 2);
  } else {
    R(pants, 9, 18, 2, 2); R(shoe, 11, 19, 2, 2);
    R(pants, 7, 20, 2, 2); R(shoe, 7, 22, 2, 2);
  }
}

// =======================================================================
// NARUTO
// =======================================================================
function narutoHead(bob: number) {
  const y = 4 + bob;
  R("#c9a01c", 4, y + 1, 2, 6);
  R("#f2c230", 5, y, 7, 2);
  R("#f2c230", 6, y - 1, 1, 1); R("#f2c230", 8, y - 1, 1, 1); R("#f2c230", 10, y - 1, 1, 1); R("#f2c230", 12, y, 1, 2);
  R("#2f3f78", 4, y + 2, 8, 1);
  R("#c3cad6", 9, y + 2, 3, 1);
  R("#2f3f78", 2, y + 3, 2, 1); R("#2f3f78", 1, y + 4, 1, 2);
  R("#f6c89a", 7, y + 3, 5, 4);
  R("#f2c230", 7, y + 3, 2, 1);
  R("#26221e", 10, y + 4, 1, 1);
  R("#dba276", 8, y + 5, 2, 1); R("#dba276", 9, y + 6, 2, 1);
  R("#f6c89a", 8, y + 7, 3, 1);
}
function narutoTorso(bob: number) {
  const y = 12 + bob;
  R("#c25f0a", 5, y + 1, 1, 5);
  R("#f07f13", 6, y, 4, 1);
  R("#f07f13", 5, y + 1, 6, 5);
  R("#f2efe6", 6, y, 4, 1);
  R("#f2efe6", 10, y + 1, 1, 5);
}
const drawNaruto = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#f6c89a", 3, 0, 2, 1); R("#f6c89a", 13, 0, 2, 1);
    R("#f07f13", 3, 1, 2, 7); R("#f07f13", 13, 1, 2, 7);
    narutoHead(3); narutoTorso(3); legsHang("#e8700e", "#3b63c4", frame);
    return;
  }
  if (pose === "wall") {
    narutoHead(0);
    narutoTorso(0);
    wallClimb("#f07f13", "#f6c89a", "#e8700e", "#3b63c4", frame);
    return;
  }
  narutoHead(bob); narutoTorso(bob);
  if (pose === "battle") {
    R("#f07f13", 9, 14 + bob, 3, 2); R("#f6c89a", 12, 14 + bob, 2, 2);
    R(frame % 2 === 0 ? "#38bdf8" : "#0284c7", 13, 12 + bob, 3, 3);
    R("#f8fafc", 14, 13 + bob, 1, 1);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#f07f13", 10, 15 + bob, 2, 2); R("#f6c89a", 11, 17 + bob, 2, 1); }
    else { R("#c25f0a", 6, 15 + bob, 2, 2); R("#dba276", 5, 17 + bob, 2, 1); }
  } else {
    R("#f07f13", 9, 14 + bob, 2, 3); R("#f6c89a", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#e8700e", "#3b63c4", frame, bob);
  else legsIdle("#e8700e", "#3b63c4");
};

// =======================================================================
// SASUKE
// =======================================================================
function sasukeHead(bob: number) {
  const y = 4 + bob;
  R("#0f172a", 2, y + 1, 2, 2); R("#0f172a", 1, y + 2, 2, 3);
  R("#1e293b", 3, y, 9, 2);
  R("#0f172a", 4, y - 1, 2, 1); R("#0f172a", 7, y - 1, 2, 1); R("#0f172a", 10, y - 1, 2, 1);
  R("#2f3f78", 4, y + 2, 8, 1);
  R("#c3cad6", 9, y + 2, 3, 1);
  R("#fef3c7", 6, y + 3, 6, 4);
  R("#0f172a", 7, y + 3, 2, 3); R("#0f172a", 11, y + 3, 1, 4);
  R("#ef4444", 10, y + 4, 1, 1);
  R("#fef3c7", 8, y + 7, 3, 1);
}
function sasukeTorso(bob: number) {
  const y = 12 + bob;
  R("#172554", 5, y + 1, 1, 5);
  R("#1e3a8a", 4, y, 2, 2); R("#1e3a8a", 9, y, 2, 2);
  R("#253a6e", 5, y + 1, 6, 5);
}
const drawSasuke = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#fef3c7", 3, 0, 2, 1); R("#fef3c7", 13, 0, 2, 1);
    R("#253a6e", 3, 1, 2, 7); R("#253a6e", 13, 1, 2, 7);
    sasukeHead(3); sasukeTorso(3); legsHang("#f1f5f9", "#0f172a", frame);
    return;
  }
  if (pose === "wall") {
    sasukeHead(0);
    sasukeTorso(0);
    wallClimb("#253a6e", "#fef3c7", "#f1f5f9", "#0f172a", frame);
    return;
  }
  sasukeHead(bob); sasukeTorso(bob);
  if (pose === "battle") {
    R("#253a6e", 9, 14 + bob, 3, 2); R("#fef3c7", 12, 15 + bob, 2, 2);
    const c = frame % 2 === 0 ? "#67e8f9" : "#a5f3fc";
    R(c, 13, 14 + bob, 3, 1); R(c, 12, 16 + bob, 1, 3);
    R("#ffffff", 14, 15 + bob, 2, 2);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#253a6e", 10, 15 + bob, 2, 2); R("#e2e8f0", 11, 17 + bob, 2, 1); }
    else { R("#172554", 6, 15 + bob, 2, 2); R("#cbd5e1", 5, 17 + bob, 2, 1); }
  } else {
    R("#253a6e", 9, 14 + bob, 2, 3); R("#e2e8f0", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#f1f5f9", "#0f172a", frame, bob);
  else legsIdle("#f1f5f9", "#0f172a");
};

// =======================================================================
// SAKURA
// =======================================================================
function sakuraHead(bob: number) {
  const y = 4 + bob;
  R("#db2777", 4, y + 1, 2, 6);
  R("#f472b6", 5, y, 7, 2);
  R("#f472b6", 6, y - 1, 2, 1); R("#f472b6", 9, y - 1, 2, 1);
  R("#dc2626", 5, y + 2, 7, 1);
  R("#fef3c7", 7, y + 3, 5, 4);
  R("#f472b6", 6, y + 3, 2, 3);
  R("#10b981", 10, y + 4, 1, 1);
  R("#fef3c7", 8, y + 7, 3, 1);
}
function sakuraTorso(bob: number) {
  const y = 12 + bob;
  R("#991b1b", 5, y + 1, 1, 5);
  R("#dc2626", 5, y + 1, 6, 4);
  R("#f8fafc", 8, y + 2, 2, 2);
  R("#ec4899", 5, y + 5, 6, 1);
}
const drawSakura = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#fef3c7", 3, 0, 2, 1); R("#fef3c7", 13, 0, 2, 1);
    R("#dc2626", 3, 1, 2, 7); R("#dc2626", 13, 1, 2, 7);
    sakuraHead(3); sakuraTorso(3); legsHang("#1e293b", "#1e3a8a", frame);
    return;
  }
  if (pose === "wall") {
    sakuraHead(0);
    sakuraTorso(0);
    wallClimb("#dc2626", "#fef3c7", "#1e293b", "#1e3a8a", frame);
    return;
  }
  sakuraHead(bob); sakuraTorso(bob);
  if (pose === "battle") {
    R("#dc2626", 9, 14 + bob, 3, 2); R("#fef3c7", 12, 15 + bob, 2, 2);
    R(frame % 2 === 0 ? "#86efac" : "#4ade80", 14, 14 + bob, 2, 3);
    R(frame % 2 === 0 ? "#86efac" : "#4ade80", 13, 17 + bob, 3, 1);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#dc2626", 9, 15 + bob, 2, 2); R("#fef3c7", 10, 17 + bob, 2, 1); }
    else { R("#991b1b", 7, 15 + bob, 2, 2); R("#fde68a", 6, 17 + bob, 2, 1); }
  } else {
    R("#dc2626", 9, 14 + bob, 2, 3); R("#fef3c7", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#1e293b", "#1e3a8a", frame, bob);
  else legsIdle("#1e293b", "#1e3a8a");
};

// =======================================================================
// LUFFY
// =======================================================================
function luffyHead(bob: number) {
  const y = 4 + bob;
  R("#facc15", 5, y - 3, 8, 2); R("#ca8a04", 6, y - 4, 6, 1);
  R("#facc15", 2, y - 1, 14, 1); R("#ca8a04", 1, y - 1, 1, 1); R("#ca8a04", 16, y - 1, 1, 1);
  R("#dc2626", 4, y, 10, 1);
  R("#0f172a", 3, y + 1, 3, 3); R("#0f172a", 12, y + 1, 2, 2);
  R("#fed7aa", 6, y + 1, 6, 6);
  R("#0f172a", 10, y + 3, 1, 1);
  R("#78350f", 10, y + 5, 1, 2); R("#78350f", 9, y + 5, 2, 1);
  R("#ffffff", 8, y + 6, 3, 1); R("#18181b", 8, y + 6, 1, 1);
}
function luffyTorso(bob: number) {
  const y = 12 + bob;
  R("#b91c1c", 5, y + 1, 1, 5);
  R("#dc2626", 6, y + 1, 2, 5);
  R("#fed7aa", 8, y + 1, 2, 4);
  R("#dc2626", 10, y + 1, 1, 4);
  R("#eab308", 5, y + 5, 6, 1);
}
const drawLuffy = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#fed7aa", 3, 0, 2, 1); R("#fed7aa", 13, 0, 2, 1);
    R("#fed7aa", 3, 1, 2, 7); R("#fed7aa", 13, 1, 2, 7);
    luffyHead(3); luffyTorso(3); legsHang("#2563eb", "#78350f", frame);
    return;
  }
  if (pose === "wall") {
    luffyHead(0);
    luffyTorso(0);
    wallClimb("#fed7aa", "#fed7aa", "#2563eb", "#78350f", frame);
    return;
  }
  luffyHead(bob); luffyTorso(bob);
  if (pose === "battle") {
    R("#dc2626", 9, 14 + bob, 2, 2);
    R("#fed7aa", 11, 14 + bob, frame % 2 === 0 ? 5 : 6, 2);
    R("#fed7aa", frame % 2 === 0 ? 15 : 16, 13 + bob, 2, 3);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#fed7aa", 10, 15 + bob, 2, 2); R("#fed7aa", 11, 17 + bob, 2, 1); }
    else { R("#fba872", 6, 15 + bob, 2, 2); R("#fba872", 5, 17 + bob, 2, 1); }
  } else {
    R("#fed7aa", 9, 14 + bob, 2, 3); R("#fed7aa", 9, 17 + bob, 2, 1);
  }
  legsWalk("#2563eb", "#78350f", frame, bob);
  R("#f8fafc", 8, 21, 2, 1); R("#f8fafc", 10, 21, 2, 1);
};

// =======================================================================
// KANEKI
// =======================================================================
function kanekiHead(bob: number) {
  const y = 4 + bob;
  R("#94a3b8", 4, y + 1, 2, 6);
  R("#f8fafc", 5, y, 7, 2);
  R("#f8fafc", 5, y - 1, 2, 1); R("#f8fafc", 8, y - 1, 2, 1); R("#f8fafc", 11, y, 2, 2);
  R("#f1f5f9", 7, y + 3, 5, 4);
  R("#f8fafc", 7, y + 2, 3, 2);
  R("#09090b", 4, y + 2, 4, 6);
  R("#09090b", 7, y + 5, 5, 2);
  R("#cbd5e1", 8, y + 6, 3, 1); R("#09090b", 9, y + 6, 1, 1);
  R("#09090b", 10, y + 4, 2, 2); R("#ef4444", 10, y + 4, 1, 1);
}
function kanekiTorso(bob: number) {
  const y = 12 + bob;
  R("#09090b", 5, y, 6, 6);
  R("#18181b", 6, y + 1, 5, 5);
  R("#334155", 8, y + 2, 1, 3);
}
function kagune(bob: number, frame: number, active: boolean) {
  const sway = frame % 2 === 0 ? 0 : 1;
  const len = active ? 2 : 0;
  R("#dc2626", 3 - sway, 12 + bob, 2, 2);
  R("#991b1b", 1 - sway, 10 + bob - len, 2, 3);
  R("#ef4444", 0 - sway, 8 + bob - len, 2, 2);
  R("#dc2626", 3, 16 + bob, 2, 2);
  R("#991b1b", 1 + sway, 17 + bob + len, 2, 3);
  R("#ef4444", 0 + sway, 19 + bob + len, 2, 2);
}
const drawKaneki = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  kagune(bob, frame, pose === "battle");
  if (pose === "hang" || pose === "held") {
    R("#f1f5f9", 3, 0, 2, 1); R("#f1f5f9", 13, 0, 2, 1);
    R("#18181b", 3, 1, 2, 7); R("#18181b", 13, 1, 2, 7);
    kanekiHead(3); kanekiTorso(3); legsHang("#18181b", "#09090b", frame);
    return;
  }
  if (pose === "wall") {
    kanekiHead(0);
    kanekiTorso(0);
    wallClimb("#18181b", "#f1f5f9", "#18181b", "#09090b", frame);
    return;
  }
  kanekiHead(bob); kanekiTorso(bob);
  if (pose === "battle") {
    R("#18181b", 9, 14 + bob, 2, 2);
    R("#f1f5f9", 11, 12 + bob, 2, 2);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#18181b", 10, 15 + bob, 2, 2); R("#f1f5f9", 11, 17 + bob, 2, 1); }
    else { R("#09090b", 6, 15 + bob, 2, 2); R("#94a3b8", 5, 17 + bob, 2, 1); }
  } else {
    R("#18181b", 9, 14 + bob, 2, 3); R("#f1f5f9", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#18181b", "#09090b", frame, bob);
  else legsIdle("#18181b", "#09090b");
};

// =======================================================================
// SAITAMA
// =======================================================================
function saitamaHead(bob: number) {
  const y = 4 + bob;
  R("#fed7aa", 5, y, 7, 7);
  R("#fed7aa", 6, y - 1, 5, 1);
  R("#ffffff", 7, y, 2, 1); R("#fef08a", 9, y + 1, 1, 1);
  R("#1c1917", 10, y + 3, 1, 1);
  R("#1c1917", 9, y + 5, 2, 1);
}
function saitamaTorso(bob: number) {
  const y = 12 + bob;
  R("#ca8a04", 5, y + 1, 1, 5);
  R("#eab308", 5, y + 1, 6, 5);
  R("#f8fafc", 8, y, 1, 5);
  R("#18181b", 5, y + 5, 6, 1);
  R("#fbbf24", 8, y + 5, 1, 1);
}
function saitamaCape(bob: number, frame: number, battle: boolean) {
  const wave = frame % 2 === 0 ? 0 : 1;
  const stretch = battle ? 2 : 0;
  R("#f8fafc", 3 - wave - stretch, 13 + bob, 2 + stretch, 8);
  R("#cbd5e1", 2 - wave - stretch, 15 + bob, 1 + stretch, 7);
}
const drawSaitama = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  saitamaCape(bob, frame, pose === "battle");
  if (pose === "hang" || pose === "held") {
    R("#dc2626", 3, 0, 2, 1); R("#dc2626", 13, 0, 2, 1);
    R("#eab308", 3, 1, 2, 7); R("#eab308", 13, 1, 2, 7);
    saitamaHead(3); saitamaTorso(3); legsHang("#eab308", "#b91c1c", frame);
    return;
  }
  if (pose === "wall") {
    saitamaHead(0);
    saitamaTorso(0);
    wallClimb("#dc2626", "#dc2626", "#eab308", "#b91c1c", frame);
    return;
  }
  saitamaHead(bob); saitamaTorso(bob);
  if (pose === "battle") {
    R("#eab308", 9, 14 + bob, 3, 2);
    R("#dc2626", 12, 13 + bob, 3, 3);
    R(frame % 2 === 0 ? "#f8fafc" : "#cbd5e1", 15, 12 + bob, 1, 5);
    R(frame % 2 === 0 ? "#f8fafc" : "#cbd5e1", 16, 11 + bob, 1, 7);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#eab308", 10, 15 + bob, 2, 2); R("#dc2626", 11, 17 + bob, 2, 1); }
    else { R("#ca8a04", 6, 15 + bob, 2, 2); R("#991b1b", 5, 17 + bob, 2, 1); }
  } else {
    R("#eab308", 9, 14 + bob, 2, 3); R("#dc2626", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#eab308", "#b91c1c", frame, bob);
  else legsIdle("#eab308", "#b91c1c");
};

// =======================================================================
// SUBARU
// =======================================================================
function subaruHead(bob: number) {
  const y = 4 + bob;
  R("#1e293b", 4, y + 1, 2, 6);
  R("#0f172a", 5, y, 7, 2);
  R("#0f172a", 6, y - 1, 2, 1); R("#0f172a", 9, y - 1, 2, 1);
  R("#fcd7b0", 7, y + 3, 5, 4);
  R("#0f172a", 7, y + 3, 3, 2);
  R("#26221e", 10, y + 4, 1, 1);
  R("#fcd7b0", 8, y + 7, 3, 1);
}
function subaruTorso(bob: number) {
  const y = 12 + bob;
  R("#64748b", 5, y + 1, 1, 5);
  R("#94a3b8", 5, y + 1, 6, 4);
  R("#f97316", 6, y, 5, 1);
  R("#f97316", 5, y + 3, 6, 1);
  R("#334155", 5, y + 5, 6, 1);
}
const drawSubaru = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#fcd7b0", 3, 0, 2, 1); R("#fcd7b0", 13, 0, 2, 1);
    R("#94a3b8", 3, 1, 2, 7); R("#94a3b8", 13, 1, 2, 7);
    subaruHead(3); subaruTorso(3); legsHang("#334155", "#18181b", frame);
    return;
  }
  if (pose === "wall") {
    subaruHead(0);
    subaruTorso(0);
    wallClimb("#94a3b8", "#fcd7b0", "#334155", "#18181b", frame);
    return;
  }
  subaruHead(bob); subaruTorso(bob);
  if (pose === "battle") {
    R("#94a3b8", 9, 14 + bob, 3, 2);
    R("#4c1d95", 12, 12 + bob, 3, 4);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#94a3b8", 10, 15 + bob, 2, 2); R("#fcd7b0", 11, 17 + bob, 2, 1); }
    else { R("#475569", 6, 15 + bob, 2, 2); R("#fcd7b0", 5, 17 + bob, 2, 1); }
  } else {
    R("#94a3b8", 9, 14 + bob, 2, 3); R("#fcd7b0", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#334155", "#18181b", frame, bob);
  else legsIdle("#334155", "#18181b");
};

// =======================================================================
// KIRITO
// =======================================================================
function kiritoHead(bob: number) {
  const y = 4 + bob;
  R("#0f172a", 4, y + 1, 2, 6);
  R("#1e293b", 5, y, 7, 2);
  R("#0f172a", 5, y - 1, 2, 1); R("#0f172a", 8, y - 1, 2, 1); R("#0f172a", 11, y - 1, 1, 1);
  R("#fcd7b0", 7, y + 3, 5, 4);
  R("#0f172a", 7, y + 3, 3, 2);
  R("#26221e", 10, y + 4, 1, 1);
  R("#fcd7b0", 8, y + 7, 3, 1);
}
function kiritoTorso(bob: number) {
  const y = 12 + bob;
  R("#0b0f19", 4, y + 1, 2, 8);
  R("#0b0f19", 5, y, 6, 6);
  R("#94a3b8", 5, y + 1, 1, 5);
  R("#cbd5e1", 10, y + 1, 1, 5);
}
const drawKirito = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#fcd7b0", 3, 0, 2, 1); R("#fcd7b0", 13, 0, 2, 1);
    R("#0b0f19", 3, 1, 2, 7); R("#0b0f19", 13, 1, 2, 7);
    kiritoHead(3); kiritoTorso(3); legsHang("#1e293b", "#0b0f19", frame);
    return;
  }
  if (pose === "wall") {
    kiritoHead(0);
    kiritoTorso(0);
    wallClimb("#0b0f19", "#fcd7b0", "#1e293b", "#0b0f19", frame);
    return;
  }
  kiritoHead(bob); kiritoTorso(bob);
  if (pose === "battle") {
    R("#cbd5e1", 12, 12 + bob, 1, 5); R("#22d3ee", 12, 12 + bob, 1, 1);
    R("#cbd5e1", 14, 14 + bob, 4, 1); R("#22d3ee", 16, 14 + bob, 1, 1);
    R("#0b0f19", 9, 14 + bob, 2, 2);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#0b0f19", 10, 15 + bob, 2, 2); R("#fcd7b0", 11, 17 + bob, 2, 1); }
    else { R("#020617", 6, 15 + bob, 2, 2); R("#94a3b8", 5, 17 + bob, 2, 1); }
  } else {
    R("#0b0f19", 9, 14 + bob, 2, 3); R("#fcd7b0", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#1e293b", "#0b0f19", frame, bob);
  else legsIdle("#1e293b", "#0b0f19");
};

// =======================================================================
// ASUNA
// =======================================================================
function asunaHead(bob: number) {
  const y = 4 + bob;
  R("#b45309", 3, y + 1, 3, 12);
  R("#d97706", 4, y + 1, 2, 11);
  R("#d97706", 5, y, 7, 2);
  R("#d97706", 6, y - 1, 2, 1); R("#d97706", 9, y - 1, 2, 1);
  R("#fef3c7", 7, y + 3, 5, 4);
  R("#d97706", 7, y + 3, 2, 2);
  R("#26221e", 10, y + 4, 1, 1);
  R("#fef3c7", 8, y + 7, 3, 1);
}
function asunaTorso(bob: number) {
  const y = 12 + bob;
  R("#f8fafc", 5, y, 6, 3);
  R("#dc2626", 8, y + 1, 2, 1);
  R("#dc2626", 5, y + 3, 6, 3);
}
const drawAsuna = (pose: string, frame: number) => {
  const bob = pose === "walk" && frame % 2 === 1 ? -1 : pose === "idle" && frame % 2 === 1 ? 1 : 0;
  if (pose === "hang" || pose === "held") {
    R("#fef3c7", 3, 0, 2, 1); R("#fef3c7", 13, 0, 2, 1);
    R("#f8fafc", 3, 1, 2, 7); R("#f8fafc", 13, 1, 2, 7);
    asunaHead(3); asunaTorso(3); legsHang("#f8fafc", "#b45309", frame);
    return;
  }
  if (pose === "wall") {
    asunaHead(0);
    asunaTorso(0);
    wallClimb("#f8fafc", "#fef3c7", "#f8fafc", "#b45309", frame);
    return;
  }
  asunaHead(bob); asunaTorso(bob);
  if (pose === "battle") {
    R("#f8fafc", 9, 14 + bob, 2, 2);
    R("#fbbf24", 11, 13 + bob, 5, 1); R("#fef08a", 15, 12 + bob, 2, 2);
  } else if (pose === "walk") {
    if (frame % 2 === 0) { R("#f8fafc", 10, 15 + bob, 2, 2); R("#fef3c7", 11, 17 + bob, 2, 1); }
    else { R("#e2e8f0", 6, 15 + bob, 2, 2); R("#d97706", 5, 17 + bob, 2, 1); }
  } else {
    R("#f8fafc", 9, 14 + bob, 2, 3); R("#fef3c7", 9, 17 + bob, 2, 1);
  }
  if (pose === "walk") legsWalk("#f8fafc", "#b45309", frame, bob);
  else legsIdle("#f8fafc", "#b45309");
};

// =======================================================================
// ROSTER
// =======================================================================
export interface CharacterDef {
  id: string;
  name: string;
  title: string;
  speed: number;
  startXFrac: number;
  startDir: 1 | -1;
  draw: (pose: string, frame: number) => void;
}

export const CHARACTERS: CharacterDef[] = [
  { id: "naruto", name: "Naruto", title: "Uzumaki Naruto", speed: 34, startXFrac: 0.03, startDir: 1, draw: drawNaruto },
  { id: "sasuke", name: "Sasuke", title: "Uchiha Sasuke", speed: 30, startXFrac: 0.12, startDir: -1, draw: drawSasuke },
  { id: "sakura", name: "Sakura", title: "Haruno Sakura", speed: 32, startXFrac: 0.2, startDir: 1, draw: drawSakura },
  { id: "luffy", name: "Luffy", title: "Monkey D. Luffy", speed: 36, startXFrac: 0.29, startDir: -1, draw: drawLuffy },
  { id: "kaneki", name: "Kaneki", title: "Kaneki Ken (Ghoul)", speed: 28, startXFrac: 0.53, startDir: 1, draw: drawKaneki },
  { id: "saitama", name: "Saitama", title: "One Punch Man", speed: 25, startXFrac: 0.6, startDir: -1, draw: drawSaitama },
  { id: "subaru", name: "Subaru", title: "Natsuki Subaru", speed: 31, startXFrac: 0.67, startDir: 1, draw: drawSubaru },
  { id: "kirito", name: "Kirito", title: "The Black Swordsman", speed: 33, startXFrac: 0.88, startDir: -1, draw: drawKirito },
  { id: "asuna", name: "Asuna", title: "The Flash", speed: 35, startXFrac: 0.93, startDir: 1, draw: drawAsuna },
];

// =======================================================================
// FRAME RENDERER with ink outline pass
// =======================================================================
export function renderFrame(
  cv: HTMLCanvasElement,
  def: CharacterDef,
  pose: string,
  frame: number,
  flip: boolean
) {
  octx.clearRect(0, 0, ART_W, ART_H);
  def.draw(pose, frame);

  const img = octx.getImageData(0, 0, ART_W, ART_H);
  const d = img.data;
  const solid = (px: number, py: number) =>
    px >= 0 && py >= 0 && px < ART_W && py < ART_H && d[(py * ART_W + px) * 4 + 3] > 0;
  const marks: number[] = [];
  for (let py = 0; py < ART_H; py++) {
    for (let px = 0; px < ART_W; px++) {
      const i = (py * ART_W + px) * 4;
      if (d[i + 3] === 0 && (solid(px - 1, py) || solid(px + 1, py) || solid(px, py - 1) || solid(px, py + 1))) marks.push(i);
    }
  }
  for (const i of marks) {
    d[i] = 0x26; d[i + 1] = 0x22; d[i + 2] = 0x1e; d[i + 3] = 255;
  }
  octx.putImageData(img, 0, 0);

  const ctx = cv.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  if (flip) {
    ctx.scale(-1, 1);
    ctx.drawImage(off, -cv.width, 0, cv.width, cv.height);
  } else {
    ctx.drawImage(off, 0, 0, cv.width, cv.height);
  }
  ctx.restore();
}
