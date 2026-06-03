// ==========================================
// 1. LOGIKA DARK/LIGHT MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById('input');
const body = document.body;

// Cek apakah user sebelumnya menggunakan dark mode (disimpan di browser)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  if (themeToggle) themeToggle.checked = true;
}

// Event listener saat tombol switch diklik
if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark'); // Simpan pilihan user
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light'); // Simpan pilihan user
    }
  });
}

// ==========================================
// 2. LOGIKA MOBILE MENU (HAMBURGER)
// ==========================================
const navToggleBtn = document.getElementById('nav-toggle');
const navLinksContainer = document.getElementById('nav-links');

if (navToggleBtn && navLinksContainer) {
  // Buka/tutup menu
  navToggleBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });

  // Tutup menu otomatis jika salah satu menu ditekan
  navLinksContainer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
    });
  });
}

// ==========================================
// 3. SCROLL REVEAL ANIMATION (MUNCUL PERLAHAN)
// ==========================================
const reveals = document.querySelectorAll('.reveal');
const revealOptions = { 
  threshold: 0.15, 
  rootMargin: "0px 0px -50px 0px" 
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    
    // Tambahkan class 'visible' agar CSS menampilkannya
    entry.target.classList.add('visible');
    
    // Stop observasi agar animasi hanya jalan satu kali (tidak berulang-ulang)
    observer.unobserve(entry.target); 
  });
}, revealOptions);

if (reveals.length > 0) {
  reveals.forEach(reveal => revealOnScroll.observe(reveal));
}