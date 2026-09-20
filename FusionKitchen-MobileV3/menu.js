/* Fusion Kitchen / zentral hinterlegte Speisekarte. Quelle: vom Auftraggeber bereitgestellte Menüfotos (September 2026). */
const FUSION_MENU = {
  pasta: {
    eyebrow: '01 / FRESH PASTA', title: 'FRISCHE PASTA.', subtitle: 'Traditionell vor Ort hergestellt und frisch für dich zubereitet.',
    image: 'assets/images/pasta-hero.webp',
    groups: [
      { name: 'PASTA', items: [
        { n:'PASTA POMODORO', p:9.5, a:'A', r:'Campanelle', d:'In fruchtiger Tomatensauce, verfeinert mit Zwiebel-Concassé, Kirschtomaten und frischem Basilikum.', tag:'Vegetarisch' },
        { n:'PASTA CON SALVIA', p:9.5, a:'A, G', r:'Penne', d:'Angeschwitzter Salbei und getrocknete Tomaten, cremig geschwenkt in viel frisch geriebenem Grana Padano.', tag:'Vegetarisch' },
        { n:'PASTA CREMA DI FUNGHI', p:10.5, a:'A, C, G', r:'Tagliatelle', d:'Mit reichlich gebratenen Champignons in cremiger Sahne, verfeinert mit Weißwein und Knoblauchöl.', tag:'Vegan erhältlich' },
        { n:'PASTA AGLIO E OLIO', p:10.5, a:'A', r:'Linguine', d:'Geschwenkt in nativem Olivenöl mit goldgelben Knoblauchscheiben und frischer Petersilie.', tag:'Vegan' },
        { n:'PASTA RATATOUILLE', p:11, a:'A, G', r:'Campanelle', d:'Mediterraner Gemüse-Mix mit Artischocken, Zucchini und Aubergine in Tomatensauce mit Rosmarin und Knoblauchöl.', tag:'Vegetarisch' },
        { n:'PASTA CARBONARA', p:12.5, a:'A, C, G', r:'Linguine', d:'Mit krossem Rinderspeck in traditionell cremiger Sahne-Ei-Sauce, vollendet mit Grana Padano und Petersilie.' },
        { n:'PASTA CHICKEN ALFREDO', p:13.5, a:'A, C, G', r:'Tagliatelle', d:'Mit zarter Hähnchenbrust und Champignons in cremiger Sahnesauce, verfeinert mit Knoblauch und Grana Padano.' },
        { n:'PASTA BOLOGNESE', p:12.5, a:'A', r:'Fusilli', d:'Mit hausgemachter Rinderbolognese, feinen Karottenstreifen, Kirschtomaten und frischem Basilikum.' },
        { n:'PASTA POLLO PICCANTE', p:13.5, a:'A', r:'Campanelle', d:'Mit goldbrauner Hähnchenbrust, knackigem Pak Choi und Paprika in einer pikanten Chili-Orangen-Sauce.' },
        { n:'PASTA POMODORO E GAMBERETTI', p:14, a:'A, B', r:'Campanelle', d:'In fruchtiger Tomatensauce mit saftig gebratenen Garnelen, Zwiebelwürfeln, Kirschtomaten und frischem Basilikum.' },
        { n:'PASTA GAMBERETTI E SPINACI', p:14.5, a:'A, B, G', r:'Tubi Floreali', d:'Mit saftigen Garnelen und Babyspinat in einer cremigen Sahnesauce, verfeinert mit Grana Padano und Basilikumpesto.' },
        { n:'PASTA REEF & BEEF', p:15.9, a:'A, B, D, L', r:'Tubi Floreali', d:'Mit zarten Rinderfiletstreifen und Garnelen, kombiniert mit Zucchini und Karotten in edler Hummersauce.' },
        { n:'PASTA FILETTO DI MANZO E SPINACI', p:14.9, a:'A, G', r:'Campanelle', d:'Zartes Rinderfilet, Babyspinat und Pilze in cremiger Sahnesauce mit Knoblauchöl, Grana Padano und Basilikumpesto.' },
        { n:'PASTA FILETTO DI MANZO E RUCOLA', p:14.9, a:'A, L', r:'Tagliatelle', d:'Zartes Rinderfilet mit Chili, Rosmarin, Pilzen und buntem Gemüse, abgelöscht mit Weißwein und frischem Rucola.' }
      ]},
      { name:'FÜR DIE KIDS', desc:'Kindgerecht serviert mit unserer Flugzeug-Pasta.', items:[
        { n:'KIDS’ PASTA BOLOGNESE', p:5.9, a:'A, G', d:'Kleine Portion Flugzeug-Pasta mit unserer klassischen Rinderbolognese und feinem Grana Padano.' },
        { n:'KIDS’ PASTA BUTTER & KÄSE', p:5.9, a:'A, G', d:'Geschwenkt in geschmolzener Butter und feinem Grana Padano.' },
        { n:'KIDS’ PASTA POMODORO', p:5.9, a:'A, G', d:'In Tomatensauce mit süßen Kirschtomaten und feinem Grana Padano.' }
      ]}
    ]
  },
  burger: {
    eyebrow:'02 / SMASHED TO ORDER', title:'SMASH BURGER.',subtitle:'Im getoasteten Bun, frisch auf der heißen Grillplatte zubereitet, außen kross und innen saftig.',
    image:'assets/images/burger-hero.webp',
    groups:[
      {name:'HANDGEMACHTE SMASH BURGER',items:[
        {n:'FUSION CHEESEBURGER',p:7.9,a:'A, G, J',d:'Saftiges Beef mit einer Scheibe schmelzendem Cheddar, Ketchup, Senf, feinen Zwiebelwürfeln, Gewürzgurken und knackigen Salatstreifen.'},
        {n:'FUSION DOUBLE CHEESEBURGER',p:9.9,a:'A, G, J',d:'Die doppelte Ladung: Zwei Beef Patties, zwei Scheiben Cheddar, Ketchup, Senf, Zwiebelwürfel, Gewürzgurken und knackige Salatstreifen.'},
        {n:'FUSION BBQ BACON BURGER',p:10.9,a:'A, G, J',d:'Beef Patty mit einer Scheibe Cheddar, krossem Beef Bacon und BBQ-Sauce auf knackigen Salatstreifen mit roten Zwiebeln und Gurken.'},
        {n:'FUSION CHILI CHEESE BURGER',p:8.9,a:'A, G',d:'Angenehme Schärfe: Beef-Patty unter cremiger Chili-Cheese-Sauce, getoppt mit Zwiebelwürfeln und eingelegten Jalapeños.',tag:'Scharf'},
        {n:'FUSION HEAVYWEIGHT',p:12.9,a:'A, C, G, J',d:'Unser Meisterstück: Zwei Beef Patties unter einer Scheibe geschmolzenem Gouda und zwei Scheiben Cheddar, krosser Beef Bacon, pikante Samuraisauce, weiße Zwiebeln, rote Zwiebeln und knackige Salatstreifen.'},
        {n:'FUSION KOREAN CHICKEN BURGER',p:6.9,a:'A, C, G, F, J, K',d:'Frittiertes Korean Fried Chicken in deinem Lieblings-Glaze auf hausgemachtem Coleslaw, Spicy Mayo und Gewürzgurken.'}
      ]},
      {name:'GLAZE ZUR AUSWAHL',desc:'Für den Korean Chicken Burger: Teriyaki, Secret X, Gochu Fire, Sweet Chilli, Garlic Parm oder Honey Butter.',items:[]},
      {name:'BEILAGEN & EXTRAS',items:[
        {n:'HAUSGEMACHTE POMMES',p:4.5,d:'Außen perfekt knusprig, innen wunderbar soft.'},
        {n:'COLESLAW',p:4,a:'C, G, J',d:'Knackig-frischer, hausgemachter Krautsalat nach traditioneller Art.'},
        {n:'EXTRA CHICKEN',p:2}, {n:'EXTRA PATTY',p:2}, {n:'EXTRA CHEESE',p:1.5}
      ]},
      {name:'SOSSEN & DIPS',items:[
        {n:'KETCHUP · MAYO · SENF',p:1.5},
        {n:'TRÜFFELMAYO · KOREAN BBQ · CHILI CHEESE · ERDNUSS · ROASTED SESAME · WHITE SMOKED BBQ · WASABI',p:2.5}
      ]}
    ]
  },
  chicken: {
    eyebrow:'03 / CRISPY & SAUCY', title:'KOREAN FRIED CHICKEN.', subtitle:'Knusprig frittierte Hähnchenteile, frisch in deinem Lieblings-Glaze gewendet.',
    image:'assets/images/chicken-hero.webp',
    groups:[{name:'KOREAN BONELESS FRIED CHICKEN',items:[
      {n:'FUSION TERIYAKI',p:16.9,a:'A, F, K',d:'In klassischer Teriyaki-Sauce mit Ingwer-Knoblauch-Note, getoppt mit Schnittlauch und zweierlei Sesam.'},
      {n:'FUSION GARLIC SOY',p:16.9,a:'A, F, K',d:'In aromatischer Knoblauch Soja Sauce mit feinem Sesamöl, getoppt mit Schnittlauch und schwarzem Sesam.'},
      {n:'FUSION SECRET X',p:16.9,a:'A, F, K',d:'Unsere Secret X Sauce mit feiner Süße, abgerundet mit Schnittlauch und weißem Sesam.'},
      {n:'FUSION GOCHU FIRE',p:16.9,a:'A, F, K',d:'Für die etwas Schärferen: in feuriger Gochujang-Paste mit Honig und Knoblauch, getoppt mit Schnittlauch und weißem Sesam.',tag:'Scharf'},
      {n:'FUSION SWEET CHILLI',p:16.9,a:'A, D',d:'Der fruchtig pikante Klassiker in unserer süß-sauren Sauce, verfeinert mit einem Spritzer Limettensaft und frischem Schnittlauch.'},
      {n:'FUSION GARLIC PARM',p:16.9,a:'A, C, G, J',d:'In cremiger Knoblauch Butter Sauce mit feinen Kräutern und Chili, vollendet mit frisch geriebenem Parmesan und Petersilie.'},
      {n:'FUSION HONEY BUTTER',p:16.9,a:'A, F, K',d:'Die perfekte Balance aus süß und salzig: in goldener Honig Butter Sauce mit Zitrone, garniert mit weißem Sesam.'},
      {n:'FUSION BLACK PEPPER',p:16.9,a:'A, F, K',d:'In einer kräftigen Sauce mit grob geröstetem schwarzen Pfeffer, braunem Zucker, Schnittlauch und weißem Sesam.',tag:'Scharf'},
      {n:'FUSION LEMON PARM',p:16.9,a:'A, C, G, J',d:'Erfrischend und cremig: in spritzig-cremiger Zitronen Butter Sauce, verfeinert mit frischem Parmesan.'}
    ]}]
  },
  drinks: {
    eyebrow:'04 / DRINKS',title:'KALTE GETRÄNKE.', subtitle:'Eiskalte Klassiker, fruchtige Exoten & Imports.',
    image:'assets/images/restaurant-interior.webp',
    groups:[
      {name:'CLASSICS & WATER',items:[
        {n:'VIO STILLES WASSER 0,5 L',p:2.9}, {n:'VIO MEDIUM WASSER 0,5 L',p:2.9},
        {n:'COLA 0,33 L',p:3.5,z:'1, 2'}, {n:'COLA ZERO 0,33 L',p:3.5,z:'1, 2, 3'}
      ]},
      {name:'EXOTICS & IMPORTS',items:[
        {n:'RUBICON GUAVE 0,33 L',p:3.9}, {n:'RUBICON LYCHEE 0,33 L',p:3.9},
        {n:'FANTA BERRY 0,35 L',p:3.9,z:'2'}, {n:'DR. PEPPER CREAM SODA 0,35 L',p:3.9,z:'1, 2'},
        {n:'DR. PEPPER STRAWBERRY & CREAM 0,35 L',p:3.9,z:'1, 2'}
      ]}
    ], notes:'Getränke-Zusatzstoffe laut Speisekarte: 1 = koffeinhaltig · 2 = mit Farbstoff · 3 = enthält eine Phenylalaninquelle.'
  }
};

(function(){
 const tabs=[...document.querySelectorAll('.menu-tab')], container=document.getElementById('menu-results');
 if(!container) return;
 const euro=n=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(n);
 const esc=t=>String(t ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const tabList=document.querySelector('.menu-tabs'), menuContent=document.querySelector('.menu-content');
 const previous=document.querySelector('.menu-prev'), next=document.querySelector('.menu-next'), status=document.querySelector('.menu-swipe-status');
 const mobileQuery=matchMedia('(max-width: 849px), (max-width: 1366px) and (hover: none) and (pointer: coarse)');
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
 const categories=tabs.map(tab=>tab.dataset.category);
 let active='pasta',suppressClickUntil=0;
 function render(cat,{scroll=false,direction=0}={}){
  const data=FUSION_MENU[cat];if(!data)return;
  const headerHeight=document.querySelector('.site-header').getBoundingClientRect().height;
  const returnToTop=scroll&&mobileQuery.matches&&container.getBoundingClientRect().top<headerHeight+tabList.offsetHeight;
  const menuTop=menuContent.getBoundingClientRect().top+window.scrollY-headerHeight;
  active=cat;
  tabs.forEach(t=>{const selected=t.dataset.category===cat;t.classList.toggle('is-selected',selected);t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
  container.setAttribute('aria-labelledby','tab-'+cat);
  const groups=data.groups.map((g,gidx)=>`<section class="menu-group"><div class="menu-group-heading"><h4>${esc(g.name)}</h4>${g.desc?`<p>${esc(g.desc)}</p>`:''}</div>${g.items.length?`<div class="menu-items">${g.items.map((item,i)=>`<article class="menu-item"><span class="dish-number">${String(i+1).padStart(2,'0')}</span><div class="dish-body"><div class="dish-name-line"><h5>${esc(item.n)}</h5>${item.tag?`<span class="dish-tag">${esc(item.tag)}</span>`:''}</div>${item.r?`<p class="dish-recommendation">Empfehlung: ${esc(item.r)}</p>`:''}${item.d?`<p class="dish-description">${esc(item.d)}</p>`:''}${item.a?`<small class="dish-allergens">Allergene: ${esc(item.a)}</small>`:''}${item.z?`<small class="dish-allergens">Zusatzstoffe: ${esc(item.z)}</small>`:''}</div><strong class="dish-price">${euro(item.p)}</strong></article>`).join('')}</div>`:''}</section>`).join('');
  const eyebrow=esc(data.eyebrow).replace(/^(\d+ \/ )/,'<span class="section-number">$1</span>');
  container.innerHTML=`<div class="menu-category-intro"><div><span class="micro-label">${eyebrow}</span><h3>${esc(data.title)}</h3><p>${esc(data.subtitle)}</p></div><img src="${esc(data.image)}" alt="" width="1086" height="1448" loading="lazy"></div>${groups}${data.notes?`<p class="menu-extra-note">${esc(data.notes)}</p>`:''}`;
  const index=categories.indexOf(cat);
  previous.disabled=index===0;next.disabled=index===categories.length-1;
  previous.setAttribute('aria-label',index>0?`Zur Kategorie ${tabs[index-1].textContent}`:'Keine vorherige Kategorie');
  next.setAttribute('aria-label',index<categories.length-1?`Zur Kategorie ${tabs[index+1].textContent}`:'Keine weitere Kategorie');
  status.textContent=`${tabs[index].textContent} · ${index+1} / ${categories.length}`;
  if(returnToTop)window.scrollTo({top:Math.max(0,menuTop),behavior:reducedMotion.matches?'instant':'smooth'});
  if(direction&&mobileQuery.matches&&!reducedMotion.matches&&container.animate){
   container.getAnimations().forEach(animation=>animation.cancel());
   container.animate([{opacity:.55,transform:`translateX(${direction*10}px)`},{opacity:1,transform:'translateX(0)'}],{duration:170,easing:'ease-out'});
  }
 }
 function step(direction){
  const index=categories.indexOf(active)+direction;
  if(index<0||index>=categories.length)return;
  render(categories[index],{scroll:true,direction});
 }
 tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>render(tab.dataset.category,{scroll:true}));
  tab.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let ni=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[ni].focus();render(tabs[ni].dataset.category);});
 });
 previous.addEventListener('click',()=>step(-1));next.addEventListener('click',()=>step(1));
 // Swipes on either the tab row or the dishes. Vertical scrolling and pinch zoom remain native.
 [container,tabList].forEach(surface=>{
  let gesture=null;
  function start(x,y,id){gesture=mobileQuery.matches?{x,y,lastX:x,lastY:y,id,time:Date.now(),vertical:false}:null;}
  function move(x,y){
   if(!gesture)return;
   gesture.lastX=x;gesture.lastY=y;
   if(Math.abs(y-gesture.y)>14&&Math.abs(y-gesture.y)>Math.abs(x-gesture.x))gesture.vertical=true;
  }
  function finish(x,y){
   if(!gesture)return;
   move(x,y);const g=gesture;gesture=null;
   const dx=x-g.x,dy=y-g.y;
   if(!mobileQuery.matches||g.vertical||Date.now()-g.time>1500||Math.abs(dx)<48||Math.abs(dx)<Math.abs(dy)*1.4)return;
   suppressClickUntil=Date.now()+450;step(dx<0?1:-1);
  }
  if('PointerEvent' in window){
   surface.addEventListener('pointerdown',e=>{
    if(!e.isPrimary){gesture=null;return;}
    if(e.pointerType==='touch'||e.pointerType==='pen')start(e.clientX,e.clientY,e.pointerId);
   },{passive:true});
   surface.addEventListener('pointermove',e=>{if(gesture&&e.pointerId===gesture.id)move(e.clientX,e.clientY);},{passive:true});
   surface.addEventListener('pointerup',e=>{if(gesture&&e.pointerId===gesture.id)finish(e.clientX,e.clientY);},{passive:true});
   surface.addEventListener('pointercancel',()=>{gesture=null;},{passive:true});
  }else{
   surface.addEventListener('touchstart',e=>{if(e.touches.length!==1){gesture=null;return;}const t=e.touches[0];start(t.clientX,t.clientY,t.identifier);},{passive:true});
   surface.addEventListener('touchmove',e=>{if(e.touches.length!==1){gesture=null;return;}const t=e.touches[0];move(t.clientX,t.clientY);},{passive:true});
   surface.addEventListener('touchend',e=>{const t=e.changedTouches[0];if(t&&gesture&&t.identifier===gesture.id)finish(t.clientX,t.clientY);},{passive:true});
   surface.addEventListener('touchcancel',()=>{gesture=null;},{passive:true});
  }
  surface.addEventListener('click',e=>{if(e.detail!==0&&Date.now()<suppressClickUntil){e.preventDefault();e.stopPropagation();}},true);
 });
 document.querySelectorAll('[data-menu-jump]').forEach(link=>link.addEventListener('click',()=>render(link.dataset.menuJump)));
 render(active);
})();
