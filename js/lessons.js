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
            {jp:"あのひと（あのかた）", en:"that person, he, she (あのかた is the polite form of あのひと)"},
            {jp:"～さん", en:"Mr., Ms. (suffix added to a name for expressing politeness)"},
            {jp:"～ちゃん", en:"suffix often added to a child's name instead of ～さん"},
            {jp:"～じん", en:"suffix meaning 'a national of', e.g. アメリカじん = an American"},
            {jp:"せんせい", en:"teacher, instructor (not used when referring to one's own job)"},
            {jp:"きょうし", en:"teacher, instructor"},
            {jp:"がくせい", en:"student"},
            {jp:"かいしゃいん", en:"company employee"},
            {jp:"しゃいん", en:"employee of ~ company, e.g. IMCのしゃいん"},
            {jp:"ぎんこういん", en:"bank employee"},
            {jp:"いしゃ", en:"[medical] doctor"},
            {jp:"けんきゅうしゃ", en:"researcher, scholar"},
            {jp:"だいがく", en:"university"},
            {jp:"びょういん", en:"hospital"},
            {jp:"だれ（どなた）", en:"who (どなた is the polite form of だれ)"},
            {jp:"～さい", en:"~ years old"},
            {jp:"なんさい／おいくつ", en:"how old (おいくつ is the polite form of なんさい)"},
            {jp:"はい", en:"yes"},
            {jp:"いいえ", en:"no"},
            {jp:"はじめまして。", en:"How do you do? (lit. I am meeting you for the first time — used as the first phrase when introducing oneself)"},
            {jp:"～からきました。", en:"I'm from ~ (country)."},
            {jp:"［どうぞ］よろしく［おねがいします］。", en:"Pleased to meet you. (Usually used at the end of a self-introduction.)"},
            {jp:"しつれいですが", en:"Excuse me, but... (used when asking someone for personal information such as their name or address)"},
            {jp:"おなまえは？", en:"May I have your name?"},
            {jp:"こちらは～さんです。", en:"This is Mr./Ms. ~."},
            {jp:"アメリカ", en:"U.S.A."},
            {jp:"イギリス", en:"U.K."},
            {jp:"インド", en:"India"},
            {jp:"インドネシア", en:"Indonesia"},
            {jp:"かんこく", en:"South Korea"},
            {jp:"タイ", en:"Thailand"},
            {jp:"ちゅうごく", en:"China"},
            {jp:"ドイツ", en:"Germany"},
            {jp:"にほん", en:"Japan"},
            {jp:"ブラジル", en:"Brazil"}
        ],

        grammar: [
            {
                pattern:"N₁は N₂です",
                note:"は marks N₁ as the topic (pronounced 'wa'). です is the polite copula that also shows politeness to the listener.",
                examples:[
                    {jp:"①わたしはマイク・ミラーです。", en:"I'm Mike Miller."},
                    {jp:"②わたしはかいしゃいんです。", en:"I'm a company employee."}
                ]
            },
            {
                pattern:"N₁は N₂じゃ（では）ありません",
                note:"The negative form of です. じゃありません is common in everyday conversation; ではありません is more formal.",
                examples:[
                    {jp:"③サントスさんはがくせいじゃ（では）ありません。", en:"Mr. Santos isn't a student."}
                ]
            },
            {
                pattern:"N₁は N₂ですか",
                note:"Adding か to the end of a sentence forms a question. はい/いいえ answer yes/no questions; interrogatives like どなた replace the part being asked about.",
                examples:[
                    {jp:"④ミラーさんはアメリカじんですか。……はい、アメリカじんです。", en:"Is Mr. Miller an American? ...Yes, he is."},
                    {jp:"⑤ミラーさんはせんせいですか。……いいえ、せんせいじゃありません。", en:"Is Mr. Miller a teacher? ...No, he isn't."},
                    {jp:"⑥あのかたはどなたですか。……［あのかたは］ミラーさんです。", en:"Who's that person? ...That's Mr. Miller."}
                ]
            },
            {
                pattern:"Nも",
                note:"も is used when the same thing applies as was stated previously — it means 'also'.",
                examples:[
                    {jp:"⑦ミラーさんはかいしゃいんです。グプタさんもかいしゃいんです。", en:"Mr. Miller is a company employee. Mr. Gupta is also a company employee."}
                ]
            },
            {
                pattern:"N₁の N₂",
                note:"の connects two nouns when N₁ modifies N₂. In Lesson 1, N₁ is the organization or group that N₂ belongs to.",
                examples:[
                    {jp:"⑧ミラーさんはIMCのしゃいんです。", en:"Mr. Miller is an IMC employee."}
                ]
            },
            {
                pattern:"～さん",
                note:"Added to a listener's or third person's name to show respect. Never used with the speaker's own name. ちゃん replaces さん for small children to show familiarity.",
                examples:[
                    {jp:"⑨あのかたはミラーさんです。", en:"That's Mr. Miller."},
                    {jp:"⑩すずき：ミラーさんはがくせいですか。　ミラー：いいえ、かいしゃいんです。", en:"Suzuki: Are you a student, Mr. Miller? Miller: No, I work for a company."}
                ]
            }
        ]

    },

    lesson2: {
        vocabulary: [
            {jp:"これ", en:"this (thing here)"},
            {jp:"それ", en:"that (thing near the listener)"},
            {jp:"あれ", en:"that (thing over there)"},
            {jp:"この～", en:"this ~, this ~ here"},
            {jp:"その～", en:"that ~, that ~ near the listener"},
            {jp:"あの～", en:"that ~, that ~ over there"},
            {jp:"ほん", en:"book"},
            {jp:"じしょ", en:"dictionary"},
            {jp:"ざっし", en:"magazine"},
            {jp:"しんぶん", en:"newspaper"},
            {jp:"ノート", en:"notebook"},
            {jp:"てちょう", en:"personal organiser"},
            {jp:"めいし", en:"business card"},
            {jp:"カード", en:"(credit) card"},
            {jp:"えんぴつ", en:"pencil"},
            {jp:"ボールペン", en:"ballpoint pen"},
            {jp:"シャープペンシル", en:"mechanical pencil, propelling pencil"},
            {jp:"かぎ", en:"key"},
            {jp:"とけい", en:"watch, clock"},
            {jp:"かさ", en:"umbrella"},
            {jp:"かばん", en:"bag, briefcase"},
            {jp:"CD", en:"CD, compact disc"},
            {jp:"テレビ", en:"television"},
            {jp:"ラジオ", en:"radio"},
            {jp:"カメラ", en:"camera"},
            {jp:"コンピューター", en:"computer"},
            {jp:"くるま", en:"car, vehicle"},
            {jp:"つくえ", en:"desk"},
            {jp:"いす", en:"chair"},
            {jp:"チョコレート", en:"chocolate"},
            {jp:"コーヒー", en:"coffee"},
            {jp:"[お]みやげ", en:"souvenir, present"},
            {jp:"えいご", en:"the English language"},
            {jp:"にほんご", en:"the Japanese language"},
            {jp:"～ご", en:"~ language"},
            {jp:"なん", en:"what"},
            {jp:"そう", en:"so"},
            {jp:"あのう", en:"Er... (used to show hesitation)"},
            {jp:"えっ", en:"Oh? What! (used when hearing something unexpected)"},
            {jp:"どうぞ。", en:"Here you are. (used when offering someone something)"},
            {jp:"[どうも] ありがとう [ございます]。", en:"Thank you [very much]."},
            {jp:"そうですか。", en:"I see."},
            {jp:"ちがいます。", en:"No, it isn't./You are wrong."},
            {jp:"あ", en:"Oh! (used when becoming aware of something)"},
            {jp:"これから おせわに なります。", en:"Thank you in advance for your kindness."},
            {jp:"こちらこそ [どうぞ] よろしく [おねがいします]。", en:"Pleased to meet you, too."}
        ]
    },

    lesson3: {
        vocabulary: [
            {jp:"ここ", en:"here, this place"},
            {jp:"そこ", en:"there, that place near the listener"},
            {jp:"あそこ", en:"that place over there"},
            {jp:"どこ", en:"where, what place"},
            {jp:"こちら", en:"this way, this place (polite equivalent of ここ)"},
            {jp:"そちら", en:"that way, that place near the listener (polite equivalent of そこ)"},
            {jp:"あちら", en:"that way, that place over there (polite equivalent of あそこ)"},
            {jp:"どちら", en:"which way, where (polite equivalent of どこ)"},
            {jp:"きょうしつ", en:"classroom"},
            {jp:"しょくどう", en:"dining hall, canteen"},
            {jp:"じむしょ", en:"office"},
            {jp:"かいぎしつ", en:"conference room, meeting room"},
            {jp:"うけつけ", en:"reception desk"},
            {jp:"ロビー", en:"lobby"},
            {jp:"へや", en:"room"},
            {jp:"トイレ（おてあらい）", en:"toilet, rest room"},
            {jp:"かいだん", en:"staircase"},
            {jp:"エレベーター", en:"lift, elevator"},
            {jp:"エスカレーター", en:"escalator"},
            {jp:"じどうはんばいき", en:"vending machine"},
            {jp:"でんわ", en:"telephone handset, telephone call"},
            {jp:"[お]くに", en:"country"},
            {jp:"かいしゃ", en:"company"},
            {jp:"うち", en:"house, home"},
            {jp:"くつ", en:"shoes"},
            {jp:"ネクタイ", en:"tie, necktie"},
            {jp:"ワイン", en:"wine"},
            {jp:"うりば", en:"department, counter (in a department store, etc.)"},
            {jp:"ちか", en:"basement"},
            {jp:"～かい（がい）", en:"-th floor"},
            {jp:"なんがい", en:"what floor"},
            {jp:"～えん", en:"~ yen"},
            {jp:"いくら", en:"how much"},
            {jp:"ひゃく", en:"hundred"},
            {jp:"せん", en:"thousand"},
            {jp:"まん", en:"ten thousand"},
            {jp:"すみません。", en:"Excuse me."},
            {jp:"どうも。", en:"Thanks."},
            {jp:"いらっしゃいませ。", en:"Welcome./May I help you? (a greeting to a customer or a guest entering a shop, etc.)"},
            {jp:"[～を] みせて ください。", en:"Please show me [~]."},
            {jp:"じゃ", en:"well, then, in that case"},
            {jp:"[～を] ください。", en:"Give me [~], please."},
            {jp:"イタリア", en:"Italy"},
            {jp:"スイス", en:"Switzerland"},
            {jp:"フランス", en:"France"},
            {jp:"ジャカルタ", en:"Jakarta"},
            {jp:"バンコク", en:"Bangkok"},
            {jp:"ベルリン", en:"Berlin"},
            {jp:"しんおおさか", en:"name of a station in Osaka"}
        ]
    },

    lesson4: {
        vocabulary: [
            {jp:"おきます", en:"get up, wake up"},
            {jp:"ねます", en:"sleep, go to bed"},
            {jp:"はたらきます", en:"work"},
            {jp:"やすみます", en:"take a rest, take a holiday"},
            {jp:"べんきょうします", en:"study"},
            {jp:"おわります", en:"finish"},
            {jp:"デパート", en:"department store"},
            {jp:"ぎんこう", en:"bank"},
            {jp:"ゆうびんきょく", en:"post office"},
            {jp:"としょかん", en:"library"},
            {jp:"びじゅつかん", en:"art museum, gallery"},
            {jp:"いま", en:"now"},
            {jp:"～じ", en:"~ o'clock"},
            {jp:"～ふん（ぷん）", en:"~ minute"},
            {jp:"はん", en:"half"},
            {jp:"なんじ", en:"what time"},
            {jp:"なんぷん", en:"what minute"},
            {jp:"ごぜん", en:"a.m., morning"},
            {jp:"ごご", en:"p.m., afternoon"},
            {jp:"あさ", en:"morning"},
            {jp:"ひる", en:"daytime, noon"},
            {jp:"ばん（よる）", en:"night, evening"},
            {jp:"おととい", en:"the day before yesterday"},
            {jp:"きのう", en:"yesterday"},
            {jp:"きょう", en:"today"},
            {jp:"あした", en:"tomorrow"},
            {jp:"あさって", en:"the day after tomorrow"},
            {jp:"けさ", en:"this morning"},
            {jp:"こんばん", en:"this evening, tonight"},
            {jp:"やすみ", en:"rest, a holiday, a day off"},
            {jp:"ひるやすみ", en:"lunchtime"},
            {jp:"しけん", en:"examination, test"},
            {jp:"かいぎ", en:"meeting, conference (〜をします: hold a meeting)"},
            {jp:"えいが", en:"film, movie"},
            {jp:"まいあさ", en:"every morning"},
            {jp:"まいばん", en:"every night"},
            {jp:"まいにち", en:"every day"},
            {jp:"げつようび", en:"Monday"},
            {jp:"かようび", en:"Tuesday"},
            {jp:"すいようび", en:"Wednesday"},
            {jp:"もくようび", en:"Thursday"},
            {jp:"きんようび", en:"Friday"},
            {jp:"どようび", en:"Saturday"},
            {jp:"にちようび", en:"Sunday"},
            {jp:"なんようび", en:"what day of the week"},
            {jp:"～から", en:"from ~"},
            {jp:"～まで", en:"up to ~, until ~"},
            {jp:"～と～", en:"and (used to connect nouns)"},
            {jp:"たいへんですね。", en:"That's tough, isn't it? (used when expressing sympathy)"},
            {jp:"ばんごう", en:"number"},
            {jp:"なんばん", en:"what number"},
            {jp:"そちら", en:"your place"},
            {jp:"ニューヨーク", en:"New York"},
            {jp:"ペキン", en:"Beijing"},
            {jp:"ロサンゼルス", en:"Los Angeles"},
            {jp:"ロンドン", en:"London"},
            {jp:"あすか", en:"a fictitious Japanese restaurant"},
            {jp:"アップルぎんこう", en:"a fictitious bank"},
            {jp:"みどりとしょかん", en:"a fictitious library"},
            {jp:"やまとびじゅつかん", en:"a fictitious art gallery"}
        ]
    },

    lesson5: {
        vocabulary: [
            {jp:"いきます", en:"go"},
            {jp:"きます", en:"come"},
            {jp:"かえります", en:"go home, return"},
            {jp:"がっこう", en:"school"},
            {jp:"スーパー", en:"supermarket"},
            {jp:"えき", en:"station"},
            {jp:"ひこうき", en:"aeroplane, airplane"},
            {jp:"ふね", en:"ship"},
            {jp:"でんしゃ", en:"electric train"},
            {jp:"ちかてつ", en:"underground, subway"},
            {jp:"しんかんせん", en:"the Shinkansen, the bullet train"},
            {jp:"バス", en:"bus"},
            {jp:"タクシー", en:"taxi"},
            {jp:"じてんしゃ", en:"bicycle"},
            {jp:"あるいて", en:"on foot"},
            {jp:"ひと", en:"person, people"},
            {jp:"ともだち", en:"friend"},
            {jp:"かれ", en:"he, boyfriend, lover"},
            {jp:"かのじょ", en:"she, girlfriend, lover"},
            {jp:"かぞく", en:"family"},
            {jp:"ひとりで", en:"alone, by oneself"},
            {jp:"せんしゅう", en:"last week"},
            {jp:"こんしゅう", en:"this week"},
            {jp:"らいしゅう", en:"next week"},
            {jp:"せんげつ", en:"last month"},
            {jp:"こんげつ", en:"this month"},
            {jp:"らいげつ", en:"next month"},
            {jp:"きょねん", en:"last year"},
            {jp:"ことし", en:"this year"},
            {jp:"らいねん", en:"next year"},
            {jp:"～ねん", en:"-th year"},
            {jp:"なんねん", en:"what year"},
            {jp:"～がつ", en:"-th month of the year"},
            {jp:"なんがつ", en:"what month"},
            {jp:"ついたち", en:"first day of the month"},
            {jp:"ふつか", en:"second, two days"},
            {jp:"みっか", en:"third, three days"},
            {jp:"よっか", en:"fourth, four days"},
            {jp:"いつか", en:"fifth, five days"},
            {jp:"むいか", en:"sixth, six days"},
            {jp:"なのか", en:"seventh, seven days"},
            {jp:"ようか", en:"eighth, eight days"},
            {jp:"ここのか", en:"ninth, nine days"},
            {jp:"とおか", en:"tenth, ten days"},
            {jp:"じゅうよっか", en:"fourteenth, fourteen days"},
            {jp:"はつか", en:"twentieth, twenty days"},
            {jp:"にじゅうよっか", en:"twenty-fourth, twenty-four days"},
            {jp:"～にち", en:"-th day of the month, ~ day(s)"},
            {jp:"なんにち", en:"which day of the month, how many days"},
            {jp:"いつ", en:"when"},
            {jp:"たんじょうび", en:"birthday"},
            {jp:"そうですね。", en:"Yes, it is."},
            {jp:"[どうも] ありがとう ございました。", en:"Thank you very much."},
            {jp:"どう いたしまして。", en:"You're welcome./Don't mention it."},
            {jp:"～ばんせん", en:"platform ~, -th platform"},
            {jp:"つぎの", en:"next"},
            {jp:"ふつう", en:"local (train)"},
            {jp:"きゅうこう", en:"rapid"},
            {jp:"とっきゅう", en:"express"},
            {jp:"こうしえん", en:"name of a town near Osaka"},
            {jp:"おおさかじょう", en:"Osaka Castle, a famous castle in Osaka"}
        ]
    },

    lesson6: {
        vocabulary: [
            {jp:"たべます", en:"eat"},
            {jp:"のみます", en:"drink"},
            {jp:"すいます[たばこを～]", en:"smoke [a cigarette]"},
            {jp:"みます", en:"see, look at, watch"},
            {jp:"ききます", en:"hear, listen"},
            {jp:"よみます", en:"read"},
            {jp:"かきます", en:"write (this book uses hiragana for かきます even when it can mean draw/paint)"},
            {jp:"かいます", en:"buy"},
            {jp:"とります[しゃしんを～]", en:"take [a photograph]"},
            {jp:"します", en:"do, play"},
            {jp:"あいます[ともだちに～]", en:"meet [a friend]"},
            {jp:"ごはん", en:"a meal, cooked rice"},
            {jp:"あさごはん", en:"breakfast"},
            {jp:"ひるごはん", en:"lunch"},
            {jp:"ばんごはん", en:"supper"},
            {jp:"パン", en:"bread"},
            {jp:"たまご", en:"egg"},
            {jp:"にく", en:"meat"},
            {jp:"さかな", en:"fish"},
            {jp:"やさい", en:"vegetable"},
            {jp:"くだもの", en:"fruit"},
            {jp:"みず", en:"water"},
            {jp:"おちゃ", en:"tea, green tea"},
            {jp:"こうちゃ", en:"black tea"},
            {jp:"ぎゅうにゅう（ミルク）", en:"milk"},
            {jp:"ジュース", en:"juice"},
            {jp:"ビール", en:"beer"},
            {jp:"[お]さけ", en:"alcohol, Japanese rice wine"},
            {jp:"たばこ", en:"tobacco, cigarette"},
            {jp:"てがみ", en:"letter"},
            {jp:"レポート", en:"report"},
            {jp:"しゃしん", en:"photograph"},
            {jp:"ビデオ", en:"video [tape], video deck"},
            {jp:"みせ", en:"shop, store"},
            {jp:"にわ", en:"garden"},
            {jp:"しゅくだい", en:"homework (〜をします: do homework)"},
            {jp:"テニス", en:"tennis (〜をします: play tennis)"},
            {jp:"サッカー", en:"soccer, football (〜をします: play soccer)"},
            {jp:"[お]はなみ", en:"cherry-blossom viewing (〜をします: view the cherry blossoms)"},
            {jp:"なに", en:"what"},
            {jp:"いっしょに", en:"together"},
            {jp:"ちょっと", en:"a little while, a little bit"},
            {jp:"いつも", en:"always, usually"},
            {jp:"ときどき", en:"sometimes"},
            {jp:"それから", en:"after that, and then"},
            {jp:"ええ", en:"yes"},
            {jp:"いいですね。", en:"That's good."},
            {jp:"わかりました。", en:"I see."},
            {jp:"なんですか。", en:"Yes? (lit. What is it?)"},
            {jp:"じゃ、また [あした]。", en:"See you [tomorrow]."},
            {jp:"メキシコ", en:"Mexico"},
            {jp:"おおさかデパート", en:"a fictitious department store"},
            {jp:"つるや", en:"a fictitious restaurant"},
            {jp:"フランスや", en:"a fictitious supermarket"},
            {jp:"まいにちや", en:"a fictitious supermarket"}
        ]
    },

    lesson7: {
        vocabulary: [
            {jp:"きります", en:"cut, slice"},
            {jp:"おくります", en:"send"},
            {jp:"あげます", en:"give"},
            {jp:"もらいます", en:"receive"},
            {jp:"かします", en:"lend"},
            {jp:"かります", en:"borrow"},
            {jp:"おしえます", en:"teach"},
            {jp:"ならいます", en:"learn"},
            {jp:"かけます[でんわを～]", en:"make [a telephone call]"},
            {jp:"て", en:"hand, arm"},
            {jp:"はし", en:"chopsticks"},
            {jp:"スプーン", en:"spoon"},
            {jp:"ナイフ", en:"knife"},
            {jp:"フォーク", en:"fork"},
            {jp:"はさみ", en:"scissors"},
            {jp:"パソコン", en:"personal computer"},
            {jp:"けいたい[でんわ]", en:"mobile phone, cell phone"},
            {jp:"メール", en:"e-mail"},
            {jp:"ねんがじょう", en:"New Year's greeting card"},
            {jp:"パンチ", en:"punch"},
            {jp:"ホッチキス", en:"stapler"},
            {jp:"セロテープ", en:"Sellotape, Scotch tape, clear tape"},
            {jp:"けしゴム", en:"rubber, eraser"},
            {jp:"かみ", en:"paper"},
            {jp:"はな", en:"flower, blossom"},
            {jp:"シャツ", en:"shirt"},
            {jp:"プレゼント", en:"present, gift"},
            {jp:"にもつ", en:"luggage, baggage, parcel"},
            {jp:"おかね", en:"money"},
            {jp:"きっぷ", en:"ticket"},
            {jp:"クリスマス", en:"Christmas"},
            {jp:"ちち", en:"(my) father"},
            {jp:"はは", en:"(my) mother"},
            {jp:"おとうさん", en:"(someone else's) father (also used to address one's own father)"},
            {jp:"おかあさん", en:"(someone else's) mother (also used to address one's own mother)"},
            {jp:"もう", en:"already"},
            {jp:"まだ", en:"not yet"},
            {jp:"これから", en:"from now on, soon"},
            {jp:"[～]って すてきですね。", en:"What a nice [~]!"},
            {jp:"いらっしゃい。", en:"Do come in."},
            {jp:"どうぞ おあがりください。", en:"Won't you come in?"},
            {jp:"しつれいします。", en:"(said before entering someone's house)"},
            {jp:"[～を] どうぞ。", en:"Won't you have [~]? (used when offering something)"},
            {jp:"いただきます。", en:"Thank you. I accept. (said before eating or drinking)"},
            {jp:"ごちそうさま[でした]。", en:"That was delicious. (said after eating or drinking)"},
            {jp:"スペイン", en:"Spain"}
        ]
    },

    lesson8: {
        vocabulary: [
            {jp:"ハンサム[な]", en:"handsome"},
            {jp:"きれい[な]", en:"beautiful, clean"},
            {jp:"しずか[な]", en:"quiet"},
            {jp:"にぎやか[な]", en:"lively"},
            {jp:"ゆうめい[な]", en:"famous"},
            {jp:"しんせつ[な]", en:"helpful, kind, considerate"},
            {jp:"げんき[な]", en:"healthy, energetic, cheerful"},
            {jp:"ひま[な]", en:"free (time)"},
            {jp:"べんり[な]", en:"convenient"},
            {jp:"すてき[な]", en:"fine, nice, wonderful"},
            {jp:"おおきい", en:"big, large"},
            {jp:"ちいさい", en:"small, little"},
            {jp:"あたらしい", en:"new, fresh"},
            {jp:"ふるい", en:"old (not used to describe a person's age)"},
            {jp:"いい（よい）", en:"good"},
            {jp:"わるい", en:"bad"},
            {jp:"あつい", en:"hot"},
            {jp:"さむい", en:"cold (referring to temperature)"},
            {jp:"つめたい", en:"cold (referring to touch)"},
            {jp:"むずかしい", en:"difficult"},
            {jp:"やさしい", en:"easy"},
            {jp:"たかい", en:"expensive, tall, high"},
            {jp:"やすい", en:"inexpensive, cheap"},
            {jp:"ひくい", en:"low"},
            {jp:"おもしろい", en:"interesting"},
            {jp:"おいしい", en:"delicious, tasty"},
            {jp:"いそがしい", en:"busy"},
            {jp:"たのしい", en:"enjoyable"},
            {jp:"しろい", en:"white"},
            {jp:"くろい", en:"black"},
            {jp:"あかい", en:"red"},
            {jp:"あおい", en:"blue"},
            {jp:"さくら", en:"cherry (blossom)"},
            {jp:"やま", en:"mountain"},
            {jp:"まち", en:"town, city"},
            {jp:"たべもの", en:"food"},
            {jp:"ところ", en:"place"},
            {jp:"りょう", en:"dormitory"},
            {jp:"レストラン", en:"restaurant"},
            {jp:"せいかつ", en:"life"},
            {jp:"[お]しごと", en:"work, business (〜をします: do one's job, work)"},
            {jp:"どう", en:"how"},
            {jp:"どんな～", en:"what kind of ~"},
            {jp:"とても", en:"very"},
            {jp:"あまり", en:"not so (used with negatives)"},
            {jp:"そして", en:"and (used to connect sentences)"},
            {jp:"～が、～", en:"~, but ~"},
            {jp:"おげんきですか。", en:"How are you?"},
            {jp:"そうですね。", en:"Well let me see. (pausing)"},
            {jp:"[～。] もう いっぱい いかがですか。", en:"Won't you have another cup of [~]?"},
            {jp:"[いいえ、] けっこうです。", en:"No, thank you."},
            {jp:"もう ～です[ね]。", en:"It's already ~[, isn't it]?"},
            {jp:"そろそろ しつれいします。", en:"It's time I was going."},
            {jp:"いいえ。", en:"Not at all."},
            {jp:"また いらっしゃって ください。", en:"Please come again."},
            {jp:"シャンハイ", en:"Shanghai"},
            {jp:"きんかくじ", en:"Kinkakuji Temple (the Golden Pavilion)"},
            {jp:"ならこうえん", en:"Nara Park"},
            {jp:"ふじさん", en:"Mt. Fuji, the highest mountain in Japan"},
            {jp:"「しちにんのさむらい」", en:"'The Seven Samurai', a classic movie by Akira Kurosawa"}
        ]
    },

    lesson9: {
        vocabulary: [
            {jp:"わかります", en:"understand"},
            {jp:"あります", en:"have"},
            {jp:"すき[な]", en:"like"},
            {jp:"きらい[な]", en:"dislike"},
            {jp:"じょうず[な]", en:"good at"},
            {jp:"へた[な]", en:"poor at"},
            {jp:"のみもの", en:"drinks"},
            {jp:"りょうり", en:"dish (cooked food), cooking"},
            {jp:"スポーツ", en:"sport (〜をします: play sports)"},
            {jp:"やきゅう", en:"baseball (〜をします: play baseball)"},
            {jp:"ダンス", en:"dance (〜[を]します: dance)"},
            {jp:"りょこう", en:"trip, tour (〜[を]します: make a trip)"},
            {jp:"おんがく", en:"music"},
            {jp:"うた", en:"song"},
            {jp:"クラシック", en:"classical music"},
            {jp:"コンサート", en:"concert"},
            {jp:"ジャズ", en:"jazz"},
            {jp:"カラオケ", en:"karaoke"},
            {jp:"かぶき", en:"Kabuki (traditional Japanese drama)"},
            {jp:"え", en:"picture, drawing"},
            {jp:"じ", en:"letter, character"},
            {jp:"かんじ", en:"Chinese character"},
            {jp:"ひらがな", en:"hiragana script"},
            {jp:"かたかな", en:"katakana script"},
            {jp:"ローマじ", en:"the Roman alphabet"},
            {jp:"じかん", en:"time"},
            {jp:"ようじ", en:"something to do, errand"},
            {jp:"やくそく", en:"appointment, promise (〜[を]します: promise)"},
            {jp:"こまかい[お]かね", en:"small change"},
            {jp:"チケット", en:"ticket"},
            {jp:"アルバイト", en:"side job (〜をします: work part-time)"},
            {jp:"ごしゅじん", en:"(someone else's) husband"},
            {jp:"しゅじん", en:"(my) husband"},
            {jp:"おくさん", en:"(someone else's) wife"},
            {jp:"つま（かない）", en:"(my) wife"},
            {jp:"こども", en:"child"},
            {jp:"よく", en:"well, much"},
            {jp:"だいたい", en:"mostly, roughly"},
            {jp:"たくさん", en:"many, much"},
            {jp:"すこし", en:"a little, a few"},
            {jp:"ぜんぜん", en:"not at all (used with negatives)"},
            {jp:"はやく", en:"early, quickly, fast"},
            {jp:"いっしょに いかがですか。", en:"Won't you join me (us)?"},
            {jp:"ぜひ。", en:"Sure./Certainly."},
            {jp:"[～は] ちょっと。", en:"[~] is a bit difficult. (a euphemism used when declining an invitation)"},
            {jp:"また こんど おねがいします。", en:"So you can't (come)? Please ask me again some other time."}
        ]
    },

    lesson10: {
        vocabulary: [
            {jp:"います", en:"exist, be (referring to animate things)"},
            {jp:"あります", en:"exist, be (referring to inanimate things)"},
            {jp:"いろいろ[な]", en:"various"},
            {jp:"おとこのひと", en:"man"},
            {jp:"おんなのひと", en:"woman"},
            {jp:"おとこのこ", en:"boy"},
            {jp:"おんなのこ", en:"girl"},
            {jp:"いぬ", en:"dog"},
            {jp:"ねこ", en:"cat"},
            {jp:"パンダ", en:"panda"},
            {jp:"ぞう", en:"elephant"},
            {jp:"き", en:"tree, wood"},
            {jp:"もの", en:"thing"},
            {jp:"でんち", en:"battery"},
            {jp:"はこ", en:"box"},
            {jp:"スイッチ", en:"switch"},
            {jp:"れいぞうこ", en:"refrigerator"},
            {jp:"テーブル", en:"table"},
            {jp:"ベッド", en:"bed"},
            {jp:"たな", en:"shelf"},
            {jp:"まど", en:"window"},
            {jp:"ポスト", en:"postbox, mailbox"},
            {jp:"ビル", en:"building"},
            {jp:"コンビニ", en:"convenience store"},
            {jp:"ATM", en:"cash machine, ATM (Automatic Teller Machine)"},
            {jp:"こうえん", en:"park"},
            {jp:"きっさてん", en:"café, coffee shop"},
            {jp:"～や", en:"~ shop, ~ store"},
            {jp:"のりば", en:"a fixed place to catch taxis, buses, etc."},
            {jp:"けん", en:"prefecture"},
            {jp:"うえ", en:"on, above, over"},
            {jp:"した", en:"under, below, beneath"},
            {jp:"まえ", en:"front, before"},
            {jp:"うしろ", en:"back, behind"},
            {jp:"みぎ", en:"right [side]"},
            {jp:"ひだり", en:"left [side]"},
            {jp:"なか", en:"in, inside"},
            {jp:"そと", en:"outside"},
            {jp:"となり", en:"next, next door"},
            {jp:"ちかく", en:"near, vicinity"},
            {jp:"あいだ", en:"between, among"},
            {jp:"～や～[など]", en:"~ and ~ and so on"},
            {jp:"すみません、～。", en:"Excuse me, ~."},
            {jp:"[すみませんが、] ちょっと まって ください。", en:"[I'm sorry, but] please wait a minute."},
            {jp:"ナンプラー", en:"nam pla"},
            {jp:"コーナー", en:"corner, section"},
            {jp:"いちばん した", en:"the bottom"},
            {jp:"アジアストア", en:"a fictitious supermarket"},
            {jp:"とうきょうディズニーランド", en:"Tokyo Disneyland"}
        ]
    },

    lesson11: {
        vocabulary: [
            {jp:"います[こどもが～]", en:"have [a child]"},
            {jp:"います[にほんに～]", en:"stay, be [in Japan]"},
            {jp:"かかります", en:"take, cost (referring to time or money)"},
            {jp:"やすみます[かいしゃを～]", en:"take a day off [work]"},
            {jp:"ひとつ", en:"one (used when counting things)"},
            {jp:"ふたつ", en:"two"},
            {jp:"みっつ", en:"three"},
            {jp:"よっつ", en:"four"},
            {jp:"いつつ", en:"five"},
            {jp:"むっつ", en:"six"},
            {jp:"ななつ", en:"seven"},
            {jp:"やっつ", en:"eight"},
            {jp:"ここのつ", en:"nine"},
            {jp:"とお", en:"ten"},
            {jp:"いくつ", en:"how many (used when counting things)"},
            {jp:"～こ", en:"counter for machines, cars, etc."},
            {jp:"～にん", en:"counter for people"},
            {jp:"なんにん", en:"how many people"},
            {jp:"～まい", en:"counter for paper, stamps, etc."},
            {jp:"～かい", en:"counter for times (occurrences)"},
            {jp:"なんかい", en:"how many times"},
            {jp:"りんご", en:"apple"},
            {jp:"サンドイッチ", en:"sandwich"},
            {jp:"カレー[ライス]", en:"curry [with rice]"},
            {jp:"アイスクリーム", en:"ice cream"},
            {jp:"きって", en:"postage stamp"},
            {jp:"はがき", en:"postcard"},
            {jp:"ふうとう", en:"envelope"},
            {jp:"りょうしん", en:"parents"},
            {jp:"きょうだい", en:"brothers and sisters"},
            {jp:"あに", en:"(my) elder brother"},
            {jp:"あね", en:"(my) elder sister"},
            {jp:"おとうと", en:"(my) younger brother"},
            {jp:"いもうと", en:"(my) younger sister"},
            {jp:"おにいさん", en:"(someone else's) elder brother"},
            {jp:"おねえさん", en:"(someone else's) elder sister"},
            {jp:"おとうとさん", en:"(someone else's) younger brother"},
            {jp:"いもうとさん", en:"(someone else's) younger sister"},
            {jp:"りゅうがくせい", en:"foreign student"},
            {jp:"クラス", en:"class"},
            {jp:"がいこく", en:"foreign country"},
            {jp:"ぜんぶで", en:"in total"},
            {jp:"どのくらい／どれくらい", en:"how long, how much"},
            {jp:"～じかん", en:"~ hour(s)"},
            {jp:"～しゅうかん", en:"~ week(s)"},
            {jp:"～かげつ", en:"~ month(s)"},
            {jp:"～ねんかん", en:"~ year(s)"},
            {jp:"おでかけですか。", en:"Are you going out?"},
            {jp:"ちょっと ～まで。", en:"I'm just going to ~."},
            {jp:"いってらっしゃい。", en:"See you later./So long. (lit. Go and come back.)"},
            {jp:"いってきます。", en:"See you later./So long. (lit. I'm going and coming back.)"},
            {jp:"いい おてんきですね。", en:"Nice weather, isn't it?"},
            {jp:"そうですね。", en:"Certainly. (Sir/Madam)"},
            {jp:"オーストラリア", en:"Australia"},
            {jp:"こうくうびん（エアメール）", en:"airmail"},
            {jp:"ふなびん", en:"sea mail"},
            {jp:"おねがいします。", en:"Please. (lit. ask for a favour)"}
        ]
    },

    lesson12: {
        vocabulary: [
            {jp:"かんたん[な]", en:"easy, simple"},
            {jp:"ちかい", en:"near"},
            {jp:"とおい", en:"far"},
            {jp:"はやい", en:"fast, early"},
            {jp:"おそい", en:"slow, late"},
            {jp:"おおい[ひとが～]", en:"many [people], much"},
            {jp:"すくない[ひとが～]", en:"few [people], a little"},
            {jp:"あたたかい", en:"warm"},
            {jp:"すずしい", en:"cool"},
            {jp:"あまい", en:"sweet"},
            {jp:"からい", en:"hot (taste), spicy"},
            {jp:"おもい", en:"heavy"},
            {jp:"かるい", en:"light"},
            {jp:"いい[コーヒーが～]", en:"prefer [coffee]"},
            {jp:"きせつ", en:"season"},
            {jp:"はる", en:"spring"},
            {jp:"なつ", en:"summer"},
            {jp:"あき", en:"autumn, fall"},
            {jp:"ふゆ", en:"winter"},
            {jp:"てんき", en:"weather"},
            {jp:"あめ", en:"rain, rainy"},
            {jp:"ゆき", en:"snow, snowy"},
            {jp:"くもり", en:"cloudy"},
            {jp:"ホテル", en:"hotel"},
            {jp:"くうこう", en:"airport"},
            {jp:"うみ", en:"sea, ocean"},
            {jp:"せかい", en:"world"},
            {jp:"パーティー", en:"party (〜をします: give a party)"},
            {jp:"[お]まつり", en:"festival"},
            {jp:"すきやき", en:"sukiyaki (beef and vegetable hot pot)"},
            {jp:"さしみ", en:"sashimi (sliced raw fish)"},
            {jp:"[お]すし", en:"sushi (vinegared rice topped with raw fish)"},
            {jp:"てんぷら", en:"tempura (seafood and vegetables deep fried in batter)"},
            {jp:"ぶたにく", en:"pork"},
            {jp:"とりにく", en:"chicken"},
            {jp:"ぎゅうにく", en:"beef"},
            {jp:"レモン", en:"lemon"},
            {jp:"いけばな", en:"flower arrangement (〜をします: practise flower arrangement)"},
            {jp:"もみじ", en:"maple, red leaves of autumn"},
            {jp:"どちら", en:"which one (of two things)"},
            {jp:"どちらも", en:"both"},
            {jp:"いちばん", en:"the most"},
            {jp:"ずっと", en:"by far"},
            {jp:"はじめて", en:"for the first time"},
            {jp:"ただいま。", en:"I'm home."},
            {jp:"[お]かえりなさい。", en:"Welcome home."},
            {jp:"わあ、すごい ひとですね。", en:"Wow! Look at all those people!"},
            {jp:"つかれました。", en:"I'm tired."},
            {jp:"ぎおんまつり", en:"the Gion Festival (the most famous festival in Kyoto)"},
            {jp:"ホンコン", en:"Hong Kong"},
            {jp:"シンガポール", en:"Singapore"},
            {jp:"ABCストア", en:"a fictitious supermarket"},
            {jp:"ジャパン", en:"a fictitious supermarket"}
        ]
    },

    lesson13: {
        vocabulary: [
            {jp:"あそびます", en:"enjoy oneself, play"},
            {jp:"およぎます", en:"swim"},
            {jp:"むかえます", en:"go to meet, welcome"},
            {jp:"つかれます", en:"get tired"},
            {jp:"けっこんします", en:"marry, get married"},
            {jp:"かいものします", en:"do shopping"},
            {jp:"しょくじします", en:"have a meal, dine"},
            {jp:"さんぽします[こうえんを～]", en:"take a walk [in a park]"},
            {jp:"たいへん[な]", en:"hard, tough, severe, awful"},
            {jp:"ほしい", en:"want (something)"},
            {jp:"ひろい", en:"wide, spacious"},
            {jp:"せまい", en:"narrow, small (room, etc.)"},
            {jp:"プール", en:"swimming pool"},
            {jp:"かわ", en:"river"},
            {jp:"びじゅつ", en:"fine arts"},
            {jp:"つり", en:"fishing (〜をします: fish, angle)"},
            {jp:"スキー", en:"skiing (〜をします: ski)"},
            {jp:"しゅうまつ", en:"weekend"},
            {jp:"[お]しょうがつ", en:"New Year's Day"},
            {jp:"～ごろ", en:"about ~ (time)"},
            {jp:"なにか", en:"something"},
            {jp:"どこか", en:"somewhere, some place"},
            {jp:"のどが かわきます", en:"get thirsty"},
            {jp:"おなかが すきます", en:"get hungry"},
            {jp:"そう しましょう。", en:"Let's do that. (used when agreeing with someone's suggestion)"},
            {jp:"ごちゅうもんは？", en:"May I take your order?"},
            {jp:"ていしょく", en:"set meal, table d'hôte"},
            {jp:"ぎゅうどん", en:"bowl of rice topped with beef"},
            {jp:"[しょうしょう] おまち ください。", en:"Please wait [a moment]."},
            {jp:"～で ございます。", en:"(polite equivalent of です)"},
            {jp:"べつべつに", en:"separately"},
            {jp:"アキックス", en:"a fictitious company"},
            {jp:"おはようテレビ", en:"a fictitious TV programme"}
        ]
    },

    lesson14: {
        vocabulary: [
            {jp:"つけます", en:"turn on"},
            {jp:"けします", en:"turn off"},
            {jp:"あけます", en:"open"},
            {jp:"しめます", en:"close, shut"},
            {jp:"いそぎます", en:"hurry"},
            {jp:"まちます", en:"wait"},
            {jp:"もちます", en:"hold"},
            {jp:"とります", en:"take, pass"},
            {jp:"てつだいます", en:"help (with a task)"},
            {jp:"よびます", en:"call"},
            {jp:"はなします", en:"speak, talk"},
            {jp:"つかいます", en:"use"},
            {jp:"とめます", en:"stop, park"},
            {jp:"みせます", en:"show"},
            {jp:"おしえます[じゅうしょを～]", en:"tell [an address]"},
            {jp:"すわります", en:"sit down"},
            {jp:"たちます", en:"stand up"},
            {jp:"はいります[きっさてんに～]", en:"enter [a café]"},
            {jp:"でます[きっさてんを～]", en:"go out [of a café]"},
            {jp:"ふります[あめが～]", en:"rain"},
            {jp:"コピーします", en:"copy"},
            {jp:"でんき", en:"electricity, light"},
            {jp:"エアコン", en:"air conditioner"},
            {jp:"パスポート", en:"passport"},
            {jp:"なまえ", en:"name"},
            {jp:"じゅうしょ", en:"address"},
            {jp:"ちず", en:"map"},
            {jp:"しお", en:"salt"},
            {jp:"さとう", en:"sugar"},
            {jp:"もんだい", en:"question, problem, trouble"},
            {jp:"こたえ", en:"answer"},
            {jp:"よみかた", en:"how to read, way of reading"},
            {jp:"～かた", en:"how to ~, way of ~ing"},
            {jp:"まっすぐ", en:"straight"},
            {jp:"ゆっくり", en:"slowly, leisurely"},
            {jp:"すぐ", en:"immediately"},
            {jp:"また", en:"again"},
            {jp:"あとで", en:"later"},
            {jp:"もうすこし", en:"a little more"},
            {jp:"もう～", en:"~ more, another ~"},
            {jp:"さあ", en:"right (used when encouraging some course of action)"},
            {jp:"あれ？", en:"Oh! Eh? (in surprise or wonder)"},
            {jp:"しんごうを みぎへ まがって ください。", en:"Turn right at the traffic lights."},
            {jp:"これで おねがいします。", en:"I'd like to pay with this."},
            {jp:"おつり", en:"change"},
            {jp:"みどりちょう", en:"a fictitious town"}
        ]
    },

    lesson15: {
        vocabulary: [
            {jp:"おきます", en:"put"},
            {jp:"つくります", en:"make, produce"},
            {jp:"うります", en:"sell"},
            {jp:"しります", en:"get to know"},
            {jp:"すみます", en:"be going to live"},
            {jp:"けんきゅうします", en:"do research"},
            {jp:"しりょう", en:"materials, data"},
            {jp:"カタログ", en:"catalogue"},
            {jp:"じこくひょう", en:"timetable"},
            {jp:"ふく", en:"clothes"},
            {jp:"せいひん", en:"products"},
            {jp:"ソフト", en:"software"},
            {jp:"でんしじしょ", en:"electronic dictionary"},
            {jp:"けいざい", en:"economy"},
            {jp:"しやくしょ", en:"municipal office, city hall"},
            {jp:"こうこう", en:"senior high school"},
            {jp:"はいしゃ", en:"dentist, dentist's"},
            {jp:"どくしん", en:"single, unmarried"},
            {jp:"すみません", en:"I'm sorry."},
            {jp:"みなさん", en:"Ladies and Gentlemen, everybody"},
            {jp:"おもいだします", en:"remember, recollect"},
            {jp:"いらっしゃいます", en:"be (honorific equivalent of います)"},
            {jp:"にっぽんばし", en:"a shopping district in Osaka"},
            {jp:"みんなのインタビュー", en:"a fictitious TV programme"}
        ]
    },

    lesson16: {
        vocabulary: [
            {jp:"のります[でんしゃに～]", en:"ride, get on [a train]"},
            {jp:"おります[でんしゃを～]", en:"get off [a train]"},
            {jp:"のりかえます[でんしゃを～]", en:"change (train, etc.)"},
            {jp:"あびます[シャワーを～]", en:"take [a shower]"},
            {jp:"いれます", en:"put in, insert"},
            {jp:"だします", en:"take out, hand in, send"},
            {jp:"おろします[おかねを～]", en:"withdraw [money]"},
            {jp:"はいります[だいがくに～]", en:"enter [university]"},
            {jp:"でます[だいがくを～]", en:"graduate from [university]"},
            {jp:"おします", en:"push, press"},
            {jp:"のみます[おさけを～]", en:"drink alcohol"},
            {jp:"はじめます", en:"start, begin"},
            {jp:"けんがくします", en:"tour, visit a place to study/observe"},
            {jp:"でんわします", en:"phone"},
            {jp:"わかい", en:"young"},
            {jp:"ながい", en:"long"},
            {jp:"みじかい", en:"short"},
            {jp:"あかるい", en:"bright, light"},
            {jp:"くらい", en:"dark"},
            {jp:"からだ", en:"body, health"},
            {jp:"あたま", en:"head, brain"},
            {jp:"かみ", en:"hair"},
            {jp:"かお", en:"face"},
            {jp:"め", en:"eye"},
            {jp:"みみ", en:"ear"},
            {jp:"はな", en:"nose"},
            {jp:"くち", en:"mouth"},
            {jp:"は", en:"tooth"},
            {jp:"おなか", en:"stomach"},
            {jp:"あし", en:"leg, foot"},
            {jp:"せ", en:"height"},
            {jp:"サービス", en:"service"},
            {jp:"ジョギング", en:"jogging (〜をします: jog)"},
            {jp:"シャワー", en:"shower"},
            {jp:"みどり", en:"green, greenery"},
            {jp:"[お]てら", en:"Buddhist temple"},
            {jp:"じんじゃ", en:"Shinto shrine"},
            {jp:"～ばん", en:"number ~"},
            {jp:"どうやって", en:"in what way, how"},
            {jp:"どの～", en:"which ~ (used for three or more)"},
            {jp:"どれ", en:"which one (of three or more things)"},
            {jp:"すごいですね。", en:"That's amazing!"},
            {jp:"[いいえ、] まだまだです。", en:"[No,] I still have a long way to go."},
            {jp:"おひきだしですか。", en:"Are you making a withdrawal?"},
            {jp:"まず", en:"first of all"},
            {jp:"つぎに", en:"next, as a next step"},
            {jp:"キャッシュカード", en:"cash dispensing card"},
            {jp:"あんしょうばんごう", en:"personal identification number, PIN"},
            {jp:"きんがく", en:"amount of money"},
            {jp:"かくにん", en:"confirmation (〜します: confirm)"},
            {jp:"ボタン", en:"button"},
            {jp:"JR", en:"Japan Railways"},
            {jp:"ゆきまつり", en:"Snow Festival"},
            {jp:"バンドン", en:"Bandung (in Indonesia)"},
            {jp:"フランケン", en:"Franken (in Germany)"},
            {jp:"ベラクルス", en:"Veracruz (in Mexico)"},
            {jp:"うめだ", en:"a district in Osaka"},
            {jp:"だいがくまえ", en:"a fictitious bus stop"}
        ]
    },

    lesson17: {
        vocabulary: [
            {jp:"おぼえます", en:"memorise"},
            {jp:"わすれます", en:"forget"},
            {jp:"なくします", en:"lose"},
            {jp:"はらいます", en:"pay"},
            {jp:"かえします", en:"give back, return"},
            {jp:"でかけます", en:"go out"},
            {jp:"ぬぎます", en:"take off (clothes, shoes, etc.)"},
            {jp:"もっていきます", en:"take (something)"},
            {jp:"もってきます", en:"bring (something)"},
            {jp:"しんぱいします", en:"worry"},
            {jp:"ざんぎょうします", en:"work overtime"},
            {jp:"しゅっちょうします", en:"go on a business trip"},
            {jp:"のみます[くすりを～]", en:"take [medicine]"},
            {jp:"はいります[おふろに～]", en:"take [a bath]"},
            {jp:"たいせつ[な]", en:"important, precious"},
            {jp:"だいじょうぶ[な]", en:"all right"},
            {jp:"あぶない", en:"dangerous"},
            {jp:"きんえん", en:"no smoking"},
            {jp:"[けんこう]ほけんしょう", en:"[health] insurance card"},
            {jp:"ねつ", en:"temperature, fever"},
            {jp:"びょうき", en:"illness, disease"},
            {jp:"くすり", en:"medicine"},
            {jp:"[お]ふろ", en:"bath"},
            {jp:"うわぎ", en:"jacket, outerwear"},
            {jp:"したぎ", en:"underwear"},
            {jp:"2、3にち", en:"two or three days"},
            {jp:"2、3～", en:"two or three ~ (where ~ is a counter suffix)"},
            {jp:"～までに", en:"before ~, by ~ (indicating time limit)"},
            {jp:"ですから", en:"therefore, so"},
            {jp:"どう しましたか。", en:"What's the matter?"},
            {jp:"のど", en:"throat"},
            {jp:"[～が] いたいです。", en:"(I) have a pain [in my ~]."},
            {jp:"かぜ", en:"cold, flu"},
            {jp:"それから", en:"and, furthermore"},
            {jp:"おだいじに。", en:"Take care of yourself. (said to people who are ill)"}
        ]
    },

    lesson18: {
        vocabulary: [
            {jp:"できます", en:"be able to, can"},
            {jp:"あらいます", en:"wash"},
            {jp:"ひきます", en:"play (stringed instrument, piano)"},
            {jp:"うたいます", en:"sing"},
            {jp:"あつめます", en:"collect, gather"},
            {jp:"すてます", en:"throw away"},
            {jp:"かえます", en:"exchange, change"},
            {jp:"うんてんします", en:"drive"},
            {jp:"よやくします", en:"reserve, book"},
            {jp:"ピアノ", en:"piano"},
            {jp:"～メートル", en:"~ meter"},
            {jp:"げんきん", en:"cash"},
            {jp:"しゅみ", en:"hobby"},
            {jp:"にっき", en:"diary"},
            {jp:"おいのり", en:"prayer (〜をします: pray)"},
            {jp:"かちょう", en:"section head"},
            {jp:"ぶちょう", en:"department head"},
            {jp:"しゃちょう", en:"company president"},
            {jp:"どうぶつ", en:"animal"},
            {jp:"うま", en:"horse"},
            {jp:"インターネット", en:"the Internet"},
            {jp:"とくに", en:"especially"},
            {jp:"へえ", en:"What! Really! (used when expressing surprise)"},
            {jp:"それは おもしろいですね。", en:"That's interesting, isn't it?"},
            {jp:"なかなか", en:"not easily (used with negatives)"},
            {jp:"ほんとうですか。", en:"Really?"},
            {jp:"ぜひ", en:"by all means, really"},
            {jp:"ふるさと", en:"Furusato (a song title meaning 'Home Town')"},
            {jp:"ビートルズ", en:"the Beatles (a famous British pop group)"},
            {jp:"あきはばら", en:"a district in Tokyo"}
        ]
    },

    lesson19: {
        vocabulary: [
            {jp:"のぼります", en:"climb, go up"},
            {jp:"とまります[ホテルに～]", en:"stay [at a hotel]"},
            {jp:"そうじします", en:"clean (a room)"},
            {jp:"せんたくします", en:"wash (clothes)"},
            {jp:"なります", en:"become"},
            {jp:"ねむい", en:"sleepy"},
            {jp:"つよい", en:"strong"},
            {jp:"よわい", en:"weak"},
            {jp:"れんしゅう", en:"practice (〜[を]します: practise)"},
            {jp:"ゴルフ", en:"golf (〜をします: play golf)"},
            {jp:"すもう", en:"sumo wrestling (〜をします: wrestle sumo)"},
            {jp:"おちゃ", en:"tea ceremony"},
            {jp:"ひ", en:"day, date"},
            {jp:"ちょうし", en:"condition"},
            {jp:"いちど", en:"once"},
            {jp:"いちども", en:"not once, never (used with negatives)"},
            {jp:"だんだん", en:"gradually"},
            {jp:"もうすぐ", en:"soon"},
            {jp:"おかげさまで", en:"Thank you. (used when expressing gratitude for help received)"},
            {jp:"でも", en:"but"},
            {jp:"かんぱい", en:"Bottoms up./Cheers!"},
            {jp:"ダイエット", en:"diet (〜をします: go on a diet)"},
            {jp:"むり[な]", en:"excessive, impossible"},
            {jp:"からだに いい", en:"good for one's health"},
            {jp:"とうきょうスカイツリー", en:"Tokyo Sky Tree (broadcasting tower with observation deck in Tokyo)"},
            {jp:"かつしかほくさい", en:"a famous Edo-period woodblock artist and painter (1760-1849)"}
        ]
    },

    lesson20: {
        vocabulary: [
            {jp:"いります[びざが～]", en:"need, require [a visa]"},
            {jp:"しらべます", en:"check, investigate"},
            {jp:"しゅうりします", en:"repair"},
            {jp:"ぼく", en:"I (an informal equivalent of わたし, used by men)"},
            {jp:"きみ", en:"you (an informal equivalent of あなた, used to address people of equal or lower status)"},
            {jp:"～くん", en:"Mr. (an informal equivalent of ～さん, used to address people of equal or lower status; also often appended to boys' names)"},
            {jp:"うん", en:"yes (an informal equivalent of はい)"},
            {jp:"ううん", en:"no (an informal equivalent of いいえ)"},
            {jp:"ことば", en:"word, language"},
            {jp:"きもの", en:"kimono (traditional Japanese attire)"},
            {jp:"ビザ", en:"visa"},
            {jp:"はじめ", en:"the beginning"},
            {jp:"おわり", en:"the end of ~, The End"},
            {jp:"こっち", en:"this way, this place (an informal equivalent of こちら)"},
            {jp:"そっち", en:"that way, that place near the listener (an informal equivalent of そちら)"},
            {jp:"あっち", en:"that way, that place over there (an informal equivalent of あちら)"},
            {jp:"どっち", en:"which one (of two things), which way, where (an informal equivalent of どちら)"},
            {jp:"みんなで", en:"all together"},
            {jp:"～けど", en:"~, but (an informal equivalent of が)"},
            {jp:"おなかが いっぱいです。", en:"(I'm) full."},
            {jp:"よかったら", en:"if you like"},
            {jp:"いろいろ", en:"various"}
        ]
    },

    lesson21: {
        vocabulary: [
            {jp:"おもいます", en:"think"},
            {jp:"いいます", en:"say"},
            {jp:"かちます", en:"win"},
            {jp:"まけます", en:"lose, be beaten"},
            {jp:"あります[おまつりが～]", en:"[a festival] be held, take place"},
            {jp:"やくに たちます", en:"be useful"},
            {jp:"うごきます", en:"move, work"},
            {jp:"やめます[かいしゃを～]", en:"quit or retire from [a company], give up"},
            {jp:"きを つけます", en:"pay attention, take care"},
            {jp:"りゅうがくします", en:"study abroad"},
            {jp:"むだ[な]", en:"wasteful"},
            {jp:"ふべん[な]", en:"inconvenient"},
            {jp:"すごい", en:"awful, great (expresses astonishment or admiration)"},
            {jp:"ほんとう", en:"true"},
            {jp:"うそ", en:"lie"},
            {jp:"じどうしゃ", en:"car, automobile"},
            {jp:"こうつう", en:"transport, traffic"},
            {jp:"ぶっか", en:"[commodity] prices"},
            {jp:"ほうそう", en:"announcement, broadcast"},
            {jp:"ニュース", en:"news"},
            {jp:"アニメ", en:"anime (Japanese animated film)"},
            {jp:"マンガ", en:"comic book"},
            {jp:"デザイン", en:"design, artwork"},
            {jp:"ゆめ", en:"dream"},
            {jp:"てんさい", en:"genius"},
            {jp:"しあい", en:"game, match (〜をします: play a game/match)"},
            {jp:"いけん", en:"opinion"},
            {jp:"はなし", en:"talk, speech, what one says, story (〜をします: talk, tell a story)"},
            {jp:"ちきゅう", en:"earth"},
            {jp:"つき", en:"moon"},
            {jp:"さいきん", en:"recently, these days"},
            {jp:"たぶん", en:"probably, perhaps, maybe"},
            {jp:"きっと", en:"surely, definitely"},
            {jp:"ほんとうに", en:"really"},
            {jp:"そんなに", en:"not so (used with negatives)"},
            {jp:"～について", en:"about ~, concerning ~"},
            {jp:"おひさしぶりですね。", en:"It's been a long time [since we last met]."},
            {jp:"～でも のみませんか。", en:"How about drinking ~ or something?"},
            {jp:"もちろん", en:"of course"},
            {jp:"もう かえらないと……。", en:"I have to get home now......"},
            {jp:"アインシュタイン", en:"Albert Einstein (1879-1955)"},
            {jp:"ガガーリン", en:"Yuri Alekseyevich Gagarin (1934-1968)"},
            {jp:"ガリレオ", en:"Galileo Galilei (1564-1642)"},
            {jp:"キングぼくし", en:"Martin Luther King, Jr. (1929-1968)"},
            {jp:"フランクリン", en:"Benjamin Franklin (1706-1790)"},
            {jp:"かぐやひめ", en:"Princess Kaguya (heroine of the old Japanese folk tale 'Taketori Monogatari')"},
            {jp:"てんじんまつり", en:"Tenjin Festival (a festival in Osaka)"},
            {jp:"よしのやま", en:"Mt. Yoshino (a mountain in Nara Prefecture)"},
            {jp:"カンガルー", en:"kangaroo"},
            {jp:"キャプテン・クック", en:"Captain James Cook (1728-1779)"},
            {jp:"ヨーネン", en:"a fictitious company"}
        ]
    },

    lesson22: {
        vocabulary: [
            {jp:"きます", en:"put on (a shirt, etc.)"},
            {jp:"はきます", en:"put on (shoes, trousers, etc.)"},
            {jp:"かぶります", en:"put on (a hat, etc.)"},
            {jp:"かけます[めがねを～]", en:"put on [glasses]"},
            {jp:"します[ネクタイを～]", en:"put on [tie]"},
            {jp:"うまれます", en:"be born"},
            {jp:"わたしたち", en:"we"},
            {jp:"コート", en:"coat"},
            {jp:"セーター", en:"sweater"},
            {jp:"スーツ", en:"suit"},
            {jp:"ぼうし", en:"hat, cap"},
            {jp:"めがね", en:"glasses"},
            {jp:"ケーキ", en:"cake"},
            {jp:"[お]べんとう", en:"box lunch"},
            {jp:"ロボット", en:"robot"},
            {jp:"ユーモア", en:"humor"},
            {jp:"つごう", en:"convenience"},
            {jp:"よく", en:"often"},
            {jp:"えーと", en:"well, let me see"},
            {jp:"おめでとう[ございます]。", en:"Congratulations. (used on birthdays, at weddings, New Year's Day, etc.)"},
            {jp:"おさがしですか。", en:"Are you looking for ~?"},
            {jp:"では", en:"Well then,"},
            {jp:"こちら", en:"this (polite equivalent of これ)"},
            {jp:"やちん", en:"rent"},
            {jp:"ダイニングキッチン", en:"kitchen with a dining area"},
            {jp:"わしつ", en:"Japanese-style room"},
            {jp:"おしいれ", en:"Japanese-style closet"},
            {jp:"ふとん", en:"Japanese-style mattress and quilt"},
            {jp:"パリ", en:"Paris"},
            {jp:"ばんりのちょうじょう", en:"the Great Wall of China"},
            {jp:"みんなのアンケート", en:"title of a fictitious questionnaire"}
        ]
    },

    lesson23: {
        vocabulary: [
            {jp:"ききます[せんせいに～]", en:"ask [the teacher]"},
            {jp:"まわします", en:"turn"},
            {jp:"ひきます", en:"pull"},
            {jp:"かえます", en:"change"},
            {jp:"さわります[ドアに～]", en:"touch [a door]"},
            {jp:"でます[おつりが～]", en:"[change] come out"},
            {jp:"あるきます", en:"walk"},
            {jp:"わたります[はしを～]", en:"cross [a bridge]"},
            {jp:"まがります[みぎへ～]", en:"turn [to the right]"},
            {jp:"さびしい", en:"lonely"},
            {jp:"[お]ゆ", en:"hot water"},
            {jp:"おと", en:"sound"},
            {jp:"サイズ", en:"size"},
            {jp:"こしょう", en:"breakdown (〜します: break down)"},
            {jp:"みち", en:"road, way"},
            {jp:"こうさてん", en:"crossroads"},
            {jp:"しんごう", en:"traffic lights"},
            {jp:"かど", en:"corner"},
            {jp:"はし", en:"bridge"},
            {jp:"ちゅうしゃじょう", en:"car park, parking lot"},
            {jp:"たてもの", en:"building"},
            {jp:"なんかいも", en:"many times"},
            {jp:"～め", en:"the -th (indicating order)"},
            {jp:"しょうとくたいし", en:"Prince Shotoku (574-622)"},
            {jp:"ほうりゅうじ", en:"Horyuji Temple, a temple in Nara Prefecture built by Prince Shotoku at the beginning of the 7th century"},
            {jp:"げんきちゃ", en:"a fictitious tea"},
            {jp:"ほんだえき", en:"a fictitious station"},
            {jp:"としょかんまえ", en:"a fictitious bus stop"}
        ]
    },

    lesson24: {
        vocabulary: [
            {jp:"くれます", en:"give (me)"},
            {jp:"なおします", en:"repair, correct"},
            {jp:"つれていきます", en:"take (someone)"},
            {jp:"つれてきます", en:"bring (someone)"},
            {jp:"おくります[ひとを～]", en:"escort [someone], go with"},
            {jp:"しょうかいします", en:"introduce"},
            {jp:"あんないします", en:"show around, show the way"},
            {jp:"せつめいします", en:"explain"},
            {jp:"おじいさん／おじいちゃん", en:"grandfather, old man"},
            {jp:"おばあさん／おばあちゃん", en:"grandmother, old woman"},
            {jp:"じゅんび", en:"preparation (〜[を]します: prepare)"},
            {jp:"ひっこし", en:"moving out (〜[を]します: move out)"},
            {jp:"[お]かし", en:"sweets, snacks"},
            {jp:"ホームステイ", en:"homestay"},
            {jp:"ぜんぶ", en:"all"},
            {jp:"じぶんで", en:"by oneself"},
            {jp:"ほかに", en:"besides"},
            {jp:"ははのひ", en:"Mother's Day"}
        ]
    },

    lesson25: {
        vocabulary: [
            {jp:"かんがえます", en:"think, consider"},
            {jp:"つきます", en:"arrive"},
            {jp:"とります[としを～]", en:"grow old"},
            {jp:"たります", en:"be enough, be sufficient"},
            {jp:"いなか", en:"countryside, hometown"},
            {jp:"チャンス", en:"chance"},
            {jp:"おく", en:"hundred million"},
            {jp:"もし[～たら]", en:"if"},
            {jp:"いみ", en:"meaning"},
            {jp:"もしもし", en:"hello (used on the phone)"},
            {jp:"てんきん", en:"transfer (〜します: be transferred to another office)"},
            {jp:"こと", en:"thing, matter (〜の こと: thing about ~)"},
            {jp:"ひま", en:"free time"},
            {jp:"[いろいろ] おせわに なりました。", en:"Thank you for everything you've done for me."},
            {jp:"がんばります", en:"do one's best"},
            {jp:"どうぞ おげんきで。", en:"Please take care of yourself. (said when expecting a long separation)"},
            {jp:"ベトナム", en:"Vietnam"}
        ]
    }

    // lesson26: { vocabulary: [...], grammar: [...] },

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

    (lesson.grammar || []).forEach(g=>{

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
