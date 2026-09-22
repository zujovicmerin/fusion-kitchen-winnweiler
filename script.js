/* Fusion in Motion / interactive behavior without external JS or tracking */
(()=>{
 document.documentElement.classList.add('js');
 const header=document.querySelector('.site-header'), progress=document.querySelector('.page-progress > span'), menuToggle=document.querySelector('.mobile-menu-toggle'), mobileNav=document.querySelector('.mobile-nav'), mobileQuery=matchMedia('(max-width: 849px), (max-width: 1366px) and (hover: none) and (pointer: coarse)'), reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
 let scrollTicking=false,lastFocused=null,lockedScrollY=0,navIsOpen=false;
 function scrollUpdate(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?Math.min(100,Math.max(0,scrollY/max*100)):0}%`;header.classList.toggle('is-scrolled',scrollY>20);scrollTicking=false;}
 window.addEventListener('scroll',()=>{if(!scrollTicking){requestAnimationFrame(scrollUpdate);scrollTicking=true}},{passive:true});scrollUpdate();
 function setNav(open){
  if(!mobileQuery.matches)open=false;
  if(open===navIsOpen)return;
  navIsOpen=open;
  if(open){
   lockedScrollY=window.scrollY;lastFocused=document.activeElement;
   Object.assign(document.body.style,{position:'fixed',top:`-${lockedScrollY}px`,left:'0',right:'0',width:'100%'});
  }
  mobileNav.classList.toggle('is-open',open);
  mobileNav.setAttribute('aria-hidden',String(!open));mobileNav.inert=!open;
  menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');
  document.body.classList.toggle('nav-open',open);
  document.querySelector('main').inert=open;document.querySelector('.site-footer').inert=open;
  if(open){mobileNav.scrollTop=0;mobileNav.querySelector('a')?.focus({preventScroll:true});}
  else{
   for(const prop of ['position','top','left','right','width'])document.body.style.removeProperty(prop);
   const previous=document.documentElement.style.scrollBehavior;
   document.documentElement.style.scrollBehavior='auto';
   window.scrollTo(0,lockedScrollY);document.documentElement.style.scrollBehavior=previous;
   if(lastFocused)menuToggle.focus({preventScroll:true});
  }
 }
 mobileNav.inert=true;
 menuToggle.addEventListener('click',()=>setNav(menuToggle.getAttribute('aria-expanded')!=='true'));
 mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setNav(false)));
 document.querySelector('.brand').addEventListener('click',()=>setNav(false));
 document.addEventListener('keydown',e=>{if(!mobileNav.classList.contains('is-open'))return;if(e.key==='Escape'){e.preventDefault();setNav(false);}if(e.key==='Tab'){const items=[menuToggle,...mobileNav.querySelectorAll('a')];const active=items.indexOf(document.activeElement);if(e.shiftKey&&active===0){e.preventDefault();items.at(-1).focus();}else if(!e.shiftKey&&active===items.length-1){e.preventDefault();items[0].focus();}}});
 if(mobileQuery.addEventListener)mobileQuery.addEventListener('change',()=>setNav(false));
 else mobileQuery.addListener(()=>setNav(false));
 const panels=[...document.querySelectorAll('.food-panel')];
 function activate(panel){panels.forEach(p=>p.classList.toggle('is-active',p===panel));}
 panels.forEach((p,i)=>{
  p.addEventListener('pointerenter',()=>{if(!mobileQuery.matches)activate(p)});
  p.addEventListener('focusin',()=>activate(p));
  p.addEventListener('click',e=>{if(e.target.closest('a'))return;if(mobileQuery.matches)activate(p)});
  p.addEventListener('keydown',e=>{if(e.target!==p)return;if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(p);}if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();panels[(i+1)%panels.length].focus();}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();panels[(i+panels.length-1)%panels.length].focus();}});
 });
 document.querySelector('.hero-panels').addEventListener('pointerleave',()=>{if(!mobileQuery.matches)panels.forEach(p=>p.classList.remove('is-active'))});
 const targets=[...document.querySelectorAll('.reveal')];
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{rootMargin:'0px 0px -35px 0px',threshold:.06});targets.forEach(el=>observer.observe(el));}else targets.forEach(el=>el.classList.add('is-visible'));
 const video=document.querySelector('.kitchen-video');
 if(video){if(reducedMotion.matches||navigator.connection?.saveData){video.removeAttribute('autoplay');video.pause();}else if('IntersectionObserver' in window){const vidObs=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){video.play().catch(()=>{});}else video.pause();}},{threshold:.15});vidObs.observe(video);}else video.play().catch(()=>{});}
 const soundToggle=document.querySelector('.kitchen-sound-toggle');
 if(video&&soundToggle){
  function updateSoundToggle(){
   const soundOn=!video.muted;
   soundToggle.setAttribute('aria-pressed',String(soundOn));
   soundToggle.setAttribute('aria-label',soundOn?'Ton ausschalten':'Ton einschalten');
   soundToggle.title=soundOn?'Ton ausschalten':'Ton einschalten';
  }
  video.muted=true;
  updateSoundToggle();
  soundToggle.addEventListener('click',()=>{
   video.muted=!video.muted;
   updateSoundToggle();
   if(!video.muted&&video.paused)video.play().catch(()=>{});
  });
  video.addEventListener('volumechange',updateSoundToggle);
 }
 const sections=[...document.querySelectorAll('main > section[id]')];
 if('IntersectionObserver' in window){const navObs=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;document.querySelectorAll('.desktop-nav a').forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}},{rootMargin:'-25% 0px -58% 0px'});sections.forEach(s=>navObs.observe(s));}
 const year=document.getElementById('current-year');if(year)year.textContent=new Date().getFullYear();
})();
