// SGI Fire & Safety — minimal JS (nav + contact UX)
(function(){
  const menuBtn = document.querySelector('[data-menu-btn]');
  const drawer  = document.querySelector('[data-drawer]');

  if(menuBtn && drawer){
    menuBtn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  // Simple contact form validation (client-side)
  const form = document.querySelector('form[data-contact-form]');
  if(form){
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[data-required="true"]');
      let ok = true;

      required.forEach(el => {
        if(!String(el.value || '').trim()){
          ok = false;
          el.style.borderColor = 'rgba(225,29,46,.65)';
        }
      });

      if(!ok){
        e.preventDefault();
        alert('Please complete the required fields so we can get back to you fast.');
      }
    });
  }
})();

