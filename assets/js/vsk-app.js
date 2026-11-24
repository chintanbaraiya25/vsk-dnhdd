/* VSK DNH&DD application. Content: window.VSK_CONTENT (Appearance > VSK Content). */
(function(){
'use strict';
const C = window.VSK_CONTENT || {};
const SOURCES = C.SOURCES;
const UT = C.UT;
const MILESTONES = C.MILESTONES;
const PILLARS = C.PILLARS;
const PILLAR_CLASS = C.PILLAR_CLASS;
const AUDIENCES = C.AUDIENCES;
const RVSK = C.RVSK;
const DASHBOARDS = C.DASHBOARDS;
const ATT = C.ATT;
const RRSA = C.RRSA;
const PGI = C.PGI;
const PRODUCTS = C.PRODUCTS;
const PHASES = C.PHASES;
const TIMELINE = C.TIMELINE;
const GALLERY = C.GALLERY;
const GAL_CATS = C.GAL_CATS;
const HIGHLIGHTS = C.HIGHLIGHTS;
const GUIDES = C.GUIDES;
const RESOURCES = C.RESOURCES;
const STORIES = C.STORIES;
const FAQS = C.FAQS;
const ASSETS = {img:(window.VSK_ASSETS||{}).img||{}, qr:(window.VSK_ASSETS||{}).qr||{}, map:window.VSK_MAP};
const VT = window.VSK_THEME || {home:'/', pretty:false, route:''};
/* ===================== helpers ===================== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const P = Object.fromEntries(PRODUCTS.map(p => [p.slug, p]));
const IC = {
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
 menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
 chev:'<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
 play:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M7 5v14l12-7z"/></svg>',
 pause:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
 replay:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
 moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>',
 ext:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
};
function imgSrc(key){ const a = ASSETS.img[key]; return a ? a.src : (/^(https?:)?\/\//.test(key||"") || /^\//.test(key||"") ? key : ""); }
function img(key, alt, cls="", lazy=true){
  const a = ASSETS.img[key];
  if(!a){ const u = imgSrc(key); return u ? `<img src="${esc(u)}" alt="${esc(alt)}" class="${cls}" ${lazy?'loading="lazy" decoding="async"':""}>` : ""; }
  return `<img src="${a.src}" width="${a.w}" height="${a.h}" alt="${esc(alt)}" class="${cls}" ${lazy?'loading="lazy" decoding="async"':""}>`;
}
const toneCls = t => ({live:"b-live",partial:"b-partial",store:"b-store",idle:"b-idle"}[t]||"b-idle");
const badge = s => `<span class="badge ${toneCls(s.tone)}">${esc(s.label)}</span>`;
const pills = arr => arr.map(x => `<span class="pill ${PILLAR_CLASS[x]||""}">${esc(x)}</span>`).join("");
const kindLabel = p => p.kind==="ut" ? "UT chatbot" : p.kind==="generic" ? "SwiftChat Bot Store" : p.type;
const srcLabel = k => SOURCES[k] ? SOURCES[k].t : k;
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove("show"),2600); }

/* ===================== shell ===================== */
const NAV = [["home","Home"],["about","About VSK"],["products","Products & Chatbots"],["journey","Journey & Achievements"],["resources","Resources & Media"],["contact","Contact"]];
function shell(){
  document.body.insertAdjacentHTML("afterbegin", `
  <a class="skip" href="#home" id="skiplink">Skip to content</a>
  <header class="top"><div class="wrap">
    <a class="brand" href="#home" aria-label="VSK DNH&DD home">${img("utlogo","UT of Dadra and Nagar Haveli and Daman and Diu emblem","",false)}<div><b>VSK DNH&amp;DD</b><span>Vidya Samiksha Kendra · Samagra Shiksha</span></div></a>
    <nav class="nav" id="nav" aria-label="Main">${NAV.map(([h,l])=>`<a href="#${h}" data-r="${h}">${l}</a>`).join("")}</nav>
    <button class="iconbtn search-btn" id="searchBtn" aria-label="Search the site">${IC.search}<span class="lbl">Search</span><span class="kbd">/</span></button>
    <button class="iconbtn" id="themeBtn" aria-label="Switch light or dark theme">${IC.moon}</button>
    <button class="iconbtn menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="nav">${IC.menu}</button>
  </div></header>
  <main id="main" tabindex="-1"></main>
  <footer><div class="wrap">
    <div class="foot">
      <div><div class="brand-f">${img("utlogo","UT emblem")}<div><b style="color:var(--on-ink);font-family:var(--display);font-size:1.1rem">Vidya Samiksha Kendra</b><br>Department of Education, UT of Dadra and Nagar Haveli and Daman and Diu</div></div>
        <p>Shiksha Sadan, Moti Daman, Daman. Under Samagra Shiksha, Ministry of Education.</p>
        <p class="small">Technology partner and PMU: ConveGenius (SwiftChat and Power BI).</p></div>
      <div><h4>Explore</h4><ul>${NAV.map(([h,l])=>`<li><a href="#${h}">${l}</a></li>`).join("")}</ul></div>
      <div><h4>Key products</h4><ul>${["smart-attendance","pragati","mis","idp","crm-ivrs"].map(s=>`<li><a href="#product-${s}">${esc(P[s].name)}</a></li>`).join("")}</ul></div>
      <div><h4>Help</h4><ul><li><a href="#resources" data-jump="guides">User guides</a></li><li><a href="#resources" data-jump="faq">FAQs</a></li><li><a href="#resources" data-jump="sources">Sources and data notes</a></li><li><a href="#contact">Get support</a></li></ul></div>
    </div>
    <div class="foot-bot"><span>Figures show their reporting period. Dashboard screenshots are screenshots, not live views.</span><span>Content as of November 2026</span></div>
  </div></footer>
  <div class="lightbox" id="lb" role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="lb-top"><span id="lbCount" class="small"></span><div style="display:flex;gap:8px"><button id="lbPlay" aria-label="Play slideshow">${IC.play}</button><button id="lbClose" aria-label="Close viewer">Close</button></div></div>
    <div class="lb-main"><button id="lbPrev" aria-label="Previous image">‹</button><img id="lbImg" alt=""><button id="lbNext" aria-label="Next image">›</button></div>
    <p class="cap" id="lbCap"></p>
  </div>
  <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><div class="box"><button class="iconbtn x" id="modalClose" aria-label="Close">Close</button><div id="modalBody"></div></div></div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`);
}

/* ===================== map ===================== */
function mapSVG(id="hero", interactive=true){
  const M = ASSETS.map, H = M.H;
  const md = M.motidaman, sv = M.silvassa, du = M.diu;
  const len = (a,b) => Math.round(Math.hypot(a[0]-b[0], a[1]-b[1]) * 1.25);
  const t1 = `M${du[0]+8},${du[1]+6} C ${du[0]+200},${du[1]+250} ${md[0]-260},${md[1]+40} ${md[0]-8},${md[1]}`;
  const t2 = `M${sv[0]},${sv[1]} C ${sv[0]-20},${sv[1]-24} ${md[0]+30},${md[1]+20} ${md[0]+6},${md[1]+4}`;
  const ut = Object.entries(M.ut).map(([k,d]) => `<path class="map-ut" data-d="${k}" d="${d}" ${interactive?`tabindex="0" role="button" aria-label="${esc(UT.districts.find(x=>x.id===k).name)}"`:""}/>`).join("");
  return `<svg viewBox="0 25 1000 ${H-25}" role="img" aria-labelledby="${id}T" xmlns="http://www.w3.org/2000/svg">
  <title id="${id}T">Map of the UT of Dadra and Nagar Haveli and Daman and Diu: Diu on the Saurashtra coast, Daman and Dadra and Nagar Haveli on the south Gujarat coast, with the VSK at Moti Daman</title>
  <path class="map-land" d="${M.ctx}"/>
  ${ut}
  <path class="map-thread draw" style="--len:${len(du,md)+260}" d="${t1}"/>
  <path class="map-thread draw" style="--len:${len(sv,md)+60};animation-delay:.5s" d="${t2}"/>
  <text class="map-sea" x="330" y="330">Gulf of Khambhat</text>
  <text class="map-sea" x="440" y="440">Arabian Sea</text>
  <g><circle class="pulse" cx="${md[0]}" cy="${md[1]}" r="12"/><circle class="vsk-dot" cx="${md[0]}" cy="${md[1]}" r="7"/></g>
  <text class="map-label" x="${du[0]-70}" y="${du[1]+56}">Diu</text>
  <text class="map-sub" x="${du[0]-70}" y="${du[1]+80}">21 schools</text>
  <text class="map-label" x="${md[0]-190}" y="${md[1]-34}">Daman</text>
  <text class="map-sub" x="${md[0]-190}" y="${md[1]-10}">61 schools · VSK</text>
  <text class="map-label" x="${sv[0]-150}" y="${sv[1]+60}">DNH</text>
  <text class="map-sub" x="${sv[0]-150}" y="${sv[1]+84}">328 schools</text>
  </svg>`;
}
function mapBlock(id){
  return `<div class="mapbox" data-map="${id}">${mapSVG(id)}
  <div class="map-card" aria-live="polite" data-card><b>Four places, one UT</b>Dadra, Nagar Haveli, Daman and the island of Diu. 410 schools, one review centre at Moti Daman.</div>
  <div class="map-legend">${UT.districts.map(d=>`<button data-pick="${d.id}" aria-pressed="false">${esc(d.short)}</button>`).join("")}</div>
  </div>`;
}
function wireMap(root){
  $$("[data-map]", root).forEach(box => {
    const card = $("[data-card]", box);
    const pick = id => {
      const d = UT.districts.find(x=>x.id===id); if(!d) return;
      $$(".map-ut", box).forEach(p => p.classList.toggle("on", p.dataset.d===id));
      $$("[data-pick]", box).forEach(b => b.setAttribute("aria-pressed", b.dataset.pick===id));
      card.innerHTML = `<b>${esc(d.name)}</b>${d.schools} schools · ${d.enrol} students · PTR ${d.ptr}<br><span class="small">Area ${d.area}. NAS standing: ${esc(d.nas)}. PGI-D 2025-26: ${esc(d.pgid)}.</span>`;
    };
    $$(".map-ut", box).forEach(p => { p.addEventListener("click",()=>pick(p.dataset.d)); p.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();pick(p.dataset.d)}}); });
    $$("[data-pick]", box).forEach(b => b.addEventListener("click",()=>pick(b.dataset.pick)));
  });
}

/* ===================== phone demo ===================== */
function demoBlock(p, dark=false){
  if(!p.demo) return "";
  return `<div class="demo" data-demo="${p.slug}">
   <div>
     <ol class="demo-steps">${p.demo.map((s,i)=>`<li><button data-step="${i}"><span class="n">${i+1}</span><span>${esc(s.label)}</span></button></li>`).join("")}</ol>
     <div class="demo-ctl"><button class="btn btn-primary btn-s" data-act="play">${IC.play}<span>Play</span></button><button class="btn btn-line btn-s" data-act="replay">${IC.replay}<span>Replay</span></button></div>
     <p class="demo-note">Illustrative demonstration recreated from the documented flow. School codes, names and numbers are samples, not real records.</p>
   </div>
   <div class="phone" aria-label="${esc(p.name)} sample conversation"><div class="screen">
     <div class="bar"><span class="av">${esc(p.name[0])}</span><div><b>${esc(p.name.split(":")[0])}</b><small>SwiftChat · VSK DNH&amp;DD</small></div></div>
     <div class="chat" aria-live="polite"></div><div class="inp">Type a message</div></div></div>
  </div>`;
}
function wireDemos(root){
  $$("[data-demo]", root).forEach(el => {
    const p = P[el.dataset.demo]; const chat = $(".chat", el); const btns = $$("[data-step]", el);
    const playBtn = $('[data-act="play"]', el);
    let cur = -1, timer = null, playing = false;
    const msgHTML = m => m.file ? `<div class="msg bot file"><i></i><span>${esc(m.t)}<br><small>PDF</small></span></div>`
      : `<div class="msg ${m.f}">${esc(m.t)}${m.o?`<div class="opts">${m.o.map(o=>`<span>${esc(o)}</span>`).join("")}</div>`:""}</div>`;
    const renderTo = i => { chat.innerHTML = p.demo.slice(0,i+1).flatMap(s=>s.msgs).map(msgHTML).join(""); chat.scrollTop = chat.scrollHeight;
      btns.forEach((b,j)=> j===i ? b.setAttribute("aria-current","step") : b.removeAttribute("aria-current")); cur = i; };
    const setPlay = on => { playing = on; playBtn.innerHTML = on ? `${IC.pause}<span>Pause</span>` : `${IC.play}<span>Play</span>`; };
    const stepOn = () => {
      if(cur >= p.demo.length-1){ setPlay(false); return; }
      const next = cur+1;
      if(!RM){ chat.insertAdjacentHTML("beforeend",'<div class="typing"><i></i><i></i><i></i></div>'); chat.scrollTop = chat.scrollHeight; }
      timer = setTimeout(()=>{ renderTo(next); if(playing) timer = setTimeout(stepOn, 1700); }, RM?0:650);
    };
    playBtn.addEventListener("click",()=>{ if(playing){ clearTimeout(timer); setPlay(false); renderTo(Math.max(cur,0)); } else { if(cur>=p.demo.length-1) cur=-1, chat.innerHTML=""; setPlay(true); stepOn(); } });
    $('[data-act="replay"]', el).addEventListener("click",()=>{ clearTimeout(timer); cur=-1; chat.innerHTML=""; setPlay(true); stepOn(); });
    btns.forEach(b => b.addEventListener("click",()=>{ clearTimeout(timer); setPlay(false); renderTo(+b.dataset.step); }));
    renderTo(0);
  });
}

/* ===================== charts (inline SVG) ===================== */
function lineChart({labels, series, max=100, h=260, unit="%", sub}){
  const w = 640, pl=36, pr=16, pt=16, pb=sub?44:28, iw=w-pl-pr, ih=h-pt-pb;
  const x = i => pl + (labels.length===1?iw/2: i*iw/(labels.length-1)), y = v => pt + ih - v/max*ih;
  let g = "";
  for(let v=0; v<=max; v+=max/4){ g += `<line class="grid-l" x1="${pl}" x2="${w-pr}" y1="${y(v)}" y2="${y(v)}"/><text x="${pl-8}" y="${y(v)+4}" text-anchor="end">${v}</text>`; }
  labels.forEach((l,i)=>{ g += `<text x="${x(i)}" y="${h-pb+18}" text-anchor="middle">${esc(l)}</text>`; if(sub) g += `<text x="${x(i)}" y="${h-pb+34}" text-anchor="middle" style="font-size:10px">${esc(sub[i])}</text>`; });
  const lines = series.map(s => `<polyline fill="none" stroke="${s.c}" stroke-width="2.5" stroke-linejoin="round" points="${s.v.map((v,i)=>`${x(i)},${y(v)}`).join(" ")}"/>` + s.v.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="${s.c}"><title>${esc(s.n)}, ${esc(labels[i])}: ${v}${unit}</title></circle>`).join("")).join("");
  const legend = `<div class="legend">${series.map(s=>`<span><i style="background:${s.c}"></i>${esc(s.n)}</span>`).join("")}</div>`;
  const tbl = `<div class="sr"><table><caption>Data table</caption><tr><th>Period</th>${series.map(s=>`<th>${esc(s.n)}</th>`).join("")}</tr>${labels.map((l,i)=>`<tr><td>${esc(l)}</td>${series.map(s=>`<td>${s.v[i]}${unit}</td>`).join("")}</tr>`).join("")}</table></div>`;
  return `<div class="scroll-x"><svg class="chart" viewBox="0 0 ${w} ${h}" style="min-width:520px" role="img" aria-label="Line chart">${g}${lines}</svg></div>${legend}${tbl}`;
}
const attendanceChart = () => lineChart({labels:ATT.months, series:[
  {n:"Student marking submitted", v:ATT.studentMarking, c:"#b4532a"},
  {n:"Teacher marking submitted", v:ATT.teacherMarking, c:"#1e6e70"},
  {n:"Students present, of marked", v:ATT.studentPresent, c:"#d9a441"}]}) +
  `<p class="source">Smart Attendance dashboard, all managements, 2026. *September to 14 Sept. **October partial. Source: ${esc(srcLabel("nov26"))}.</p>`;
const rrsaChart = () => lineChart({labels:RRSA.labels, sub:RRSA.months, h:290, series:[
  {n:"Language: Story level", v:RRSA.story, c:"#b4532a"},
  {n:"Maths: Division level", v:RRSA.division, c:"#1e6e70"}]}) +
  `<p class="source">Share of students at the top level in each RRSA cycle (BL baseline, ML midline, EL endline; AY academic year). The drop each July is the summer slide between endline and the next baseline. Source: ${esc(srcLabel("jul26"))}.</p>`;
function pgiChart(){
  const w=640,h=220,pl=10,pr=10,pt=24,pb=30,bw=90,gap=(w-pl-pr-bw*4)/3, max=760,min=500;
  const y=v=>pt+(h-pt-pb)*(1-(v-min)/(max-min));
  const bars=PGI.score.map((v,i)=>{const x=pl+i*(bw+gap);return `<rect x="${x}" y="${y(v)}" width="${bw}" height="${h-pb-y(v)}" rx="6" fill="${i===3?"#b4532a":"#c9d6d4"}"/><text x="${x+bw/2}" y="${y(v)-8}" text-anchor="middle" style="font-weight:600;fill:var(--text)">${v}</text><text x="${x+bw/2}" y="${h-10}" text-anchor="middle">${PGI.years[i]}</text>`}).join("");
  return `<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="PGI score by year: ${PGI.years.map((yy,i)=>yy+" "+PGI.score[i]).join(", ")}">${bars}</svg><p class="source">PGI score of the UT; axis starts at 500. Source: ${esc(srcLabel("pgi"))}.</p>`;
}

/* ===================== shared blocks ===================== */
function pcard(p, feature=false){
  return `<a class="pcard ${feature?"feature":""}" href="#product-${p.slug}">
    <span class="kind">${esc(kindLabel(p))}</span>
    <h3>${esc(p.name)}</h3><p>${esc(p.tag)}</p>
    <div class="meta">${badge(p.status)}${pills(p.pillars)}</div></a>`;
}
function dashRow(d){
  const act = d.u ? `<a class="btn btn-line btn-s" href="${d.u}" target="_blank" rel="noopener">Open in Power BI ${IC.ext}</a>` : `<span class="pill">Internal monitoring</span>`;
  return `<div class="dash-row"><div><div class="t">${esc(d.n)}${d.review?' <span class="badge b-partial">In final review</span>':""}</div><div class="g">${esc(d.g)} · ${esc(d.area)}</div></div>${act}
   <details><summary>What it shows</summary><p style="margin:8px 0 0">${esc(d.k)}</p></details></div>`;
}
const MAP_LAYERS = [
 {t:"People and activity in school", s:"Teachers, Head Masters, students and parents doing the daily work of school.", b:"A class teacher takes attendance, a teacher assesses reading level, a student attempts the weekly quiz, a CRC visits a school. VSK starts here, with work that already happens.", prods:["smart-attendance","pragati","swadhyay","shikshak-samarthya","saajha"]},
 {t:"Captured through chatbots and the portal", s:"SwiftChat bots and the MIS portal record that work as it happens.", b:"Six UT chatbots and ten Bot Store bots run on SwiftChat, a chat app teachers already know how to use. The MIS portal holds the registry. The IVRS line records issues.", prods:["smart-attendance","pragati","field-monitoring","mis","crm-ivrs"]},
 {t:"Processed, validated and integrated", s:"Data is checked, cleaned and joined to one registry.", b:"UDISE+ data comes in through the API. Automated checks catch duplicates and errors; an 8-member team verified raw data with Head Masters; attendance is refreshed weekly and exams and RRSA per cycle.", prods:["mis"]},
 {t:"Dashboards, reports and insight", s:"21 dashboards on one platform, each person seeing their own area.", b:"The Integrated Dashboard Platform puts attendance, learning outcomes, exams, registry and programme dashboards behind one sign-in, with row-level and role-based security.", prods:["idp"]},
 {t:"Reviews, decisions and follow-up", s:"Officers act on named schools, and progress is reviewed every month.", b:"Daily attendance reports go to the SPD, ASPD and BRCs; IVRS operators call schools that are not marking; RRSA endline data shaped the May summer camps. Data also flows to the Rashtriya Vidya Samiksha Kendra (RVSK).", prods:["crm-ivrs","idp"]}
];

/* ===================== HOME ===================== */
function pageHome(){
  const featured = ["smart-attendance","pragati","swadhyay","shikshak-samarthya","field-monitoring","saajha"].map(s=>P[s]);
  const demoTabs = ["smart-attendance","pragati","swadhyay","shikshak-samarthya","field-monitoring","saajha"];
  return `
  <section class="hero"><div class="wrap hero-grid">
    <div>
      <div class="who"><b>Department of Education</b> · UT of Dadra and Nagar Haveli and Daman and Diu</div>
      <h1>Every school in the UT, seen clearly and supported on time.</h1>
      <p class="hero-hi" lang="hi">विद्या समीक्षा केंद्र</p>
      <p class="lede">Vidya Samiksha Kendra is the department’s review centre at Shiksha Sadan, Moti Daman. It brings attendance, assessment and school records from all ${UT.schools} schools onto one screen, so officers, Head Masters and teachers act on the same facts.</p>
      <div class="btn-row"><a class="btn btn-primary" href="#products">Explore products</a><a class="btn btn-line" href="#journey">View our journey</a><a class="btn btn-line" href="#resources">User resources</a></div>
      <div class="partners"><span>Under Samagra Shiksha, Ministry of Education</span><span>Technology partner</span>${img("cglogo","ConveGenius")}</div>
    </div>
    ${mapBlock("hero")}
  </div></section>

  <div class="wrap"><nav class="strip" aria-label="Milestones">${MILESTONES.map(m=>`<a href="#${m.go}"><div class="v">${esc(m.v)}</div><div class="l">${esc(m.l)}</div><div class="p">${esc(m.p)}</div></a>`).join("")}</nav></div>

  <section class="sec-ink" data-anchor="watch"><div class="wrap">
    <div class="sec-head"><div><h2>Watch the chatbots work</h2><p class="muted">Six chatbots built for the UT, shown step by step. Pick one and press play.</p></div></div>
    <div class="tabs" role="tablist" aria-label="Chatbot demonstrations">${demoTabs.map((s,i)=>`<button role="tab" aria-selected="${i===0}" data-tab="${s}">${esc(P[s].name.split(":")[0].replace(" (SBA 2.0)",""))}</button>`).join("")}</div>
    <div id="homeDemo">${demoBlock(P[demoTabs[0]])}</div>
    <p class="note" style="margin-top:24px">Recorded tutorials and event films will be added to this section as the department publishes them.</p>
  </div></section>

  <section><div class="wrap two">
    <div><h2>How VSK works</h2><p class="lede">Five connected layers turn everyday school work into action. Open a layer to see what happens there and which products do the work.</p>
      <p class="muted small">This follows the data pipeline documented for the UT: collection, cleaning, API integration and dashboards, then review.</p></div>
    <div class="layers">${MAP_LAYERS.map((l,i)=>`${i?'<div class="layer-line" aria-hidden="true"></div>':""}<div class="layer" data-open="${i===0}"><button aria-expanded="${i===0}"><span class="num">${i+1}</span><span><h3>${esc(l.t)}</h3><p class="sum">${esc(l.s)}</p></span>${IC.chev}</button><div class="body"><p>${esc(l.b)}</p><div class="btn-row">${l.prods.map(s=>`<a class="chip" href="#product-${s}">${esc(P[s].name.split(":")[0])}</a>`).join("")}</div></div></div>`).join("")}</div>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <div class="sec-head"><div><h2>DNH&amp;DD at a glance</h2><p class="muted">School figures as on 15 Sept 2026 (enrolment by district, Aug 2026).</p></div></div>
    <div class="grid g4" style="margin-bottom:28px">
      <div class="statcol"><span class="bigstat">${UT.schools}</span><span>schools</span><span class="p">DNH 328 · Daman 61 · Diu 21</span></div>
      <div class="statcol"><span class="bigstat">${UT.students}</span><span>students, KG to 12</span><span class="p">Sept 2026</span></div>
      <div class="statcol"><span class="bigstat">${UT.teachers}</span><span>teachers</span><span class="p">Sept 2026</span></div>
      <div class="statcol"><span class="bigstat">${UT.ptr}</span><span>average pupil-teacher ratio</span><span class="p">Diu 24 · DNH 28 · Daman 29</span></div>
    </div>
    <div class="grid g2">
      <div class="card"><h3>Attendance: four months of gains</h3><p class="muted small">Share of expected students and teachers with attendance marked, and present rate among those marked.</p>${attendanceChart()}</div>
      <div class="card"><h3>RRSA: children at the top level, cycle by cycle</h3><p class="muted small">Classes 3 to 8, Language (Story) and Maths (Division).</p>${rrsaChart()}</div>
    </div>
  </div></section>

  <section><div class="wrap">
    <div class="sec-head"><div><h2>Products built for the UT</h2><p class="muted">Six UT chatbots, three platforms and ten Bot Store bots. Status shows what is live today.</p></div><a class="btn btn-line" href="#products">See all ${PRODUCTS.length} products</a></div>
    <div class="grid g3">${featured.map((p,i)=>pcard(p,i===0)).join("")}</div>
    <div class="grid g3" style="margin-top:18px">${["mis","idp","crm-ivrs"].map(s=>pcard(P[s])).join("")}</div>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <div class="sec-head"><div><h2>What changed</h2><p class="muted">Four results, each with the work behind it and where the number comes from.</p></div><a class="btn btn-line" href="#journey">Full journey</a></div>
    <div class="grid" style="gap:22px">
      <article class="story">${img("teacherbot","A teacher recording assessment on the Pragati bot")}<div class="txt"><h3>Assessment moved from Excel to the bot, and teachers asked for more</h3><p class="muted">RRSA FLN assessment for Classes 3 to 8 ran on Pragati (SBA 2.0) for the first time in November 2025.</p><div class="k"><div class="statcol"><span class="bigstat">47,000+</span><span class="p">students assessed, 2025-26</span></div><div class="statcol"><span class="bigstat">99.32%</span><span class="p">endline data, Mar 2026</span></div></div><blockquote><p class="gu" lang="gu">BOT દ્વારા કામ કરવું વધુ સુગમ અને અસરકારક રહ્યું.</p><cite>Smt. P.J. Chudasama, GPS Vanakbara, Diu</cite></blockquote><p style="margin-top:14px"><a href="#product-pragati">How Pragati works</a></p></div></article>
      <article class="story">${img("misorient","MIS orientation for officers")}<div class="txt"><h3>Every MIS user, at every level, logged in</h3><p class="muted">Calls to Head Masters, a pending-schools list shared weekly with CRCs and BRCs, and a 2-hour MIS block in teacher training.</p><div class="k"><div class="statcol"><span class="bigstat">45% to 100%</span><span class="p">first-time login, Dec 2025 to Jul 2026</span></div><div class="statcol"><span class="bigstat">421</span><span class="p">schools on a clean registry</span></div></div><p><a href="#product-mis">About the MIS</a></p></div></article>
      <div class="grid g2">
        <article class="card"><h3>Attendance marking, June to October 2026</h3><p class="muted">Daily nudges to EOs, BRCs, CRCs and HMs, IVRS calls to low-marking schools, and named-school reports to the SPD.</p><div class="k" style="display:flex;gap:28px;flex-wrap:wrap"><div class="statcol"><span class="bigstat">2% to 67%</span><span class="p">student marking</span></div><div class="statcol"><span class="bigstat">99%</span><span class="p">schools submitting student attendance, Oct</span></div></div><p><a href="#product-smart-attendance">About Smart Attendance</a></p></article>
        <article class="card"><h3>PGI 2025-26: 2nd in India</h3>${pgiChart()}<p class="muted small">Diu ranked 1st, DNH 31st and Daman 54th of 784 districts on PGI-D 2025-26.</p></article>
      </div>
    </div>
  </div></section>

  <section class="sec-ink"><div class="wrap">
    <div class="sec-head"><div><h2>One UT, linked to the national VSK</h2><p class="muted">Every State and UT VSK reports into the Rashtriya Vidya Samiksha Kendra (RVSK) through six pillars, the 6A framework. This is the UT’s integration status. It is separate from whether individual products are live.</p></div></div>
    ${sixBoard()}
    <p class="source">Status as confirmed by the VSK team, November 2026.</p>
  </div></section>

  <section><div class="wrap">
    <div class="sec-head"><div><h2>Gallery</h2><p class="muted">The centre, reviews and visits, training, and the posters that go out on the VSK channel.</p></div></div>
    ${galleryBlock(10)}
    <p style="margin-top:12px"><a class="btn btn-line" href="#resources" data-jump="gallery">Open the full gallery</a></p>
  </div></section>

  <section class="sec-tint"><div class="wrap two">
    <div><h2>Latest highlights</h2><p class="muted">Filter by type.</p><div class="btn-row" id="hlFilter">${["All","Milestone","Product","Training","Communication"].map((t,i)=>`<button class="chip" aria-pressed="${i===0}" data-hl="${t}">${t}</button>`).join("")}</div></div>
    <div class="hl-list" id="hlList"></div>
  </div></section>

  ${contactBlock()}`;
}
function sixBoard(){
  return `<div class="six">${RVSK.map(r=>`<div class="cell ${r.done?"done":"prog"}"><span class="a">${r.a}</span><h4>${esc(r.p)}</h4><span class="badge ${r.done?"b-live":"b-partial"}">${esc(r.st)}</span><span class="tool">${esc(r.tool)}</span></div>`).join("")}</div>`;
}
function galleryBlock(limit, cat="all"){
  const items = GALLERY.filter(g=>cat==="all"||g.cat===cat).slice(0, limit||999);
  return `<div class="gal">${items.map(g=>{const i=GALLERY.indexOf(g);return `<figure tabindex="0" role="button" data-lb="${i}" aria-label="Open image: ${esc(g.c)}">${img(g.img,g.c)}<figcaption>${esc(g.c)} <span style="color:var(--faint)">· ${esc(g.d)}</span></figcaption></figure>`}).join("")}</div>`;
}
function contactBlock(){
  return `<section class="sec-ink" data-anchor="contact"><div class="wrap">
    <div class="sec-head"><div><h2>Contact and support</h2><p class="muted">Most questions are answered fastest by your CRC or BRC, or by the VSK support desk.</p></div></div>
    <div class="contact-grid">
      <div><h3>Vidya Samiksha Kendra</h3><p>Shiksha Sadan, Moti Daman, Daman<br>UT of Dadra and Nagar Haveli and Daman and Diu</p></div>
      <div><h3>Help with a chatbot or MIS</h3><p>Call the VSK CRM and IVRS support desk, run by two operators at the centre. Login, registry and submission issues are logged and followed up.</p><a href="#product-crm-ivrs">How the support desk works</a></div>
      <div><h3>Guides and training</h3><p>Quick-start guides for every UT chatbot and the MIS. For a school or cluster session, ask your BRC to request it through the VSK team.</p><a href="#resources">Open user resources</a></div>
      <div><h3>Departmental coordination</h3><p>Directorate of Education and Samagra Shiksha, UT of DNH&amp;DD<br><a href="mailto:diredu-dd@nic.in">diredu-dd@nic.in</a></p><p class="small">VSK Nodal Officer, Samagra Shiksha</p></div>
    </div>
    <div class="btn-row" style="margin-top:28px"><a class="btn btn-primary" href="#products">Explore products</a><a class="btn btn-line" href="#resources">View resources</a><a class="btn btn-line" href="#resources" data-jump="faq">Get support</a></div>
  </div></section>`;
}
function wireHome(root){
  wireMap(root); wireDemos(root);
  $$("[data-tab]", root).forEach(b => b.addEventListener("click", () => {
    $$("[data-tab]", root).forEach(x=>x.setAttribute("aria-selected", x===b));
    $("#homeDemo").innerHTML = demoBlock(P[b.dataset.tab]); wireDemos($("#homeDemo"));
  }));
  $$(".layer>button", root).forEach(b => b.addEventListener("click", () => { const L=b.parentElement, o=L.dataset.open!=="true"; L.dataset.open=o; b.setAttribute("aria-expanded",o); }));
  const hl = t => { $("#hlList").innerHTML = HIGHLIGHTS.filter(h=>t==="All"||h.ty===t).map(h=>`<div class="hl"><span class="d">${esc(h.d)}<br><span class="pill">${esc(h.ty)}</span></span><div><h4><a href="#${h.go}">${esc(h.t)}</a></h4><p>${esc(h.x)}</p></div></div>`).join(""); };
  $$("[data-hl]", root).forEach(b => b.addEventListener("click",()=>{ $$("[data-hl]",root).forEach(x=>x.setAttribute("aria-pressed",x===b)); hl(b.dataset.hl); }));
  hl("All");
}

/* ===================== ABOUT ===================== */
function pageAbout(){
  return `
  <section class="opening"><div class="op-photo" aria-hidden="true">${img("vskwall","",)}</div><div class="wrap two">
    <div><div class="crumbs"><a href="#home">Home</a> / About VSK</div><h1>About Vidya Samiksha Kendra</h1>
    <p class="lede">A review centre for school education: it watches the system in real time, finds where help is needed, and makes sure someone acts on it.</p>
    <p>NEP 2020 asks for technology and data to be used in teaching, assessment, monitoring and training. The first VSK opened in Gujarat in April 2022. Many States and UTs followed, including Dadra and Nagar Haveli and Daman and Diu, which built its VSK under Samagra Shiksha with ConveGenius as technology partner.</p>
    <p>In the UT, VSK monitors projects and activities under Samagra Shiksha, gives officers a live view of schools, teachers and students, runs a help desk for the school community, and holds field staff and schools accountable for follow-up.</p></div>
    <div class="bigcount" style="align-self:end"><div><b>410</b><span>schools</span></div><div><b>3</b><span>districts</span></div><div><b>19</b><span>products</span></div><div><b>21</b><span>dashboards</span></div></div>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <h2>What VSK sets out to do</h2>
    <div class="grid g3" style="margin-top:20px">
      ${[["Real-time status","Monitor projects and activities under Samagra Shiksha as they happen."],["One dashboard view","Live performance indicators for schools, teachers and students in one place."],["Find what needs attention","Spot improvement areas that need urgent action, by district, block and school."],["A help desk for schools","Information, awareness and support for everyone in the school system."],["Track field work","Monitor academic and non-academic field activity and help field staff decide with data."],["Better learning, better use of resources","Improve student learning, teacher accountability and the use of what schools already have."]].map(([t,x])=>`<div class="card"><h3>${t}</h3><p class="muted" style="margin:0">${x}</p></div>`).join("")}
    </div><p class="source">Objectives from the ${esc(srcLabel("brief"))}.</p>
  </div></section>

  <section><div class="wrap two">
    <div><h2>The centre</h2><p>The VSK sits at Shiksha Sadan, Moti Daman. It has a 3x3 video wall, six workstations, an IVRS setup, CCTV, Wi-Fi, UPS backup, a high-processing graphics machine, a conference room with video conferencing, and dedicated cloud infrastructure.</p>
      <h3>Who runs it</h3><p>A Project Management Unit with a Project Manager, Program Manager and Data Analyst, working with the VSK Nodal Officer. Two Data Entry Operators assigned by the department run the CRM and IVRS support desk.</p>
      <h3>Who owns it</h3><p>Full ownership of the solution and all student, teacher and system data lies with the Department of Education, DNH&amp;DD. IPR for the VSK chatbot toolkits is vested with the department in line with NDEAR. The build-operate-transfer model keeps assets on government cloud, with open APIs for future migration.</p></div>
    <div class="grid g2">${["vsk4","vsk6","vsk1","vsk5"].map(k=>`<figure style="margin:0;cursor:zoom-in" data-lbk="${k}" tabindex="0" role="button" aria-label="Open image">${img(k,"VSK centre")}</figure>`).join("")}</div>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <h2>What VSK changes for each person</h2>
    <div class="grid g4" style="margin-top:20px">
      ${[["Students","Weekly practice with instant answers and videos; learning levels assessed so help reaches them sooner."],["Teachers","Attendance and assessment in minutes on the phone; lesson plans, videos and worksheets on demand."],["Head Masters","One registry for the school; e-PTM to reach parents; a clear view of attendance and results."],["Officers","Dashboards for their own district, block or cluster; named-school follow-up lists; monthly reviews built on the same data."]].map(([t,x])=>`<div class="card"><h3>${t}</h3><p class="muted" style="margin:0">${x}</p></div>`).join("")}
    </div>
    <h3 style="margin-top:40px">Before and after VSK</h3>
    <div class="scroll-x"><table class="ledger"><thead><tr><th>Before</th><th>With VSK</th></tr></thead><tbody>
      ${[["No real-time attendance for students and teachers","Smart Attendance, marked daily on the phone and seen the same day"],["No continuous tracking of FLN levels","RRSA on Pragati three times a year, plus Swadhyay weekly practice"],["Parents had no channel to the school system","Saajha for questions, Parent Connect Bot for e-PTM and notices"],["Teachers searched for material on their own","Shikshak Samarthya lesson plans, videos and worksheets"],["Field surveys on paper, reaching the office late","Field Monitoring Bot with cluster-level results"],["Separate dashboards, separate links","21 dashboards on one platform, by role and area"]].map(([a,b])=>`<tr><td class="muted">${a}</td><td>${b}</td></tr>`).join("")}
    </tbody></table></div><p class="source">Adapted from the ${esc(srcLabel("overview"))}.</p>
  </div></section>

  <section><div class="wrap two">
    <div><h2>Training and readiness</h2><p class="muted">Up to October 2026.</p>
      <div class="grid g2" style="margin:18px 0"><div class="statcol"><span class="bigstat">20+</span><span>training sessions</span></div><div class="statcol"><span class="bigstat">7,500+</span><span>participants</span></div><div class="statcol"><span class="bigstat">100%</span><span>schools covered, including private</span></div><div class="statcol"><span class="bigstat">29</span><span>clusters, district-wise</span></div></div>
      <ul class="list-clean"><li>Initial orientation by YouTube Live at chatbot launch: about 4,000 teachers.</li><li>District-level hands-on training: about 2,000 teachers.</li><li>TGT and PGT refresher: about 750 teachers, around 90% of TGTs and PGTs.</li><li>Block-wise ICT teacher training: about 550 teachers across 4 blocks.</li><li>On-demand school sessions when Head Masters ask.</li></ul>
      <p class="source">Source: ${esc(srcLabel("golive"))}.</p></div>
    <div class="grid g2">${["tr1","tr3","tr4","tr6"].map(k=>`<figure style="margin:0;cursor:zoom-in" data-lbk="${k}" tabindex="0" role="button" aria-label="Open image">${img(k,"VSK training session")}</figure>`).join("")}</div>
  </div></section>

  <section class="sec-ink"><div class="wrap two">
    <div><h2>The Union Territory</h2>
      <p>Dadra and Nagar Haveli and Daman and Diu was formed on 26 January 2020 by merging two Union Territories, under the Dadra and Nagar Haveli and Daman and Diu (Merger of Union Territories) Act, 2019. Its capital is Daman.</p>
      <p>The UT is made of four separate pieces of land in three districts: Dadra and Nagar Haveli, inland on the Gujarat and Maharashtra border, with its headquarters at Silvassa; Daman, on the south Gujarat coast; and the island of Diu, off the Saurashtra coast across the Gulf of Khambhat. Together they cover about 603 sq km.</p>
      <p>For school education this means three very different settings: forest blocks such as Khanvel with weak mobile networks, a dense coastal town, and a small island district. VSK reports every number three ways, district by district.</p>
      <div class="scroll-x"><table class="ledger"><thead><tr><th>District</th><th>Schools</th><th>Students</th><th>PTR</th><th>Area</th><th>PGI-D 2025-26</th></tr></thead><tbody>${UT.districts.map(d=>`<tr><td>${esc(d.name)}</td><td class="num">${d.schools}</td><td class="num">${d.enrol}</td><td class="num">${d.ptr}</td><td>${d.area}</td><td>${esc(d.pgid)}</td></tr>`).join("")}</tbody></table></div>
      <p class="source">Merger and capital: <a href="${SOURCES.indiacode.url}" target="_blank" rel="noopener">India Code, Act 44 of 2019</a>. Areas: published district areas (DNH derived as 603 minus 112 sq km). Schools and PTR: Sept 2026; students: Aug 2026; PGI-D: July 2026.</p></div>
    ${mapBlock("about")}
  </div></section>

  <section><div class="wrap two">
    <div><h2>Part of a national system</h2><p>The Rashtriya Vidya Samiksha Kendra (RVSK) is the national VSK. It brings State and UT data together on six pillars: Attendance, Assessment, Administration, Accreditation, Adaptive Learning and Artificial Intelligence. The UT’s own VSK sends its data to RVSK, so national reviews see the UT as it is.</p><p><a href="#journey">See the 6A integration status</a></p></div>
    <div><h2>Data-to-action cycle</h2><ol class="steps"><li><div><b>See</b>: the dashboard shows the numbers for your area.</div></li><li><div><b>Analyse</b>: compare schools, blocks and cycles.</div></li><li><div><b>Decide</b>: name the schools and the action.</div></li><li><div><b>Act</b>: calls, visits, remediation, training.</div></li><li><div><b>Improve</b>: check the next cycle’s data.</div></li></ol></div>
  </div></section>`;
}

/* ===================== PRODUCTS CATALOGUE ===================== */
const CAT = {q:"", pillar:"", aud:"", kind:"", view:"grid"};
function pageProducts(){
  return `
  <section class="opening"><div class="wrap op-grid">
    <div><div class="crumbs"><a href="#home">Home</a> / Products &amp; Chatbots</div>
    <h1>Products and chatbots</h1>
    <p class="lede">${PRODUCTS.length} products run VSK in the UT. Search by name or task, filter by 6A pillar and user, or switch to the system map to see how they connect.</p>
    <div class="bigcount"><div><b>6</b><span>UT chatbots</span></div><div><b>10</b><span>Bot Store bots</span></div><div><b>3</b><span>platforms</span></div></div></div>
    <div class="cloud" aria-hidden="true">${PRODUCTS.map((p,i)=>`<a tabindex="-1" class="${p.kind==="ut"?"ut":""}" href="#product-${p.slug}" style="animation-delay:${-i*.55}s">${esc(p.name.split(":")[0].split(" (")[0])}</a>`).join("")}</div>
  </div></section>
  <section style="padding-top:36px"><div class="wrap">
    <div class="filters" role="search">
      <label class="searchbox">${IC.search}<span class="sr">Search products</span><input id="catQ" type="search" placeholder="Try ‘attendance’, ‘lesson plan’ or ‘registry’" value="${esc(CAT.q)}"></label>
      <div class="row"><span>6A pillar (closest)</span>${["",...PILLARS].map(p=>`<button class="chip" data-f="pillar" data-v="${p}" aria-pressed="${CAT.pillar===p}">${p||"All"}</button>`).join("")}</div>
      <div class="row"><span>Used by</span>${["",...AUDIENCES].map(a=>`<button class="chip" data-f="aud" data-v="${a}" aria-pressed="${CAT.aud===a}">${a||"Everyone"}</button>`).join("")}</div>
      <div class="row"><span>Type</span>${[["","All"],["ut","UT chatbots"],["platform","Platforms"],["generic","Bot Store"]].map(([v,l])=>`<button class="chip" data-f="kind" data-v="${v}" aria-pressed="${CAT.kind===v}">${l}</button>`).join("")}</div>
    </div>
    <div class="toolbar"><span id="catCount" class="muted" aria-live="polite"></span><div style="display:flex;gap:10px;align-items:center"><button class="linkbtn" id="catClear">Clear filters</button><div class="seg" role="group" aria-label="View"><button data-view="grid" aria-pressed="${CAT.view==="grid"}">Grid</button><button data-view="map" aria-pressed="${CAT.view==="map"}">System map</button></div></div></div>
    <div id="catOut"></div>
    <p class="note" style="margin-top:24px">The 6A pillar shown on each product is the closest match for browsing. It is not the RVSK integration status, which is tracked separately on the <a href="#journey">Journey page</a>. No product is mapped to Accreditation yet.</p>
  </div></section>
  <section class="sec-tint"><div class="wrap">
    <div class="sec-head"><div><h2>Dashboard previews</h2><p class="muted">Screenshots from the platform. Open a dashboard in Power BI for the current data.</p></div><a class="btn btn-line" href="#product-idp">All 21 dashboards</a></div>
    <div class="shots">${[["pgidash","PGI 2.0 performance view (screenshot)"],["mis","MIS portal navigation (screenshot)"],["vskwall","Dashboards on the VSK video wall (photo)"]].map(([k,c])=>`<figure data-lbk="${k}" tabindex="0" role="button" aria-label="Open image">${img(k,c)}<figcaption>${esc(c)}</figcaption></figure>`).join("")}</div>
  </div></section>`;
}
function matchProduct(p){
  const q = CAT.q.trim().toLowerCase();
  if(q && ![p.name,p.tag,p.need,(p.flow||[]).join(" "),(p.feats||[]).flat().join(" "),p.pillars.join(" "),p.aud.join(" ")].join(" ").toLowerCase().includes(q)) return false;
  if(CAT.pillar && !p.pillars.includes(CAT.pillar)) return false;
  if(CAT.aud && !p.aud.includes(CAT.aud)) return false;
  if(CAT.kind && p.kind!==CAT.kind) return false;
  return true;
}
function renderCatalogue(){
  const list = PRODUCTS.filter(matchProduct);
  $("#catCount").textContent = `${list.length} of ${PRODUCTS.length} products`;
  const out = $("#catOut");
  if(CAT.view==="map"){
    const on = new Set(list.map(p=>p.slug));
    const node = (s,label) => `<a class="node ${on.has(s)?"":"dim"}" href="#product-${s}">${esc(label||P[s].name.split(":")[0])}</a>`;
    out.innerHTML = `<div class="sysmap">
      <div class="col"><h4>People</h4>${AUDIENCES.map(a=>`<span class="node">${a}</span>`).join("")}</div>
      <div class="col"><h4>UT chatbots</h4>${["smart-attendance","pragati","swadhyay","shikshak-samarthya","field-monitoring","saajha"].map(s=>node(s)).join("")}<h4 style="margin-top:10px">Bot Store</h4>${PRODUCTS.filter(p=>p.kind==="generic").map(p=>node(p.slug)).join("")}</div>
      <div class="col"><h4>Registry and data</h4>${node("mis","MIS registry")}<span class="node">UDISE+ API</span><span class="node">Validation and cleaning pipeline</span>${node("crm-ivrs","CRM and IVRS issue log")}</div>
      <div class="col"><h4>Insight</h4>${node("idp","IDP: 21 dashboards")}${DASHBOARDS.slice(0,6).map(d=>`<span class="node">${esc(d.n)}</span>`).join("")}<a class="node" href="#product-idp">and 15 more</a></div>
      <div class="col"><h4>Action</h4><span class="node">Monthly reviews with the SPD</span><span class="node">Daily school follow-up lists</span><span class="node">Remediation and training</span><a class="node" href="#journey">RVSK (national VSK)</a></div>
    </div><p class="muted small" style="margin-top:14px">Read left to right: school work is captured by chatbots, joined to the registry, shown on dashboards, and acted on. Products outside your filter are faded.</p>`;
  } else {
    out.innerHTML = list.length ? `<div class="grid g3">${list.map(p=>pcard(p)).join("")}</div>` : `<div class="empty"><p><b>No products match these filters.</b></p><p>Clear a filter or try a broader word, such as ‘teacher’.</p><button class="btn btn-line btn-s" id="catClear2">Clear filters</button></div>`;
    const c2=$("#catClear2"); if(c2) c2.addEventListener("click", clearCat);
  }
}
function clearCat(){ Object.assign(CAT,{q:"",pillar:"",aud:"",kind:""}); $("#catQ").value=""; $$("[data-f]").forEach(b=>b.setAttribute("aria-pressed", b.dataset.v==="")); renderCatalogue(); }
function wireProducts(root){
  $("#catQ").addEventListener("input", e => { CAT.q = e.target.value; renderCatalogue(); });
  $$("[data-f]", root).forEach(b => b.addEventListener("click", () => { CAT[b.dataset.f]=b.dataset.v; $$(`[data-f="${b.dataset.f}"]`,root).forEach(x=>x.setAttribute("aria-pressed",x===b)); renderCatalogue(); }));
  $$("[data-view]", root).forEach(b => b.addEventListener("click", () => { CAT.view=b.dataset.view; $$("[data-view]",root).forEach(x=>x.setAttribute("aria-pressed",x===b)); renderCatalogue(); }));
  $("#catClear").addEventListener("click", clearCat);
  renderCatalogue();
}

/* ===================== PRODUCT DETAIL ===================== */
function pageProduct(slug){
  const p = P[slug]; if(!p) return null;
  const idx = PRODUCTS.indexOf(p), prev = PRODUCTS[(idx-1+PRODUCTS.length)%PRODUCTS.length], next = PRODUCTS[(idx+1)%PRODUCTS.length];
  const dashes = p.dashAll ? DASHBOARDS : (p.dash||[]).map(n=>DASHBOARDS.find(d=>d.n===n)).filter(Boolean);
  const guides = RESOURCES.filter(r=>r.product===slug);
  const secs = [["intro","Overview"],["need","Need"],["flow","How it works"],p.demo&&["demo","Walkthrough"],p.roles&&["roles","Who does what"],["feats","Features"],(p.results||p.story||p.quotes)&&["results","Results"],(dashes.length||p.shots)&&["dash","Dashboards"],["guides","Guides"],["access","Access"],["more","Related"]].filter(Boolean);
  const S = (id, inner, tint) => `<section class="psec ${tint?"sec-tint":""}" data-anchor="${id}"><div class="wrap">${inner}</div></section>`;
  let h = `
  <section class="opening p-opening" data-anchor="intro"><div class="wrap">
    <div class="crumbs"><a href="#home">Home</a> / <a href="#products">Products &amp; Chatbots</a> / ${esc(p.name)}</div>
    <div class="p-hero">
      <div><span class="pill">${esc(kindLabel(p))}</span><h1 style="font-size:clamp(2rem,4vw,3.2rem)">${esc(p.name)}</h1><p class="lede">${esc(p.tag)}</p>
        <div class="btn-row">${p.link?`<a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">Open on SwiftChat ${IC.ext}</a>`:""}${p.demo?`<button class="btn btn-line" data-goto="demo">Watch the walkthrough</button>`:""}<a class="btn btn-line" href="#products">Back to catalogue</a></div></div>
      <dl class="p-facts">
        <div><dt>Status</dt><dd>${badge(p.status)}<p class="small muted" style="margin:8px 0 0">${esc(p.status.note)}</p></dd></div>
        <div><dt>Used by</dt><dd>${esc(p.aud.join(", "))}</dd></div>
        <div><dt>Closest 6A pillar</dt><dd style="display:flex;gap:6px;flex-wrap:wrap">${pills(p.pillars)}</dd></div>
        ${p.rvsk?`<div><dt>RVSK integration</dt><dd class="small">${esc(p.rvsk)}</dd></div>`:""}
        ${p.modules?`<div><dt>Modules</dt><dd class="small">${esc(p.modules.join(" · "))}</dd></div>`:""}
      </dl>
    </div>
  </div></section>
  <nav class="subnav" aria-label="On this page"><div class="wrap">${secs.map(([id,l])=>`<button data-goto="${id}">${l}</button>`).join("")}</div></nav>`;
  h += S("need", `<div class="two"><div><h2>The need</h2></div><p class="lede" style="color:var(--text)">${esc(p.need)}</p></div>`);
  h += S("flow", `<div class="two"><div><h2>How it works</h2><p class="muted">The documented user journey, step by step.</p></div><ol class="steps">${p.flow.map(s=>`<li><div>${esc(s)}</div></li>`).join("")}</ol></div>`, true);
  if(p.demo) h += `<section class="psec sec-ink" data-anchor="demo"><div class="wrap"><h2>Walkthrough</h2><p class="muted" style="margin-bottom:24px">Choose a step, or press play to watch the conversation.</p>${demoBlock(p)}</div></section>`;
  if(p.roles) h += S("roles", `<h2>Who does what</h2><div class="roles" style="margin-top:20px"><div><h4>Supplies the information</h4><p class="muted" style="margin:0">${esc(p.roles.s)}</p></div><div><h4>Reviews it</h4><p class="muted" style="margin:0">${esc(p.roles.r)}</p></div><div><h4>Acts on it</h4><p class="muted" style="margin:0">${esc(p.roles.a)}</p></div></div>`);
  h += S("feats", `<h2>Features and benefits</h2><div class="feat" style="margin-top:20px">${p.feats.map(([t,x])=>`<div><h4>${esc(t)}</h4><p>${esc(x)}</p></div>`).join("")}</div>${p.next?`<h3 style="margin-top:36px">What comes next</h3><ul class="list-clean">${p.next.map(n=>`<li>${esc(n)}</li>`).join("")}</ul>`:""}`, true);
  if(p.results||p.story||p.quotes){
    let r = `<h2>Implementation and results</h2>`;
    if(p.results) r += `<div class="results" style="margin:22px 0">${p.results.map(x=>`<div class="statcol"><span class="bigstat" style="color:var(--maroon)">${esc(x.v)}</span><span>${esc(x.l)}</span><span class="p">${esc(x.p)} · ${esc(SOURCES[x.src]?.kind||"")}</span></div>`).join("")}</div>`;
    if(p.resultNote) r += `<p class="note">${esc(p.resultNote)}</p>`;
    if(p.chart==="attendance") r += `<div class="card" style="margin-top:22px">${attendanceChart()}</div>`;
    if(p.chart==="rrsa") r += `<div class="card" style="margin-top:22px">${rrsaChart()}</div>`;
    if(p.story) r += `<article class="story" style="margin-top:22px">${img(p.story.img,p.story.title)}<div class="txt"><span class="pill">${esc(p.story.d)}</span><h3 style="margin-top:10px">${esc(p.story.title)}</h3><p class="muted">${esc(p.story.t)}</p></div></article>`;
    if(p.quotes) r += `<div class="grid g3" style="margin-top:22px">${p.quotes.map(q=>`<blockquote><p class="${q.gu?"gu":""}" ${q.gu?'lang="gu"':""}>${esc(q.q)}</p>${q.en?`<p class="small muted">${esc(q.en)}</p>`:""}<cite>${esc(q.c)}</cite></blockquote>`).join("")}</div>`;
    const srcs = [...new Set((p.results||[]).map(x=>x.src).concat(p.story?[p.story.src]:[]))];
    if(srcs.length) r += `<p class="source">Sources: ${srcs.map(s=>esc(srcLabel(s))).join("; ")}.</p>`;
    h += S("results", r);
  }
  if(dashes.length || p.shots){
    let d = `<h2>${p.dashAll?"All dashboards":"Dashboards and screenshots"}</h2>`;
    if(dashes.length) d += `<p class="muted">${p.dashAll?"The full register. Links open the Power BI view in a new tab; data shown there is what the dashboard holds today.":"Dashboards fed by this product. Links open the Power BI view in a new tab."}</p><div class="dash-list" style="margin:18px 0 26px">${dashes.map(dashRow).join("")}</div>`;
    if(p.shots) d += `<div class="shots">${p.shots.map(([k,c])=>`<figure data-lbk="${k}" tabindex="0" role="button" aria-label="Open image: ${esc(c)}">${img(k,c)}<figcaption>${esc(c)}</figcaption></figure>`).join("")}</div>`;
    h += S("dash", d, true);
  }
  h += S("guides", `<div class="two"><div><h2>Guides and tutorials</h2><p class="muted">Quick-start guides are prepared from the documented steps. Recorded video tutorials will be added when published.</p></div><div class="res-list">${guides.length?guides.map(resRow).join(""):`<p class="note">A dedicated guide for this product is not yet published. The SwiftChat Bot Store shows how to open it, and the support desk can help.</p>`}</div></div>`);
  h += S("access", `<h2>Access and support</h2>${p.link?`<div class="access" style="margin-top:20px"><div class="qr" aria-label="QR code for ${esc(p.name)}">${ASSETS.qr[slug]||""}</div><div><h3>Open ${esc(p.name.split(":")[0])} on SwiftChat</h3><p class="muted">Scan the QR code on a phone, or open the link. Use the mobile number registered for you in the school registry.</p><div class="btn-row"><a class="btn btn-primary" href="${p.link}" target="_blank" rel="noopener">${esc(p.link.replace("https://",""))} ${IC.ext}</a><button class="btn btn-line" data-copy="${p.link}">Copy link</button></div></div></div>`:`<p class="lede" style="margin-top:12px">${p.kind==="generic"?"Open the SwiftChat app, go to the Bot Store and search for this bot by name.":p.slug==="crm-ivrs"?"Call the VSK support desk at Shiksha Sadan, Moti Daman, or ask your CRC to raise the issue.":"Access is set up for each user by the VSK team. Ask your BRC or the VSK Nodal Officer for credentials."}</p>`}
    <p class="muted" style="margin-top:18px">Stuck? <a href="#resources" data-jump="faq">Read the FAQs</a> or <a href="#contact">contact support</a>.</p>`, true);
  h += S("more", `<h2>Related products</h2><div class="grid g3" style="margin:20px 0 32px">${(p.related||[]).map(s=>P[s]).filter(Boolean).map(x=>pcard(x)).join("")}</div>
    <div class="pn"><a href="#product-${prev.slug}"><small>Previous product</small>${esc(prev.name)}</a><a class="next" href="#product-${next.slug}"><small>Next product</small>${esc(next.name)}</a></div>`);
  return h;
}

/* ===================== JOURNEY ===================== */
let PHASE = "all";
function pageJourney(){
  return `
  <section class="opening"><div class="wrap two">
    <div><div class="crumbs"><a href="#home">Home</a> / Journey &amp; Achievements</div><h1>Journey and achievements</h1>
      <p class="lede">From the first RRSA cycle in 2022 to RVSK integration in 2026: what was built, who it reached, and what changed. Done, ongoing and planned work are marked separately.</p></div>
    <div class="card" style="background:rgba(14,23,60,.6);color:var(--on-ink);border-color:rgba(70,214,224,.35)"><h3 style="color:#f2a13b">The mission</h3><p style="margin:0">Last-mile reach: equitable learning outcomes in every district of the UT. The North Star for 2026-27 is a top-5 national ranking in PARAKH 2027 across all grades, and the next grade up on PGI 2.0.</p></div>
  </div><div class="wrap"><div class="ribbon" role="group" aria-label="Jump to a phase">${PHASES.map(p=>`<button data-phase="${p.id}" aria-pressed="${PHASE===p.id}">${esc(p.name)}<small>${esc(p.range)}</small></button>`).join("")}</div></div></section>

  <section class="sec-tint"><div class="wrap">
    <div class="sec-head"><div><h2>Results the UT can point to</h2><p class="muted">Each with its period and source.</p></div></div>
    <div class="grid g2">
      <div class="card"><h3>Performance Grading Index</h3>${pgiChart()}<p>2nd in India in PGI 2025-26, up 40.6 points to 723.8. Diu was ranked 1st of 784 districts on PGI-D, DNH 31st and Daman 54th.</p></div>
      <div class="card"><h3>Foundational literacy and numeracy</h3>${rrsaChart()}</div>
      <div class="card"><h3>PARAKH Rashtriya Sarvekshan 2024</h3><table class="ledger"><thead><tr><th>Class</th><th>NAS 2021</th><th>PARAKH 2024</th></tr></thead><tbody><tr><td>Class 3</td><td>30 to 37</td><td class="num">12th</td></tr><tr><td>Class 6</td><td>Not assessed</td><td class="num">3rd</td></tr><tr><td>Class 9</td><td>Not assessed</td><td class="num">6th</td></tr></tbody></table><p class="muted small" style="margin-top:10px">National rank. The UT moved from the bottom group in NAS 2021 into the top group in PARAKH 2024. VSK supported this through NAS mock tests and dashboards.</p><p class="source">Source: ${esc(srcLabel("overview"))}.</p></div>
      <div class="card"><h3>Systems in daily use</h3><table class="ledger"><tbody>
        <tr><td>MIS first-time login, all five levels</td><td class="num">100%</td><td class="small muted">Jul 2026</td></tr>
        <tr><td>Schools submitting student attendance</td><td class="num">99%</td><td class="small muted">Oct 2026</td></tr>
        <tr><td>RRSA endline data on SBA 2.0</td><td class="num">99.32%</td><td class="small muted">Mar 2026</td></tr>
        <tr><td>Dashboards on IDP</td><td class="num">21</td><td class="small muted">Oct 2026</td></tr>
        <tr><td>VSK WhatsApp channel members</td><td class="num">2,148</td><td class="small muted">Oct 2026</td></tr></tbody></table></div>
    </div>
  </div></section>

  <section data-anchor="timeline"><div class="wrap">
    <div class="sec-head"><div><h2>Timeline</h2><p class="muted">Choose a phase to focus the timeline.</p></div></div>
    <div class="phases" role="group" aria-label="Phase">${[["all","All phases",""],...PHASES.map(p=>[p.id,p.name,p.range])].map(([id,n,r])=>`<button class="chip" data-phase="${id}" aria-pressed="${PHASE===id}">${n}${r?` <span style="opacity:.7">· ${r}</span>`:""}</button>`).join("")}</div>
    <div class="tl" id="tl"></div>
  </div></section>

  <section class="sec-ink"><div class="wrap">
    <div class="sec-head"><div><h2>RVSK 6A integration</h2><p class="muted">How much of the UT’s data reaches the Rashtriya Vidya Samiksha Kendra. This is integration status, not product status: a pillar can be integrated while some related products are still being relaunched.</p></div></div>
    ${sixBoard()}
    <div class="scroll-x" style="margin-top:24px"><table class="ledger"><thead><tr><th>Pillar</th><th>Tool at VSK</th><th>Status</th><th>Note</th></tr></thead><tbody>${RVSK.map(r=>`<tr><td>${r.a} ${esc(r.p)}</td><td>${esc(r.tool)}</td><td><span class="badge ${r.done?"b-live":"b-partial"}">${esc(r.st)}</span></td><td class="small">${esc(r.note)}</td></tr>`).join("")}</tbody></table></div>
    <p class="source">Status as confirmed by the VSK team, November 2026.</p>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <h2>Achievement stories</h2>
    <div class="grid g2" style="margin-top:22px">${[
      {t:"FLN assessment on SBA 2.0",n:"RRSA results took weeks to compile from paper and Excel.",w:"Moved RRSA to the Pragati bot, with CRC and BRC follow-up on pending students.",r:"47,000+ students in Classes 3 to 8, three cycles.",o:"98.65% midline and 99.32% endline data; Language +17.0 and Maths +16.2 points.",e:"Impact Sandesh May 2026; Sambhav April and September 2026",go:"product-pragati"},
      {t:"One registry for the UT",n:"Records were scattered and did not always match UDISE+.",w:"MIS rollout, direct calls to HMs, weekly pending lists, MIS block in teacher training.",r:"All five administrative levels; 500+ users trained.",o:"First-time login from about 45% to 100%; registry cleaned from 427 to 421 schools.",e:"Impact Sandesh July 2026; Sambhav March 2026",go:"product-mis"},
      {t:"Attendance every day",n:"In June 2026 only 2% of expected student attendance was being marked.",w:"Daily nudges to EOs, BRCs, CRCs and HMs; IVRS calls; named-school reports to the SPD.",r:"All schools, including non-government schools.",o:"Student marking 67% and teacher marking 70% by October; 99% of schools submitting.",e:"Sambhav November 2026",go:"product-smart-attendance"},
      {t:"Two years of exam results in one place",n:"Grade 8, 10 and 12 results had never been seen together by district, block and school.",w:"New data collection format, field orientation, cleaning and a dashboard, in two weeks.",r:"All three districts, through BRCs, CRCs and HMs.",o:"Results presented to the SPD; dashboard in final review.",e:"Sambhav November 2026",go:"product-idp"}
    ].map(s=>`<article class="card"><h3>${s.t}</h3><table class="ledger small"><tbody><tr><th>Need</th><td>${s.n}</td></tr><tr><th>Work done</th><td>${s.w}</td></tr><tr><th>Reached</th><td>${s.r}</td></tr><tr><th>Result</th><td>${s.o}</td></tr><tr><th>Evidence</th><td class="muted">${s.e}</td></tr></tbody></table><p style="margin:12px 0 0"><a href="#${s.go}">Related product</a></p></article>`).join("")}</div>
  </div></section>`;
}
function renderTimeline(){
  const items = TIMELINE.filter(t=>PHASE==="all"||t.ph===PHASE);
  $("#tl").innerHTML = items.map(t=>`<div class="tl-item ${t.plan?"planned":""}"><span class="d">${esc(t.d)}</span> ${t.plan?'<span class="badge b-idle">Planned</span>':""}<h3>${esc(t.t)}</h3><p>${esc(t.x)}</p>${t.img?`<div data-lbk="${t.img}" tabindex="0" role="button" aria-label="Open image" style="display:inline-block">${img(t.img,t.t,"tl-img")}</div>`:""}${t.go||t.src?`<p class="small" style="margin-top:6px">${t.go?`<a href="#${t.go}">Learn more</a>`:""}${t.src?`<span class="muted"> ${t.go?"· ":""}Source: ${esc(srcLabel(t.src))}</span>`:""}</p>`:""}</div>`).join("");
}
function wireJourney(root){
  $$("[data-phase]",root).forEach(b=>b.addEventListener("click",()=>{PHASE=b.dataset.phase;$$("[data-phase]",root).forEach(x=>x.setAttribute("aria-pressed",x===b));renderTimeline();}));
  renderTimeline();
}

/* ===================== RESOURCES ===================== */
const RF = {type:"", product:"", lang:""};
const TYPE_COL = {Guide:"#1e6e70",Data:"#2b5f8a",Story:"#6b1f24",Poster:"#b4532a",Report:"#5b6668"};
function resRow(r){
  const canDl = DL.ok;
  return `<div class="res"><span class="ic" style="background:${TYPE_COL[r.type]}">${r.fmt.toUpperCase()}</span><div><h4>${esc(r.title)}</h4><div class="m"><span>${esc(r.type)}</span><span>${esc(P[r.product]?.name.split(":")[0]||"")}</span><span>${esc(r.aud)}</span><span>${esc(r.lang)}</span><span>${esc(r.ver)}</span></div></div>
   <div class="acts"><button class="btn btn-line btn-s" data-view-res="${r.id}">View</button>${canDl?`<button class="btn btn-primary btn-s" data-dl-res="${r.id}">Download</button>`:""}</div></div>`;
}
function pageResources(){
  const prods = [...new Set(RESOURCES.map(r=>r.product))];
  return `
  <section class="opening"><div class="wrap op-grid"><div>
    <div class="crumbs"><a href="#home">Home</a> / Resources &amp; Media</div>
    <h1>Resources and media</h1>
    <p class="lede">Guides, data, stories, posters and photographs in one place. Filter by type, product or language.</p>
    <div class="btn-row">${[["guides","Guides and files"],["gallery","Photo gallery"],["faq","FAQs"],["sources","Sources"]].map(([a,l])=>`<button class="chip" data-goto="${a}">${l}</button>`).join("")}</div>
  </div><div class="docstack" aria-hidden="true"><div class="d"><b>Guide</b><i></i><i style="width:70%"></i><i></i><i style="width:55%"></i></div><div class="d"><b>Dashboard catalogue</b><i></i><i style="width:80%"></i><i></i><i style="width:60%"></i><i style="width:75%"></i></div><div class="d"><b>Impact story</b><i style="width:65%"></i><i></i><i style="width:85%"></i></div></div></div></section>
  <section data-anchor="guides" style="padding-top:40px"><div class="wrap">
    <div class="filters">
      <div class="row"><span>Type</span>${["","Guide","Data","Story","Poster"].map(t=>`<button class="chip" data-rf="type" data-v="${t}" aria-pressed="${RF.type===t}">${t||"All"}</button>`).join("")}</div>
      <div class="row"><span>Product</span><select id="rfProd" style="font:inherit;padding:6px 10px;border-radius:999px;border:1px solid var(--line);background:var(--surface);color:var(--text)"><option value="">All products</option>${prods.map(s=>`<option value="${s}" ${RF.product===s?"selected":""}>${esc(P[s].name)}</option>`).join("")}</select></div>
      <div class="row"><span>Language</span>${["","English","Gujarati","Marathi"].map(t=>`<button class="chip" data-rf="lang" data-v="${t}" aria-pressed="${RF.lang===t}">${t||"All"}</button>`).join("")}</div>
    </div>
    <p id="resCount" class="muted small" aria-live="polite"></p>
    <div class="res-list" id="resList"></div>
    <p class="note" style="margin-top:20px">Guides are prepared from the documented steps in programme materials. Recorded video tutorials, official user manuals and the IVRS helpline number will be added once the department publishes them.</p>
  </div></section>
  <section class="sec-tint" data-anchor="gallery"><div class="wrap">
    <div class="sec-head"><div><h2>Photo gallery</h2><p class="muted">Select any photo to view it full screen, or play a slideshow.</p></div></div>
    <div class="btn-row" style="margin-bottom:18px">${GAL_CATS.map(([v,l],i)=>`<button class="chip" data-gc="${v}" aria-pressed="${i===0}">${l}</button>`).join("")}</div>
    <div id="galOut">${galleryBlock(0)}</div>
  </div></section>
  <section data-anchor="faq"><div class="wrap two">
    <div><h2>FAQs and troubleshooting</h2><p class="muted">Drawn from the issues the CRM and IVRS desk handles most.</p></div>
    <div>${FAQS.map(([q,a])=>`<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div>
  </div></section>
  <section class="sec-tint" data-anchor="sources"><div class="wrap">
    <h2>Sources and data notes</h2>
    <p class="muted narrow">Every figure on this site comes from one of these records and shows its reporting period. Where two records give different counts (for example 410 schools in UDISE+ and 421 on the cleaned MIS registry), the site uses the most recent and says which.</p>
    <div class="scroll-x"><table class="ledger"><thead><tr><th>Record</th><th>Kind</th></tr></thead><tbody>${Object.values(SOURCES).map(s=>`<tr><td>${s.url?`<a href="${s.url}" target="_blank" rel="noopener">${esc(s.t)}</a>`:esc(s.t)}</td><td class="small muted">${esc(s.kind)}</td></tr>`).join("")}</tbody></table></div>
  </div></section>`;
}
function renderRes(){
  const list = RESOURCES.filter(r=>(!RF.type||r.type===RF.type)&&(!RF.product||r.product===RF.product)&&(!RF.lang||r.lang===RF.lang));
  $("#resCount").textContent = `${list.length} of ${RESOURCES.length} resources`;
  $("#resList").innerHTML = list.length ? list.map(resRow).join("") : `<div class="empty">No resources match. <button class="linkbtn" id="rfClear">Clear filters</button></div>`;
  const c=$("#rfClear"); if(c) c.onclick=()=>{Object.assign(RF,{type:"",product:"",lang:""}); router();};
}
function wireResources(root){
  $$("[data-rf]",root).forEach(b=>b.addEventListener("click",()=>{RF[b.dataset.rf]=b.dataset.v;$$(`[data-rf="${b.dataset.rf}"]`,root).forEach(x=>x.setAttribute("aria-pressed",x===b));renderRes();}));
  $("#rfProd").addEventListener("change",e=>{RF.product=e.target.value;renderRes();});
  $$("[data-gc]",root).forEach(b=>b.addEventListener("click",()=>{$$("[data-gc]",root).forEach(x=>x.setAttribute("aria-pressed",x===b));$("#galOut").innerHTML=galleryBlock(0,b.dataset.gc);}));
  renderRes();
}

/* ===================== resource view / download ===================== */
const DL = {ok:false, api:null};
function mdToHtml(md){
  const lines = md.split("\n"); let out="", list=null;
  const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\*(.+?)\*/g,"<i>$1</i>").replace(/(https:\/\/[^\s)]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
  const close = () => { if(list){ out+=`</${list}>`; list=null; } };
  for(const l of lines){
    let m;
    if((m=l.match(/^(#{1,3}) (.*)/))){ close(); const n=m[1].length+1; out+=`<h${n} ${n===2?'id="modalTitle"':""}>${inline(m[2])}</h${n}>`; }
    else if((m=l.match(/^\d+\. (.*)/))){ if(list!=="ol"){close();out+="<ol>";list="ol";} out+=`<li>${inline(m[1])}</li>`; }
    else if((m=l.match(/^\s*- (.*)/))){ if(list!=="ul"){close();out+="<ul>";list="ul";} out+=`<li>${inline(m[1])}</li>`; }
    else if(l.trim()===""){ close(); }
    else { close(); out+=`<p>${inline(l)}</p>`; }
  }
  close(); return out;
}
function dashCSV(){
  const q = s => `"${String(s??"").replace(/"/g,'""')}"`;
  return ["Dashboard,Grades,Area,What it shows,Link", ...DASHBOARDS.map(d=>[d.n,d.g,d.area,d.k,d.u||"Internal"].map(q).join(","))].join("\n");
}
function resContent(id){
  const r = RESOURCES.find(x=>x.id===id);
  if(GUIDES[id]) return {r, md:GUIDES[id].md, file:`${id}.md`};
  if(STORIES[id]) return {r, md:STORIES[id], file:`${id}.md`};
  if(id==="r-dash") return {r, csv:dashCSV(), file:"vsk-dnhdd-dashboards.csv"};
  if(r && r.img) return {r, img:r.img, file:`${id}.jpg`};
}
function openModal(html){ $("#modalBody").innerHTML = html; $("#modal").classList.add("open"); openModal.last=document.activeElement; $("#modalClose").focus(); }
function closeModal(){ $("#modal").classList.remove("open"); openModal.last?.focus?.(); }
function viewRes(id){
  const c = resContent(id); if(!c) return;
  const dlBtn = DL.ok ? `<button class="btn btn-primary btn-s" data-dl-res="${id}">Download</button>` : "";
  let body = `<p class="pill" style="display:inline-block">${esc(c.r.type)} · ${esc(c.r.ver)}</p>`;
  if(c.md) body += `<div class="doc">${mdToHtml(c.md)}</div>${c.r.type==="Guide"?'<p class="note small">Prepared from documented steps in programme materials. Confirm with the VSK team before circulating as an official manual.</p>':""}`;
  if(c.csv) body += `<h2 id="modalTitle">${esc(c.r.title)}</h2><div class="dash-list">${DASHBOARDS.map(dashRow).join("")}</div>`;
  if(c.img) body += `<h2 id="modalTitle">${esc(c.r.title)}</h2>${img(c.img,c.r.title,"",false)}`;
  body += `<div class="btn-row" style="margin-top:18px">${dlBtn}</div>`;
  openModal(body);
}
async function downloadRes(id){
  const c = resContent(id); if(!c || !DL.api) return;
  let data = c.md || c.csv;
  if(c.img){ try{ data = await (await fetch(imgSrc(c.img))).blob(); }catch(_){ toast("The image could not be fetched."); return; } }
  try { await DL.api.save({filename:c.file, data}); toast("Download started"); }
  catch(e){ if(e && e.code==="declined") return; if(e && (e.code==="unavailable"||e.code==="not_granted")){ DL.ok=false; toast("Downloads are not available here. Use View instead."); } else if(e && e.code==="rate_limited") toast("A download prompt is already open."); else toast("The file could not be saved."); }
}

/* ===================== lightbox ===================== */
const LB = {list:[], i:0, timer:null};
function openLB(list, i){ LB.list=list; LB.i=i; LB.ret=document.activeElement; $("#lb").classList.add("open"); showLB(); $("#lbClose").focus(); }
function showLB(){ const it=LB.list[LB.i]; const a=ASSETS.img[it.img]; $("#lbImg").src=a.src; $("#lbImg").alt=it.c; $("#lbCap").textContent=`${it.c}${it.d?" · "+it.d:""}`; $("#lbCount").textContent=`${LB.i+1} of ${LB.list.length}`; const solo=LB.list.length<2; ["#lbPrev","#lbNext","#lbPlay"].forEach(s=>$(s).style.visibility=solo?"hidden":"visible"); }
function stepLB(d){ LB.i=(LB.i+d+LB.list.length)%LB.list.length; showLB(); }
function stopLB(){ clearInterval(LB.timer); LB.timer=null; $("#lbPlay").innerHTML=IC.play; $("#lbPlay").setAttribute("aria-label","Play slideshow"); }
function closeLB(){ stopLB(); $("#lb").classList.remove("open"); LB.ret?.focus?.(); }

/* ===================== search ===================== */
function searchIndex(){
  return [
    ...PRODUCTS.map(p=>({t:p.name, s:"Product · "+p.tag, k:[p.name,p.tag,p.need,p.aud.join(" "),p.pillars.join(" ")].join(" "), go:"product-"+p.slug})),
    ...RESOURCES.map(r=>({t:r.title, s:"Resource · "+r.type, k:r.title+" "+r.type+" "+r.aud, res:r.id})),
    ...TIMELINE.map(t=>({t:t.t, s:"Milestone · "+t.d, k:t.t+" "+t.x+" "+t.d, go:"journey"})),
    ...DASHBOARDS.map(d=>({t:d.n, s:"Dashboard · "+d.g, k:d.n+" "+d.k+" "+d.area, go:"product-idp"})),
    ...NAV.map(([h,l])=>({t:l, s:"Page", k:l, go:h}))
  ];
}
function openSearch(){
  openModal(`<h2 id="modalTitle">Search the site</h2><label class="searchbox">${IC.search}<span class="sr">Search</span><input id="sq" type="search" placeholder="Products, guides, milestones, dashboards" autocomplete="off"></label><div class="search-res" id="sres" aria-live="polite"></div>`);
  const idx = searchIndex(), inp = $("#sq");
  const run = () => { const q=inp.value.trim().toLowerCase(); const hits = q ? idx.filter(x=>x.k.toLowerCase().includes(q)).slice(0,24) : [];
    $("#sres").innerHTML = q ? (hits.length ? hits.map(h=>h.res?`<a href="#resources" data-sres="${h.res}">${esc(h.t)}<small>${esc(h.s)}</small></a>`:`<a href="#${h.go}">${esc(h.t)}<small>${esc(h.s)}</small></a>`).join("") : `<p class="muted">Nothing found for ‘${esc(inp.value)}’. Try a product name, ‘attendance’ or ‘MIS’.</p>`) : `<p class="muted small">Try ‘attendance’, ‘RRSA’, ‘lesson plan’, ‘registry’ or ‘PGI’.</p>`; };
  inp.addEventListener("input", run); run(); setTimeout(()=>inp.focus(),30);
}

/* ===================== router ===================== */
const TITLES = {home:"Home", about:"About VSK", products:"Products & Chatbots", journey:"Journey & Achievements", resources:"Resources & Media"};
let pendingJump = null;
function router(){
  let r = currentRoute();
  let jump = pendingJump; pendingJump = null;
  if(r==="contact"){ r="home"; jump="contact"; }
  let html, wire = null, active = r;
  if(r==="home"){ html = pageHome(); wire = wireHome; }
  else if(r==="about"){ html = pageAbout(); wire = wireMap; }
  else if(r==="products"){ html = pageProducts(); wire = wireProducts; }
  else if(r==="journey"){ html = pageJourney(); wire = wireJourney; }
  else if(r==="resources"){ html = pageResources(); wire = wireResources; }
  else if(r.startsWith("product-") && P[r.slice(8)]){ html = pageProduct(r.slice(8)); wire = root=>wireDemos(root); active="products"; }
  else { html = `<section class="hero"><div class="wrap narrow"><h1>Page not found</h1><p class="lede">This link does not match a page on the site. It may have been renamed.</p><div class="btn-row"><a class="btn btn-primary" href="#home">Go to the home page</a><a class="btn btn-line" href="#products">Browse products</a></div></div></section>`; active=""; }
  fxBeforeRender(); const main = $("#main"); main.innerHTML = html; if(wire) wire(main); fxAfterRender(main); prettyLinks(document);
  $$(".nav a").forEach(a => (a.dataset.hr||a.dataset.r)===(jump==="contact"?"contact":active) ? a.setAttribute("aria-current","page") : a.removeAttribute("aria-current"));
  const pt = r.startsWith("product-")&&P[r.slice(8)] ? P[r.slice(8)].name : TITLES[r]||"VSK";
  document.title = `${pt} · VSK DNH&DD`;
  $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false");
  $("#skiplink").setAttribute("href", location.hash||"#home");
  if(jump){ requestAnimationFrame(()=>scrollToAnchor(jump)); } else { window.scrollTo(0,0); }
  main.focus({preventScroll:true});
}
function scrollToAnchor(a){ const el = $(`[data-anchor="${a}"]`); if(el) el.scrollIntoView({behavior:RM?"auto":"smooth", block:"start"}); }

/* ===================== global events ===================== */
function initGlobal(){
  window.addEventListener("hashchange", () => { if(!VT.pretty) router(); else if(isRoute(location.hash.slice(1))) go(location.hash.slice(1), null, true); });
  window.addEventListener("popstate", router);
  document.addEventListener("click", e => {
    if(e.defaultPrevented || e.button!==0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]"); if(!a || a.id==="skiplink" || a.target==="_blank") return;
    const r = a.dataset.hr || routeFromHref(a.getAttribute("href")); if(!r || !VT.pretty) return;
    e.preventDefault(); e.stopPropagation();
    if($("#modal").classList.contains("open")) closeModal();
    go(r, a.dataset.jump || null);
  }, true);
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-goto],[data-jump],[data-lb],[data-lbk],[data-view-res],[data-dl-res],[data-copy],[data-sres],a[href^='#']");
    if(!t) return;
    if(t.id==="skiplink"){ e.preventDefault(); $("#main").focus(); return; }
    if(t.dataset.goto){ e.preventDefault(); scrollToAnchor(t.dataset.goto); return; }
    if(t.dataset.jump){ const target = t.getAttribute("href"); if(location.hash===target){ e.preventDefault(); scrollToAnchor(t.dataset.jump); } else pendingJump = t.dataset.jump; return; }
    if(t.dataset.lb!==undefined){ openLB(GALLERY, +t.dataset.lb); return; }
    if(t.dataset.lbk){ const g = GALLERY.find(x=>x.img===t.dataset.lbk); openLB([g||{img:t.dataset.lbk,c:t.querySelector("img")?.alt||""}],0); return; }
    if(t.dataset.viewRes){ viewRes(t.dataset.viewRes); return; }
    if(t.dataset.dlRes){ downloadRes(t.dataset.dlRes); return; }
    if(t.dataset.copy){ navigator.clipboard?.writeText(t.dataset.copy).then(()=>toast("Link copied"),()=>toast("Copy failed. Select the link instead.")); return; }
    if(t.dataset.sres){ closeModal(); if(location.hash==="#resources"){ e.preventDefault(); } setTimeout(()=>viewRes(t.dataset.sres), 60); return; }
    if(t.matches("a[href^='#']") && $("#modal").classList.contains("open")) closeModal();
    if(t.matches("a[href^='#']") && t.getAttribute("href")===location.hash && !t.dataset.jump){ e.preventDefault(); if(location.hash==="#contact") scrollToAnchor("contact"); else window.scrollTo({top:0,behavior:RM?"auto":"smooth"}); }
  });
  document.addEventListener("keydown", e => {
    const tgt = e.target;
    if((e.key==="Enter"||e.key===" ") && tgt.matches && tgt.matches("figure[data-lb],[data-lbk]")){ e.preventDefault(); tgt.click(); }
    if($("#lb").classList.contains("open")){ if(e.key==="Escape") closeLB(); if(e.key==="ArrowRight") stepLB(1); if(e.key==="ArrowLeft") stepLB(-1); return; }
    if($("#modal").classList.contains("open") && e.key==="Escape") closeModal();
    if(e.key==="/" && !/input|textarea|select/i.test(tgt.tagName) && !$("#modal").classList.contains("open")){ e.preventDefault(); openSearch(); }
  });
  $("#searchBtn").addEventListener("click", openSearch);
  $("#menuBtn").addEventListener("click", () => { const o = $("#nav").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); });
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if(e.target.id==="modal") closeModal(); });
  $("#lbClose").addEventListener("click", closeLB);
  $("#lbPrev").addEventListener("click", ()=>{stopLB();stepLB(-1);});
  $("#lbNext").addEventListener("click", ()=>{stopLB();stepLB(1);});
  $("#lbPlay").addEventListener("click", () => { if(LB.timer) stopLB(); else { LB.timer=setInterval(()=>stepLB(1),3200); $("#lbPlay").innerHTML=IC.pause; $("#lbPlay").setAttribute("aria-label","Pause slideshow"); } });
  $("#themeBtn").addEventListener("click", () => {
    const root=document.documentElement, cur=root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
    root.dataset.theme = cur==="dark"?"light":"dark";
    try{ localStorage.setItem("vsk-theme", root.dataset.theme); }catch(_){}
  });
  try{ const s=localStorage.getItem("vsk-theme"); if(s) document.documentElement.dataset.theme=s; }catch(_){}
}


/* =====================================================================
   CINEMATIC LAYER: 3D hero, scroll story, integration band, 3D phone
   demos, selectable system map, illuminated timeline, card lighting.
   Functions declared here replace earlier versions with the same name.
   ===================================================================== */
const FX = {hero:null, cleanups:[]};
const THREE_URL = VT.threeUrl || "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
let threePromise = null;
function loadThree(){
  if(window.THREE) return Promise.resolve();
  if(!threePromise) threePromise = new Promise((res,rej)=>{ const s=document.createElement("script"); s.src=THREE_URL; s.async=true; s.onload=res; s.onerror=rej; document.head.appendChild(s); });
  return threePromise;
}
const FINE = window.matchMedia("(pointer:fine)").matches;
const CHECK = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>';
const CLOCK = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>';

/* ---------------- HOME ---------------- */
function pageHome(){
  const demoTabs = ["smart-attendance","pragati","swadhyay","shikshak-samarthya","field-monitoring","saajha"];
  const featured = demoTabs.map(s=>P[s]);
  return `
  <section class="cine" aria-label="Introduction">
    <div class="cine-stage" id="cineStage">
      <div class="cine-fallback" aria-hidden="true">${mapSVG("cineFb", false)}</div>
    </div>
    <div class="fpanels" aria-label="Highlights">
      <a class="fpanel fp-adm" data-fp="adm" href="#product-mis"><span class="k"><i></i>Administration</span><span class="v">100%</span><span class="s">first-time MIS login, State to School · Jul 2026</span></a>
      <a class="fpanel fp-att" data-fp="att" href="#product-smart-attendance"><span class="k"><i></i>Attendance</span><span class="v">99%</span><span class="s">schools submitting student attendance · Oct 2026</span></a>
      <a class="fpanel fp-ass" data-fp="ass" href="#product-pragati"><span class="k"><i></i>Assessment</span><span class="v">99.32%</span><span class="s">RRSA endline data on SBA 2.0 · Mar 2026</span></a>
    </div>
    <div class="cine-copy">
      <div class="cine-eyebrow">${img("utlogo","UT emblem","",false)}<span>Vidya Samiksha Kendra<br>Department of Education, UT of DNH&amp;DD</span></div>
      <h1>Connecting Schools. <span>Turning Insights into Action.</span></h1>
      <p class="lede">VSK is the department’s review centre at Shiksha Sadan, Moti Daman. It brings attendance, assessment and school records from all ${UT.schools} schools in Dadra and Nagar Haveli, Daman and Diu onto one screen, so officers, Head Masters and teachers act on the same facts.</p>
      <div class="btn-row"><a class="btn btn-primary" href="#products">Explore Products</a><a class="btn btn-line" href="#journey">View Our Journey</a></div>
      <div class="cine-meta"><span>Under Samagra Shiksha, Ministry of Education</span><span>Technology partner</span>${img("cglogo","ConveGenius","",false)}</div>
    </div>
    <div class="cine-legend"><span><i style="background:#f2a13b"></i>UT districts, actual boundaries</span><span><i style="background:#46d6e0"></i>Data flowing to VSK</span><span><i style="background:#f2a13b;opacity:.7"></i>Insight returning as action</span><span>School nodes are illustrative, not actual locations</span></div>
    <button class="cue" data-goto="story" aria-label="Scroll to how VSK works">Scroll</button>
  </section>

  <div class="wrap"><nav class="strip" aria-label="Milestones">${MILESTONES.map(m=>`<a href="#${m.go}" class="tiltable"><div class="v">${esc(m.v)}</div><div class="l">${esc(m.l)}</div><div class="p">${esc(m.p)}</div></a>`).join("")}</nav></div>

  <section class="ss" data-anchor="story"><div class="wrap">
    <div class="sec-head" style="margin-bottom:8px"><div><h2 style="color:#fff">How VSK works</h2><p class="muted">From a classroom in Khanvel to a review at Moti Daman, in five steps. Keep scrolling.</p></div></div>
    <div class="ss-grid">
      <div class="ss-visual">${storySVG()}</div>
      <div class="ss-steps">${MAP_LAYERS.map((l,i)=>`<div class="ss-step" data-stage="${i+1}"><span class="n">Step ${i+1} of 5</span><h3>${esc(l.t)}</h3><p>${esc(l.b)}</p><div class="btn-row">${l.prods.map(s=>`<a class="chip" href="#product-${s}">${esc(P[s].name.split(":")[0])}</a>`).join("")}</div></div>`).join("")}</div>
    </div>
  </div></section>

  ${integBand()}

  <section class="sec-ink" data-anchor="watch"><div class="wrap">
    <div class="sec-head"><div><h2>Watch the chatbots work</h2><p class="muted">Six chatbots built for the UT, step by step. Pick one and press play; at the last step, see where the data lands.</p></div></div>
    <div class="tabs" role="tablist" aria-label="Chatbot demonstrations">${demoTabs.map((s,i)=>`<button role="tab" aria-selected="${i===0}" data-tab="${s}">${esc(P[s].name.split(":")[0].replace(" (SBA 2.0)",""))}</button>`).join("")}</div>
    <div id="homeDemo">${demoBlock(P[demoTabs[0]])}</div>
    <p class="note" style="margin-top:24px">A VSK overview film and recorded tutorials will appear here once the department publishes them.</p>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <div class="sec-head"><div><h2>DNH&amp;DD at a glance</h2><p class="muted">School figures as on 15 Sept 2026 (enrolment by district, Aug 2026).</p></div></div>
    <div class="grid g4 reveal" style="margin-bottom:28px">
      <div class="statcol"><span class="bigstat" data-count="410">${UT.schools}</span><span>schools</span><span class="p">DNH 328 · Daman 61 · Diu 21</span></div>
      <div class="statcol"><span class="bigstat">${UT.students}</span><span>students, KG to 12</span><span class="p">Sept 2026</span></div>
      <div class="statcol"><span class="bigstat">${UT.teachers}</span><span>teachers</span><span class="p">Sept 2026</span></div>
      <div class="statcol"><span class="bigstat">${UT.ptr}</span><span>average pupil-teacher ratio</span><span class="p">Diu 24 · DNH 28 · Daman 29</span></div>
    </div>
    <div class="grid g2 reveal">
      <div class="card tiltable"><h3>Attendance: four months of gains</h3><p class="muted small">Share of expected students and teachers with attendance marked, and present rate among those marked.</p>${attendanceChart()}</div>
      <div class="card tiltable"><h3>RRSA: children at the top level, cycle by cycle</h3><p class="muted small">Classes 3 to 8, Language (Story) and Maths (Division).</p>${rrsaChart()}</div>
    </div>
  </div></section>

  <section><div class="wrap">
    <div class="sec-head"><div><h2>Products built for the UT</h2><p class="muted">Six UT chatbots, three platforms and ten Bot Store bots. Status shows what is live today.</p></div><a class="btn btn-line" href="#products">See all ${PRODUCTS.length} products</a></div>
    <div class="grid g3">${featured.map((p,i)=>pcard(p,i===0)).join("")}</div>
    <div class="grid g3" style="margin-top:18px">${["mis","idp","crm-ivrs"].map(s=>pcard(P[s])).join("")}</div>
  </div></section>

  <section class="sec-tint"><div class="wrap">
    <div class="sec-head"><div><h2>What changed</h2><p class="muted">Four results, each with the work behind it and where the number comes from.</p></div><a class="btn btn-line" href="#journey">Full journey</a></div>
    <div class="grid" style="gap:22px">
      <article class="story reveal">${img("teacherbot","A teacher recording assessment on the Pragati bot")}<div class="txt"><h3>Assessment moved from Excel to the bot, and teachers asked for more</h3><p class="muted">RRSA FLN assessment for Classes 3 to 8 ran on Pragati (SBA 2.0) for the first time in November 2025.</p><div class="k"><div class="statcol"><span class="bigstat">47,000+</span><span class="p">students assessed, 2025-26</span></div><div class="statcol"><span class="bigstat">99.32%</span><span class="p">endline data, Mar 2026</span></div></div><blockquote><p class="gu" lang="gu">BOT દ્વારા કામ કરવું વધુ સુગમ અને અસરકારક રહ્યું.</p><cite>Smt. P.J. Chudasama, GPS Vanakbara, Diu</cite></blockquote><p style="margin-top:14px"><a href="#product-pragati">How Pragati works</a></p></div></article>
      <article class="story reveal">${img("misorient","MIS orientation for officers")}<div class="txt"><h3>Every MIS user, at every level, logged in</h3><p class="muted">Calls to Head Masters, a pending-schools list shared weekly with CRCs and BRCs, and a 2-hour MIS block in teacher training.</p><div class="k"><div class="statcol"><span class="bigstat">45% to 100%</span><span class="p">first-time login, Dec 2025 to Jul 2026</span></div><div class="statcol"><span class="bigstat">421</span><span class="p">schools on a clean registry</span></div></div><p><a href="#product-mis">About the MIS</a></p></div></article>
      <div class="grid g2 reveal">
        <article class="card tiltable"><h3>Attendance marking, June to October 2026</h3><p class="muted">Daily nudges to EOs, BRCs, CRCs and HMs, IVRS calls to low-marking schools, and named-school reports to the SPD.</p><div style="display:flex;gap:28px;flex-wrap:wrap"><div class="statcol"><span class="bigstat">2% to 67%</span><span class="p">student marking</span></div><div class="statcol"><span class="bigstat">99%</span><span class="p">schools submitting student attendance, Oct</span></div></div><p><a href="#product-smart-attendance">About Smart Attendance</a></p></article>
        <article class="card tiltable"><h3>PGI 2025-26: 2nd in India</h3>${pgiChart()}<p class="muted small">Diu ranked 1st, DNH 31st and Daman 54th of 784 districts on PGI-D 2025-26.</p></article>
      </div>
    </div>
  </div></section>

  <section><div class="wrap">
    <div class="sec-head"><div><h2>Gallery</h2><p class="muted">The centre, reviews and visits, training, and the posters that go out on the VSK channel.</p></div><a class="btn btn-line" href="#resources" data-jump="gallery">Full gallery</a></div>
    ${galleryBlock(10)}
  </div></section>

  <section class="sec-tint"><div class="wrap two">
    <div><h2>Latest highlights</h2><p class="muted">Filter by type.</p><div class="btn-row" id="hlFilter">${["All","Milestone","Product","Training","Communication"].map((t,i)=>`<button class="chip" aria-pressed="${i===0}" data-hl="${t}">${t}</button>`).join("")}</div></div>
    <div class="hl-list" id="hlList"></div>
  </div></section>

  ${contactBlock()}`;
}
function integBand(){
  const done = RVSK.filter(r=>r.done), rest = RVSK.filter(r=>!r.done);
  return `<section class="integ" data-anchor="integration"><div class="wrap">
    <div class="sec-head"><div><h2 style="color:#fff">Connected to the national VSK</h2><p class="muted">Integration status of the UT’s data with the Rashtriya Vidya Samiksha Kendra on the 6A framework. This shows what data reaches RVSK. It is separate from whether individual products are live.</p></div></div>
    <div class="integ-grid">
      ${done.map(r=>`<div class="itile"><span class="ck">${CHECK}</span><h3>${esc(r.p)}</h3><span class="tool">${esc(r.tool)}</span><span class="st">Integration completed</span></div>`).join("")}
      <div class="itile prog"><span class="ck">${CLOCK}</span><h3>Remaining RVSK 6A components</h3><span class="tool">${rest.map(r=>esc(r.p)).join(" · ")}</span><span class="st">In progress</span><div class="meter" aria-hidden="true"><i></i></div><span class="tool">3 of 6 pillars integrated</span></div>
    </div>
    <p class="source">Status as confirmed by the VSK team, November 2026.</p>
  </div></section>`;
}
function storySVG(){
  const band = (i, y, label, inner) => `<g class="band" data-b="${i}"><rect class="bg" x="10" y="${y}" width="500" height="86" rx="14"/><text class="lbl" x="28" y="${y+24}">${label}</text>${inner}</g>`;
  const nodes = (y, arr, w=88) => arr.map((t,i)=>{const x=28+i*(w+8);return `<rect class="nd" x="${x}" y="${y+36}" width="${w}" height="34" rx="9"/><text class="nt" x="${x+w/2}" y="${y+57}" text-anchor="middle">${t}</text>`}).join("");
  const conn = (i, y) => `<path class="conn" data-c="${i}" d="M260 ${y} L260 ${y+24}"/>`;
  const bars = (x,y) => [18,28,22,34,26].map((h,i)=>`<rect class="dash-bar ${i===3?"s":""}" x="${x+8+i*14}" y="${y+60-h}" width="9" height="${h}" rx="2"/>`).join("");
  return `<svg viewBox="0 0 560 570" role="img" aria-label="Diagram: people and activity in school, captured by chatbots and the portal, processed into one registry, shown on dashboards, and acted on in reviews, with insight returning to schools">
   ${band(1,10,"People and activity in school",nodes(10,["Students","Teachers","HMs","Parents","CRC · BRC"]))}
   ${conn(1,96)}
   ${band(2,120,"Chatbots and the portal",nodes(120,["Attendance","Pragati","Swadhyay","FMB","MIS"]))}
   ${conn(2,206)}
   ${band(3,230,"Processed and validated",`<rect class="nd" x="28" y="266" width="464" height="34" rx="9"/><text class="nt" x="260" y="287" text-anchor="middle">UDISE+ API · checks · cleaning · one registry</text><circle class="pipe-dot" cx="80" cy="283" r="5"/><circle class="pipe-dot" cx="80" cy="283" r="5" style="animation-delay:-.8s"/><circle class="pipe-dot" cx="80" cy="283" r="5" style="animation-delay:-1.6s"/>`)}
   ${conn(3,316)}
   ${band(4,340,"21 dashboards on IDP",[0,1,2,3].map(i=>`<rect class="nd" x="${28+i*118}" y="372" width="108" height="48" rx="8"/>${bars(28+i*118,360)}`).join(""))}
   ${conn(4,426)}
   ${band(5,450,"Review, decision and follow-up",nodes(450,["Monthly review","School list","IVRS calls","RVSK"],112))}
   <path class="ret" d="M510 493 C 552 493 552 53 510 53"/>
   <text class="ret-t" x="548" y="280" transform="rotate(90 548 280)" text-anchor="middle">insight returns to schools</text>
  </svg>`;
}
function wireStory(root){
  const steps = $$(".ss-step", root); if(!steps.length) return;
  const svg = $(".ss-visual svg", root);
  const set = n => {
    steps.forEach(s => s.classList.toggle("on", +s.dataset.stage===n));
    $$(".band", svg).forEach(b => { const i=+b.dataset.b; b.classList.toggle("lit", i<=n); b.classList.toggle("cur", i===n); });
    $$(".conn", svg).forEach(c => c.classList.toggle("lit", +c.dataset.c < n));
    $$(".ret,.ret-t", svg).forEach(r => r.classList.toggle("lit", n>=5));
  };
  if(window.innerWidth<=900 || RM){ set(5); steps.forEach(s=>s.classList.add("on")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) set(+e.target.dataset.stage); }), {rootMargin:"-45% 0px -45% 0px"});
  steps.forEach(s=>io.observe(s)); set(1);
  FX.cleanups.push(()=>io.disconnect());
}
function wireHome(root){
  wireDemos(root); wireStory(root); initHero3D();
  $$("[data-tab]", root).forEach(b => b.addEventListener("click", () => {
    $$("[data-tab]", root).forEach(x=>x.setAttribute("aria-selected", x===b));
    $("#homeDemo").innerHTML = demoBlock(P[b.dataset.tab]); wireDemos($("#homeDemo"));
  }));
  const hl = t => { $("#hlList").innerHTML = HIGHLIGHTS.filter(h=>t==="All"||h.ty===t).map(h=>`<div class="hl"><span class="d">${esc(h.d)}<br><span class="pill">${esc(h.ty)}</span></span><div><h4><a href="#${h.go}">${esc(h.t)}</a></h4><p>${esc(h.x)}</p></div></div>`).join(""); };
  $$("[data-hl]", root).forEach(b => b.addEventListener("click",()=>{ $$("[data-hl]",root).forEach(x=>x.setAttribute("aria-pressed",x===b)); hl(b.dataset.hl); }));
  hl("All");
}

/* ---------------- 3D hero ---------------- */
function parseRings(d){
  return d.split("M").filter(Boolean).map(seg => seg.replace("Z","").split("L").map(pt => pt.split(",").map(Number)));
}
function pip(pt, ring){ let c=false; for(let i=0,j=ring.length-1;i<ring.length;j=i++){ const [xi,yi]=ring[i],[xj,yj]=ring[j]; if(((yi>pt[1])!==(yj>pt[1])) && (pt[0] < (xj-xi)*(pt[1]-yi)/(yj-yi)+xi)) c=!c; } return c; }
async function initHero3D(){
  const host = $("#cineStage"); if(!host) return;
  const panels = $$(".fpanel");
  let gl=false; try{ const c=document.createElement("canvas"); gl=!!(c.getContext("webgl2")||c.getContext("webgl")); }catch(_){}
  const weak = (navigator.hardwareConcurrency||4) < 4 || (navigator.connection && navigator.connection.saveData);
  if(RM || !gl || weak){ host.classList.add("lite"); return; }
  try{ await loadThree(); }catch(_){ host.classList.add("lite"); return; }
  if(!document.body.contains(host)) return;
  const T = window.THREE, M = ASSETS.map, S = 45;
  const W = (x,y,h=0) => new T.Vector3((x-500)/S, h, (y-230)/S);
  const renderer = new T.WebGLRenderer({antialias:true, alpha:true, powerPreference:"high-performance"});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 1.75));
  host.appendChild(renderer.domElement);
  const scene = new T.Scene(); scene.fog = new T.Fog(0x070d22, 34, 80);
  const cam = new T.PerspectiveCamera(36, 1, 0.1, 100);
  scene.add(new T.AmbientLight(0x8fa3ff, .8));
  const dl = new T.DirectionalLight(0xffffff, .9); dl.position.set(4,12,8); scene.add(dl);
  const map = new T.Group(); map.rotation.x = -Math.PI/2; scene.add(map);
  const toShape = ring => { const s=new T.Shape(); ring.forEach(([x,y],i)=>{ const X=(x-500)/S, Y=-(y-230)/S; i?s.lineTo(X,Y):s.moveTo(X,Y); }); return s; };
  // context land + outlines
  const ctxRings = parseRings(M.ctx).filter(r=>r.length>3);
  map.add(new T.Mesh(new T.ShapeGeometry(ctxRings.map(toShape)), new T.MeshBasicMaterial({color:0x1a2a63, transparent:true, opacity:.95})));
  const linePts = r => { const a=[]; for(let i=0;i<r.length;i++){ const p=r[i], q=r[(i+1)%r.length]; a.push((p[0]-500)/S, -(p[1]-230)/S, .002, (q[0]-500)/S, -(q[1]-230)/S, .002); } return a; };
  const og = new T.BufferGeometry(); og.setAttribute("position", new T.Float32BufferAttribute(ctxRings.flatMap(linePts),3));
  map.add(new T.LineSegments(og, new T.LineBasicMaterial({color:0x4a6cc0, transparent:true, opacity:.7})));
  // grid on the sea
  const grid = new T.GridHelper(60, 90, 0x1d2b63, 0x15204d); grid.position.y = -.02; grid.material.transparent=true; grid.material.opacity=.45; scene.add(grid);
  // UT districts, extruded
  const utMat = new T.MeshStandardMaterial({color:0xf2a13b, emissive:0xb0520f, emissiveIntensity:.8, roughness:.45, metalness:.1});
  const utRings = {};
  Object.entries(M.ut).forEach(([k,d]) => { const rings = parseRings(d).filter(r=>r.length>2); utRings[k]=rings;
    rings.forEach(r => { const g = new T.ExtrudeGeometry(toShape(r), {depth:.3, bevelEnabled:false}); map.add(new T.Mesh(g, utMat));
      const lg = new T.BufferGeometry(); lg.setAttribute("position", new T.Float32BufferAttribute(linePts(r).map((v,i)=>i%3===2?.305:v),3)); map.add(new T.LineSegments(lg, new T.LineBasicMaterial({color:0xffd59a}))); }); });
  // sprite texture
  const glowTex = (() => { const c=document.createElement("canvas"); c.width=c.height=64; const x=c.getContext("2d"); const g=x.createRadialGradient(32,32,0,32,32,32); g.addColorStop(0,"rgba(255,255,255,1)"); g.addColorStop(.25,"rgba(255,255,255,.75)"); g.addColorStop(1,"rgba(255,255,255,0)"); x.fillStyle=g; x.fillRect(0,0,64,64); return new T.CanvasTexture(c); })();
  const pmat = (color,size,op=1) => new T.PointsMaterial({color, size, map:glowTex, transparent:true, opacity:op, depthWrite:false, blending:T.AdditiveBlending});
  // hub
  const hubP = W(M.motidaman[0], M.motidaman[1], .2);
  const hub = new T.Group(); hub.position.copy(hubP); scene.add(hub);
  hub.add(new T.Mesh(new T.SphereGeometry(.16,24,24), new T.MeshBasicMaterial({color:0xffffff})));
  const halo = new T.Sprite(new T.SpriteMaterial({map:glowTex, color:0x46d6e0, transparent:true, blending:T.AdditiveBlending, depthWrite:false})); halo.scale.set(2.8,2.8,1); hub.add(halo);
  const ringM = new T.MeshBasicMaterial({color:0x46d6e0, transparent:true, side:T.DoubleSide, depthWrite:false, blending:T.AdditiveBlending});
  const ring = new T.Mesh(new T.RingGeometry(.32,.37,48), ringM); ring.rotation.x=-Math.PI/2; hub.add(ring);
  const beam = new T.Mesh(new T.CylinderGeometry(.015,.06,3.2,12,1,true), new T.MeshBasicMaterial({color:0x46d6e0, transparent:true, opacity:.45, blending:T.AdditiveBlending, depthWrite:false})); beam.position.y=1.6; hub.add(beam);
  const pl = new T.PointLight(0x46d6e0, 1.2, 6); pl.position.y=.6; hub.add(pl);
  // illustrative school nodes, sampled inside the real district shapes
  let seed = 7; const rnd = () => (seed = (seed*16807) % 2147483647) / 2147483647;
  const counts = {dnh:38, daman:12, diu:8}, nodesW = [];
  Object.entries(counts).forEach(([k,n]) => { const rings = utRings[k]; const all = rings.flat(); const xs=all.map(p=>p[0]), ys=all.map(p=>p[1]);
    const [x0,x1,y0,y1] = [Math.min(...xs),Math.max(...xs),Math.min(...ys),Math.max(...ys)]; let tries=0;
    while(n>0 && tries<4000){ tries++; const pt=[x0+rnd()*(x1-x0), y0+rnd()*(y1-y0)]; if(rings.some(r=>pip(pt,r))){ nodesW.push(W(pt[0],pt[1],.24)); n--; } } });
  const ng = new T.BufferGeometry().setFromPoints(nodesW); scene.add(new T.Points(ng, pmat(0xbff6fa,.42)));
  // arcs
  const curves = nodesW.map(p => { const mid = p.clone().lerp(hubP,.5); mid.y = .35 + p.distanceTo(hubP)*.22; return new T.QuadraticBezierCurve3(p, mid, hubP); });
  const arcPts = []; curves.forEach(c => { const pts=c.getPoints(28); for(let i=0;i<pts.length-1;i++){ arcPts.push(pts[i],pts[i+1]); } });
  scene.add(new T.LineSegments(new T.BufferGeometry().setFromPoints(arcPts), new T.LineBasicMaterial({color:0x46d6e0, transparent:true, opacity:.3, blending:T.AdditiveBlending, depthWrite:false})));
  const mkFlow = (count, color, size) => { const pos=new Float32Array(count*3); const g=new T.BufferGeometry(); g.setAttribute("position", new T.BufferAttribute(pos,3)); const pts=new T.Points(g, pmat(color,size)); scene.add(pts);
    return {g, pos, items:Array.from({length:count},()=>({c:Math.floor(rnd()*curves.length), t:rnd(), s:.12+rnd()*.18}))}; };
  const inflow = mkFlow(Math.min(90, curves.length*2), 0x46d6e0, .34), outflow = mkFlow(34, 0xf2a13b, .4);
  // dust
  const dustN = window.innerWidth<700 ? 260 : 620, dp = new Float32Array(dustN*3);
  for(let i=0;i<dustN;i++){ dp[i*3]=(rnd()-.5)*34; dp[i*3+1]=rnd()*7; dp[i*3+2]=(rnd()-.5)*20; }
  const dg = new T.BufferGeometry(); dg.setAttribute("position", new T.BufferAttribute(dp,3)); const dust = new T.Points(dg, pmat(0x8fa3ff,.07,.6)); scene.add(dust);
  // panel anchors
  const dnhC = (() => { const r=utRings.dnh.flat(); const x=r.reduce((a,p)=>a+p[0],0)/r.length, y=r.reduce((a,p)=>a+p[1],0)/r.length; return W(x,y,.4); })();
  const diuP = W(M.diu[0], M.diu[1], .4);
  const anchors = {adm: hubP.clone().add(new T.Vector3(0,3.3,0)), att: dnhC, ass: diuP};
  const offs = {adm:[-250,-150], att:[-250,40], ass:[30,60]};
  // camera framing
  const target = new T.Vector3(.2, 0, .6), dir = new T.Vector3(0,.64,.77).normalize();
  let w=1,h=1, dist=18;
  const resize = () => { const r=host.getBoundingClientRect(); w=Math.max(1,r.width); h=Math.max(1,r.height); renderer.setSize(w,h,false); cam.aspect=w/h;
    const needW = 21; dist = Math.max(15, needW/(2*Math.tan(T.MathUtils.degToRad(cam.fov/2))*cam.aspect)*.95); cam.updateProjectionMatrix(); };
  resize(); window.addEventListener("resize", resize);
  const ptr = {x:0,y:0,tx:0,ty:0};
  const onMove = e => { const r=host.getBoundingClientRect(); ptr.tx=((e.clientX-r.left)/r.width-.5)*2; ptr.ty=((e.clientY-r.top)/r.height-.5)*2; };
  if(FINE) window.addEventListener("pointermove", onMove);
  let visible = true, raf = 0, t0 = performance.now(), last = t0;
  const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; if(visible && !raf) raf=requestAnimationFrame(loop); }, {threshold:0}); io.observe(host);
  const v = new T.Vector3();
  function step(f, dt){
    f.items.forEach((it,i) => { it.t += it.s*dt; if(it.t>1){ it.t-=1; it.c=Math.floor(rnd()*curves.length); }
      const tt = f===outflow ? 1-it.t : it.t; curves[it.c].getPoint(tt, v); f.pos[i*3]=v.x; f.pos[i*3+1]=v.y; f.pos[i*3+2]=v.z; });
    f.g.attributes.position.needsUpdate = true;
  }
  function loop(now){
    raf = 0; if(!visible || document.hidden) return;
    const dt = Math.min(.05,(now-last)/1000); last = now; const el = (now-t0)/1000;
    const intro = Math.min(1, el/2.8), ease = 1-Math.pow(1-intro,3);
    ptr.x += (ptr.tx-ptr.x)*.05; ptr.y += (ptr.ty-ptr.y)*.05;
    const yaw = Math.sin(el*.18)*.07 + ptr.x*.12, pitch = ptr.y*.05;
    const d = dist*(1.45-.45*ease);
    const off = dir.clone().applyAxisAngle(new T.Vector3(0,1,0), yaw + (1-ease)*.5); off.y += pitch + (1-ease)*.35;
    cam.position.copy(target).addScaledVector(off.normalize(), d); cam.lookAt(target);
    step(inflow, dt); step(outflow, dt);
    const pulse = (el*.6)%1; ring.scale.setScalar(1+pulse*2.2); ringM.opacity = (1-pulse)*.9; halo.material.opacity = .75+.25*Math.sin(el*3);
    dust.rotation.y = el*.01;
    renderer.render(scene, cam);
    panels.forEach(p => { const a = anchors[p.dataset.fp]; if(!a) return; v.copy(a).project(cam); const [ox,oy]=offs[p.dataset.fp];
      const x = (v.x*.5+.5)*w + ox, y = (-v.y*.5+.5)*h + oy; const cx = Math.max(6, Math.min(w-p.offsetWidth-6, x)), cy = Math.max(6, Math.min(h-p.offsetHeight-6, y));
      p.style.transform = `translate(${cx}px,${cy}px)`; if(el>1.6) p.classList.add("show"); });
    raf = requestAnimationFrame(loop);
  }
  host.classList.add("ready"); raf = requestAnimationFrame(loop);
  FX.hero = () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onMove); renderer.dispose(); scene.traverse(o=>{ o.geometry&&o.geometry.dispose(); }); };
}

/* ---------------- 3D phone demo ---------------- */
const DEMO_NOTES = {
 "smart-attendance":["Teacher opens the bot with their registered number","Class list loads from the MIS registry","Only absentees are typed; everyone else is present","A summary to check before submitting","Saved and sent to the attendance dashboards"],
 "pragati":["School code identifies the school and its registry","Assessment cycle, class and subject","A level for each child, Letter to Story","A pending count, so no child is missed","Class complete; data flows to the RRSA dashboard"],
 "swadhyay":["A weekly quiz on at-grade and prerequisite concepts","Multiple-choice answers in chat","An instant score","Answer key and a remedial video"],
 "shikshak-samarthya":["The teacher picks a grade","Subject and chapter","Lesson plan, video or worksheet","Material arrives in chat, with a prerequisite option"],
 "field-monitoring":["The officer picks the survey","The school is confirmed by code","Questions answered on the visit","The submission reaches the WLE dashboard"],
 "saajha":["A parent asks in their own words","A plain-language answer","Follow-up questions are welcome"],
 "parent-connect":["The HM creates an e-PTM invitation","Parents receive it on their phone"]
};
function demoBlock(p){
  if(!p.demo) return "";
  const notes = DEMO_NOTES[p.slug] || [];
  const dashCards = (p.dash||[]).slice(0,2).map(n=>`<div class="lcard"><small>Dashboard</small><b>${esc(n)}</b><div class="bars">${[40,62,55,78,70,88,74].map((v,i)=>`<i style="height:${v}%;animation-delay:${i*60}ms"></i>`).join("")}</div></div>`).join("");
  const shot = (p.shots||[])[0];
  const shotCard = shot ? `<div class="lcard"><small>Screenshot</small><b>${esc(shot[1])}</b>${img(shot[0],shot[1])}<button class="fs" data-lbk="${shot[0]}">View full screen</button></div>` : "";
  return `<div class="demo demo3d" data-demo="${p.slug}">
   <div>
     <ol class="demo-steps">${p.demo.map((s,i)=>`<li><button data-step="${i}"><span class="n">${i+1}</span><span>${esc(s.label)}</span></button></li>`).join("")}</ol>
     <div class="demo-ctl"><button class="btn btn-primary btn-s" data-act="play">${IC.play}<span>Play</span></button><button class="btn btn-line btn-s" data-act="replay">${IC.replay}<span>Replay</span></button></div>
     <p class="demo-note">Sample walkthrough, recreated from the documented flow. School codes, names and numbers are samples, not real records.${p.link?` <a href="#product-${p.slug}">Product page and live link</a>`:""}</p>
   </div>
   <div class="demo-stage">
     <div class="fnote" aria-live="polite"><span class="k">Step 1</span><b>${esc(p.demo[0].label)}</b><p>${esc(notes[0]||"")}</p></div>
     <div class="phone-rig"><div class="phone" aria-label="${esc(p.name)} sample conversation"><div class="screen">
       <div class="bar"><span class="av">${esc(p.name[0])}</span><div><b>${esc(p.name.split(":")[0])}</b><small>SwiftChat · VSK DNH&amp;DD · sample</small></div></div>
       <div class="chat"></div><div class="inp">Type a message</div></div></div></div>
     ${dashCards||shotCard?`<div class="landing"><span class="landed-tag">Where the data lands</span>${dashCards}${shotCard}</div>`:""}
   </div>
  </div>`;
}
function wireDemos(root){
  $$("[data-demo]", root).forEach(el => {
    const p = P[el.dataset.demo]; const chat = $(".chat", el); const btns = $$("[data-step]", el);
    const playBtn = $('[data-act="play"]', el), note = $(".fnote", el), rig = $(".phone-rig", el), notes = DEMO_NOTES[p.slug]||[];
    let cur = -1, timer = null, playing = false;
    const msgHTML = m => m.file ? `<div class="msg bot file"><i></i><span>${esc(m.t)}<br><small>PDF</small></span></div>`
      : `<div class="msg ${m.f}">${esc(m.t)}${m.o?`<div class="opts">${m.o.map(o=>`<span>${esc(o)}</span>`).join("")}</div>`:""}</div>`;
    const renderTo = i => { chat.innerHTML = p.demo.slice(0,i+1).flatMap(s=>s.msgs).map(msgHTML).join(""); chat.scrollTop = chat.scrollHeight;
      btns.forEach((b,j)=> j===i ? b.setAttribute("aria-current","step") : b.removeAttribute("aria-current")); cur = i;
      if(note){ note.classList.add("swap"); setTimeout(()=>{ note.innerHTML = `<span class="k">Step ${i+1} of ${p.demo.length}</span><b>${esc(p.demo[i].label)}</b><p>${esc(notes[i]||"")}</p>`; note.classList.remove("swap"); }, RM?0:180); }
      el.classList.toggle("landed", i===p.demo.length-1 && !!$(".landing", el)); };
    const setPlay = on => { playing = on; playBtn.innerHTML = on ? `${IC.pause}<span>Pause</span>` : `${IC.play}<span>Play</span>`; };
    const stepOn = () => {
      if(cur >= p.demo.length-1){ setPlay(false); return; }
      const next = cur+1;
      if(!RM){ chat.insertAdjacentHTML("beforeend",'<div class="typing"><i></i><i></i><i></i></div>'); chat.scrollTop = chat.scrollHeight; }
      timer = setTimeout(()=>{ renderTo(next); if(playing) timer = setTimeout(stepOn, 1900); }, RM?0:650);
    };
    playBtn.addEventListener("click",()=>{ if(playing){ clearTimeout(timer); setPlay(false); renderTo(Math.max(cur,0)); } else { if(cur>=p.demo.length-1){ cur=-1; chat.innerHTML=""; } setPlay(true); stepOn(); } });
    $('[data-act="replay"]', el).addEventListener("click",()=>{ clearTimeout(timer); cur=-1; chat.innerHTML=""; el.classList.remove("landed"); setPlay(true); stepOn(); });
    btns.forEach(b => b.addEventListener("click",()=>{ clearTimeout(timer); setPlay(false); renderTo(+b.dataset.step); }));
    if(FINE && !RM && rig){ const stage = $(".demo-stage", el);
      stage.addEventListener("pointermove", e => { const r=stage.getBoundingClientRect(); rig.style.setProperty("--ry", `${-14+((e.clientX-r.left)/r.width-.5)*16}deg`); rig.style.setProperty("--rx", `${6-((e.clientY-r.top)/r.height-.5)*10}deg`); });
      stage.addEventListener("pointerleave", () => { rig.style.removeProperty("--ry"); rig.style.removeProperty("--rx"); }); }
    renderTo(0);
  });
}

/* ---------------- catalogue: transitions and a selectable system map ---------------- */
function renderCatalogue(){
  const list = PRODUCTS.filter(matchProduct);
  $("#catCount").textContent = `${list.length} of ${PRODUCTS.length} products`;
  const out = $("#catOut");
  if(CAT.view==="map"){
    const on = new Set(list.map(p=>p.slug));
    const nb = (id,label,cls="") => `<button class="node ${cls}" data-node="${id}">${esc(label)}</button>`;
    const pn = s => nb("p:"+s, P[s].name.split(":")[0], on.has(s)?"":"dim");
    out.innerHTML = `<div class="sysmap" id="sysmap">
      <div class="col"><h4>People</h4>${AUDIENCES.map(a=>nb("a:"+a,a)).join("")}</div>
      <div class="col"><h4>UT chatbots</h4>${["smart-attendance","pragati","swadhyay","shikshak-samarthya","field-monitoring","saajha"].map(pn).join("")}<h4 style="margin-top:10px">Bot Store</h4>${PRODUCTS.filter(p=>p.kind==="generic").map(p=>pn(p.slug)).join("")}</div>
      <div class="col"><h4>Registry and data</h4>${pn("mis")}${nb("x:udise","UDISE+ API")}${nb("x:pipe","Validation and cleaning")}${pn("crm-ivrs")}</div>
      <div class="col"><h4>Insight</h4>${pn("idp")}${DASHBOARDS.filter(d=>!d.internal).slice(0,7).map(d=>nb("d:"+d.n,d.n)).join("")}</div>
      <div class="col"><h4>Action</h4>${nb("x:review","Monthly reviews with the SPD")}${nb("x:list","Daily school follow-up lists")}${nb("x:rem","Remediation and training")}${nb("x:rvsk","RVSK (national VSK)")}</div>
    </div><div class="sm-panel" id="smPanel" aria-live="polite"><b>Select any node</b><p class="muted" style="margin:4px 0 0">See what it does and how it connects. Read left to right: school work is captured by chatbots, joined to the registry, shown on dashboards, and acted on.</p></div>`;
    wireSysmap();
  } else {
    out.innerHTML = list.length ? `<div class="grid g3">${list.map(p=>pcard(p)).join("")}</div>` : `<div class="empty"><p><b>No products match these filters.</b></p><p>Clear a filter or try a broader word, such as ‘teacher’.</p><button class="btn btn-line btn-s" id="catClear2">Clear filters</button></div>`;
    $$("#catOut .pcard").forEach((c,i)=>c.style.setProperty("--i",i));
    const c2=$("#catClear2"); if(c2) c2.addEventListener("click", clearCat);
  }
}
const X_INFO = {
 udise:["UDISE+ API","National school data comes into MIS through the API, so the registry starts from official records.",["p:mis","x:pipe"]],
 pipe:["Validation and cleaning","Automated duplicate and error checks, plus verification with Head Masters, before data reaches any dashboard.",["p:mis","p:idp","x:udise"]],
 review:["Monthly reviews with the SPD","The VSK team presents dashboards and progress every month; decisions are recorded as action items.",["p:idp","x:list"]],
 list:["Daily school follow-up lists","Named schools that are not marking attendance or are behind on assessment go to EOs, BRCs and CRCs.",["p:smart-attendance","p:crm-ivrs","p:idp"]],
 rem:["Remediation and training","RRSA endline data shaped the May 2026 summer camps; training targets low-adoption areas.",["p:pragati","p:shikshak-samarthya"]],
 rvsk:["RVSK (national VSK)","Attendance, Assessment and Administration data is integrated with the Rashtriya Vidya Samiksha Kendra.",["p:smart-attendance","p:pragati","p:mis"]]
};
function relatedNodes(id){
  const [t,k] = [id.slice(0,1), id.slice(2)];
  if(t==="p"){ const p=P[k]; return [...p.aud.map(a=>"a:"+a), ...(p.kind!=="platform"?["p:mis","p:idp"]:[]), ...(p.dash||[]).map(n=>"d:"+n), ...(p.dashAll?DASHBOARDS.map(d=>"d:"+d.n):[]), ...(p.related||[]).map(s=>"p:"+s)]; }
  if(t==="a") return PRODUCTS.filter(p=>p.aud.includes(k)).map(p=>"p:"+p.slug);
  if(t==="d"){ return ["p:idp", ...PRODUCTS.filter(p=>(p.dash||[]).includes(k)).map(p=>"p:"+p.slug)]; }
  return (X_INFO[k]||[])[2]||[];
}
function wireSysmap(){
  const sm = $("#sysmap"), panel = $("#smPanel");
  $$(".node", sm).forEach(n => n.addEventListener("click", () => {
    const id = n.dataset.node, rel = new Set(relatedNodes(id));
    sm.classList.add("has-sel"); $$(".node", sm).forEach(x => { x.classList.toggle("sel", x===n); x.classList.toggle("rel", rel.has(x.dataset.node)); });
    const [t,k] = [id.slice(0,1), id.slice(2)];
    let h = "";
    if(t==="p"){ const p=P[k]; h = `<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:start"><div><b style="font-family:var(--display);font-size:1.1rem">${esc(p.name)}</b> ${badge(p.status)}<p class="muted" style="margin:6px 0 0">${esc(p.tag)}</p></div><a class="btn btn-primary btn-s" href="#product-${k}">Open product page</a></div>`; }
    else if(t==="a"){ const ps = PRODUCTS.filter(p=>p.aud.includes(k)); h = `<b style="font-family:var(--display);font-size:1.1rem">${esc(k)}</b><p class="muted" style="margin:6px 0 0">${ps.length} products are used by ${esc(k.toLowerCase())}. They are highlighted on the map.</p>`; }
    else if(t==="d"){ const d=DASHBOARDS.find(x=>x.n===k); h = `<b style="font-family:var(--display);font-size:1.1rem">${esc(d.n)}</b> <span class="pill">${esc(d.g)}</span><p class="muted" style="margin:6px 0 10px">${esc(d.k)}</p>${d.u?`<a class="btn btn-line btn-s" href="${d.u}" target="_blank" rel="noopener">Open in Power BI ${IC.ext}</a>`:""}`; }
    else { const x=X_INFO[k]; h = `<b style="font-family:var(--display);font-size:1.1rem">${esc(x[0])}</b><p class="muted" style="margin:6px 0 0">${esc(x[1])}</p>`; }
    panel.innerHTML = h;
  }));
}

/* ---------------- journey: illuminated timeline ---------------- */
function renderTimeline(){
  const items = TIMELINE.filter(t=>PHASE==="all"||t.ph===PHASE);
  $("#tl").innerHTML = items.map(t=>`<div class="tl-item ${t.plan?"planned":""}"><span class="d">${esc(t.d)}</span> ${t.plan?'<span class="badge b-idle">Planned</span>':""}<h3>${esc(t.t)}</h3><p>${esc(t.x)}</p>${t.img?`<div data-lbk="${t.img}" tabindex="0" role="button" aria-label="Open image" style="display:inline-block">${img(t.img,t.t,"tl-img")}</div>`:""}${t.go||t.src?`<p class="small" style="margin-top:6px">${t.go?`<a href="#${t.go}">Learn more</a>`:""}${t.src?`<span class="muted"> ${t.go?"· ":""}Source: ${esc(srcLabel(t.src))}</span>`:""}</p>`:""}</div>`).join("");
  tlProgress();
}
function tlProgress(){
  const tl = $("#tl"); if(!tl) return;
  const r = tl.getBoundingClientRect(), mid = window.innerHeight*.62;
  const pct = Math.max(0, Math.min(100, (mid - r.top)/r.height*100));
  tl.style.setProperty("--tlp", (RM?100:pct)+"%");
  $$(".tl-item", tl).forEach(it => { const ir = it.getBoundingClientRect(); it.classList.toggle("lit", RM || ir.top < mid); });
}
function wireJourney(root){
  const setPhase = id => { PHASE=id; $$("[data-phase]",root).forEach(x=>x.setAttribute("aria-pressed",x.dataset.phase===id)); renderTimeline(); };
  $$("[data-phase]",root).forEach(b=>b.addEventListener("click",()=>{ setPhase(b.dataset.phase); if(b.closest(".ribbon")) scrollToAnchor("timeline"); }));
  renderTimeline();
}

/* ---------------- lightbox with transitions ---------------- */
function showLB(){
  const it=LB.list[LB.i]; const a={src:imgSrc(it.img)}; const im=$("#lbImg");
  im.classList.add("fade");
  setTimeout(()=>{ im.src=a.src; im.alt=it.c; im.classList.remove("fade"); }, RM?0:160);
  $("#lbCap").textContent=`${it.c}${it.d?" · "+it.d:""}`; $("#lbCount").textContent=`${LB.i+1} of ${LB.list.length}`;
  const solo=LB.list.length<2; ["#lbPrev","#lbNext","#lbPlay"].forEach(s=>$(s).style.visibility=solo?"hidden":"visible");
}

/* ---------------- global effects ---------------- */
function fxAfterRender(main){
  main.classList.remove("enter"); void main.offsetWidth; main.classList.add("enter");
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.15});
  $$(".reveal,.integ", main).forEach(el => RM ? el.classList.add("in") : io.observe(el));
  FX.cleanups.push(()=>io.disconnect());
}
function fxBeforeRender(){
  if(FX.hero){ FX.hero(); FX.hero=null; }
  FX.cleanups.splice(0).forEach(f=>{ try{f()}catch(_){} });
}
(function initFx(){
  if(FINE && !RM){
    document.addEventListener("pointermove", e => {
      const c = e.target.closest && e.target.closest(".pcard,.tiltable"); if(!c) return;
      const r = c.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      c.style.setProperty("--mx", x*100+"%"); c.style.setProperty("--my", y*100+"%");
      c.style.transform = `perspective(900px) rotateX(${(.5-y)*5}deg) rotateY(${(x-.5)*6}deg) translateY(-2px)`;
    });
    document.addEventListener("pointerout", e => { const c = e.target.closest && e.target.closest(".pcard,.tiltable"); if(c && !c.contains(e.relatedTarget)) c.style.transform=""; });
  }
  let tick=false;
  window.addEventListener("scroll", () => { if(tick) return; tick=true; requestAnimationFrame(()=>{ tick=false; tlProgress();
    const top=$(".top"); if(top) top.style.boxShadow = window.scrollY>8 ? "0 8px 30px -18px rgba(5,10,28,.45)" : ""; }); }, {passive:true});
})();

/* ===================== WordPress routing ===================== */
const BASE = (() => { try{ return new URL(VT.home, location.href).pathname.replace(/\/?$/,"/"); }catch(_){ return "/"; } })();
function isRoute(r){ return r==="home" || NAV.some(([h])=>h===r) || (/^product-/.test(r) && !!P[r.slice(8)]); }
function pathFor(r){ const s = VT.slash===false ? "" : "/"; if(r==="home") return BASE; if(/^product-/.test(r)) return BASE+"products/"+r.slice(8)+s; return BASE+r+s; }
function routeFromHref(h){ if(!h || h[0]!=="#") return null; const r=h.slice(1)||"home"; return isRoute(r) ? r : null; }
function currentRoute(){
  const h = location.hash.slice(1);
  if(!VT.pretty) return h || "home";
  if(h && isRoute(h)){ history.replaceState(null,"",pathFor(h)); return h; }
  let p = location.pathname; if(p.indexOf(BASE)===0) p = p.slice(BASE.length); p = p.replace(/\/+$/,"");
  if(!p) return "home";
  const m = p.match(/^products\/([a-z0-9-]+)$/); if(m) return "product-"+m[1];
  return p;
}
function go(r, jump, replace){
  const target = pathFor(r);
  if(location.pathname===target && !location.hash){ if(jump) scrollToAnchor(jump); else if(r==="contact") scrollToAnchor("contact"); else window.scrollTo({top:0,behavior:RM?"auto":"smooth"}); return; }
  pendingJump = jump || null;
  history[replace?"replaceState":"pushState"](null, "", target); router();
}
function prettyLinks(root){ if(!VT.pretty) return; $$('a[href^="#"]', root).forEach(a => { const r=routeFromHref(a.getAttribute("href")); if(r && a.id!=="skiplink"){ a.dataset.r = a.dataset.r || ""; a.setAttribute("href", pathFor(r)); a.dataset.hr = r; } }); }
/* ===================== boot ===================== */
shell(); initGlobal();
if(!(window.claude && typeof window.claude.use==="function")){
  DL.ok = true;
  DL.api = { save: async ({filename, data}) => { const blob = data instanceof Blob ? data : new Blob([data], {type: /\.csv$/.test(filename)?"text/csv":"text/markdown"}); const u = URL.createObjectURL(blob); const a = document.createElement("a"); a.href=u; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(u), 4000); return {status:"saved"}; } };
}
router();
(async () => {
  try{
    if(window.claude && typeof window.claude.use==="function"){
      const api = await window.claude.use("downloads");
      if(api){ DL.api=api; DL.ok=true; if(["#resources"].includes(location.hash)||location.hash.startsWith("#product-")){ const y=window.scrollY; router(); window.scrollTo(0,y); } }
    }
  }catch(_){}
})();

})();
