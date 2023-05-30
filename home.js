// 'use strict';

{
  // Intersection Observer API

  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting ){
              // isInstersecting
        console.log("クロスしてない");
        return;
      }
      console.log("クロスした");
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  // const header = document.querySelector('header');
  // const toTop = document.getElementById('to_top');

  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.7,
  });

  document.querySelectorAll('.animate').forEach(el => {
    console.log(el);
    inViewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback); 
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e =>{
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior:'smooth',
    });
  });
}

