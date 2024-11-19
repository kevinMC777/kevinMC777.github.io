
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 1s ease forwards";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .skill-item, .project-card').forEach((el) => observer.observe(el));



const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
   
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = '🌞'; 
    } else {
        toggleButton.textContent = '🌙';
    }
});
