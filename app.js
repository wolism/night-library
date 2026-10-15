// برای افزودن کتاب و فصل‌های خودت، از الگوی پایین پیروی کن.
const novels = [
  {
    id: "moon-archive",
    title: "آرشیو ماه خاموش",
    originalTitle: "The Silent Moon Archive",
    author: "نویسنده نمونه",
    genres: ["فانتزی", "ماجراجویی"],
    status: "در حال انتشار",
    symbol: "☾",
    cover1: "#251a40", cover2: "#77619c",
    description: "در جهانی که ماه هر صد سال یک‌بار خاموش می‌شود، شاگرد جوان یک کتابخانه‌ی ممنوعه به رازی برمی‌خورد که می‌تواند سرنوشت پادشاهی‌ها را تغییر دهد. این متن صرفاً نمونه است و می‌توانی آن را با توضیحات ناول خودت عوض کنی.",
    chapters: [
      { title: "فصل ۱: کتابی که نفس می‌کشید", paragraphs: [
        "باران آرام روی شیشه‌های بلند کتابخانه می‌لغزید. در آن ساعت از شب، تمام راهروها باید خالی می‌بودند؛ اما نور آبی ضعیفی از زیر درِ تالار ممنوعه بیرون می‌زد.",
        "آرین کلید برنجی را در مشت فشرد. استادش همیشه می‌گفت بعضی کتاب‌ها را نباید باز کرد، چون بعضی داستان‌ها هم‌زمان که خوانده می‌شوند، خواننده را نیز می‌خوانند.",
        "وقتی در باز شد، بوی کاغذ کهنه و هوای سرد به استقبالش آمد. روی میز، کتابی بی‌عنوان قرار داشت و جلدش با ضربان آرامی بالا و پایین می‌رفت."
      ]},
      { title: "فصل ۲: نامی در تاریکی", paragraphs: [
        "صفحه‌ی نخست کاملاً سفید بود؛ تا وقتی که آرین نام خودش را زیر نور ماه دید. حروف، یکی‌یکی روی کاغذ ظاهر شدند و سپس با جوهری نقره‌ای جمله‌ای شکل گرفت: «بالاخره برگشتی.»",
        "او عقب رفت. در انتهای تالار صدای بسته‌شدن دری آمد، اما هیچ‌کس نباید آن‌جا می‌بود. سایه‌ای بلند روی قفسه‌ها کشیده شد و شعله‌های چراغ، هم‌زمان خاموش شدند."
      ]}
    ]
  },
  {
    id: "demon-crown",
    title: "تاج پادشاه شیاطین",
    originalTitle: "The Demon King's Crown",
    author: "نویسنده نمونه",
    genres: ["فانتزی", "اکشن"],
    status: "تکمیل‌شده",
    symbol: "♜",
    cover1: "#3a1728", cover2: "#a34d58",
    description: "وارثی بی‌نام در سرزمینی ویران باید میان قدرتی باستانی و آخرین بقایای انسانیت خود یکی را انتخاب کند. این عنوان و متن، نمونه‌ی آزمایشی برای نمایش عملکرد سایت هستند.",
    chapters: [
      { title: "فصل ۱: وارث خاکستر", paragraphs: [
        "تاج بر تختی از سنگ سیاه قرار داشت. هیچ‌کس در هزار سال گذشته جرئت نکرده بود به آن دست بزند؛ زیرا افسانه می‌گفت تاج، پادشاه خود را انتخاب نمی‌کند، بلکه او را می‌سازد.",
        "جوان دستش را جلو برد. از دوردست، ناقوس‌های شهر مردگان به صدا درآمدند."
      ]}
    ]
  },
  {
    id: "starless-sea",
    title: "دریای بی‌ستاره",
    originalTitle: "The Starless Sea",
    author: "نویسنده نمونه",
    genres: ["ماورایی", "معمایی"],
    status: "در حال انتشار",
    symbol: "✧",
    cover1: "#102b3b", cover2: "#397d8a",
    description: "نقشه‌ای قدیمی، دریایی بی‌انتها و شهری که فقط در خواب دیده می‌شود؛ سه سرنخ برای کشف حقیقتی که از تاریخ جهان پاک شده است.",
    chapters: [
      { title: "فصل ۱: نقشه‌ی نمک", paragraphs: [
        "نقشه درون بطری شیشه‌ای پیدا شد؛ خشک و سالم، با وجود آن‌که صدها سال زیر آب مانده بود. روی آن هیچ خشکی‌ای دیده نمی‌شد، فقط موج‌هایی جوهری و یک ستاره‌ی سیاه.",
        "در حاشیه‌ی نقشه نوشته شده بود: «اگر ساحل را دیدی، دیگر به خواب برنگرد.»"
      ]}
    ]
  },
  {
    id: "witch-garden",
    title: "باغ جادوگر سپیده‌دم",
    originalTitle: "The Dawn Witch's Garden",
    author: "نویسنده نمونه",
    genres: ["فانتزی", "درام"],
    status: "در حال انتشار",
    symbol: "❀",
    cover1: "#283326", cover2: "#788d62",
    description: "دختری که توانایی شنیدن خاطرات گیاهان را دارد، در باغی متروک راز ناپدیدشدن جادوگران را دنبال می‌کند.",
    chapters: [
      { title: "فصل ۱: گل‌های خاطره", paragraphs: [
        "هر گل در باغ صدایی داشت. رزها از عشق‌های فراموش‌شده حرف می‌زدند و پیچک‌ها نام کسانی را زمزمه می‌کردند که هیچ‌گاه بازنگشته بودند.",
        "اما گل سفید کنار دروازه ساکت بود؛ و این سکوت، بیشتر از هر فریادی دختر را می‌ترساند."
      ]}
    ]
  }
];

const $ = (id) => document.getElementById(id);
const grid = $("novelGrid"), searchInput = $("searchInput"), genreFilter = $("genreFilter");
let activeNovel = null, activeChapterIndex = 0, fontSize = 18;

const faNumber = n => new Intl.NumberFormat("fa-IR").format(n);
function allGenres(){ return [...new Set(novels.flatMap(n => n.genres))].sort((a,b)=>a.localeCompare(b,"fa")); }
function renderGenres(){
  allGenres().forEach(g => { const opt=document.createElement("option"); opt.value=g; opt.textContent=g; genreFilter.appendChild(opt); });
}
function renderNovels(){
  const term = searchInput.value.trim().toLocaleLowerCase("fa");
  const genre = genreFilter.value;
  const filtered = novels.filter(n => (genre==="all" || n.genres.includes(genre)) &&
    [n.title,n.originalTitle,n.author,...n.genres].some(v=>v.toLocaleLowerCase("fa").includes(term)));
  $("novelCount").textContent = `${faNumber(filtered.length)} اثر`;
  $("emptyState").hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(n => `
    <article class="novel-card" tabindex="0" role="button" aria-label="نمایش ${escapeHtml(n.title)}" data-id="${n.id}">
      <div class="cover" style="--cover1:${n.cover1};--cover2:${n.cover2}">
        <span class="cover-symbol">${n.symbol}</span><span class="cover-label">✧ FANTASY ARCHIVE ✧</span>
      </div>
      <div class="card-body"><div class="tags">${n.genres.map(g=>`<span class="tag">${escapeHtml(g)}</span>`).join("")}</div>
        <h3>${escapeHtml(n.title)}</h3><p class="author">${escapeHtml(n.author)}</p>
        <div class="card-bottom"><span>${faNumber(n.chapters.length)} فصل نمونه</span><span class="${n.status==="تکمیل‌شده"?"":"status"}">${escapeHtml(n.status)}</span></div>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".novel-card").forEach(card=>{
    card.addEventListener("click",()=>openNovel(card.dataset.id));
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openNovel(card.dataset.id);}});
  });
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function openNovel(id){
  activeNovel=novels.find(n=>n.id===id); if(!activeNovel)return;
  $("novelDetails").innerHTML = `
    <div class="detail-head"><div class="detail-cover" style="background:radial-gradient(circle,${activeNovel.cover2},${activeNovel.cover1})">${activeNovel.symbol}</div>
      <div><div class="tags">${activeNovel.genres.map(g=>`<span class="tag">${escapeHtml(g)}</span>`).join("")}</div>
      <h2 id="modalTitle">${escapeHtml(activeNovel.title)}</h2><p>${escapeHtml(activeNovel.originalTitle)}</p>
      <p>نویسنده: ${escapeHtml(activeNovel.author)} · ${escapeHtml(activeNovel.status)}</p></div></div>
    <p class="detail-description">${escapeHtml(activeNovel.description)}</p>
    <h3>فهرست فصل‌ها</h3><div class="chapter-list">${activeNovel.chapters.map((ch,i)=>`<button class="chapter-link" data-chapter="${i}"><span>${escapeHtml(ch.title)}</span><span>مطالعه ←</span></button>`).join("")}</div>`;
  $("novelDetails").querySelectorAll("[data-chapter]").forEach(btn=>btn.addEventListener("click",()=>openChapter(Number(btn.dataset.chapter))));
  $("novelModal").hidden=false; document.body.style.overflow="hidden";
}
function closeNovel(){ $("novelModal").hidden=true; if($("reader").hidden)document.body.style.overflow=""; }
function openChapter(index){
  if(!activeNovel || index<0 || index>=activeNovel.chapters.length)return;
  activeChapterIndex=index; const ch=activeNovel.chapters[index];
  $("readerNovel").textContent=activeNovel.title;
  $("chapterTitle").textContent=ch.title;
  $("chapterText").innerHTML=ch.paragraphs.map(p=>`<p>${escapeHtml(p)}</p>`).join("");
  $("chapterPosition").textContent=`فصل ${faNumber(index+1)} از ${faNumber(activeNovel.chapters.length)}`;
  $("prevChapter").disabled=index===0; $("prevChapter").style.opacity=index===0?".4":"1";
  $("nextChapter").disabled=index===activeNovel.chapters.length-1; $("nextChapter").style.opacity=index===activeNovel.chapters.length-1?".4":"1";
  $("chapterText").style.fontSize=fontSize+"px";
  $("novelModal").hidden=true; $("reader").hidden=false; $("reader").scrollTop=0; document.body.style.overflow="hidden";
}
function closeReader(){ $("reader").hidden=true; $("novelModal").hidden=false; document.body.style.overflow="hidden"; }
searchInput.addEventListener("input",renderNovels); genreFilter.addEventListener("change",renderNovels);
$("closeModal").addEventListener("click",closeNovel);
$("novelModal").addEventListener("click",e=>{if(e.target===$("novelModal"))closeNovel();});
$("closeReader").addEventListener("click",closeReader);
$("prevChapter").addEventListener("click",()=>openChapter(activeChapterIndex-1));
$("nextChapter").addEventListener("click",()=>openChapter(activeChapterIndex+1));
$("fontMinus").addEventListener("click",()=>{fontSize=Math.max(14,fontSize-1);$("chapterText").style.fontSize=fontSize+"px";});
$("fontPlus").addEventListener("click",()=>{fontSize=Math.min(28,fontSize+1);$("chapterText").style.fontSize=fontSize+"px";});
$("menuButton").addEventListener("click",()=>$("topNav").classList.toggle("open"));
$("homeLink").addEventListener("click",e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(!$("reader").hidden)closeReader();else if(!$("novelModal").hidden)closeNovel();}});
renderGenres(); renderNovels();
