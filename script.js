// 1. TOGGLE MENU BURGER UNTUK HP
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. MODAL POPUP UNTUK DETAIL PROYEK
const modal = document.getElementById('modalProyek');
const btnClose = document.getElementById('btnClose');
const detailButtons = document.querySelectorAll('.btn-card');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

// Data detail untuk masing-masing proyek
const projectDetails = [
    { 
        title: "Website Portofolio Pribadi", 
        desc: "Website interaktif yang dibangun menggunakan HTML, CSS, dan JavaScript untuk memamerkan profil serta daftar proyek latihan." 
    },
    { 
        title: "Aplikasi Pencarian Kos", 
        desc: "Platform direktori kos mahasiswa dengan fitur filter harga, lokasi strategis, serta informasi fasilitas lengkap." 
    },
    { 
        title: "Sistem Sensor Suhu", 
        desc: "Integrasi hardware mikrokontroler dan sensor DHT11 untuk memantau suhu ruangan secara real-time." 
    }
];

if (modal && btnClose) {
    detailButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (projectDetails[index]) {
                modalTitle.textContent = projectDetails[index].title;
                modalDesc.textContent = projectDetails[index].desc;
            }
            modal.style.display = 'flex';
        });
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
        // MENCEGAH FORM DI-REFRESH SAAT TOMBOL KIRIM DIKLIK
    const contactForm = document.querySelector('.contact-form-wrapper form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Menahan halaman agar tidak melompat/refresh
            alert('Terima kasih! Pesan kamu berhasil dikirim ✨');
            contactForm.reset(); // Mengosongkan form kembali setelah dikirim
    });
}
    });
}
