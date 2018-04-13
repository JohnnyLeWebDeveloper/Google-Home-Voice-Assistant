

// Code for Nav section
window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});

// Code for Google Home image on upper left - nav section
sr.reveal('.showcase-left', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

// Code for "Hands-free area" - nav section
sr.reveal('.showcase-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});

sr.reveal('.showcase-btn', {
  duration: 2000,
  delay: 800,
  origin: 'right',
  distance: '300px'
});

// Testimonal section
sr.reveal('#testimonial div', {
  duration: 2000,
  origin: 'bottom',
});

sr.reveal('.info-left', {
          duration: 2000,
          origin:'left',
          distance:'300px',
          viewFactor: 0.2
        });
        sr.reveal('.info-right', {
          duration: 2000,
          origin:'right',
          distance:'300px',
          viewFactor: 0.2
        });

          $(function() {
              // Smooth Scrolling
              $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html, body').animate({
                      scrollTop: target.offset().top
                    }, 1000);
                    return false;
                  }
                }
              });
            });
