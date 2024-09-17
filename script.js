// Hero Video
const video = document.getElementById('heroVideo');

const playButton = document.getElementById('playBtn');

playButton.addEventListener('click', function() {
  if (video.paused) {

    video.play();
    video.setAttribute('controls', 'controls');
  } 
  else {

    video.pause();
    video.removeAttribute('controls');
  }
});

video.addEventListener('pause', function() {
  video.removeAttribute('controls');
});

video.addEventListener('play', function() {
  video.setAttribute('controls', 'controls');
})



document.addEventListener('DOMContentLoaded', function () {
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = +stat.getAttribute('data-target');
                const suffix = stat.getAttribute('data-suffix') || ''; // Get the suffix or default to an empty string
                const speed = 200; // Speed of animation (lower value = faster)
                
                const updateCount = () => {
                    const currentCount = +stat.innerText.replace(/[^0-9]/g, '');
                    const increment = target / speed;
                    
                    if (currentCount < target) {
                        stat.innerText = Math.ceil(currentCount + increment).toLocaleString() + suffix;
                        setTimeout(updateCount, 30);
                    } else {
                        stat.innerText = target.toLocaleString() + suffix;
                    }
                };
                
                updateCount();
                observer.unobserve(stat); // Stop observing after animation
            }
        });
    };

    const observer = new IntersectionObserver(animateStats, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
});
