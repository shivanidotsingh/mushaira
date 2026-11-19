/* ---------- DATA: all the content lives here ---------- */
const ERAS=[
 {n:'Early &amp; Deccan Era',span:'13th to 17th centuries',c:'#CC2E8C',f:'#ffffff',desc:'Rooted in Hindavi and Rekhta, with early compositions in the 13th century. Urdu poetry flourished as a major tradition in the Deccan courts of Golconda and Bijapur in the 16th and 17th centuries.'},
 {n:'Classical Era',sub:'Delhi and Lucknow schools',span:'18th to 19th centuries',c:'#D93349',f:'#ffffff',desc:'Wali\u2019s arrival in Delhi around 1700 sparked the northern tradition. The Delhi school stressed emotional depth, mysticism and inner experience. After migration from Delhi, the Lucknow school turned to courtly refinement, verbal craft and the marsiya, or elegy.'},
 {n:'Modern &amp; Nationalist Era',span:'Late 19th to mid 20th century',c:'#2F7A3F',f:'#ffffff',desc:'Under colonial rule and rising political movements, themes widened to nationalism, reform, pan-Islamism and social critique.'},
 {n:'Post-Partition &amp; Contemporary Era',span:'Mid 20th century to present',c:'#EFB920',f:'#1b1218',desc:'After the 1947 Partition, Urdu poetry developed across India, Pakistan and the diaspora, taking in progressive, symbolic and personal themes.'}];
// Flower recipe: s = petal shape (round | point | curl), n = petals, w = petal width,
// a = outer petals, b = inner petals (optional), c = centre.
const PK='#E23FA0',RD='#D93349',YL='#EFB920',OR='#F28C28',CR='#FFF1E0',PU='#7B3FA0',BR='#6b3a1f',GN='#3E9B4F';
// Kept in birth-year order. b = birth year, used to place poets on the timeline.
const POETS=[
 {id:'khusro',name:'Amir Khusro',short:'Khusro',ur:'امیر خسرو',b:1253,y:'1253–1325',era:0,works:['Persian divans','Khamsa','Hindavi riddles and songs (attributions uncertain)'],fl:{s:'point',n:8,w:.26,a:CR,b:OR,c:YL}},
 {id:'quli',name:'Muhammad Quli Qutb Shah',short:'Quli',ur:'محمد قلی قطب شاہ',b:1565,y:'1565–1612',era:0,works:['Kulliyat (the first complete Urdu divan)'],fl:{s:'round',n:10,w:.22,a:OR,b:YL,c:BR}},
 {id:'nusrati',name:'Nusrati',short:'Nusrati',ur:'نصرتی',b:1600,y:'c. 1600–1674',era:0,works:['Gulshan-e-Ishq','Ali Nama'],fl:{s:'curl',n:5,a:YL,c:RD}},
 {id:'wali',name:'Wali Deccani',short:'Wali',ur:'ولی دکنی',b:1667,y:'c. 1667–1707',era:0,works:['Divan-e-Wali'],fl:{s:'round',n:5,w:.3,a:YL,c:OR}},
 {id:'mir',name:'Mir Taqi Mir',short:'Mir',ur:'میر تقی میر',b:1723,y:'1723–1810',era:1,works:['Six divans','Zikr-e-Mir (autobiography)','Nikat-ush-Shu\u2019ara'],fl:{s:'round',n:12,w:.14,a:CR,b:YL,c:BR}},
 {id:'nazeer',name:'Nazeer Akbarabadi',short:'Nazeer',ur:'نظیر اکبر آبادی',b:1735,y:'1735–1830',era:1,works:['Banjara-nama','Aadmi-nama'],fl:{s:'curl',n:7,a:PK,c:YL}},
 {id:'mahlaqa',name:'Mah Laqa Bai Chanda',short:'Mah Laqa',ur:'ماہ لقا بائی چندا',b:1768,y:'1768–1824',era:1,works:['Gulzar-e-Mah Laqa'],fl:{s:'point',n:10,w:.22,a:GN,b:CR,c:YL}},
 {id:'zafar',name:'Bahadur Shah Zafar',short:'Zafar',ur:'بہادر شاہ ظفر',b:1775,y:'1775–1862',era:1,works:['Divan'],fl:{s:'round',n:6,w:.28,a:YL,b:CR,c:BR}},
 {id:'ghalib',name:'Mirza Ghalib',short:'Ghalib',ur:'مرزا غالب',b:1797,y:'1797–1869',era:1,works:['Urdu divan','Dastanbuy','Letters'],fl:{s:'curl',n:9,a:CR,b:PK,c:YL}},
 {id:'daagh',name:'Daagh Dehlvi',short:'Daagh',ur:'داغ دہلوی',b:1831,y:'1831–1905',era:1,works:['Gulzar-e-Daagh','Aftab-e-Daagh','Mahtab-e-Daagh','Yadgar-e-Daagh'],fl:{s:'round',n:16,w:.1,a:YL,c:BR}},
 {id:'iqbal',name:'Muhammad Iqbal',short:'Iqbal',ur:'علامہ اقبال',b:1877,y:'1877–1938',era:2,works:['Bang-e-Dra','Bal-e-Jibril','Shikwa and Jawab-e-Shikwa'],fl:{s:'point',n:6,w:.3,a:CR,b:PK,c:YL}},
 {id:'faiz',name:'Faiz Ahmed Faiz',short:'Faiz',ur:'فیض احمد فیض',b:1911,y:'1911–1984',era:3,works:['Naqsh-e-Faryadi','Dast-e-Saba','Zindan Nama'],fl:{s:'round',n:5,w:.3,a:PK,b:RD,c:CR}},
 {id:'kaifi',name:'Kaifi Azmi',short:'Kaifi',ur:'کیفی اعظمی',b:1919,y:'1919–2002',era:3,works:['Jhankaar','Awaara Sajde','Aurat (nazm)'],fl:{s:'curl',n:6,a:RD,b:CR,c:YL}},
 {id:'nida',name:'Nida Fazli',short:'Nida',ur:'ندا فاضلی',b:1938,y:'1938–2016',era:3,works:['Lafzon Ke Pul','Khoya Hua Sa Kuchh'],fl:{s:'round',n:4,w:.34,a:RD,c:CR}},
 {id:'parveen',name:'Parveen Shakir',short:'Parveen',ur:'پروین شاکر',b:1952,y:'1952–1994',era:3,works:['Khushbu','Sad-barg'],fl:{s:'point',n:7,w:.3,a:PU,b:CR,c:YL}}];
// Each line in `tr` can be a string or an array of strings and {t, g} objects for hover glosses.
const COUPLETS=[
 {id:'mir1',p:'mir',
  tr:[
   [{t:'patta patta',g:'every leaf'},', ',{t:'boota boota',g:'every plant'},', haal hamara jaane hai'],
   ['jaane na jaane ',{t:'gul',g:'flower / beloved'},' hi na jaane, baagh to saara jaane hai']
  ],
  ur:['پتہ پتہ بوٹا بوٹا حال ہمارا جانے ہے','جانے نہ جانے گل ہی نہ جانے باغ تو سارا جانے ہے'],
  en:'Every leaf and every plant knows how I am. The flower, the beloved, may not know, but the whole garden does.',
  src:''},
 {id:'wali1',p:'wali',
  tr:[
   ['yaad karna har ghadi us yaar ka'],
   ['hai ',{t:'wazeefa',g:'daily litany, devotional recitation'},' mujh dil-e-bimaar ka']
  ],
  ur:['یاد کرنا ہر گھڑی اس یار کا','ہے وظیفہ مجھ دلِ بیمار کا'],
  en:'Remembering that beloved every moment is the daily litany of my sick heart.',
  src:''},
 {id:'zafar1',p:'zafar',
  tr:[
   ['lagta nahin hai dil mera ',{t:'ujde dayaar',g:'ruined land'},' mein'],
   ['kis ki bani hai ',{t:'aalam-e-na-paedaar',g:'ephemeral, temporary world'},' mein']
  ],
  ur:['لگتا نہیں ہے دل مرا اجڑے دیار میں','کس کی بنی ہے عالمِ ناپائیدار میں'],
  en:'My heart finds no rest in this ruined land. But who ever built a lasting home in this temporary world?',
  src:''},
 {id:'ghalib1',p:'ghalib',
  tr:[
   ['hazaaron khwahishen aisi ke har khwahish pe ',{t:'dam nikle',g:'breath leaves / one dies'}],
   ['bahut nikle mere ',{t:'armaan',g:'longings, wishes'},', lekin phir bhi kam nikle']
  ],
  ur:['ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے','بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے'],
  en:'Thousands of desires, each one worth dying for. Many of my wishes came true, and still it was too few.',
  src:''},
 {id:'daagh1',p:'daagh',
  tr:[
   ['khoob parda hai ke ',{t:'chilman',g:'bamboo screen / curtain'},' se lage baithe hain'],
   ['saaf chhupte bhi nahin saamne aate bhi nahin']
  ],
  ur:['خوب پردہ ہے کہ چلمن سے لگے بیٹھے ہیں','صاف چھپتے بھی نہیں سامنے آتے بھی نہیں'],
  en:'What a clever veil—sitting right beside the screen, neither hiding completely nor coming fully into view.',
  src:''},
 {id:'iqbal1',p:'iqbal',
  tr:[
   [{t:'khudi',g:'selfhood'},' ko kar ',{t:'buland',g:'exalted, high'},' itna ke har ',{t:'taqdeer',g:'decree of fate'},' se pehle'],
   ['khuda bande se khud poochhe, bata teri ',{t:'raza',g:'will, wish'},' kya hai']
  ],
  ur:['خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے','خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے'],
  en:'Raise your selfhood so high that before every decree of fate, God himself asks you: what do you want?',
  src:''},
 {id:'faiz1',p:'faiz',
  tr:[
   ['dil na-umeed to nahin nakaam hi to hai'],
   ['lambi hai ',{t:'gham',g:'grief, sorrow'},' ki shaam magar shaam hi to hai']
  ],
  ur:['دل ناامید تو نہیں ناکام ہی تو ہے','لمبی ہے غم کی شام مگر شام ہی تو ہے'],
  en:'The heart isn\'t hopeless, only disappointed/unfulfilled; the evening of grief is long, yet it is still only an evening.',
  src:''},
 {id:'nida1',p:'nida',
  tr:[
   ['safar mein dhoop to hogi jo chal sako to chalo'],
   ['sabhi hain ',{t:'bheer',g:'crowd'},' mein tum bhi nikal sako to chalo']
  ],
  ur:['سفر میں دھوپ تو ہوگی جو چل sako to chalo','سبھی ہیں بھیڑ میں تم بھی نکل sako to chalo'],
  en:'There will be harsh sun on the journey—walk if you can; everyone is lost in the crowd—step out if you can.',
  src:''},
 {id:'parveen1',p:'parveen',
  tr:[
   ['kaise kah doon ke mujhe chhor diya hai us ne'],
   ['baat to sach hai magar baat hai ',{t:'ruswai',g:'disgrace, notoriety'},' ki']
  ],
  ur:['کیسے کہہ دوں کہ مجھے چھوڑ دیا ہے اس نے','بات تو سچ ہے مگر بات ہے رسوائی کی'],
  en:'How can I say he has left me? It is true, yet it brings disgrace.',
  src:''}];
