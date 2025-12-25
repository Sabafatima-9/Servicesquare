document.addEventListener('DOMContentLoaded', ()=>{
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if(navToggle){navToggle.addEventListener('click', ()=> siteNav.classList.toggle('show'))}

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        const target = document.querySelector(href);
        if(target){e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); siteNav.classList.remove('show');}
      }
    })
  })

  // Contact form submit -> API
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const fd = new FormData(form);
      const payload = {name: fd.get('name'), phone: fd.get('phone'), message: fd.get('message')};
      try{
        const res = await fetch('/api/contact', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        const j = await res.json();
        if(res.ok) alert('Thanks! We will call you shortly.'); else alert(j.error || 'Submission failed');
        form.reset();
      }catch(err){alert('Network error — please call us at +91 98765 43210');}
    })
  }

  // Fetch testimonials and render
  const tContainer = document.getElementById('testimonials-list');
  if(tContainer){
    (async ()=>{
      try{
        const r = await fetch('/api/testimonials');
        const data = await r.json();
        tContainer.innerHTML = '';
        if(Array.isArray(data) && data.length){
          data.forEach(t=>{
            const b = document.createElement('blockquote');
            b.className = 'test-item';
            b.innerHTML = `<p>“${escapeHtml(t.text||t.message||'') }”</p><cite>— ${escapeHtml(t.name||'Customer')}</cite>`;
            tContainer.appendChild(b);
          })
        }else{
          tContainer.innerHTML = '<div class="test-item">No testimonials yet.</div>';
        }
      }catch(err){
        tContainer.innerHTML = '<div class="test-item">Unable to load testimonials.</div>';
      }
    })();
  }

  // small helper
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
});
