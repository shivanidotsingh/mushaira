/* ---------- DATA: all the content lives here ---------- */
const ERAS=[
 {n:'Early &amp; Deccan Era',span:'13th to 17th centuries',c:'#CC2E8C',f:'#ffffff',desc:'Rooted in Hindavi and Rekhta, with early compositions in the 13th century. Urdu poetry flourished as a major tradition in the Deccan courts of Golconda and Bijapur in the 16th and 17th centuries.'},
 {n:'Classical Era',span:'18th to 19th centuries',c:'#D93349',f:'#ffffff',desc:'Wali\u2019s arrival in Delhi around 1700 sparked the northern tradition. The Delhi school stressed emotional depth, mysticism and inner experience. After migration from Delhi, the Lucknow school turned to courtly refinement, verbal craft and the marsiya, or elegy.'},
 {n:'Modern &amp; Nationalist Era',span:'Late 19th to mid 20th century',c:'#2F7A3F',f:'#ffffff',desc:'Under colonial rule and rising political movements, themes widened to nationalism, reform, pan-Islamism and social critique.'},
 {n:'Post-Partition &amp; Contemporary Era',span:'Mid 20th century to present',c:'#EFB920',f:'#1b1218',desc:'After the 1947 Partition, Urdu poetry developed across India, Pakistan and the diaspora, taking in progressive, symbolic and personal themes.'}];
// Flower recipe: s = petal shape (round | point | curl), n = petals, w = petal width,
// a = outer petals, b = inner petals (optional), c = centre.
const PK='#E23FA0',RD='#D93349',YL='#EFB920',OR='#F28C28',CR='#FFF1E0',PU='#7B3FA0',BR='#6b3a1f',GN='#3E9B4F';
// Kept in birth-year order. b = birth year, used to place poets on the timeline.
const POETS=[
 {id:'khusro',name:'Amir Khusro',short:'Khusro',ur:'امیر خسرو',b:1253,y:'1253–1325',era:0,
  bio:'Born in Patiali and based at the Delhi Sultanate courts, Amir Khusro was a Sufi disciple of Nizamuddin Auliya, musician, and polymath. Writing across Persian and early Hindavi, he laid foundational bridges between Indo-Persian courtly verse and local vernacular song.',
  works:[
   {title:'Persian divans',url:'https://www.rekhta.org/poets/ameer-khusrau/all'},
   {title:'Khamsa',url:'https://www.rekhta.org/poets/ameer-khusrau/all'},
   {title:'Hindavi riddles and songs',url:'https://www.rekhta.org/poets/ameer-khusrau/all'}
  ],
  fl:{s:'point',n:8,w:.26,a:CR,b:OR,c:YL}},

 {id:'kabir',name:'Kabir',short:'Kabir',ur:'کبیر',b:1400,y:'c. 1398–1518',era:0,
  bio:'A fifteenth-century Sant mystic and weaver in northern India whose vernacular verses cut through ritual and worldly calculation. His songs speak in an unguarded, ecstatic register of inner devotion and freedom from social pretension.',
  works:[
   {title:'Bijak (sabads, ramainis and sakhis)',url:'https://www.rekhta.org/poets/kabir/couplets'}
  ],
  fl:{s:'curl',n:6,w:.24,a:CR,b:OR,c:YL}},
 
 {id:'quli',name:'Muhammad Quli Qutb Shah',short:'Quli',ur:'محمد قلی قطب شاہ',b:1565,y:'1565–1612',era:0,
  bio:'The fifth ruler of the Qutb Shahi dynasty of Golconda and founder of Hyderabad, Muhammad Quli Qutb Shah composed the first full-fledged divan in Dakhni Urdu. His verse celebrates royal festivals, Deccani seasons, and earthly devotion in a vivid local idiom.',
  works:[
   {title:'Kulliyat (the first complete Urdu divan)',url:'https://archive.org/details/KulliyatESultanMuhammadQuliQutbShah'}
  ],
  fl:{s:'round',n:10,w:.22,a:OR,b:YL,c:BR}},
 
 {id:'wali',name:'Wali Deccani',short:'Wali',ur:'ولی دکنی',b:1667,y:'c. 1667–1707',era:0,
  bio:'Born in Aurangabad and trained in Gujarat, Wali bridged the southern Dakhni tradition and northern Delhi literary circles. When his divan reached Delhi around 1700, it sparked an explosion of ghazal writing in Urdu rather than Persian.',
  works:[
   {title:'Divan-e-Wali',url:'https://archive.org/details/divaniwali'}
  ],
  fl:{s:'round',n:5,w:.3,a:YL,c:OR}},

 {id:'bulleh',name:'Bulleh Shah',short:'Bulleh',ur:'بلھے شاہ',b:1680,y:'c. 1680–1757',era:1,
  bio:'A towering Punjabi Sufi poet and mystic from Kasur, Bulleh Shah wrote ecstatic kafis that question religious orthodoxy, caste, and ego. Through everyday imagery and fierce longing for his murshid Shah Inayat, his songs remain alive across folk and Sufi music.',
  works:[
   {title:'Kafis of Bulleh Shah',url:'https://www.rekhta.org/poets/bulleh-shah/all'}
  ],
  fl:{s:'curl',n:8,w:.25,a:OR,b:CR,c:PU}},
 
 {id:'mir',name:'Mir Taqi Mir',short:'Mir',ur:'میر تقی میر',b:1723,y:'1723–1810',era:1,
  bio:'Shaped by childhood loss in Agra and the repeated sacking of Mughal Delhi before spending his final decades in Lucknow, Mir defined the emotional core of the classical Urdu ghazal. Known as Khuda-e-Sukhan, he turned heartbreak and ruined cities into spare, devastating speech.',
  works:[
   {title:'Six divans',url:'https://en.wikipedia.org/wiki/Mir_Taqi_Mir'},
   {title:'Zikr-e-Mir (autobiography)',url:'https://archive.org/details/zikrimir'},
   {title:'Nikat-ush-Shu\u2019ara',url:'https://en.wikipedia.org/wiki/Mir_Taqi_Mir'}
  ],
  fl:{s:'round',n:12,w:.14,a:CR,b:YL,c:BR}},
 {id:'nazeer',name:'Nazeer Akbarabadi',short:'Nazeer',ur:'نظیر اکبر آبادی',b:1735,y:'1735–1830',era:1,
  bio:'Refusing royal patronage in Agra, Nazeer lived among ordinary artisans, street performers, and festival crowds. Considered the father of the Urdu nazm, he wrote democratic, street-level poems on human mortality, seasons, and everyday survival.',
  works:[
   {title:'Banjara-nama',url:'https://en.wikipedia.org/wiki/Banjaranama'},
   {title:'Aadmi-nama',url:'https://www.rekhta.org/poets/nazeer-akbarabadi/all'}
  ],
  fl:{s:'curl',n:7,a:PK,c:YL}},
 {id:'mahlaqa',name:'Mah Laqa Bai Chanda',short:'Mah Laqa',ur:'ماہ لقا بائی چندا',b:1768,y:'1768–1824',era:1,
  bio:'A celebrated courtesan, diplomat, and patron of the arts at the Nizam\u2019s court in Hyderabad, Mah Laqa Bai Chanda became the first woman poet to publish a complete Urdu divan. Her ghazals blend Shi\u2019i devotion with courtly grace and musical poise.',
  works:[
   {title:'Gulzar-e-Mah Laqa',url:'https://artsandculture.google.com/story/mah-laqa-chanda-rekhta-foundation/8AUBe_1QvRv_Jg?hl=en'}
  ],
  fl:{s:'point',n:10,w:.22,a:GN,b:CR,c:YL}},
 {id:'zafar',name:'Bahadur Shah Zafar',short:'Zafar',ur:'بہادر شاہ ظفر',b:1775,y:'1775–1862',era:1,
  bio:'The last Mughal emperor of Delhi, Zafar presided over a twilight court that nurtured Ghalib and Zauq even as British power closed in. Following the 1857 uprising, he was exiled to Rangoon, where his late ghazals became elegies for a vanished world.',
  works:[
   {title:'Divan',url:'https://www.rekhta.org/poets/bahadur-shah-zafar/ghazals'}
  ],
  fl:{s:'round',n:6,w:.28,a:YL,b:CR,c:BR}},
 {id:'ghalib',name:'Mirza Ghalib',short:'Ghalib',ur:'مرزا غالب',b:1797,y:'1797–1869',era:1,
  bio:'Born in Agra and rooted in Delhi through the collapse of Mughal rule in 1857, Ghalib reshaped Urdu poetry with metaphysical wit, skepticism, and self-irony. His razor-sharp letters also modernized Urdu prose into a conversational art.',
  works:[
   {title:'Urdu divan',url:'https://www.rekhta.org/poets/mirza-ghalib/ghazals'},
   {title:'Dastanbuy',url:'https://www.rekhta.org/ebooks/detail/dastanbuy-khwaja-ahmad-faruqi-ebooks'},
   {title:'Letters',url:'https://www.rekhta.org/poets/mirza-ghalib/ebooks'}
  ],
  fl:{s:'curl',n:9,a:CR,b:PK,c:YL}},
 {id:'daagh',name:'Daagh Dehlvi',short:'Daagh',ur:'داغ دہلوی',b:1831,y:'1831–1905',era:1,
  bio:'Raised in Delhi\u2019s Red Fort and later serving at the courts of Rampur and the Nizam of Hyderabad, Daagh was famed for pure, idiomatic Delhi speech. His sparkling, unadorned ghazals drew hundreds of disciples across India, including a young Iqbal.',
  works:[
   {title:'Gulzar-e-Daagh',url:'https://en.wikipedia.org/wiki/Daagh_Dehlvi'},
   {title:'Aftab-e-Daagh',url:'https://en.wikipedia.org/wiki/Daagh_Dehlvi'},
   {title:'Mahtab-e-Daagh',url:'https://en.wikipedia.org/wiki/Daagh_Dehlvi'},
   {title:'Yadgar-e-Daagh',url:'https://en.wikipedia.org/wiki/Daagh_Dehlvi'}
  ],
  fl:{s:'round',n:16,w:.1,a:YL,c:BR}},
 {id:'iqbal',name:'Muhammad Iqbal',short:'Iqbal',ur:'علامہ اقبال',b:1877,y:'1877–1938',era:2,
  bio:'Born in Sialkot and educated in Lahore, Cambridge, and Munich, Iqbal transformed Urdu and Persian poetry into a vehicle for philosophical renewal. Through his concept of Khudi (selfhood), he urged spiritual awakening and anti-colonial confidence.',
  works:[
   {title:'Bang-e-Dra',url:'https://www.rekhta.org/ebooks/detail/bang-e-dra-ma-farhang-allama-iqbal-ebooks'},
   {title:'Bal-e-Jibril',url:'https://en.wikipedia.org/wiki/The_Call_of_the_Marching_Bell'},
   {title:'Shikwa and Jawab-e-Shikwa',url:'https://en.wikipedia.org/wiki/The_Call_of_the_Marching_Bell'}
  ],
  fl:{s:'point',n:6,w:.3,a:CR,b:PK,c:YL}},
 
 {id:'jigar',name:'Jigar Moradabadi',short:'Jigar',ur:'جگر مرادآبادی',b:1890,y:'1890–1960',era:2,
  bio:'Born in Moradabad and celebrated across mushairas of the early twentieth century, Jigar bridged classical ghazal lyricism with modern emotional candor. Known as Taj-ul-Shu\u2019ara, he wrote with unguarded intensity about love, humility, and human reckoning.',
  works:[
   {title:'Atish-e-Gul',url:'https://www.rekhta.org/poets/jigar-moradabadi/all'},
   {title:'Shola-e-Toor',url:'https://www.rekhta.org/poets/jigar-moradabadi/all'},
   {title:'Dagh-e-Jigar',url:'https://www.rekhta.org/poets/jigar-moradabadi/all'}
  ],
  fl:{s:'round',n:8,w:.24,a:OR,b:CR,c:RD}},
 
 {id:'firaq',name:'Firaq Gorakhpuri',short:'Firaq',ur:'فراق گورکھپوری',b:1896,y:'1896–1982',era:2,
  bio:'Born Raghupati Sahay in Gorakhpur, Firaq left the Indian Civil Service to join the independence movement and later taught English literature at Allahabad University. He infused the classical ghazal with Indian aesthetics, tender intimacy, and quiet philosophical melancholy.',
  works:[
   {title:'Gul-e-Naghma',url:'https://www.rekhta.org/poets/firaq-gorakhpuri/all'},
   {title:'Ruh-e-Kainat',url:'https://www.rekhta.org/poets/firaq-gorakhpuri/all'}
  ],
  fl:{s:'point',n:7,w:.3,a:PU,b:CR,c:YL}},
 {id:'faiz',name:'Faiz Ahmed Faiz',short:'Faiz',ur:'فیض احمد فیض',b:1911,y:'1911–1984',era:3,
  bio:'A leading voice of the Progressive Writers\u2019 Movement, journalist, and frequent political prisoner in post-Partition Pakistan, Faiz fused classical romantic imagery with anti-authoritarian resistance. In his verse, longing for the beloved and longing for justice become one.',
  works:[
   {title:'Naqsh-e-Faryadi',url:'https://www.rekhta.org/ebooks/detail/naqsh-e-faryadi-faiz-ahmad-faiz-ebooks-5'},
   {title:'Dast-e-Saba',url:'https://en.wikipedia.org/wiki/Faiz_Ahmad_Faiz'},
   {title:'Zindan Nama',url:'https://en.wikipedia.org/wiki/Faiz_Ahmad_Faiz'}
  ],
  fl:{s:'round',n:5,w:.3,a:PK,b:RD,c:CR}},
 
 {id:'kaifi',name:'Kaifi Azmi',short:'Kaifi',ur:'کیفی اعظمی',b:1919,y:'1919–2002',era:3,
  bio:'Born in Azamgarh, Kaifi Azmi left seminary studies to join the Communist Party and trade-union organizing in Bombay. Alongside acclaimed Hindi film lyrics, he wrote fiery progressive nazms championing working-class dignity and women\u2019s emancipation.',
  works:[
   {title:'Jhankaar',url:'https://en.wikipedia.org/wiki/Kaifi_Azmi'},
   {title:'Awaara Sajde',url:'https://en.wikipedia.org/wiki/Kaifi_Azmi'},
   {title:'Aurat (nazm)',url:'https://en.wikipedia.org/wiki/Kaifi_Azmi'}
  ],
  fl:{s:'curl',n:6,a:RD,b:CR,c:YL}},

 {id:'shahryar',name:'Shahryar',short:'Shahryar',ur:'شہریار',b:1936,y:'1936–2012',era:3,
  bio:'Born in Aanwala and based in Aligarh, Kunwar Akhlaq Muhammad Khan \u201cShahryar\u201d brought a refined, haunting modern sensibility to the Urdu ghazal. His verses reached wide audiences through films like Umrao Jaan, where delicate longing meets memorable melody.',
  works:[
   {title:'Khwab Ka Dar Band Hai',url:'https://www.rekhta.org/poets/shahryar/all'},
   {title:'Umrao Jaan (film lyrics)',url:'https://www.rekhta.org/poets/shahryar/all'}
  ],
  fl:{s:'point',n:7,w:.25,a:YL,b:PK,c:CR}},
 
 {id:'nida',name:'Nida Fazli',short:'Nida',ur:'ندا فاضلی',b:1938,y:'1938–2016',era:3,
  bio:'Born in Delhi and raised in Gwalior before moving to Mumbai after his family migrated during Partition, Nida Fazli stripped Urdu poetry of heavy ornamentation. His ghazals and dohas speak in quiet, everyday language about displacement, humanism, and urban solitude.',
  works:[
   {title:'Lafzon Ke Pul',url:'https://www.rekhta.org/poets/nida-fazli/all'},
   {title:'Khoya Hua Sa Kuchh',url:'https://www.rekhta.org/poets/nida-fazli/all'}
  ],
  fl:{s:'round',n:4,w:.34,a:RD,c:CR}}];

const FORMS={
  ghazal:{label:'Ghazal',desc:'A sequence of independent two-line couplets bound by a strict rhyme (qafiya) and refrain (radif). Each couplet is a self-contained emotional or philosophical universe.'},
  nazm:{label:'Nazm',desc:'A thematic poem that develops a single continuous idea, story, or mood from beginning to end—the direct blueprint for most modern Hindi film songs.'},
  kafi:{label:'Kafi',desc:'A Sufi folk-musical form rooted in Punjabi and Sindhi traditions, built around a hypnotic refrain meant to be sung rather than merely recited.'},
  doha:{label:'Doha',desc:'An ancient two-line rhyming couplet in North Indian vernaculars, prized for punchy, memorable aphorisms and everyday spiritual wisdom.'},
  qawwali:{label:'Qawwali',desc:'Devotional Sufi poetry crafted for ecstatic call-and-response group singing, building emotional intensity through rhythm and repetition.'},
  thumri:{label:'Thumri',desc:'A semi-classical lyric form in Braj or Awadhi, expressing tender romantic longing and seasonal mood—the soul of classic cinema melodies.'}
};

const COUPLETS=[
{id:'khusro1',p:'khusro',
  tr:[
   [{t:'chhaap',g:'mark, seal, identity'},' ',{t:'tilak',g:'sacred mark / adornment'},' sab chheeni re mose ',{t:'naina',g:'eyes'},' milaike'],
   ['prem bhatti ka ',{t:'madhva',g:'wine, draught'},' pilaike'],
   [{t:'matwali',g:'intoxicated, entranced'},' kar leeni re mose naina milaike']
  ],
  ur:['چھاپ تلک سب چھینی رے موسے نیناں ملائکے','پریم بھٹی کا مدوا پلائکے','متوالی کر لینی رے موسے نیناں ملائکے'],
  en:'By meeting my eyes, you have taken away every mark and identity; making me drink the wine of love’s furnace, you have left me intoxicated.',
  src:'https://www.rekhta.org/poets/ameer-khusrau/all',
  expand:{
   couplets:[
    {
     tr:[
      [{t:'chhaap',g:'mark, seal, identity'},' ',{t:'tilak',g:'sacred mark / adornment'},' sab chheeni re mose ',{t:'naina',g:'eyes'},' milaike'],
      ['prem bhatti ka ',{t:'madhva',g:'wine, draught'},' pilaike'],
      [{t:'matwali',g:'intoxicated, entranced'},' kar leeni re mose naina milaike']
     ],
     ur:['چھاپ تلک سب چھینی رے موسے نیناں ملائکے','پریم بھٹی کا مدوا پلائکے','متوالی کر لینی رے موسے نیناں ملائکے'],
     en:'By meeting my eyes, you have taken away every mark and identity; making me drink the wine of love’s furnace, you have left me intoxicated.'
    },
    {
     tr:[
      ['apni ',{t:'chhawi',g:'reflection, image, form'},' banaay ke jo main pi ke paas gayi'],
      ['jab chhawi dekhi pihu ki to apni bhool gayi'],
      [{t:'chhaap',g:'mark, seal, identity'},' ',{t:'tilak',g:'sacred mark / adornment'},' sab chheeni re mose ',{t:'naina',g:'eyes'},' milaike']
     ],
     ur:['اپنی چھوی بنائے کے جو میں پی کے پاس گئی','جب چھوی دیکھی پیہو کی تو اپنی بھول گئی','چھاپ تلک سب چھینی رے موسے نیناں ملائکے'],
     en:'I shaped my image to go to my beloved, yet seeing the beloved’s reflection I forgot my own—taking every mark and identity away.'
    },
    {
     tr:[
      ['bal-bal jaaun main tore ',{t:'rang-rejwa',g:'dyer, one who dyes in love'},''],
      ['apni si rang deenhīn re mose ',{t:'naina',g:'eyes'},' milaai ke']
     ],
     ur:['بل بل جاؤں میں تورے رنگ رجوا','اپنی سی رنگ دینہیں رے موسے نیناں ملائے کے'],
     en:'I offer myself again and again to you, dyer of love; you have dyed me in your own hue just by meeting my eyes.'
    },
    {
     tr:[
      ['gori gori ',{t:'baiyan',g:'arms, wrists'},' hari hari ',{t:'churiyan',g:'bangles'},''],
      ['baiyan pakar dhar leenhīn re mose ',{t:'naina',g:'eyes'},' milaai ke']
     ],
     ur:['گوری گوری بئیاں ہری ہری چریاں','بئیاں پکر دھر لینہیں رے موسے نیناں ملائے کے'],
     en:'Fair arms and green bangles—you caught hold of my wrists just by meeting my eyes.'
    },
    {
     tr:[
      ['khusrau nizam ke bal-bal jaiye'],
      ['mohe ',{t:'suhagan',g:'beloved bride, blessed wife'},' keenhīn re mose ',{t:'naina',g:'eyes'},' milaai ke']
     ],
     ur:['خسرو نظام کے بل بل جئیے','موہے سہاگن کینہیں رے موسے نیناں ملائے کے'],
     en:'Khusrau is devoted to Nizam; you have made me a blessed bride just by meeting my eyes.'
    }
   ]
  }
 },

 {id:'kabir1',p:'kabir',
  tr:[
   ['haman hain ',{t:'ishq',g:'love, devotion'},' ',{t:'mastaana',g:'intoxicated, blissfully absorbed'},', haman ko ',{t:'hoshiyaari',g:'worldly cleverness, caution'},' kya?'],
   ['rahein aazaad ya ',{t:'jag',g:'the world'},' se, haman duniya se ',{t:'yaari',g:'friendship, worldly attachment'},' kya?']
  ],
  ur:['ہمن ہیں عشق مستانہ ہمن کو ہوشیاری کیا','رہیں آزاد یا جگ سے ہمن دنیا سے یاری کیا'],
  en:'I am intoxicated with love—what use have I for worldly caution? Let me remain free of the world—what business do I have befriending it?',
  src:'https://www.rekhta.org/poets/kabir/couplets',
  expand:{
   couplets:[
    {
     tr:[
      ['haman hain ',{t:'ishq',g:'love, devotion'},' ',{t:'mastaana',g:'intoxicated, blissfully absorbed'},', haman ko ',{t:'hoshiyaari',g:'worldly cleverness, caution'},' kya?'],
      ['rahein aazaad ya ',{t:'jag',g:'the world'},' se, haman duniya se ',{t:'yaari',g:'friendship, worldly attachment'},' kya?']
     ],
     ur:['ہمن ہیں عشق مستانہ ہمن کو ہوشیاری کیا','رہیں آزاد یا جگ سے ہمن دنیا سے یاری کیا'],
     en:'I am intoxicated with love—what use have I for worldly caution? Let me remain free of the world—what business do I have befriending it?'
    },
    {
     tr:[
      ['jo bichhde hain ',{t:'piyare',g:'beloved'},' se ',{t:'bhatakte',g:'wander aimlessly'},' dar-ba-dar phirte'],
      ['hamara yaar hai hum mein, haman ko ',{t:'intezaari',g:'waiting, longing'},' kya?']
     ],
     ur:['جو بچھڑے ہیں پیارے سے بھٹکتے در بہ در پھرتے','ہمارا یار ہے ہم میں ہمن کو انتظاری کیا'],
     en:'Those parted from the beloved wander door to door; our friend is within us—what need have we for waiting?'
    },
    {
     tr:[
      ['na pal bichhdein piya hum se, na hum bichhdein ',{t:'piyare',g:'beloved'},' se'],
      ['unhin se ',{t:'neh',g:'love, affection'},' laagi hai, haman ko ',{t:'beqarari',g:'restlessness'},' kya?']
     ],
     ur:['نہ پل بچھڑیں پیا ہم سے نہ ہم بچھڑیں پیارے سے','انہیں سے نیہہ لاگی ہے ہمن کو بے قراری کیا'],
     en:'Neither does the beloved part from us for a moment nor do we part from them; our heart is bound to them—what restlessness can touch us?'
    },
    {
     tr:[
      ['kabira ishq ka ',{t:'maata',g:'intoxicated, absorbed'},', ',{t:'dui',g:'duality, division'},' ko door kar dil se'],
      ['jo chalna raah ',{t:'nazuk',g:'delicate, narrow'},' hai, haman sar ',{t:'bojh',g:'burden, load'},' bhaari kya?']
     ],
     ur:['کبیرا عشق کا ماتا دوئی کو دور کر دل سے','جو چلنا راہ نازک ہے ہمن سر بوجھ بھاری کیا'],
     en:'Kabir is drunk on love—cast duality out of the heart; when the path is fine and delicate, what use is a heavy load on the head?'
    }
   ]
  }
 },

 {id:'quli1',p:'quli',
  tr:[
   ['piya baaj pyala piya jaaye na'],
   ['piya baaj ek ',{t:'til',g:'a moment / sesame seed'},' jiya jaaye na']
  ],
  ur:['پیا باج پیالہ پیا جائے نا','پیا باج اک تل جیا جائے نا'],
  en:'Without the beloved, the cup cannot be drunk; without the beloved, one cannot live even a moment.',
  src:'https://archive.org/details/KulliyatESultanMuhammadQuliQutbShah',
  expand:{
   couplets:[
    {
     tr:[
      ['piya ',{t:'baaj',g:'without'},' pyala piya jaaye na'],
      ['piya baaj ek ',{t:'til',g:'a moment / sesame seed'},' jiya jaaye na']
     ],
     ur:['پیا باج پیالہ پیا جائے نا','پیا باج اک تل جیا جائے نا'],
     en:'Without the beloved, the cup cannot be drunk; without the beloved, one cannot live even a moment.'
    },
    {
     tr:[
      ['kahe thay piya bin ',{t:'suboori',g:'patience, endurance'},' karoon'],
      ['khaya jaaye amma, kiya jaaye na']
     ],
     ur:['کہے تھے پیا بن صبوری کروں','کھایا جائے اماں کیا جائے نا'],
     en:'They said I should keep patience without the beloved—it is easy to say, mother, hard to do.'
    },
    {
     tr:[
      ['nahin ishq jis doo bada ',{t:'kodh',g:'folly, defect / affliction'},' hai'],
      ['kadheen us se mil be-siya jaaye na']
     ],
     ur:['نہیں عشق جس دو بڑا کوڑھ ہے','کدھیں اس سے مل بے سیا جائے نا'],
     en:'Whoever has no love suffers a great affliction; never sit beside them if you cannot share in that feeling.'
    },
    {
     tr:[
      ['qutub shah na de mujh ',{t:'diwane',g:'mad one, love-struck'},' ko ',{t:'pand',g:'counsel, advice'},''],
      ['diwane koon kuchh pand diya jaaye na']
     ],
     ur:['قطب شاہ نہ دے مجھ دیوانے کو پند','دیوانے کوں کچھ پند دیا جائے نا'],
     en:'Qutb Shah, do not offer counsel to one mad with love; advice is not given to the love-struck.'
    }
   ]
  }
 },
 
 
 {id:'wali1',p:'wali',
  tr:[
   ['raah-e-',{t:'mazmoon-e-taaza',g:'fresh theme, new meaning'},' band nahin'],
   ['ta ',{t:'qayamat',g:'end of time, resurrection'},' khula hai ',{t:'baab-e-sukhan',g:'door of speech, poetry'}]
  ],
  ur:['راہِ مضمونِ تازہ بند نہیں','تا قیامت کھلا ہے بابِ سخن'],
  en:'The path to fresh meaning is never closed; until the end of time, the door of poetry stands open.',
  src:'https://www.rekhta.org/poets/wali-dakni/couplets',
  expand:{
   couplets:[
    {
     tr:[
      ['raah-e-',{t:'mazmoon-e-taaza',g:'fresh theme, new meaning'},' band nahin'],
      ['ta ',{t:'qayamat',g:'end of time, resurrection'},' khula hai ',{t:'baab-e-sukhan',g:'door of speech, poetry'}]
     ],
     ur:['راہِ مضمونِ تازہ بند نہیں','تا قیامت کھلا ہے بابِ سخن'],
     en:'The path to fresh meaning is never closed; until the end of time, the door of poetry stands open.'
    },
    {
     tr:[
      ['subh-e-zulfon ka tujh se ',{t:'waada',g:'promise'},' hai'],
      ['shaam-e-chashman ka tujh se ',{t:'iqrar',g:'pledge, confession'},' hai']
     ],
     ur:['صبحِ زلفوں کا تجھ سے وعدہ ہے','شامِ چشماں کا تجھ سے اقرار ہے'],
     en:'There is a promise from you for the morning of dark tresses, and a pledge from you for the evening of eyes.'
    },
    {
     tr:[
      ['tujh ',{t:'jamal',g:'beauty, radiance'},' ki ',{t:'taarif',g:'praise, description'},' mein ',{t:'wali',g:'Wali'},''],
      ['har ',{t:'sukhan',g:'word, verse'},' ek ',{t:'noor',g:'light, lustre'},' ban gaya']
     ],
     ur:['تجھ جمال کی تعریف میں ولی','ہر سخن اک نور بن گیا'],
     en:'In praise of your beauty, Wali, every line of verse has become a beam of light.'
    },
    {
     tr:[
      ['wali ko ',{t:'shohrat',g:'fame, renown'},' mili hai ',{t:'sukhansazi',g:'poetry, verse-making'},' mein'],
      ['jo ke ',{t:'aalam',g:'world'},' mein us ka ',{t:'kirdar',g:'character, deed'},' hai']
     ],
     ur:['ولی کو شہرت ملی ہے سخن سازی میں','جو کہ عالم میں اس کا کردار ہے'],
     en:'Wali has gained renown in the craft of poetry—such is the mark he leaves across the world.'
    }
   ]
  }
 },

 {id:'bulleh1',p:'bulleh',form:'kafi',
  tr:[
   ['bulla ki jaana main ',{t:'kaun',g:'who, what self'}],
   ['na main momin vich ',{t:'masjidan',g:'mosques'},', na main vich kufr diyan ritan']
  ],
  ur:['بلھا کی جاناں میں کون','نہ میں مومن وچ مسجدان نہ میں وچ کفر دیاں ریتاں'],
  en:'Bulla, what do I know of who I am? Neither am I a believer in mosques, nor bound to the ways of disbelief.',
  src:'https://www.rekhta.org/poets/bulleh-shah/all',
  expand:{
   couplets:[
    {
     tr:[
      ['bulla ki jaana main ',{t:'kaun',g:'who, what self'}],
      ['na main momin vich ',{t:'masjidan',g:'mosques'},', na main vich kufr diyan ritan']
     ],
     ur:['بلھا کی جاناں میں کون','نہ میں مومن وچ مسجدان نہ میں وچ کفر دیاں ریتاں'],
     en:'Bulla, what do I know of who I am? Neither am I a believer in mosques, nor bound to the ways of disbelief.'
    },
    {
     tr:[
      ['na main pak vich ',{t:'palitaan',g:'the impure, defiled'},', na main musaan vich palitan'],
      ['na main vich ',{t:'shaad',g:'joy, rejoicing'},' ghaman de, na main bhethiyan vich na leetan']
     ],
     ur:['نہ میں پاک وچ پلیتاں نہ میں موسیاں وچ پلیتاں','نہ میں وچ شاد غماں دے نہ میں بیٹھیاں وچ نہ لیٹاں'],
     en:'Neither am I among the pure nor the defiled, neither among Moses nor his followers; neither in joy nor in grief, neither sitting nor lying down.'
    },
    {
     tr:[
      ['na main vich ',{t:'arab',g:'Arabia'},' na lahoreyan, na main vich hind nagriyan'],
      ['na main ',{t:'bhedi',g:'knower of secrets, mystic'},' maram da paya, na main arabian vich padhiyan']
     ],
     ur:['نہ میں وچ عرب نہ لاہوریاں نہ میں وچ ہند نگریاں','نہ میں بھیدی مرم دا پایا نہ میں عربیاں وچ پڑھیاں'],
     en:'Neither am I in Arabia nor in Lahore, nor in the towns of Hind; I have not found the secret through mere mystery-mongering, nor through reading Arabic.'
    },
    {
     tr:[
      ['na main ',{t:'kunj',g:'corner, solitude'},' ',{t:'fariq',g:'renunciant, ascetic'},' ',{t:'ahliyan',g:'householder, worldly folk'},', na main ',{t:'pak',g:'pure, sacred'},' na ',{t:'paliti',g:'defiled, impure'}],
      ['bulla ki jaana main kaun']
     ],
     ur:['نہ میں کنج فریق اہلیان نہ میں پاک نہ پلیتی','بلھا کی جاناں میں کون'],
     en:'Neither a recluse in a corner nor a householder, neither pure nor defiled—Bulla, what do I know of who I am?'
    },
    {
     tr:[
      ['awwal aakhir aap nu ',{t:'jana',g:'recognized, known'},', na koi duja hor pachhana'],
      ['main ton hor na koi ',{t:'siyana',g:'wise, clever'},', bulla oho khara hai kaun']
     ],
     ur:['اول آخر آپ نوں جانا نہ کوئی دوجا ہور پچھانا','میں توں ہور نہ کوئی سیانا بلھا اوہو کھڑا ہے کون'],
     en:'In beginning and end I have known only the One, recognizing no other; no one is wiser than I—Bulla, who is it that stands here?'
    }
   ]
  }
 },
 
 {id:'mir1',p:'mir',
  tr:[
   ['ulti ho gain sab ',{t:'tadbeeren',g:'plans, remedies, contrivances'},' kuchh na ',{t:'dawaa',g:'medicine, cure'},' ne kaam kiya'],
   ['dekha is ',{t:'bimaari-e-dil',g:'malady of the heart, lovesickness'},' ne aakhir kaam ',{t:'tamam',g:'complete, finished'},' kiya']
  ],
  ur:['الٹی ہو گئیں سب تدبیریں کچھ نہ دوا نے کام کیا','دیکھا اس بیماریِ دل نے آخر کام تمام کیا'],
  en:'Every plan turned upside down, and no remedy worked; at last this malady of the heart finished its work.',
  src:'https://www.rekhta.org/ghazals/ultii-ho-gaiin-sab-tadbiiren-kuchh-na-davaa-ne-kaam-kiyaa-meer-taqi-meer-ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['ulti ho gain sab ',{t:'tadbeeren',g:'plans, remedies, contrivances'},' kuchh na ',{t:'dawaa',g:'medicine, cure'},' ne kaam kiya'],
      ['dekha is ',{t:'bimaari-e-dil',g:'malady of the heart, lovesickness'},' ne aakhir kaam ',{t:'tamam',g:'complete, finished'},' kiya']
     ],
     ur:['الٹی ہو گئیں سب تدبیریں کچھ نہ دوا نے کام کیا','دیکھا اس بیماریِ دل نے آخر کام تمام کیا'],
     en:'Every plan turned upside down, and no remedy worked; at last this malady of the heart finished its work.'
    },
    {
     tr:[
      [{t:'ahd-e-jawani',g:'season of youth'},' ro ro kata ',{t:'piri',g:'old age'},' mein lin ankhen mund'],
      ['yaani raat bahut the jaage subh hui ',{t:'aaram',g:'rest, ease'},' kiya']
     ],
     ur:['عہدِ جوانی رو رو کاٹا پیری میں لیں آنکھیں موند','یعنی رات بہت تھے جاگے صبح ہوئی آرام کیا'],
     en:'I spent youth weeping and closed my eyes in old age; that is, I stayed awake all night and rested when morning came.'
    },
    {
     tr:[
      ['harf nahin ',{t:'jaan-bakhshi',g:'granting of life, grace'},' mein us ki khubi apni ',{t:'qismat',g:'fate, destiny'},' ki'],
      ['ham se jo pahle kah bheja so marne ka ',{t:'paigham',g:'message, summons'},' kiya']
     ],
     ur:['حرف نہیں جاں بخشی میں اس کی خوبی اپنی قسمت کی','ہم سے جو پہلے کہہ بھیجا سو مرنے کا پیغام کیا'],
     en:'There is no fault in their grace, only in my own fate; whatever message they sent me beforehand was a summons to die.'
    },
    {
     tr:[
      ['nahaq ham ',{t:'majburon',g:'helpless ones, those bound by fate'},' par ye ',{t:'tohmat',g:'accusation, charge'},' hai ',{t:'mukhtari',g:'free will, agency'},' ki'],
      ['chahte hain so aap karen hain ham ko abas ',{t:'badnam',g:'defamed, ill-reputed'},' kiya']
     ],
     ur:['ناحق ہم مجبوروں پر یہ تہمت ہے مختاری کی','چاہتے ہیں سو آپ کریں ہیں ہم کو عبث بدنام کیا'],
     en:'Unjustly we who are helpless are accused of having free choice; they do whatever they wish and blame us for nothing.'
    },
    {
     tr:[
      ['saare ',{t:'rind',g:'reckless drinkers, free spirits'},' ',{t:'aubaash',g:'rowdy, unrestrained'},' jahan ke tujh se ',{t:'sujud',g:'prostration, worship'},' mein rahte hain'],
      ['banke tedhe tirchhe tikhe sab ka tujh ko ',{t:'imam',g:'leader, guide'},' kiya']
     ],
     ur:['سارے رند اوباش جہاں کے تجھ سے سجود میں رہتے ہیں','بن کے ٹیڑھے ترچھے تیکھے سب کا تجھ کو امام کیا'],
     en:'All the wayward drinkers of the world bow in devotion before you; crooked, slant, and sharp-witted, they made you their leader.'
    },
    {
     tr:[
      ['sarzad ham se ',{t:'be-adabi',g:'disrespect, impoliteness'},' to ',{t:'wahshat',g:'wildness, frenzy'},' mein bhi kam hi hui'],
      ['koson us ki or gae par ',{t:'sajda',g:'prostration'},' har har gam kiya']
     ],
     ur:['سرزد ہم سے بے ادبی تو وحشت میں بھی کم ہی ہوئی','کوسوں اس کی اور گئے پر سجدہ ہر ہر گام کیا'],
     en:'Even in frenzy, disrespect rarely slipped from me; I walked miles toward them and bowed at every single step.'
    },
    {
     tr:[
      ['kis ka ',{t:'kaba',g:'Kaaba, sacred house'},' kaisa ',{t:'qibla',g:'direction of prayer'},' kaun ',{t:'haram',g:'sanctuary'},' hai kya ',{t:'ehram',g:'pilgrim garment'},''],
      ['kuche ke us ke ',{t:'bashindon',g:'dwellers, inhabitants'},' ne sab ko yahin se ',{t:'salam',g:'salutation, farewell'},' kiya']
     ],
     ur:['کس کا کعبہ کیسا قبلہ کون حرم ہے کیا احرام','کوچے کے اس کے باشندوں نے سب کو یہیں سے سلام کیا'],
     en:'What Kaaba, what qibla, what sanctuary or pilgrim garb? Those who dwell in the beloved’s lane saluted them all right here.'
    },
    {
     tr:[
      [{t:'shaikh',g:'preacher, ascetic elder'},' jo hai masjid mein nanga raat ko tha ',{t:'mai-khane',g:'tavern, wine-house'},' mein'],
      ['jubba khirqa kurta topi ',{t:'masti',g:'ecstasy, intoxication'},' mein ',{t:'inaam',g:'gift, award'},' kiya']
     ],
     ur:['شیخ جو ہے مسجد میں ننگا رات کو تھا میخانے میں','جبہ خرقہ کرتا ٹوپی مستی میں انعام کیا'],
     en:'The shaikh who stands bare in the mosque was at the tavern by night, giving away cloak, robe, tunic, and cap in ecstasy.'
    },
    {
     tr:[
      ['kaash ab ',{t:'burqa',g:'veil, covering'},' munh se utha de warna phir kya hasil hai'],
      ['ankh munde par un ne go ',{t:'didar',g:'sight, vision of the beloved'},' ko apne aam kiya']
     ],
     ur:['کاش اب برقع منہ سے اٹھا دے ورنہ پھر کیا حاصل ہے','آنکھ موندے پر ان نے گو دیدار کو اپنے عام کیا'],
     en:'If only they would lift the veil from their face now, else what is the gain—even though with closed eyes they made their sight open to all.'
    },
    {
     tr:[
      ['yaan ke safed o siyah mein ham ko ',{t:'dakhl',g:'involvement, part'},' jo hai so itna hai'],
      ['raat ko ro ro subh kiya ya din ko jyun tyun sham kiya']
     ],
     ur:['یاں کے سفید و سیاہ میں ہم کو دخل جو ہے سو اتنا ہے','رات کو رو رو صبح کیا یا دن کو جوں تیوں شام کیا'],
     en:'All the part I play in the light and dark of this world is turning night into morning with tears, or somehow bringing day to evening.'
    },
    {
     tr:[
      ['subh ',{t:'chaman',g:'garden, meadow'},' mein us ko kahin taklif-e-hawa le aai thi'],
      ['rukh se gul ko mol liya ',{t:'qamat',g:'stature, figure'},' se ',{t:'sarv',g:'cypress tree'},' ',{t:'ghulam',g:'enslaved, servant'},' kiya']
     ],
     ur:['صبح چمن میں اس کو کہیں تکلیفِ ہوا لے آئی تھی','رخ سے گل کو مول لیا قامت سے سرو غلام کیا'],
     en:'Some urge of the morning breeze brought them to the garden at dawn; with their cheek they outdid the rose, and with their stature enslaved the cypress.'
    },
    {
     tr:[
      [{t:'saad-e-simin',g:'silver forearms'},' donon us ke haath mein la kar chhod diye'],
      ['bhule us ke ',{t:'qaul-o-qasam',g:'word and oath'},' par haaye ',{t:'khayal-e-khaam',g:'raw or idle fancy'},' kiya']
     ],
     ur:['ساعدِ سیمیں دونوں اس کے ہاتھ میں لا کر چھوڑ دیے','بھولے اس کے قول و قسم پر ہائے خیالِ خام کیا'],
     en:'They placed both silver forearms into their hands and let go—alas, trusting their word and oath was an idle fancy.'
    },
    {
     tr:[
      ['kaam hue hain saare ',{t:'zaea',g:'wasted, lost'},' har saat ki ',{t:'samajat',g:'pleading, entreaty'},' se'],
      [{t:'istighna',g:'indifference, self-sufficiency'},' ki chauguni un ne jyun jyun main ',{t:'ibram',g:'insistence, importunity'},' kiya']
     ],
     ur:['کام ہوئے ہیں سارے ضائع ہر ساعت کی سماجت سے','استغنا کی چوگنی ان نے جوں جوں میں ابرام کیا'],
     en:'Every effort was wasted through constant pleading; the more I persisted, fourfold grew their indifference.'
    },
    {
     tr:[
      ['aise ',{t:'aahu-e-ram-khurda',g:'frightened or startled gazelle'},' ki wahshat khoni mushkil thi'],
      [{t:'sehr',g:'magic, enchantment'},' kiya ',{t:'ejaaz',g:'miracle'},' kiya jin logon ne tujh ko ',{t:'ram',g:'tamed, won over'},' kiya']
     ],
     ur:['ایسے آہوئے رم خوردہ کی وحشت کھونی مشکل تھی','سحر کیا اعجاز کیا جن لوگوں نے تجھ کو رام کیا'],
     en:'It was hard to tame the wildness of a startled gazelle like this; those who tamed you worked magic and miracles.'
    },
    {
     tr:[
      ['\'mir\' ke ',{t:'din-o-mazhab',g:'faith and creed'},' ko ab puchhte kya ho un ne to'],
      [{t:'qashqa',g:'forehead mark'},' khincha ',{t:'dair',g:'temple'},' mein baitha kab ka ',{t:'tark',g:'abandoning, renouncing'},' islam kiya']
     ],
     ur:['میر کے دین و مذہب کو اب پوچھتے کیا ہو ان نے تو','قشقہ کھینچا دیر میں بیٹھا کب کا ترک اسلام کیا'],
     en:'Why ask about Mir’s faith and creed now? Long ago they drew the forehead mark, sat in the temple, and left Islam behind.'
    }
   ]
  }
 },
 
 {id:'nazeer1',p:'nazeer',
  tr:[
   ['jab aadmi kisi ka ',{t:'talabgaar',g:'seeker, yearner'},' ho gaya'],
   ['har cheez us ke waaste ',{t:'dushwaar',g:'difficult, arduous'},' ho gaya']
  ],
  ur:['جب آدمی کسی کا طلبگار ہو گیا','ہر چیز اس کے واسطے دشوار ہو گیا'],
  en:'Once a person becomes a seeker/yearner for someone, every single thing becomes hard for them.',
  src:'https://www.rekhta.org/poets/nazeer-akbarabadi/all',
  expand:{
   couplets:[
    {
     tr:[
      ['jab aadmi kisi ka ',{t:'talabgaar',g:'seeker, yearner'},' ho gaya'],
      ['har cheez us ke waaste ',{t:'dushwaar',g:'difficult, arduous'},' ho gaya']
     ],
     ur:['جب آدمی کسی کا طلبگار ہو گیا','ہر چیز اس کے واسطے دشوار ہو گیا'],
     en:'Once a person becomes a seeker/yearner for someone, every single thing becomes hard for them.'
    },
    {
     tr:[
      ['har ek ',{t:'waqt',g:'time, moment'},' ',{t:'kuchh',g:'something'},' na ',{t:'kuchh',g:'something'},' naya rang dikhaata hai'],
      ['ye ',{t:'duniya',g:'world'},' ka ',{t:'karishma',g:'wonder, spectacle'},' hai jo sab ko ',{t:'nachata',g:'makes dance, moves'},' hai']
     ],
     ur:['ہر اک وقت کچھ نہ کچھ نیا رنگ دکھاتا ہے','یہ دنیا کا کرشمہ ہے جو سب کو نچاتا ہے'],
     en:'Every passing moment shows some new color; it is the wonder of this world that keeps everyone moving.'
    },
    {
     tr:[
      ['daulat ho ya ',{t:'garibi',g:'poverty, destitution'},', ',{t:'shaahi',g:'royalty, kingship'},' ho ya ',{t:'faqiri',g:'mendicancy, poverty'},''],
      ['aakhir sabhi ko ',{t:'khaak',g:'dust, earth'},' mein mil jaana hai']
     ],
     ur:['دولت ہو یا غریبی شاہی ہو یا فقیری','آخر سبھی کو خاک میں مل جانا ہے'],
     en:'Whether wealth or poverty, kingship or mendicancy—in the end, every single one must return to the dust.'
    },
    {
     tr:[
      ['nazeer is ',{t:'kaarwan',g:'caravan'},' mein ',{t:'kahan',g:'where'},' koi ',{t:'rukta',g:'stops, stays'},' hai'],
      ['har ',{t:'manzil',g:'stage, stopping-place'},' pe ',{t:'qafila',g:'caravan, company'},' ',{t:'badalta',g:'changes, shifts'},' hai']
     ],
     ur:['نظیر اس کارواں میں کہاں کوئی رکتا ہے','ہر منزل پہ قافلہ بدلتا ہے'],
     en:'Nazeer, who ever stops for long in this caravan? At every stage the traveling company shifts.'
    }
   ]
  }
 },

 {id:'mahlaqa1',p:'mahlaqa',
  tr:[
   [{t:'gul',g:'flower, rose'},' ke hone ki ',{t:'tawaqqo',g:'hope, expectation'},' pe jiye baithi hai'],
   ['har ',{t:'kali',g:'bud'},' ',{t:'jaan',g:'life'},' ko ',{t:'mutthi',g:'fist'},' mein liye baithi hai']
  ],
  ur:['گل کے ہونے کی توقع پہ جیے بیٹھی ہے','ہر کلی جاں کو مٹھی میں لیے بیٹھی ہے'],
  en:'Hoping someday to become a flower, every bud sits holding its life in its fist.',
  src:'https://www.rekhta.org/poets/mah-laqa-chanda/couplets',
  expand:{
   couplets:[
    {
     tr:[
      [{t:'gul',g:'flower, rose'},' ke hone ki ',{t:'tawaqqo',g:'hope, expectation'},' pe jiye baithi hai'],
      ['har ',{t:'kali',g:'bud'},' ',{t:'jaan',g:'life'},' ko ',{t:'mutthi',g:'fist'},' mein liye baithi hai']
     ],
     ur:['گل کے ہونے کی توقع پہ جیے بیٹھی ہے','ہر کلی جاں کو مٹھی میں لیے بیٹھی ہے'],
     en:'Hoping someday to become a flower, every bud sits holding its life in its fist.'
    },
    {
     tr:[
      [{t:'saba',g:'morning breeze'},' aati hai to ',{t:'paigham',g:'message'},' liye aati hai'],
      ['ke ',{t:'gulistan',g:'garden'},' mein phir ',{t:'bahaar',g:'spring'},' aayi hai']
     ],
     ur:['صبا آتی ہے تو پیغام لیے آتی ہے','کہ گلستاں میں پھر بہار آئی ہے'],
     en:'When the morning breeze arrives, it brings the news that spring has returned to the garden.'
    },
    {
     tr:[
      ['shabnam ke ',{t:'qatre',g:'drops, dewdrops'},' bhi ',{t:'chamak',g:'gleam, sparkle'},' uthe'],
      ['jab ',{t:'subh',g:'morning, dawn'},' ki ',{t:'kiran',g:'ray, beam'},' ne chhua']
     ],
     ur:['شبنم کے قطرے بھی چمک اٹھے','جب صبح کی کرن نے چھوا'],
     en:'Even the drops of dew began to sparkle when the first ray of morning touched them.'
    },
    {
     tr:[
      ['mahlaqa dil mein ',{t:'tamanna',g:'wish, longing'},' hai ke bas ek ',{t:'nazar',g:'glance'},''],
      ['un ki ',{t:'soorat',g:'face, form'},' pe pade aur ',{t:'zindagi',g:'life'},' ban jaaye']
     ],
     ur:['ماہ لقا دل میں تمنا ہے کہ بس اک نظر','ان کی صورت پہ پڑے اور زندگی بن جائے'],
     en:'Mah Laqa, the heart\u2019s only wish is that a single glance fall upon their face and make life whole.'
    }
   ]
  }
 },
 
 {id:'zafar1',p:'zafar',
  tr:[
   ['na thi haal ki jab hamein apni ',{t:'khabar',g:'awareness, news'}],
   ['rahe dekhte auron ke ',{t:'aib',g:'flaws, faults'},' o ',{t:'hunar',g:'skills, merits'}],
   ['padi apni ',{t:'buraiyon',g:'shortcomings, faults'},' par jo ',{t:'nazar',g:'gaze, sight'}],
   ['to nigah mein koi bura na raha']
  ],
  ur:['نہ تھی حال کی جب ہمیں اپنی خبر رہے دیکھتے اوروں کے عیب و ہنر','پڑی اپنی برائیوں پر جو نظر تو نگاہ میں کوئی برا نہ رہا'],
  en:'When I had no real awareness of my own state, I watched others\u2019 flaws and merits; once my gaze fell on my own shortcomings, no one else looked bad to me.',
  src:'https://www.rekhta.org/poets/bahadur-shah-zafar/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['na thi haal ki jab hamein apni ',{t:'khabar',g:'awareness, news'}],
      ['rahe dekhte auron ke ',{t:'aib',g:'flaws, faults'},' o ',{t:'hunar',g:'skills, merits'}]
     ],
     ur:['نہ تھی حال کی جب ہمیں اپنی خبر','رہے دیکھتے اوروں کے عیب و ہنر'],
     en:'When I had no real awareness of my own state, I watched others\u2019 flaws and merits.'
    },
    {
     tr:[
      ['padi apni ',{t:'buraiyon',g:'shortcomings, faults'},' par jo ',{t:'nazar',g:'gaze, sight'}],
      ['to nigah mein koi bura na raha']
     ],
     ur:['پڑی اپنی برائیوں پر جو نظر','تو نگاہ میں کوئی برا نہ رہا'],
     en:'Once my gaze fell on my own shortcomings, no one else looked bad to me.'
    },
    {
     tr:[
      ['jo guzar gayi so guzar gayi'],
      ['ab us ka ',{t:'shikwa',g:'complaint'},' kya karein']
     ],
     ur:['جو گزر گئی سو گزر گئی','اب اس کا شکوہ کیا کریں'],
     en:'What has passed has passed; what complaint can we make about it now?'
    },
    {
     tr:[
      ['zafar aadmi ko na ho yaqeen to ',{t:'kya',g:'what'},' kare'],
      ['ke woh apne ',{t:'aamal',g:'deeds, actions'},' ka hisab kare']
     ],
     ur:['ظفر آدمی کو نہ ہو یقیں تو کیا کرے','کہ وہ اپنے اعمال کا حساب کرے'],
     en:'Zafar, if a person lacks conviction, what else can they do but reckon with their own deeds?'
    }
   ]
  }
 },
 
 {id:'ghalib1',p:'ghalib',
  tr:[
   ['hazaaron khwahishen aisi ke har khwahish pe ',{t:'dam nikle',g:'breath leaves / one dies'}],
   ['bahut nikle mere ',{t:'armaan',g:'longings, wishes'},', lekin phir bhi kam nikle']
  ],
  ur:['ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے','بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے'],
  en:'Thousands of desires, each one worth dying for. Many of my wishes came true, and still it was too few.',
  src:'https://www.rekhta.org/poets/mirza-ghalib/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['hazaaron khwahishen aisi ke har khwahish pe ',{t:'dam nikle',g:'breath leaves / one dies'}],
      ['bahut nikle mere ',{t:'armaan',g:'longings, wishes'},', lekin phir bhi kam nikle']
     ],
     ur:['ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے','بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے'],
     en:'Thousands of desires, each one worth dying for. Many of my wishes came true, and still it was too few.'
    },
    {
     tr:[
      ['dare kyun mera qatil kya rahega us ki gardan par'],
      ['vo ḳhoon jo chashm-e-tar se umr bhar yun dam-ba-dam nikle']
     ],
     ur:['ڈرے کیوں میرا قاتل کیا رہے گا اس کی گردن پر','وہ خوں جو چشمِ تر سے عمر بھر یوں دم بہ دم نکلے'],
     en:'Why should my killer fear, what will remain on their neck— that blood which flows from tearful eyes, moment by moment, all through life.'
    },
    {
     tr:[
      ['nikalna ',{t:'khuld',g:'paradise, heaven'},' se aadam ka sunte aaye hain lekin'],
      ['bahut be-abru hokar tere kooche se ham nikle']
     ],
     ur:['نکلنا خلد سے آدم کا سنتے آئے ہیں لیکن','بہت بے آبرو ہو کر ترے کوچے سے ہم نکلے'],
     en:'We have heard the tale of Adam leaving paradise, yet it was with deep disgrace that we came out of your lane.'
    },
    {
     tr:[
      ['bharam khul jaaye zaalim teri ',{t:'qaamat',g:'stature, height'},' ki daraazi ka'],
      ['agar is turra-e-pur-pech o kham ka pech o kham nikle']
     ],
     ur:['بھرم کھل جائے ظالم تری قامت کی درازی کا','اگر اس طرۂ پر پیچ و خم کا پیچ و خم نکلے'],
     en:'Cruel one, the illusion of your towering stature would break if every twist and curl of this tangled lock were unwound.'
    },
    {
     tr:[
      ['magar likhvaaye koi us ko khat to ham se likhvaaye'],
      ['hui subah aur ghar se kaan par rakh kar qalam nikle']
     ],
     ur:['مگر لکھوائے کوئی اس کو خط تو ہم سے لکھوائے','ہوئی صبح اور گھر سے کان پر رکھ کر قلم نکلے'],
     en:'Let someone have a letter written to them through us—so that morning and evening our footsteps appear upon the page.'
    },
    {
     tr:[
      ['hui is daur mein mansoob mujh se baada-aashaami'],
      ['ke phir aaya woh zamaana jo jahaan mein ',{t:'jaam',g:'goblet, wine-cup'},' nikle']
     ],
     ur:['ہوئی اس دور میں منسوب مجھ سے بادہ آشامی','کہ پھر آیا وہ زمانہ جو جہاں میں جام نکلے'],
     en:'Wine-drinking became associated with me in an age that brought forth the cup into the world once more.'
    },
    {
     tr:[
      ['hui jin se ',{t:'tawaqqo',g:'hope, expectation'},' ',{t:'khastagi',g:'woundedness, affliction'},' ki ',{t:'daad',g:'redress, recognition'},' paane ki'],
      ['woh ham se bhi ziyada ',{t:'khasta-e-tegh-e-sitam',g:'wounded by the sword of tyranny'},' nikle']
     ],
     ur:['ہوئی جن سے توقع خستگی کی داد پانے کی','وہ ہم سے بھی زیادہ خستۂ تیغِ ستم نکلے'],
     en:'Those from whom we expected recognition of our grief turned out even more wounded by the sword of tyranny than we were.'
    },
    {
     tr:[
      ['mohabbat mein nahin hai farq jiine aur marne ka'],
      ['usi ko dekh kar jiite hain jis kafir pe dam nikle']
     ],
     ur:['محبت میں نہیں ہے فرق جینے اور مرنے کا','اسی کو دیکھ کر جیتے ہیں جس کافر پہ دم نکلے'],
     en:'Press a little harder against the chest so the cruel arrow comes out—if it comes out, the heart comes out; if the heart comes out, breath leaves.'
    },
    {
     tr:[
      ['kahan mai-ḳhane ka darvaza ghalib aur kahan vaa.iz'],
      ['par itna jaante haia kal vo jaata tha ki ham nikle']
     ],
     ur:['کہاں میخانے کا دروازہ غالب اور کہاں واعظ','پر اتنا جانتے ہیں کل وہ جاتا تھا کہ ہم نکلے'],
     en:'Where else, Ghalib, would the preacher go? Yet this much we know: yesterday he was going in just as we came out.'
    }
   ]
  }
 },
 {id:'daagh1',p:'daagh',
  tr:[
   [{t:'lutf',g:'delight, pleasure'},' vo ',{t:'ishq',g:'love, passion'},' mein paaye hain ke ',{t:'jee',g:'heart, soul'},' jaanta hai'],
   [{t:'ranj',g:'sorrow, grief'},' bhi itne uthaaye hain ke ',{t:'jee',g:'heart, soul'},' jaanta hai']
  ],
  ur:['لطف وہ عشق میں پائے ہیں کہ جی جانتا ہے','رنج بھی اتنے اٹھائے ہیں کہ جی جانتا ہے'],
  en:'Such delights have I found in love that only my heart knows; and such sorrows have I borne that only my heart knows.',
  src:'https://www.rekhta.org/poets/daagh-dehlvi/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      [{t:'lutf',g:'delight, pleasure'},' vo ',{t:'ishq',g:'love, passion'},' mein paaye hain ke ',{t:'jee',g:'heart, soul'},' jaanta hai'],
      [{t:'ranj',g:'sorrow, grief'},' bhi itne uthaaye hain ke ',{t:'jee',g:'heart, soul'},' jaanta hai']
     ],
     ur:['لطف وہ عشق میں پائے ہیں کہ جی جانتا ہے','رنج بھی اتنے اٹھائے ہیں کہ جی جانتا ہے'],
     en:'Such delights have I found in love that only my heart knows; and such sorrows have I borne that only my heart knows.'
    },
    {
     tr:[
      ['un ki ',{t:'mehfil',g:'gathering, assembly'},' mein jo ',{t:'shaam',g:'evening'},' guzri hai'],
      ['woh ',{t:'subh',g:'morning, dawn'},' ke ',{t:'noor',g:'light, radiance'},' se bhi ',{t:'roshan',g:'bright, luminous'},' thi']
     ],
     ur:['ان کی محفل میں جو شام گزری ہے','وہ صبح کے نور سے بھی روشن تھی'],
     en:'The evening spent in their gathering was brighter even than the light of morning.'
    },
    {
     tr:[
      ['ham ne to ',{t:'wada-e-deedar',g:'promise of a glimpse'},' ka ',{t:'intezaar',g:'waiting, anticipation'},' kiya'],
      ['woh aaye ya na aaye par ',{t:'dil',g:'heart'},' ',{t:'beqarar',g:'restless, impatient'},' raha']
     ],
     ur:['ہم نے تو وعدۂ دیدار کا انتظار کیا','وہ آئے یا نہ آئے پر دل بے قرار رہا'],
     en:'We waited for the promised glimpse; whether they came or not, the heart remained restless.'
    },
    {
     tr:[
      ['daagh ab kis se ',{t:'shikayat',g:'complaint'},' karein ham'],
      ['apna hi ',{t:'dil',g:'heart'},' jo ',{t:'bewafa',g:'unfaithful, fickle'},' nikla']
     ],
     ur:['داغ اب کس سے شکایت کریں ہم','اپنا ہی دل جو بے وفا نکلا'],
     en:'Daagh, whom can we complain to now when our own heart turned out unfaithful?'
    }
   ]
  }
 },
 
 {id:'iqbal1',p:'iqbal',
  tr:[
   [{t:'khudi',g:'selfhood'},' ko kar ',{t:'buland',g:'exalted, high'},' itna ke har ',{t:'taqdeer',g:'decree of fate'},' se pehle'],
   ['khuda bande se khud poochhe, bata teri ',{t:'raza',g:'will, wish'},' kya hai']
  ],
  ur:['خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے','خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے'],
  en:'Raise your selfhood so high that before every decree of fate, God himself asks you: what do you want?',
  src:'https://en.wikipedia.org/wiki/The_Call_of_the_Marching_Bell',
  expand:{
   couplets:[
    {
     tr:[
      [{t:'khudi',g:'selfhood'},' ko kar ',{t:'buland',g:'exalted, high'},' itna ke har ',{t:'taqdeer',g:'decree of fate'},' se pehle'],
      ['khuda bande se khud poochhe, bata teri ',{t:'raza',g:'will, wish'},' kya hai']
     ],
     ur:['خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے','خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے'],
     en:'Raise your selfhood so high that before every decree of fate, God himself asks you: what do you want?'
    },
    {
     tr:[
      ['maqaam-e-guftugu kya hai agar ',{t:'dil',g:'heart'},' mein ',{t:'yaqeen',g:'conviction, certainty'},' ho'],
      ['to ',{t:'khatra',g:'danger, peril'},' bhi ',{t:'salamati',g:'safety, peace'},' ka ',{t:'paigham',g:'message'},' ban jaata hai']
     ],
     ur:['مقامِ گفتگو کیا ہے اگر دل میں یقین ہو','تو خطرہ بھی سلامتی کا پیغام بن جاتا ہے'],
     en:'What room is there for doubt if there is conviction in the heart? Even danger becomes a messenger of safety.'
    },
    {
     tr:[
      ['shab-e-tareek mein bhi ',{t:'sitara',g:'star'},' raah dikhata hai'],
      ['jo ',{t:'khudi',g:'selfhood'},' ko pehchane woh ',{t:'manzil',g:'destination, goal'},' paata hai']
     ],
     ur:['شبِ تاریک میں بھی ستارہ راہ دکھاتا ہے','جو خودی کو پہچانے وہ منزل پاتا ہے'],
     en:'Even in the dark night a star shows the way; whoever knows their selfhood reaches the destination.'
    },
    {
     tr:[
      ['iqbal tere ',{t:'geet',g:'song, melody'},' mein ',{t:'shaheen',g:'falcon, royal hawk'},' ki ',{t:'parwaaz',g:'flight'},' hai'],
      ['jo ',{t:'pastiyon',g:'lowlands, depths'},' se ',{t:'oocha',g:'high, lofty'},' ',{t:'aasmaan',g:'sky'},' dekhti hai']
     ],
     ur:['اقبال ترے گیت میں شاہیں کی پرواز ہے','جو پستیوں سے اونچا آسماں دیکھتی ہے'],
     en:'Iqbal, your song carries the flight of the falcon, looking toward a sky higher than the lowlands.'
    }
   ]
  }
 },

 {id:'jigar1',p:'jigar',
  tr:[
   ['ye ',{t:'ishq',g:'love, passion'},' nahin aasaan itna hi samajh lijiye'],
   ['ik aag ka ',{t:'dariya',g:'river'},' hai aur doob ke jaana hai']
  ],
  ur:['یہ عشق نہیں آساں اتنا ہی سمجھ لیجیے','اک آگ کا دریا ہے اور ڈوب کے جانا ہے'],
  en:'Love is not easy—understand just this much: it is a river of fire, and one must go through it by drowning.',
  src:'https://www.rekhta.org/poets/jigar-moradabadi/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['ye ',{t:'ishq',g:'love, passion'},' nahin aasaan itna hi samajh lijiye'],
      ['ik aag ka ',{t:'dariya',g:'river'},' hai aur doob ke jaana hai']
     ],
     ur:['یہ عشق نہیں آساں اتنا ہی سمجھ لیجیے','اک آگ کا دریا ہے اور ڈوب کے جانا ہے'],
     en:'Love is not easy—understand just this much: it is a river of fire, and one must go through it by drowning.'
    },
    {
     tr:[
      ['har ',{t:'qadam',g:'step'},' par ',{t:'imtihaan',g:'test, trial'},' hai is ',{t:'raah',g:'path, way'},' mein'],
      ['jo ',{t:'haar',g:'defeat'},' na maane wohi ',{t:'manzil',g:'destination, goal'},' paata hai']
     ],
     ur:['ہر قدم پر امتحان ہے اس راہ میں','جو ہار نہ مانے وہی منزل پاتا ہے'],
     en:'At every step along this path there is a test; only the one who does not surrender reaches the goal.'
    },
    {
     tr:[
      ['khud ko mita kar hi ',{t:'hasti',g:'existence, being'},' milti hai'],
      ['ye ',{t:'raz-e-mohabbat',g:'secret of love'},' har kisi ko ',{t:'samajh',g:'understanding'},' aata nahin']
     ],
     ur:['خود کو مٹا کر ہی ہستی ملتی ہے','یہ رازِ محبت ہر کسی کو سمجھ آتا نہیں'],
     en:'True being is found only by letting go of self; this secret of love is not understood by everyone.'
    },
    {
     tr:[
      ['jigar is ',{t:'soz-e-daroon',g:'inner burning, inward passion'},' se ',{t:'roshan',g:'lit, radiant'},' hai ',{t:'jahan',g:'world'}],
      ['jahan ',{t:'khamoshi',g:'silence'},' bhi ',{t:'fariyad',g:'lament, cry'},' ban jaati hai']
     ],
     ur:['جگر اس سوزِ دروں سے روشن ہے جہاں','جہاں خاموشی بھی فریاد بن جاتی ہے'],
     en:'Jigar, the world is lit by this inner burning, where even silence turns into a cry.'
    }
   ]
  }
 },
 
 {id:'firaq1',p:'firaq',
  tr:[
   ['ek ',{t:'muddat',g:'an age, a long stretch of time'},' se teri ',{t:'yaad',g:'memory, remembrance'},' bhi aai na hamein'],
   ['aur ham bhul gae hon tujhe aisa bhi nahin']
  ],
  ur:['اک مدت سے تری یاد بھی آئی نہ ہمیں','اور ہم بھول گئے ہوں تجھے ایسا بھی نہیں'],
  en:'For a long time now, not even a memory of you has come to me—and yet it is not as though I have forgotten you.',
  src:'https://www.rekhta.org/poets/firaq-gorakhpuri/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['ek ',{t:'muddat',g:'an age, a long stretch of time'},' se teri ',{t:'yaad',g:'memory, remembrance'},' bhi aai na hamein'],
      ['aur ham bhul gae hon tujhe aisa bhi nahin']
     ],
     ur:['اک مدت سے تری یاد بھی آئی نہ ہمیں','اور ہم بھول گئے ہوں تجھے ایسا بھی نہیں'],
     en:'For a long time now, not even a memory of you has come to me—and yet it is not as though I have forgotten you.'
    },
    {
     tr:[
      ['raat ',{t:'bhar',g:'all night'},' ',{t:'taare',g:'stars'},' gin kar ',{t:'subh',g:'morning'},' hoti hai'],
      ['aur ',{t:'tanhaai',g:'solitude, loneliness'},' mein ',{t:'khamoshi',g:'silence'},' bolti hai']
     ],
     ur:['رات بھر تارے گن کر صبح ہوتی ہے','اور تنہائی میں خاموشی بولتی ہے'],
     en:'Counting stars all night long brings the morning, while silence speaks inside solitude.'
    },
    {
     tr:[
      ['bheeni bheeni si ',{t:'khushboo',g:'fragrance, scent'},' hawa mein hai'],
      ['jaise kisi ki ',{t:'aamad',g:'arrival, coming'},' ki ',{t:'khabar',g:'news, hint'},' ho']
     ],
     ur:['بھینی بھینی سی خوشبو ہوا میں ہے','جیسے کسی کی آمد کی خبر ہو'],
     en:'A gentle fragrance lingers in the air, as if bringing word of someone’s arrival.'
    },
    {
     tr:[
      ['firaq ',{t:'dard',g:'pain, ache'},' mein bhi ek ',{t:'nazaakat',g:'delicacy, grace'},' hai'],
      ['jo ',{t:'zakhmon',g:'wounds'},' ko bhi ',{t:'phool',g:'flower, blossom'},' bana deti hai']
     ],
     ur:['فراق درد میں بھی اک نزاکت ہے','جو زخموں کو بھی پھول بنا دیتی ہے'],
     en:'Firaq, there is a delicacy even in pain that turns wounds into blossoms.'
    }
   ]
  }
 },
 {id:'faiz1',p:'faiz',
  tr:[
   ['dil na-umeed to nahin nakaam hi to hai'],
   ['lambi hai ',{t:'gham',g:'grief, sorrow'},' ki shaam magar shaam hi to hai']
  ],
  ur:['دل ناامید تو نہیں ناکام ہی تو ہے','لمبی ہے غم کی شام مگر شام ہی تو ہے'],
  en:'The heart isn\'t hopeless, only disappointed/unfulfilled; the evening of grief is long, yet it is still only an evening.',
  src:'https://www.rekhta.org/ebooks/detail/naqsh-e-faryadi-faiz-ahmad-faiz-ebooks-5',
  expand:{
   couplets:[
    {
     tr:[
      ['dil na-umeed to nahin nakaam hi to hai'],
      ['lambi hai ',{t:'gham',g:'grief, sorrow'},' ki shaam magar shaam hi to hai']
     ],
     ur:['دل ناامید تو نہیں ناکام ہی تو ہے','لمبی ہے غم کی شام مگر شام ہی تو ہے'],
     en:'The heart isn\'t hopeless, only disappointed/unfulfilled; the evening of grief is long, yet it is still only an evening.'
    },
    {
     tr:[
      ['jab ',{t:'subh',g:'morning, dawn'},' aayegi to ',{t:'zulmat',g:'darkness, gloom'},' mit jaayegi'],
      ['aur ',{t:'zanjeer',g:'chain, shackle'},' bhi ',{t:'nagma',g:'song, melody'},' ban jaayegi']
     ],
     ur:['جب صبح آئے گی تو ظلمت مٹ جائے گی','اور زنجیر بھی نغمہ بن جائے گی'],
     en:'When morning comes, the darkness will fade, and even the chain will turn into a song.'
    },
    {
     tr:[
      ['waqt-e-rukhsat to ',{t:'bidaai',g:'farewell, departure'},' ka hai par'],
      ['dil ki ',{t:'dhadkan',g:'heartbeat'},' mein ',{t:'raqs-e-saba',g:'dance of the morning breeze'},' hai']
     ],
     ur:['وقتِ رخصت تو بدائی کا ہے پر','دل کی دھڑکن میں رقصِ صبا ہے'],
     en:'The hour is one of departure, yet in the heart’s beat moves the dance of the morning breeze.'
    },
    {
     tr:[
      ['faiz ',{t:'umeed',g:'hope'},' ka ',{t:'diya',g:'lamp'},' kabhi bujhta nahin'],
      ['jo ',{t:'aandhiyon',g:'storms, gales'},' mein bhi ',{t:'jalta',g:'burns, stays lit'},' reh jaata hai']
     ],
     ur:['فیض امید کا دیا کبھی بجھتا نہیں','جو آندھیوں میں بھی جلتا رہ جاتا ہے'],
     en:'Faiz, the lamp of hope never goes out; it keeps burning even in the storms.'
    }
   ]
  }
 },
{id:'faiz2',p:'faiz',form:'nazm',
  tr:[
   ['mujh se pehli si mohabbat mere mehboob na maang'],
   ['main ne samjha tha ke tu hai to ',{t:'darakhshan',g:'shining, radiant'},' hai ',{t:'hayaat',g:'life'}]
  ],
  ur:['مجھ سے پہلی سی محبت مرے محبوب نہ مانگ','میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات'],
  en:'My love, do not ask me for the love that once was ours; I used to think that with you, life itself shone bright.',
  src:'https://www.rekhta.org/poets/faiz-ahmad-faiz/all',
  expand:{
   couplets:[
    {
     tr:[
      ['mujh se pehli si mohabbat mere mehboob na maang'],
      ['main ne samjha tha ke tu hai to ',{t:'darakhshan',g:'shining, radiant'},' hai ',{t:'hayaat',g:'life'}]
     ],
     ur:['مجھ سے پہلی سی محبت مرے محبوب نہ مانگ','میں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات'],
     en:'My love, do not ask me for the love that once was ours; I used to think that with you, life itself shone bright.'
    },
    {
     tr:[
      ['tera gham hai to ',{t:'gham-e-dahr',g:'sorrow of the world / age'},' ka jhagda kya hai'],
      ['teri surat se hai aalam mein baharon ko ',{t:'sabaat',g:'permanence, constancy'}]
     ],
     ur:['ترا غم ہے تو غمِ دہر کا جھگڑا کیا ہے','تری صورت سے ہے عالم میں بہاروں کو ثبات'],
     en:'When I had your sorrow, what quarrel could there be with the grief of the age? Spring stayed alive in the world through your face.'
    },
    {
     tr:[
      ['teri aankhon ke siwa duniya mein rakha kya hai'],
      ['tu jo mil jaaye to ',{t:'taqdir',g:'fate, destiny'},' ',{t:'nigoon',g:'bowed down, overturned'},' ho jaaye']
     ],
     ur:['تری آنکھوں کے سوا دنیا میں رکھا کیا ہے','تو جو مل جائے تو تقدیر نگوں ہو جائے'],
     en:'What else existed in the world beyond your eyes? If I won you, fate itself would bow its head.'
    },
    {
     tr:[
      ['yun na tha main ne ',{t:'faqat',g:'merely, only'},' chaaha tha yun ho jaaye'],
      ['aur bhi dukh hain zamaane mein mohabbat ke siwa']
     ],
     ur:['یوں نہ تھا میں نے فقط چاہا تھا یوں ہو جائے','اور بھی دکھ ہیں زمانے میں محبت کے سوا'],
     en:'It was not so—I had only wished it would be; there are other sorrows in the world besides love.'
    },
    {
     tr:[
      [{t:'raahaten',g:'comforts, reliefs'},' aur bhi hain ',{t:'vasl',g:'union with the beloved'},' ki raahat ke siwa'],
      ['mujh se pehli si mohabbat mere mehboob na maang']
     ],
     ur:['راحتیں اور بھی ہیں وصل کی راحت کے سوا','مجھ سے پہلی سی محبت مرے محبوب نہ مانگ'],
     en:'There are other comforts too beyond the comfort of union—my love, do not ask me for that first love again.'
    }
   ]
  }
 },
 
 {id:'kaifi1',p:'kaifi',
  tr:[
   ['tum itna jo ',{t:'muskura',g:'smile'},' rahe ho'],
   ['kya ',{t:'gham',g:'sorrow, grief'},' hai jis ko ',{t:'chhupa',g:'hide, conceal'},' rahe ho']
  ],
  ur:['تم اتنا جو مسکرا رہے ہو','کیا غم ہے جس کو چھپا رہے ہو'],
  en:'Why are you smiling so much? What grief is it that you are hiding?',
  src:'https://www.rekhta.org/poets/kaifi-azmi/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['tum itna jo ',{t:'muskura',g:'smile'},' rahe ho'],
      ['kya ',{t:'gham',g:'sorrow, grief'},' hai jis ko ',{t:'chhupa',g:'hide, conceal'},' rahe ho']
     ],
     ur:['تم اتنا جو مسکرا رہے ہو','کیا غم ہے جس کو چھپا رہے ہو'],
     en:'Why are you smiling so much? What grief is it that you are hiding?'
    },
    {
     tr:[
      ['aankhon mein ',{t:'nami',g:'dampness, moisture of tears'},', hansi ',{t:'labon',g:'lips'},' par'],
      ['kya ',{t:'haal',g:'state, condition'},' hai, kya dikha rahe ho']
     ],
     ur:['آنکھوں میں نمی ہنسی لبوں پر','کیا حال ہے کیا دکھا رہے ہو'],
     en:'Dampness in the eyes, a smile on the lips—what is your true state, and what are you showing?'
    },
    {
     tr:[
      ['ban jaayenge ',{t:'zehar',g:'poison'},' peete peete'],
      ['yeh ',{t:'ashq',g:'tears'},' jo peete ja rahe ho']
     ],
     ur:['بن جائیں گے زہر پیتے پیتے','یہ اشک جو پیتے جا رہے ہو'],
     en:'They will turn to poison as you keep drinking them—these tears you keep swallowing.'
    },
    {
     tr:[
      ['jin ',{t:'zakhmon',g:'wounds'},' ko ',{t:'waqt',g:'time'},' bhar chala hai'],
      ['tum kyun unhein ',{t:'chhede',g:'provoke, reopen'},' ja rahe ho']
     ],
     ur:['جن زخموں کو وقت بھر چلا ہے','تم کیوں انہیں چھیڑے جا رہے ہو'],
     en:'The wounds that time has begun to heal—why do you keep reopening them?'
    },
    {
     tr:[
      [{t:'rekhaon',g:'lines of fate / palm lines'},' ka khel hai ',{t:'muqaddar',g:'destiny, fate'}],
      ['rekhaon se ',{t:'maat',g:'defeat, checkmate'},' kha rahe ho']
     ],
     ur:['ریکھاؤں کا کھیل ہے مقدر','ریکھاؤں سے مات کھا رہے ہو'],
     en:'Destiny is a game of lines—why are you letting those lines defeat you?'
    }
   ]
  }
 },
 
{id:'shahryar1',p:'shahryar',
  tr:[
   [{t:'dil',g:'heart'},' ',{t:'cheez',g:'thing'},' kya hai aap meri ',{t:'jaan',g:'life'},' lijiye'],
   ['bas ek baar mera kaha maan lijiye']
  ],
  ur:['دل چیز کیا ہے آپ میری جان لیجیے','بس اک بار مرا کہا مان لیجیے'],
  en:'What is a heart\u2014take my very life instead; just once, agree to what I ask.',
  src:'https://www.rekhta.org/poets/shahryar/all',
  expand:{
   couplets:[
    {
     tr:[
      [{t:'dil',g:'heart'},' ',{t:'cheez',g:'thing'},' kya hai aap meri ',{t:'jaan',g:'life'},' lijiye'],
      ['bas ek baar mera kaha maan lijiye']
     ],
     ur:['دل چیز کیا ہے آپ میری جان لیجیے','بس اک بار مرا کہا مان لیجیے'],
     en:'What is a heart\u2014take my very life instead; just once, agree to what I ask.'
    },
    {
     tr:[
      ['khwabon ke dar band hon to bhi ',{t:'aahat',g:'footstep, faint sound'},' sunai deti hai'],
      ['ke ',{t:'yaad',g:'memory'},' kisi ki ',{t:'khamoshi',g:'silence'},' mein bhi ',{t:'basti',g:'dwells, abides'},' hai']
     ],
     ur:['خوابوں کے در بند ہوں تو بھی آہٹ سنائی دیتی ہے','کہ یاد کسی کی خاموشی میں بھی بستی ہے'],
     en:'Even when the doors of dreams are shut, a faint footstep is heard—a memory dwells even in silence.'
    },
    {
     tr:[
      ['kuchh ',{t:'khwaab',g:'dreams'},' adhure reh jaate hain'],
      ['par un ki ',{t:'roshni',g:'light, glow'},' ',{t:'baqi',g:'remaining, enduring'},' rehti hai']
     ],
     ur:['کچھ خواب ادھورے رہ جاتے ہیں','پر ان کی روشنی باقی رہتی ہے'],
     en:'Some dreams remain incomplete, yet their glow lingers on.'
    },
    {
     tr:[
      ['shahryar ',{t:'alfaz',g:'words'},' kam pad jaate hain aksar'],
      ['jab ',{t:'jazbaat',g:'emotions, feelings'},' ',{t:'gehre',g:'deep'},' ho jaate hain']
     ],
     ur:['شہریار الفاظ کم پڑ جاتے ہیں اکثر','جب جذبات گہرے ہو جاتے ہیں'],
     en:'Shahryar, words often fall short when feelings grow deep.'
    }
   ]
  }
 },
 
 {id:'nida1',p:'nida',
  tr:[
   ['kabhi kisi ko ',{t:'mukammal',g:'complete, whole'},' ',{t:'jahan',g:'world'},' nahin milta'],
   ['kahin ',{t:'zamin',g:'earth, ground'},' kahin ',{t:'aasman',g:'sky, heaven'},' nahin milta']
  ],
  ur:['کبھی کسی کو مکمل جہاں نہیں ملتا','کہیں زمین کہیں آسماں نہیں ملتا'],
  en:'No one ever gets a complete world; somewhere the earth is missing, somewhere the sky.',
  src:'https://www.rekhta.org/poets/nida-fazli/ghazals',
  expand:{
   couplets:[
    {
     tr:[
      ['kabhi kisi ko ',{t:'mukammal',g:'complete, whole'},' ',{t:'jahan',g:'world'},' nahin milta'],
      ['kahin ',{t:'zamin',g:'earth, ground'},' kahin ',{t:'aasman',g:'sky, heaven'},' nahin milta']
     ],
     ur:['کبھی کسی کو مکمل جہاں نہیں ملتا','کہیں زمیں کہیں آسماں نہیں ملتا'],
     en:'No one ever gets a complete world; somewhere the earth is missing, somewhere the sky.'
    },
    {
     tr:[
      ['har ',{t:'safar',g:'journey'},' mein ek naya ',{t:'mod',g:'turn, bend'},' aata hai'],
      ['har ',{t:'kadam',g:'step'},' par ek naya ',{t:'sawal',g:'question'},' aata hai']
     ],
     ur:['ہر سفر میں اک نیا موڑ آتا ہے','ہر قدم پر اک نیا سوال آتا ہے'],
     en:'At every stage of the journey a new turn appears; at every step a new question arises.'
    },
    {
     tr:[
      ['ghar se niklo to ',{t:'saya',g:'shadow'},' saath chalta hai'],
      ['shaam dhale to woh bhi ',{t:'kho',g:'lost, disappears'},' jaata hai']
     ],
     ur:['گھر سے نکلو تو سایہ ساتھ چلتا ہے','شام ڈھلے تو وہ بھی کھو جاتا ہے'],
     en:'Step out of the house and your shadow walks beside you; as evening falls, even that slips away.'
    },
    {
     tr:[
      ['nida ',{t:'lafzon',g:'words'},' ka ',{t:'pul',g:'bridge'},' bana kar dekho'],
      ['har ',{t:'fasla',g:'distance'},' khud-ba-khud ',{t:'kam',g:'less, smaller'},' ho jaata hai']
     ],
     ur:['ندا لفظوں کا پل بنا کر دیکھو','ہر فاصلہ خود بخود کم ہو جاتا ہے'],
     en:'Nida, try building a bridge of words—every distance grows smaller on its own.'
    }    
   ]
  }
 },
{id:'nida2',p:'nida',form:'ghazal',
  tr:[
   [{t:'hoshwalon',g:'those in their senses, the sober'},' ko khabar kya ',{t:'bekhudi',g:'ecstasy, self-forgetfulness'},' kya cheez hai'],
   ['ishq kijiye phir samajhiye zindagi kya cheez hai']
  ],
  ur:['ہوش والوں کو خبر کیا بے خودی کیا چیز ہے','عشق کیجیے پھر سمجھئے زندگی کیا چیز ہے'],
  en:'What do those who stay in their senses know of what self-forgetfulness is? Fall in love, then understand what life really is.',
  src:'https://www.rekhta.org/poets/nida-fazli/all',
  expand:{
   couplets:[
    {
     tr:[
      [{t:'hoshwalon',g:'those in their senses, the sober'},' ko khabar kya ',{t:'bekhudi',g:'ecstasy, self-forgetfulness'},' kya cheez hai'],
      ['ishq kijiye phir samajhiye zindagi kya cheez hai']
     ],
     ur:['ہوش والوں کو خبر کیا بے خودی کیا چیز ہے','عشق کیجیے پھر سمجھئے زندگی کیا چیز ہے'],
     en:'What do those who stay in their senses know of what self-forgetfulness is? Fall in love, then understand what life really is.'
    },
    {
     tr:[
      ['un se nazren kya milin ',{t:'roshan',g:'lit up, radiant'},' fizayein ho gain'],
      ['aaj jaana pyaar ki ',{t:'jaadugari',g:'magic, enchantment'},' kya cheez hai']
     ],
     ur:['ان سے نظریں کیا ملیں روشن فضائیں ہو گئیں','آج جانا پیار کی جادوگری کیا چیز ہے'],
     en:'As soon as our eyes met, the air grew bright—today I learned what the magic of love truly is.'
    },
    {
     tr:[
      ['khulti zulfon ne sikhaayein mausamon ko shaayeri'],
      ['jhukti aankhon ne bataaya ',{t:'maikashi',g:'wine-drinking, intoxication'},' kya cheez hai']
     ],
     ur:['کھلتی زلفوں نے سکھائیں موسموں کو شاعری','جھکتی آنکھوں نے بتایا مے کشی کیا چیز ہے'],
     en:'Unbound hair taught the seasons how to write poetry; lowering eyes revealed what intoxication is.'
    },
    {
     tr:[
      ['ham labon se kah na paaye un se ',{t:'haal-e-dil',g:'state of the heart'},' kabhi'],
      ['aur woh samjhe nahin ke yeh khamoshi kya cheez hai']
     ],
     ur:['ہم لبوں سے کہہ نہ پائے ان سے حالِ دل کبھی','اور وہ سمجھے نہیں کہ یہ خاموشی کیا چیز ہے'],
     en:'My lips could never tell them the state of my heart, and they never understood what this silence meant.'
    }
   ]
  }
 }
 
];


