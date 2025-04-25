// Hype Meter Scroll Interaction
const hypeMeter = document.getElementById('hype-meter');
const hypeMeterFill = document.getElementById('hype-meter-fill');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / maxScroll;
    let hypePercentage = Math.min(scrollFraction * 50, 50);

    if (scrollFraction > 0.95) {
        hypePercentage = 100;
        hypeMeter.classList.add('vibrate', 'active');
    } else {
        hypeMeter.classList.remove('vibrate', 'active');
    }

    hypeMeterFill.style.height = `${hypePercentage}%`;
});

// Click Effects
const effects = ['SUI-PER!', 'POW!', 'BAM!', 'ZAP!', 'WHOOSH!', 'KABOOM!', 'BOOM!', 'CRASH!', 'KAPOW!'];
document.addEventListener('click', (e) => {
    const effectText = effects[Math.floor(Math.random() * effects.length)];
    const effect = document.createElement('div');
    effect.className = 'comic-effect';
    effect.textContent = effectText;
    effect.style.left = `${e.clientX}px`;
    effect.style.top = `${e.clientY - 20}px`;
    document.body.appendChild(effect);

    const starburst = document.createElement('div');
    starburst.className = 'starburst';
    starburst.style.left = `${e.clientX - 30}px`;
    starburst.style.top = `${e.clientY - 30}px`;
    document.body.appendChild(starburst);

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - 60}px`;
    ripple.style.top = `${e.clientY - 60}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        effect.remove();
        starburst.remove();
        ripple.remove();
    }, 800);
});

// Scroll Animation for Sections
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let isToggling = false;

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (isToggling) return; // Prevent rapid toggling
    isToggling = true;

    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    hamburger.style.transform = navLinks.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
    hamburger.style.transition = 'transform 0.3s ease';
    hamburger.style.color = '#00f7d2'; // Ensure color stays consistent

    setTimeout(() => {
        isToggling = false;
    }, 300); // Debounce delay
});

// Prevent hover effects on hamburger
hamburger.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    hamburger.style.color = '#00f7d2';
    hamburger.style.textShadow = 'none';
});

hamburger.addEventListener('mouseout', (e) => {
    e.stopPropagation();
    hamburger.style.color = '#00f7d2';
    hamburger.style.textShadow = 'none';
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.transform = 'rotate(0deg)';
        hamburger.style.color = '#00f7d2';
    }
});

// Close navbar when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.transform = 'rotate(0deg)';
        hamburger.style.color = '#00f7d2';
    });
});

// Nav Bar Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Link Effects (excluding hamburger)
const links = document.querySelectorAll('a:not(.hamburger *)');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#000';
        link.style.textShadow = '0 0 8px #ffff00';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = link.classList.contains('join-button') ? '#000' : '#0055ff';
        link.style.textShadow = 'none';
    });
});

// Button Click Animation
const buttons = document.querySelectorAll('.join-button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            if (button.href) window.open(button.href, '_blank');
        }, 200);
    });
});

// Countdown Timer Placeholder
const countdownElement = document.getElementById('countdown');
function updateCountdown() {
    countdownElement.textContent = 'SOON';
}
setInterval(updateCountdown, 1000);

// Speech Bubble Toggle on Hover
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        const bubble = section.querySelector('.speech-bubble');
        if (bubble) bubble.style.display = 'block';
    });
    section.addEventListener('mouseleave', () => {
        const bubble = section.querySelector('.speech-bubble');
        if (bubble) bubble.style.display = 'none';
    });
});

// Hype Meter Speech Bubble Toggle
hypeMeter.addEventListener('mouseenter', () => {
    const bubble = hypeMeter.querySelector('.speech-bubble');
    if (bubble && hypeMeter.classList.contains('active')) bubble.style.display = 'block';
});
hypeMeter.addEventListener('mouseleave', () => {
    const bubble = hypeMeter.querySelector('.speech-bubble');
    if (bubble) bubble.style.display = 'none';
});

// Cursor Trail Effect
const cursorTrail = document.createElement('div');
cursorTrail.className = 'cursor-trail';
document.body.appendChild(cursorTrail);

document.addEventListener('mousemove', (e) => {
    cursorTrail.style.left = `${e.clientX - 10}px`;
    cursorTrail.style.top = `${e.clientY - 10}px`;
    cursorTrail.classList.add('active');
    setTimeout(() => {
        cursorTrail.classList.remove('active');
    }, 200);
});

// Touch Compatibility
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const event = new MouseEvent('click', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: true
    });
    e.target.dispatchEvent(event);
});