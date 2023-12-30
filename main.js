document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href');
          var targetSection = document.querySelector(targetId);

          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});
