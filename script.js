/* ============ EDIT YOUR CONTENT HERE ============ */
const C={
 name:"Palace Intelligence",
 abbr:"(LESINI)",
 tagline:"For impact and for excellence.", // EDIT
 bio:"Leadership Empowerment and Social Impact Network Initiative (LESINI) a.k.a. Palace Intelligence. We equip leaders, young people and organisations with the skills, tools and platforms to create lasting impact in Nigeria and beyond.", // EDIT
 services:[
  {t:"Leadership Empowerment",d:"Mentorship and programmes that build confident, purpose-driven leaders."},
  {t:"Capacity Training",d:"Practical workshops that strengthen the skills of teams and individuals."},
  {t:"Digital Marketing",d:"Social media, branding and online campaigns that grow your audience."},
  {t:"Book Publishing",d:"Editing, design and publishing support to take your book from draft to shelf."},
  {t:"Printing",d:"Quality printing for books, banners, brochures and branded materials."},
  {t:"Youth Counseling",d:"Guidance and support that help young people make wise choices for their future."}
 ],
 ceo:{
  name:"Chris Leo", alias:"PapaKris", role:"Chief Executive Officer", initials:"CL",
  photo:"ceo.jpg", // put his photo next to this file as ceo.jpg, or paste an image link here
  quote:"Leadership begins when we choose to invest in people.", // EDIT
  bio:"A Pastor and author of several books selling on Amazon. A coach in the faculty of personality evaluation and profiling, and ingenious thought-pattern exploration. A freelance psychology and human behavior analyst with over 20 years of impact on young people. A four-time nominee for the America's Biographical Institute Medal of Honour in 2003, 2004, and 2005." // EDIT
 },
 links:{ // EDIT: where each contact link goes
  email:"mailto:palaceonlinehub@gmail.com",
  whatsapp:"https://wa.me/2348167307067",
  phone:"tel:+2348124366136"
 },
 contact:{email:"palaceonlinehub@gmail.com",whatsapp:"+234-816 730 7067",phone:"+234-812 436 6136"},
 locations:["Owerri","Port Harcourt","Lagos"],
 social:[ // EDIT: replace u with the exact profile links
  {n:"Twitter",h:"@ckcpapakris",u:"https://twitter.com/ckcpapakris"},
  {n:"LinkedIn",h:"Chris Leo",u:"https://www.linkedin.com/search/results/people/?keywords=Chris%20Leo"},
  {n:"Facebook",h:"Leadership Empowerment and Social Impact Network Initiative",u:"https://www.facebook.com/search/top?q=Leadership%20Empowerment%20and%20Social%20Impact%20Network%20Initiative"}
 ],
 formTo:"palaceonlinehub@gmail.com" // messages from the contact form are delivered here
};
/* ================================================= */

const $=s=>document.querySelector(s),L=(a,h,t)=>`<a href="${h}" ${h.startsWith('http')?'target="_blank" rel="noopener"':''}>${t}</a>`;
document.title=C.name+" ("+C.abbr+")";
$('#bn').textContent=C.name.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());$('#ab').textContent=C.abbr;$('#tl').textContent=C.tagline;$('#bio').textContent=C.bio;
let n=0;$('#hn').innerHTML=C.name.split(' ').map(w=>'<span class="w">'+[...w].map(c=>`<i style="animation-delay:${(.15+n++*.05).toFixed(2)}s">${c}</i>`).join('')+'</span>').join(' ');
$('#sv').innerHTML=C.services.map(s=>`<div class="row"><h3>${s.t}</h3><p>${s.d}</p></div>`).join('');
const e=C.ceo;$('#cn').textContent=e.name;$('#ca').textContent=e.alias;$('#cr').textContent=e.role;$('#cq').textContent="\u201C"+e.quote+"\u201D";$('#cb').textContent=e.bio;
$('#ph').dataset.i=e.initials;$('#pi').alt=e.name;$('#pi').onerror=function(){this.remove()};$('#pi').src=e.photo;
$('#ct').innerHTML=[["Email",C.links.email,C.contact.email],["WhatsApp",C.links.whatsapp,C.contact.whatsapp],["Phone",C.links.phone,C.contact.phone]].map(r=>`<li><span>${r[0]}</span>${L(0,r[1],r[2])}</li>`).join('')+'<li><span>Address</span>Emekuku, Owerri, Imo State</li>';;
$('#lc').innerHTML=C.locations.map(l=>`<b>${l}</b>`).join('');
$('#so').innerHTML=C.social.map(s=>`<li><span>${s.n}</span>${L(0,s.u,s.h)}</li>`).join('');
$('#ft').textContent="\u00A9 "+new Date().getFullYear()+" "+C.name+" ("+C.abbr+"). All rights reserved.";

// header background and mobile menu
addEventListener('scroll',()=>$('#hd').classList.toggle('s',scrollY>40),{passive:true});
$('#tg').onclick=()=>$('#nv').classList.toggle('o');
$('#nv').onclick=()=>$('#nv').classList.remove('o');

// section reveal
const io=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(x=>io.observe(x));

// contact form: delivered to your inbox through FormSubmit
$('#fm').onsubmit=async ev=>{
 ev.preventDefault();const f=ev.target,st=$('#st'),b=$('#sb');
 if(!f.checkValidity()){st.className='er';st.textContent='Please fill in your name, a valid email and a message.';return}
 b.disabled=true;b.textContent='Sending...';st.className='';st.textContent='';
 try{
  const r=await fetch('https://formsubmit.co/ajax/'+C.formTo,{method:'POST',headers:{Accept:'application/json'},
   body:new URLSearchParams({name:f.name.value,email:f.email.value,message:f.message.value,_honey:f._honey.value,_subject:'New website message from '+f.name.value,_replyto:f.email.value,_template:'table',_captcha:'false'})});
  const d=await r.json();if(!r.ok||d.success==='false')throw d;
  st.className='ok';st.textContent='Thank you. Your message has been sent and we will reply soon.';f.reset();
 }catch(x){
  console.warn('Form error:',x);st.className='er';st.innerHTML=(x&&/activat/i.test(x.message||'')?'This form is not activated yet. Open the activation email FormSubmit sent to '+C.formTo+', click the link, then try again.':'Message not sent. Please try again, or email us at <a href="'+C.links.email+'">'+C.contact.email+'</a>.');
 }
 b.disabled=false;b.textContent='Send message';
};
