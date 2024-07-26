document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', revealOnScroll);
    
    function revealOnScroll() {
        var reveals = document.querySelectorAll('.about, .volunteer, .contact');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('show');
            }
        }
    }
});
