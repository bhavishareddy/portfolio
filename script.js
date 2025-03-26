document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".scroll-fade");
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});