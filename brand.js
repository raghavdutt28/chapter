'use strict';
const palettes={
 buttercream:{name:'Buttercream',colours:{bg:'#FFF9ED',surface:'#F5E7C8',accent:'#F3CE81',ink:'#49382E',paper:'#FFFEFA',muted:'#796452'}},
 apricot:{name:'Apricot',colours:{bg:'#FFF4EB',surface:'#FADBC7',accent:'#EAA17B',ink:'#55362C',paper:'#FFFCF7',muted:'#795545'}},
 rosemilk:{name:'Rose Milk',colours:{bg:'#FFF5F4',surface:'#F4DCDD',accent:'#D8959A',ink:'#513039',paper:'#FFFCFA',muted:'#79565D'}},
 oatlatte:{name:'Oat Latte',colours:{bg:'#F8F4EE',surface:'#EAE0D5',accent:'#C7A989',ink:'#45392F',paper:'#FFFDF8',muted:'#6E5C4D'}}
};
const types={
 optimist:{display:'Bricolage Grotesque',body:'Manrope',fallback:'Arial,sans-serif',label:'Rounded optimism'},
 neighbourly:{display:'Lora',body:'DM Sans',fallback:'Georgia,serif',label:'Familiar warmth'},
 morning:{display:'Fraunces',body:'Work Sans',fallback:'Georgia,serif',label:'Morning character'}
};
const brands={
  "chapter": {
    "name": "Chapter",
    "description": "Life opens up at Chapter.",
    "palette": "buttercream",
    "type": "neighbourly",
    "image": "rooftop-chai.webp",
    "mark": "<g fill=\"none\" stroke=\"#A9814A\" stroke-width=\"11\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"3\"><path d=\"M26 236V88C26 47.131 59.131 14 100 14C140.869 14 174 47.131 174 88V236\"/><path d=\"M77 18C58 33 48 58 48 88V228L112 200V88C112 65 101 47 85 36\"/></g>",
    "heroOne": "Life opens up",
    "heroTwo": "at Chapter.",
    "heroBody": "Wake to light through French windows and end the day with chai on the roof. This is life at Chapter.",
    "heroFoot": "Five floors, bright rooms and an evening waiting upstairs.",
    "heroChip": "After the last call, come up for chai.",
    "welcomeEyebrow": "FOR THE HOURS BEYOND WORK",
    "welcomeTitle": "The day continues<br><em>when you come home.</em>",
    "welcomeLead": "The job brings you to Hyderabad. The hours after it make the city yours.",
    "welcomeBody": "Chapter gives those hours a place, from bright rooms to a rooftop where conversations carry on. Morning stretches and company after work make the hours around the office worth looking forward to.",
    "moments": [
      [
        "AFTER THE LAST CALL",
        "Take the evening upstairs.",
        "Bring your chai and the story from your day. A seat on the roof turns the end of work into the start of an evening.",
        "rooftop-chai.webp"
      ],
      [
        "BEFORE THE CALENDAR FILLS",
        "A few sets before the first call.",
        "Rooftop gym equipment gives the morning a place to move. Stretch, do a few sets and start the day in the open air.",
        "rooftop-workout.webp"
      ],
      [
        "BACK IN YOUR ROOM",
        "Leave the day at the door.",
        "Settle into a low bed with a book within reach, or catch up with home before sleep.",
        "room-reading.webp"
      ]
    ],
    "roomTitle": "Let the light in &<br><em>leave the day behind.</em>",
    "roomBody": "French windows bring daylight into the room. Low beds and light-coloured walls keep the setting open and calm, from the first morning stretch to the last page before sleep.",
    "roofEyebrow": "UPSTAIRS AT CHAPTER",
    "roofTitle": "After the last call,<br><em>come up for chai.</em>",
    "roofIntro": "The rooftop pairs gym equipment with a sitting area. Start with a few sets and finish with a cup of chai.",
    "roofStamp": "THE CHAPTER ROOFTOP",
    "roofStampLine": "The evening carries on up here.",
    "roofFirstTitle": "Start the morning on the roof.",
    "roofFirstBody": "A stretch and a few sets before the workday starts, with rooftop gym equipment close at hand.",
    "roofSecondTitle": "Let one cup turn into a conversation.",
    "roofSecondBody": "Pull up a seat, catch up on the day and get the weekend plans going.",
    "roofAside": "Good company is just upstairs.",
    "quoteEyebrow": "LIFE OPENS UP AT CHAPTER",
    "quoteTitle": "Come for the room &<br><em>stay for the life around it.</em>",
    "galleryTitle": "Everyday life<br><em>at Chapter.</em>",
    "locationTitle": "Make Hyderabad<br><em>feel like home.</em>",
    "locationBody": "Chapter is planned in the Gachibowli, Nanakramguda and Financial District corridor. A base for the workday and the evenings that make the city familiar.",
    "closingEyebrow": "WELCOME TO CHAPTER",
    "closingTitle": "Step inside &<br><em>fall in love with coming home.</em>",
    "closingNote": "Wake to French-window light and come home to an evening that carries on upstairs.",
    "footerLine": "Good company for what comes next."
  }
};
const photoDescriptions={
 'rooftop-friends.webp':'Indian friends sharing a high-five and evening chai on the rooftop',
 'rooftop-chai.webp':'Indian residents sharing chai and a conversation in the rooftop sitting area',
 'sunday-coffee.webp':'Indian friends sharing coffee and a slow Sunday morning on the rooftop',
 'rooftop-workout.webp':'Indian residents using the rooftop gym corner with friends sitting nearby',
 'room-reading.webp':'An Indian resident reading on a low bed beside French windows',
 'bedroom.webp':'Room concept with French windows, a low oak bed and light-coloured walls',
 'french-windows.webp':'French windows beside a low bed and a small desk in a light-walled room',
 'corridor.webp':'Bright residential corridor with oak room doors and a window at the end',
 'rooftop.webp':'Wide rooftop concept with a sitting area and gym equipment',
 'rooftop-seating.webp':'Outdoor sofas beneath the rooftop pergola with plants and warm evening light',
 'building.webp':'Five-floor building exterior concept with a shared rooftop'
};
// A schematic neighbourhood view: never imply a confirmed property address.
const neighbourhoodMap='<svg class="neighbourhood-map" viewBox="0 0 600 560" aria-hidden="true">'+
 '<rect width="600" height="560" fill="var(--map-land)"/>'+
 '<g fill="var(--map-block)"><path d="M0 0H142L116 101H0Z"/><path d="M166 0H305V94H143Z"/><path d="M334 0H465L491 105H334Z"/><path d="M490 0H600V113H517Z"/><path d="M0 130H104L88 230H0Z"/><path d="M136 128H300V234H114Z"/><path d="M334 138H490V237H334Z"/><path d="M523 147H600V248H542Z"/><path d="M0 272H81L62 384H0Z"/><path d="M113 270H300V380H86Z"/><path d="M331 277H488V386H331Z"/><path d="M520 283H600V402H520Z"/><path d="M0 420H58L36 560H0Z"/><path d="M88 417H298V560H56Z"/><path d="M333 422H486V560H333Z"/><path d="M523 439H600V560H523Z"/></g>'+
 '<g fill="none" stroke="var(--map-small-road)" stroke-width="8"><path d="M12 51L592 68M11 184L600 209M0 323L600 350M0 484L600 502M222 0L208 560M423 0L403 560M559 0L574 560"/></g>'+
 '<g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-30 112C110 109 231 122 339 116S509 133 641 143M-20 251C130 250 256 247 372 256S505 265 630 273M-20 402C143 397 312 402 630 429M316 -20L317 579M500 -20C523 110 519 229 506 338S505 479 509 584" stroke="var(--map-road-edge)" stroke-width="20"/><path d="M-30 112C110 109 231 122 339 116S509 133 641 143M-20 251C130 250 256 247 372 256S505 265 630 273M-20 402C143 397 312 402 630 429M316 -20L317 579M500 -20C523 110 519 229 506 338S505 479 509 584" stroke="var(--paper)" stroke-width="15"/><path d="M154 -30C113 99 115 222 90 339S66 494 35 592" stroke="var(--map-road-edge)" stroke-width="29"/><path d="M154 -30C113 99 115 222 90 339S66 494 35 592" stroke="var(--map-main-road)" stroke-width="21"/></g>'+
 '<g fill="var(--map-label)" font-family="Arial,sans-serif" font-size="14"><text x="203" y="58">Gachibowli</text><text x="377" y="91">Financial District</text><text x="22" y="465">Nanakramguda</text></g>'+
 '<g fill="var(--map-label)" font-family="Arial,sans-serif" font-size="10" letter-spacing="1.4"><text x="35" y="224" transform="rotate(-78 35 224)">WORKDAY CONNECTIONS</text></g>'+
 '<circle cx="296" cy="362" r="78" fill="var(--accent)" opacity=".17"/><circle cx="296" cy="362" r="78" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 6"/>'+
 '</svg>';
const state={brand:'chapter',palette:'buttercream',type:'neighbourly'};
const $=id=>document.getElementById(id);
const asset=name=>window.__embeddedAssets?.[name]||'assets/'+name;
const photo=(name,extra='')=>'<img src="'+asset(name)+'" alt="'+photoDescriptions[name]+'" width="1536" height="1024" '+extra+'>';
const visitButton='<button class="button button-dark" type="button" data-open-visit>Plan my visit <span aria-hidden="true">↗</span></button>';
let galleryItems=[];
function renderPage(){
 const b=brands[state.brand];
 galleryItems=[
  [b.image,'THE ROOFTOP',b.heroChip],
  ['bedroom.webp','THE ROOMS','Morning light reaches the bed.'],
  ['corridor.webp','THE CORRIDORS','A hello on the way upstairs.'],
  ['rooftop-chai.webp','EVENING COMPANY','Catch up over chai.'],
  ['room-reading.webp','A QUIET MOMENT','A few pages before bed.'],
  ['rooftop-workout.webp','THE WORKOUT CORNER','A few sets above the city.'],
  ['sunday-coffee.webp','SUNDAY MORNING','Coffee before the calendar fills.'],
  ['french-windows.webp','FRENCH WINDOWS','Let the morning light in.'],
  ['rooftop-seating.webp','ROOFTOP SEATING','A seat in the open air.'],
  ['building.webp','FIVE FLOORS','Five floors of life beyond work.']
 ];
 const gallery=galleryItems.map(([name,label,title],i)=>'<button type="button" class="gallery-tile '+(name.includes('building')?'gallery-building':'')+'" data-gallery="'+i+'" aria-label="View '+label.toLowerCase()+'">'+photo(name,'loading="lazy"')+'<span class="gallery-caption"><span><small>'+label+'</small><strong>'+title+'</strong></span><span class="gallery-expand" aria-hidden="true">↗</span></span></button>').join('');
 const moments=b.moments.map(([label,title,body,name])=>'<article class="moment-card"><div class="moment-photo">'+photo(name,'loading="lazy"')+'</div><p class="eyebrow">'+label+'</p><h3>'+title+'</h3><p>'+body+'</p></article>').join('');
 const faqs=[
 ['Who is this place for?','People moving to Hyderabad for work, starting their first independent chapter or choosing a fresh living arrangement. Private rooms and shared places make room for different routines.'],
 ['What are the rooms like?','The room direction includes French windows, low beds and light-coloured walls. Final room layouts and furnishing details will be shared before booking.'],
 ['What is on the rooftop?','A sitting area and gym equipment. The rooftop is a place for a workout, a conversation or an evening outdoors.'],
 ['Can I enjoy some time alone?','Yes. Your room gives you a calm place to read, rest and call home. Rooftop company and private time both belong here.'],
 ['How can I visit?','Use the visit planner to save your preferred day and requirements. This preview downloads a local brief. It does not send an enquiry or confirm a visit.']
 ].map(([question,answer])=>'<details><summary>'+question+'<span aria-hidden="true">+</span></summary><p>'+answer+'</p></details>').join('');
 $('main').innerHTML=
 '<section class="hero shell" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow">COMMUNITY COLIVING · HYDERABAD</p><h1 id="hero-title"><span>'+b.heroOne+'</span><em>'+b.heroTwo+'</em></h1><p class="hero-description">'+b.heroBody+'</p><div class="hero-actions">'+visitButton+'<a class="text-link" href="#rooms">Explore the rooms <span aria-hidden="true">↓</span></a></div><p class="hero-footnote">'+b.heroFoot+'</p></div><figure class="hero-photo">'+photo(b.image,'fetchpriority="high"')+'<figcaption><span class="photo-chip"><span class="chip-dot"></span>'+b.heroChip+'</span><span class="hero-photo-note">LIFE ABOVE THE WORKDAY</span></figcaption></figure></section>'+
 '<div class="details-strip shell"><span>French windows</span><i aria-hidden="true">✳</i><span>Low beds. Light walls.</span><i aria-hidden="true">✳</i><span>Rooftop seating & workouts</span></div>'+
 '<section class="welcome-section shell" id="life" aria-labelledby="welcome-title"><p class="eyebrow">'+b.welcomeEyebrow+'</p><div class="welcome-grid"><h2 id="welcome-title">'+b.welcomeTitle+'</h2><div><p class="lead">'+b.welcomeLead+'</p><p class="body-copy">'+b.welcomeBody+'</p></div></div><div class="moments-grid">'+moments+'</div></section>'+
 '<section class="rooms-section" id="rooms" aria-labelledby="rooms-title"><div class="shell room-layout"><figure class="room-photo">'+photo('bedroom.webp','loading="lazy"')+'<figcaption>THE ROOMS</figcaption></figure><div class="room-copy"><p class="eyebrow">A ROOM TO SETTLE INTO</p><h2 id="rooms-title">'+b.roomTitle+'</h2><p>'+b.roomBody+'</p><ul class="room-features"><li>French windows</li><li>Low beds</li><li>Light-coloured walls</li></ul><button class="text-link" type="button" data-open-visit>Plan my visit <span aria-hidden="true">↗</span></button></div></div></section>'+
 '<section class="roof-section shell" id="rooftop" aria-labelledby="roof-title"><div class="section-heading"><div><p class="eyebrow">'+b.roofEyebrow+'</p><h2 id="roof-title">'+b.roofTitle+'</h2></div><p class="section-intro">'+b.roofIntro+'</p></div><figure class="roof-photo">'+photo(b.image,'loading="lazy"')+'<figcaption class="roof-stamp"><span>'+b.roofStamp+'</span><strong>'+b.roofStampLine+'</strong></figcaption></figure><div class="roof-bottom"><div><h3>'+b.roofFirstTitle+'</h3><p>'+b.roofFirstBody+'</p></div><div><h3>'+b.roofSecondTitle+'</h3><p>'+b.roofSecondBody+'</p></div><p class="roof-aside">'+b.roofAside+'</p></div></section>'+
 '<section class="brand-quote"><div class="shell"><p>'+b.quoteEyebrow+'</p><h2>'+b.quoteTitle+'</h2><a class="button button-paper" href="#gallery">Take a look around <span aria-hidden="true">↗</span></a></div></section>'+
 '<section class="gallery-section shell" id="gallery" aria-labelledby="gallery-title"><div class="section-heading"><div><p class="eyebrow">THE PEOPLE. THE PLACE.</p><h2 id="gallery-title">'+b.galleryTitle+'</h2></div><p class="section-intro">The rooms, the corridors and the conversations upstairs. Explore the building, one corner at a time.</p></div><div class="gallery-grid">'+gallery+'</div><p class="image-disclosure">Design and lifestyle imagery is AI-generated to illustrate the proposed experience.</p></section>'+
 '<section class="location-section shell" id="location" aria-labelledby="location-title"><div class="location-copy"><p class="eyebrow">HELLO, HYDERABAD</p><h2 id="location-title">'+b.locationTitle+'</h2><p>'+b.locationBody+'</p><div class="location-tags"><span>Gachibowli</span><span>Nanakramguda</span><span>Financial District</span></div><p class="location-note">Final address and visit availability will be confirmed before launch.</p>'+visitButton+'</div><div class="neighbourhood-panel" role="group" aria-label="Illustrated work-corridor map with the proposed building overlay">'+neighbourhoodMap+'<div class="map-heading"><span class="map-area-label">HYDERABAD</span><span class="map-compass" aria-label="North">N ↑</span></div><div class="map-building-overlay">'+photo('building.webp','loading="lazy"')+'<span class="map-anchor" aria-hidden="true"></span><span class="map-brand-label">'+b.name+'<small>FIVE FLOORS · ONE COMMUNITY</small></span></div><div class="map-footer"><p>Illustrated neighbourhood view<br><span>Exact location coming soon</span></p><a href="https://www.google.com/maps/search/?api=1&query=Financial+District+Hyderabad" target="_blank" rel="noopener noreferrer" aria-label="Explore Financial District Hyderabad in Google Maps (opens a new tab)">Explore the area ↗</a></div></div></section>'+
 '<section class="faq-section shell" aria-labelledby="faq-title"><div><p class="eyebrow">BEFORE YOU MOVE</p><h2 id="faq-title">A few things<br><em>to know.</em></h2></div><div class="faq-list">'+faqs+'</div></section>'+
 '<section class="closing-section shell" aria-labelledby="closing-title"><p class="eyebrow">'+b.closingEyebrow+'</p><h2 id="closing-title">'+b.closingTitle+'</h2>'+visitButton+'<p>'+b.closingNote+'</p></section>';
}
let renderedBrand=null;
function saveState(){
 try{localStorage.setItem('chapter-brand-look-v1',JSON.stringify(state));}catch{}
 try{const url=new URL(location.href);url.searchParams.delete('story');for(const key of ['brand','palette','type'])url.searchParams.set(key,state[key]);history.replaceState(null,'',url);}catch{}
}
function applyState(save=true){
 const b=brands[state.brand];
 document.body.dataset.brand=state.brand;document.body.dataset.palette=state.palette;document.body.dataset.type=state.type;
 Object.entries(palettes[state.palette].colours).forEach(([key,value])=>document.documentElement.style.setProperty('--'+key,value));
 document.documentElement.style.setProperty('--display',"'"+types[state.type].display+"',"+types[state.type].fallback);
 document.documentElement.style.setProperty('--body',"'"+types[state.type].body+"',Arial,sans-serif");
 if(renderedBrand!==state.brand){renderPage();renderedBrand=state.brand;$('visit-status').textContent='';}
 document.querySelectorAll('[data-brand-name]').forEach(el=>el.textContent=b.name);
 document.querySelectorAll('.brand-mark').forEach(el=>el.innerHTML=b.mark);
 document.querySelectorAll('[data-home]').forEach(el=>el.setAttribute('aria-label',b.name+' home'));
 $('footer-line').textContent=b.footerLine;
 document.title=b.name+' | Coliving in Hyderabad';
 document.querySelector('meta[name="description"]').content=b.name+': '+b.heroBody+' Community coliving in Hyderabad.';
 document.querySelector('meta[name="theme-color"]').content=palettes[state.palette].colours.bg;
 document.querySelectorAll('[data-palette-choice]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.paletteChoice===state.palette)));
 document.querySelectorAll('[data-type-choice]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.typeChoice===state.type)));
 $('token-display').innerHTML=Object.values(palettes[state.palette].colours).slice(0,4).map(value=>'<span class="token"><i style="background:'+value+'"></i>'+value+'</span>').join('');
 $('studio-status').textContent=b.name+' · '+palettes[state.palette].name+' · '+types[state.type].display+' + '+types[state.type].body;
 $('share-fallback').hidden=true;if(save)saveState();
}
function buildStudio(){
 $('palette-options').innerHTML=Object.entries(palettes).map(([key,p])=>'<button type="button" class="palette-button" data-palette-choice="'+key+'" aria-label="'+p.name+'"><span class="palette-colours" aria-hidden="true">'+['bg','surface','accent','ink'].map(t=>'<i style="background:'+p.colours[t]+'"></i>').join('')+'</span>'+p.name+'</button>').join('');
 $('type-options').innerHTML=Object.entries(types).map(([key,t])=>'<button type="button" class="option-button type-button" data-type-choice="'+key+'" aria-label="'+t.display+' and '+t.body+'"><span><span class="type-sample" style="font-family:\''+t.display+'\','+t.fallback+'">A good hello.</span><span class="type-names">'+t.display+' + '+t.body+'</span></span><span class="option-check" aria-hidden="true">✓</span></button>').join('');
}
function openDialog(dialog){closeMenu();if(!dialog.open){dialog.showModal();document.body.classList.add('dialog-open');}}
function closeMenu(){$('mobile-nav').hidden=true;document.querySelector('.menu-button').setAttribute('aria-expanded','false');document.querySelector('.menu-button').setAttribute('aria-label','Open navigation');}
let galleryIndex=0;
function showPhoto(index){
 galleryIndex=(index+galleryItems.length)%galleryItems.length;const [name,label,title]=galleryItems[galleryIndex];
 $('gallery-view-image').src=asset(name);$('gallery-view-image').alt=photoDescriptions[name];$('gallery-view-label').textContent=label;$('gallery-view-title').textContent=title;$('gallery-count').textContent=String(galleryIndex+1).padStart(2,'0')+' / '+galleryItems.length;
}
document.addEventListener('click',event=>{
 const target=event.target.closest('button,a');if(!target)return;
 if(target.hasAttribute('data-open-studio'))openDialog($('studio-dialog'));
 if(target.hasAttribute('data-open-visit'))openDialog($('visit-dialog'));
 if(target.hasAttribute('data-close-dialog'))target.closest('dialog').close();
 if(target.hasAttribute('data-palette-choice')){state.palette=target.dataset.paletteChoice;applyState();}
 if(target.hasAttribute('data-type-choice')){state.type=target.dataset.typeChoice;applyState();}
 if(target.hasAttribute('data-gallery')){showPhoto(Number(target.dataset.gallery));openDialog($('gallery-dialog'));}
 if(target.closest('#mobile-nav')&&target.tagName==='A')closeMenu();
 if(!target.closest('.site-header'))closeMenu();
});
document.querySelector('.menu-button').addEventListener('click',()=>{
 const open=document.querySelector('.menu-button').getAttribute('aria-expanded')==='true';$('mobile-nav').hidden=open;
 document.querySelector('.menu-button').setAttribute('aria-expanded',String(!open));document.querySelector('.menu-button').setAttribute('aria-label',open?'Open navigation':'Close navigation');
});
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.addEventListener('close',()=>document.body.classList.toggle('dialog-open',Boolean(document.querySelector('dialog[open]'))));
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
$('see-page').addEventListener('click',()=>{$('studio-dialog').close();});
$('reset-direction').addEventListener('click',()=>{state.palette=brands[state.brand].palette;state.type=brands[state.brand].type;applyState();});
$('copy-combination').addEventListener('click',async()=>{
 saveState();try{if(location.protocol==='file:')throw new Error('Local preview');await navigator.clipboard.writeText(location.href);$('studio-status').textContent='Combination link copied.';}
 catch{$('share-fallback').hidden=false;$('share-url').value=location.href;$('share-url').focus();$('share-url').select();$('studio-status').textContent='Copy the link below to keep this combination.';}
});
$('gallery-previous').addEventListener('click',()=>showPhoto(galleryIndex-1));$('gallery-next').addEventListener('click',()=>showPhoto(galleryIndex+1));
$('gallery-dialog').addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showPhoto(galleryIndex+(event.key==='ArrowLeft'?-1:1));}});
const dateFormatter=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'});
document.querySelector('input[name="date"]').min=dateFormatter.format(new Date());
$('visit-form').addEventListener('submit',event=>{
 event.preventDefault();const data=new FormData(event.currentTarget);
 const brief=[brands[state.brand].name.toUpperCase()+' | VISIT PLAN','',
 'Name: '+data.get('name'),'Email: '+data.get('email'),'Preferred visit day: '+data.get('date'),
 'Work neighbourhood: '+(data.get('work')||'Not specified'),'What matters: '+(data.get('needs')||'Not specified'),'',
 'Brand: '+brands[state.brand].name,'Colours: '+palettes[state.palette].name,'Fonts: '+types[state.type].display+' + '+types[state.type].body,'',
 'Five floors. French windows, low beds and light walls. Rooftop seating and gym equipment. Planned Hyderabad work-corridor location.','',
 'This plan is saved locally. Your details have not been sent. A visit has not been booked. Final property details and visit availability remain to be confirmed.'].join('\n');
 const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=state.brand+'-visit-plan.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
 $('visit-status').textContent='Your visit plan has downloaded. Keep it for when enquiries open. Your details have not been sent.';
});
try{const saved=JSON.parse(localStorage.getItem('chapter-brand-look-v1')||'null');if(saved){if(brands[saved.brand]){state.brand=saved.brand;state.palette=brands[state.brand].palette;}if(palettes[saved.palette])state.palette=saved.palette;if(types[saved.type])state.type=saved.type;}}catch{}
const params=new URLSearchParams(location.search);
if(brands[params.get('brand')]){state.brand=params.get('brand');state.palette=brands[state.brand].palette;state.type=brands[state.brand].type;}
if(palettes[params.get('palette')])state.palette=params.get('palette');
if(types[params.get('type')])state.type=params.get('type');
buildStudio();applyState(false);

