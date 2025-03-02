document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Listen for wheel events (mouse scroll)
    body.addEventListener("wheel", function (e) {
      e.preventDefault(); // Prevent default vertical scrolling

      // Determine scroll direction
      const delta = e.deltaY || e.detail || e.wheelDelta;

      // Scroll horizontally based on vertical scroll direction
      if (delta > 0) {
        // Scroll right
        body.scrollBy({
          left: window.innerWidth, // Scroll by one viewport width
          behavior: "smooth",
        });
      } else {
        // Scroll left
        body.scrollBy({
          left: -window.innerWidth, // Scroll by one viewport width
          behavior: "smooth",
        });
      }
    });

    // Smooth horizontal scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
        }
      });
    });
  });
