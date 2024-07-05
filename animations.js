document.addEventListener("DOMContentLoaded", () => {
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1 
    });

    const elementsToAnimate = document.querySelectorAll('h3, h1, .btn-box, .btn-profile, p');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});