// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Accordion functionality
const accordionBtns = document.querySelectorAll('.accordion-btn');
accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        content.classList.toggle('hidden');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    
    formMessage.textContent = 'Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.';
    formMessage.style.color = 'green';
    
    setTimeout(() => {
        formMessage.textContent = '';
        this.reset();
    }, 5000);
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    if (isDark) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun mr-2"></i> Mode Terang';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon mr-2"></i> Mode Gelap';
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun mr-2"></i> Mode Terang';
}

themeToggle.addEventListener('click', toggleDarkMode);
mobileThemeToggle.addEventListener('click', toggleDarkMode);

// Tab functionality
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Deactivate all tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');
        
        // Activate the clicked tab button
        this.classList.add('active');
    });
});

// Flip card functionality
const flipCards = document.querySelectorAll('.flip-card');
flipCards.forEach(card => {
    card.addEventListener('click', function() {
        this.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});

// Kanji card hover effect
const kanjiCards = document.querySelectorAll('.kanji-card');
kanjiCards.forEach(card => {
    card.addEventListener('click', function() {
        // Show modal with detailed info
        console.log('Kanji card clicked:', this.textContent.trim());
    });
});

// Audio playback for pronunciation
const audioButtons = document.querySelectorAll('.audio-btn');
audioButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const audio = new Audio(this.getAttribute('data-audio'));
        audio.play();
    });
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-fill');
progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 100);
});

// Tambahkan listener ke tombol-tombol utama (gunakan querySelectorAll)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText.includes('Mulai Belajar')) {
            alert('Bayangkan ini adalah halaman pembelajaran');
        } else if (button.innerText.includes('Pelajari Lebih Lanjut')) {
            alert('informasi lebih lanjut ada di sini yaa!!!!');
        } else if (button.innerText.includes('Lihat Semua Karakter')) {
            alert('Menampilkan semua karakter...');
        } else if (button.innerText.includes('Lihat Semua Video')) {
            alert('Menampilkan daftar video pembelajaran...');
        } else if (button.innerText.includes('Mulai Simulasi')) {
            alert('Simulasi JLPT dimulai...');
        } else if (button.innerText.includes('Mulai Latihan Hari Ini')) {
            alert('Latihan dimulai!');
        }
    });
});
