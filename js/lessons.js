// =====================================================
// LESSON DATA
// =====================================================
// To add a new lesson, just add another "lessonN" entry
// below with the same shape (vocabulary + grammar).
// The Lesson filter, cards, and everything else will
// pick it up automatically — no other code needs to change.
// =====================================================

const lessonsData = {

    lesson1: {

        vocabulary: [
            {jp:"わたし", en:"I"},
            {jp:"あなた", en:"you"},
            {jp:"あの人（あの方）", en:"that person, he, she (あの方 is the polite form of あの人)"},
            {jp:"～さん", en:"Mr., Ms. (suffix added to a name for expressing politeness)"},
            {jp:"～ちゃん", en:"suffix often added to a child's name instead of ～さん"},
            {jp:"～人（じん）", en:"suffix meaning 'a national of', e.g. アメリカ人 = an American"},
            {jp:"せんせい（先生）", en:"teacher, instructor (not used when referring to one's own job)"},
            {jp:"きょうし（教師）", en:"teacher, instructor"},
            {jp:"がくせい（学生）", en:"student"},
            {jp:"かいしゃいん（会社員）", en:"company employee"},
            {jp:"しゃいん（社員）", en:"employee of ~ company, e.g. IMCのしゃいん"},
            {jp:"ぎんこういん（銀行員）", en:"bank employee"},
            {jp:"いしゃ（医者）", en:"[medical] doctor"},
            {jp:"けんきゅうしゃ（研究者）", en:"researcher, scholar"},
            {jp:"だいがく（大学）", en:"university"},
            {jp:"びょういん（病院）", en:"hospital"},
            {jp:"だれ（どなた）", en:"who (どなた is the polite form of だれ)"},
            {jp:"～さい（～歳）", en:"~ years old"},
            {jp:"なんさい（何歳）／おいくつ", en:"how old (おいくつ is the polite form of なんさい)"},
            {jp:"はい", en:"yes"},
            {jp:"いいえ", en:"no"},
            {jp:"初めまして。", en:"How do you do? (lit. I am meeting you for the first time — used as the first phrase when introducing oneself)"},
            {jp:"～から来ました。", en:"I'm from ~ (country)."},
            {jp:"［どうぞ］よろしく［お願いします］。", en:"Pleased to meet you. (Usually used at the end of a self-introduction.)"},
            {jp:"失礼ですが", en:"Excuse me, but... (used when asking someone for personal information such as their name or address)"},
            {jp:"お名前は？", en:"May I have your name?"},
            {jp:"こちらは～さんです。", en:"This is Mr./Ms. ~."},
            {jp:"アメリカ", en:"U.S.A."},
            {jp:"イギリス", en:"U.K."},
            {jp:"インド", en:"India"},
            {jp:"インドネシア", en:"Indonesia"},
            {jp:"韓国（かんこく）", en:"South Korea"},
            {jp:"タイ", en:"Thailand"},
            {jp:"中国（ちゅうごく）", en:"China"},
            {jp:"ドイツ", en:"Germany"},
            {jp:"日本（にほん）", en:"Japan"},
            {jp:"ブラジル", en:"Brazil"}
        ],

        grammar: [
            {
                pattern:"N₁は N₂です",
                note:"は marks N₁ as the topic (pronounced 'wa'). です is the polite copula that also shows politeness to the listener.",
                examples:[
                    {jp:"①わたしはマイク・ミラーです。", en:"I'm Mike Miller."},
                    {jp:"②わたしは会社員です。", en:"I'm a company employee."}
                ]
            },
            {
                pattern:"N₁は N₂じゃ（では）ありません",
                note:"The negative form of です. じゃありません is common in everyday conversation; ではありません is more formal.",
                examples:[
                    {jp:"③サントスさんは学生じゃ（では）ありません。", en:"Mr. Santos isn't a student."}
                ]
            },
            {
                pattern:"N₁は N₂ですか",
                note:"Adding か to the end of a sentence forms a question. はい/いいえ answer yes/no questions; interrogatives like どなた replace the part being asked about.",
                examples:[
                    {jp:"④ミラーさんはアメリカ人ですか。……はい、アメリカ人です。", en:"Is Mr. Miller an American? ...Yes, he is."},
                    {jp:"⑤ミラーさんは先生ですか。……いいえ、先生じゃありません。", en:"Is Mr. Miller a teacher? ...No, he isn't."},
                    {jp:"⑥あの方はどなたですか。……［あの方は］ミラーさんです。", en:"Who's that person? ...That's Mr. Miller."}
                ]
            },
            {
                pattern:"Nも",
                note:"も is used when the same thing applies as was stated previously — it means 'also'.",
                examples:[
                    {jp:"⑦ミラーさんは会社員です。グプタさんも会社員です。", en:"Mr. Miller is a company employee. Mr. Gupta is also a company employee."}
                ]
            },
            {
                pattern:"N₁の N₂",
                note:"の connects two nouns when N₁ modifies N₂. In Lesson 1, N₁ is the organization or group that N₂ belongs to.",
                examples:[
                    {jp:"⑧ミラーさんはIMCの社員です。", en:"Mr. Miller is an IMC employee."}
                ]
            },
            {
                pattern:"～さん",
                note:"Added to a listener's or third person's name to show respect. Never used with the speaker's own name. ちゃん replaces さん for small children to show familiarity.",
                examples:[
                    {jp:"⑨あの方はミラーさんです。", en:"That's Mr. Miller."},
                    {jp:"⑩鈴木：ミラーさんは学生ですか。　ミラー：いいえ、会社員です。", en:"Suzuki: Are you a student, Mr. Miller? Miller: No, I work for a company."}
                ]
            }
        ]

    }

    // lesson2: { vocabulary: [...], grammar: [...] },
    // lesson3: { vocabulary: [...], grammar: [...] },

};

// =====================================================
// Build flashcards out of a lesson's data
// =====================================================

function buildLessonCards(lessonKey){

    const lesson = lessonsData[lessonKey];
    if(!lesson) return [];

    const cards = [];
    const label = lessonLabel(lessonKey);

    lesson.vocabulary.forEach(v=>{
        cards.push({ jp:v.jp, en:v.en, type:"vocabulary", lesson:label });
    });

    lesson.grammar.forEach(g=>{

        cards.push({ jp:g.pattern, en:g.note, type:"grammar", lesson:label });

        g.examples.forEach(ex=>{
            cards.push({ jp:ex.jp, en:ex.en, type:"grammar", lesson:label });
        });

    });

    return cards;

}

function lessonLabel(key){
    const n = key.replace(/\D/g,"");
    return "Lesson " + n;
}

function sortedLessonKeys(){
    return Object.keys(lessonsData).sort((a,b)=>{
        const na = parseInt(a.replace(/\D/g,""),10);
        const nb = parseInt(b.replace(/\D/g,""),10);
        return na - nb;
    });
}

// =====================================================
// Helpers
// =====================================================

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}

const grid=document.getElementById("grid");
const mode=document.getElementById("mode");

const directionToggle=document.getElementById("direction");
const labelLeft=directionToggle.querySelector(".left");
const labelRight=directionToggle.querySelector(".right");

// This page uses the shared header toggle for "Japanese" vs "English"
labelLeft.textContent = "Japanese";
labelRight.textContent = "English";

let showJapaneseFirst = true;

// =====================================================
// Generic multi-select dropdown (same pattern as home.js)
// =====================================================

function setupMultiselect(btn, panel, allLabel, onChange){

    function checkboxes(){
        return Array.from(panel.querySelectorAll("input[type=checkbox]"));
    }

    function getSelected(){
        return checkboxes().filter(cb=>cb.checked).map(cb=>cb.value);
    }

    function updateLabel(){

        const boxes = checkboxes();
        const selected = getSelected();

        if(selected.length === boxes.length){
            btn.textContent = allLabel;
        }else if(selected.length === 0){
            btn.textContent = "None";
        }else{
            const names = selected.map(v=>{
                return panel.querySelector(`input[value="${v}"]`).closest("label").textContent.trim();
            });
            btn.textContent = names.join(" + ");
        }

    }

    btn.addEventListener("click",(e)=>{
        e.stopPropagation();
        const isOpen = panel.classList.contains("open");
        document.querySelectorAll(".multiselect-panel.open").forEach(p=>p.classList.remove("open"));
        if(!isOpen){
            panel.classList.add("open");
            btn.setAttribute("aria-expanded","true");
        }else{
            btn.setAttribute("aria-expanded","false");
        }
    });

    function bindCheckboxes(){
        checkboxes().forEach(cb=>{
            cb.addEventListener("change",()=>{

                if(getSelected().length === 0){
                    cb.checked = true;
                    return;
                }

                updateLabel();
                onChange();

            });
        });
    }

    document.addEventListener("click",(e)=>{
        if(!panel.contains(e.target) && e.target !== btn){
            panel.classList.remove("open");
            btn.setAttribute("aria-expanded","false");
        }
    });

    bindCheckboxes();
    updateLabel();

    return { getSelected, refresh: ()=>{ bindCheckboxes(); updateLabel(); } };

}

// =====================================================
// Populate the Lesson checkboxes from lessonsData
// =====================================================

const lessonPanel = document.getElementById("lessonPanel");

sortedLessonKeys().forEach(key=>{

    const label = document.createElement("label");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = key;
    cb.checked = true;

    label.appendChild(cb);
    label.appendChild(document.createTextNode(" " + lessonLabel(key)));

    lessonPanel.appendChild(label);

});

const lessonBtn = document.getElementById("lessonBtn");
const typeBtn = document.getElementById("typeBtn");
const typePanel = document.getElementById("typePanel");

const lessonMulti = setupMultiselect(lessonBtn, lessonPanel, "All lessons", ()=>render());
const typeMulti = setupMultiselect(typeBtn, typePanel, "All types", ()=>render());

// =====================================================
// Render
// =====================================================

function render(){

    grid.innerHTML="";

    const selectedLessons = lessonMulti.getSelected();
    const selectedTypes = typeMulti.getSelected();

    let cards = [];

    selectedLessons.forEach(key=>{
        cards = cards.concat(buildLessonCards(key).filter(c=>selectedTypes.includes(c.type)));
    });

    if(mode.value==="shuffle"){
        shuffle(cards);
    }

    const frag = document.createDocumentFragment();

    cards.forEach(item=>{

        const card=document.createElement("div");

        card.className = "card" + (item.type==="grammar" ? " grammar" : "");

        const frontText = showJapaneseFirst ? item.jp : item.en;
        const backText = showJapaneseFirst ? item.en : item.jp;

        const tag = `${item.lesson} · ${item.type==="grammar" ? "Grammar" : "Vocabulary"}`;

        card.innerHTML=`
            <div class="inner">
                <div class="front"><span class="lesson-tag">${tag}</span><div>${frontText}</div></div>
                <div class="back"><span class="lesson-tag">${tag}</span><div>${backText}</div></div>
            </div>
        `;

        card.addEventListener("click",()=>{
            card.classList.toggle("flipped");
        });

        frag.appendChild(card);

    });

    grid.appendChild(frag);

}

render();

// =====================================================
// Controls
// =====================================================

mode.addEventListener("change",render);

const shuffleBtn = document.getElementById("shuffleBtn");

shuffleBtn.addEventListener("click", () => {
    mode.value = "shuffle";
    render();
});

function toggleDirection(){

    showJapaneseFirst = !showJapaneseFirst;

    directionToggle.classList.toggle("right", !showJapaneseFirst);
    directionToggle.setAttribute("aria-pressed", String(!showJapaneseFirst));

    labelLeft.classList.toggle("active", showJapaneseFirst);
    labelRight.classList.toggle("active", !showJapaneseFirst);

    render();

}

directionToggle.addEventListener("click",toggleDirection);
directionToggle.addEventListener("keydown",(e)=>{
    if(e.key==="Enter" || e.key===" "){
        e.preventDefault();
        toggleDirection();
    }
});

// =====================================================
// Dark Mode
// =====================================================

const themeBtn=document.getElementById("theme");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    themeBtn.textContent="☀️ Light";
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.textContent="☀️ Light";
    }else{
        localStorage.setItem("theme","light");
        themeBtn.textContent="🌙 Dark";
    }

});
