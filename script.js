document.addEventListener('DOMContentLoaded', () => {

    // 1. Ambil elemen-elemen dari HTML
    const modal = document.getElementById('modalProyek');
    const btnClose = document.getElementById('btnClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const detailButtons = document.querySelectorAll('.detail-button');

    // 2. Data isi pop-up untuk tiap tombol
    const dataProyek = {
        campus: {
            title: "Campus Portal",
            desc: "Website portal akademik sederhana dengan tampilan informasi dan navigasi yang rapi. Memudahkan mahasiswa melihat jadwal, informasi modul, dan berita kampus."
        },
        form: {
            title: "Student Form",
            desc: "Formulir data mahasiswa untuk latihan input dan pemrosesan data menggunakan PHP dan MySQL."
        },
        sorting: {
            title: "Sorting Program",
            desc: "Program latihan algoritma pengurutan data seperti Bubble Sort dan Quick Sort menggunakan bahasa pemrograman Java."
        }
    };

    // 3. Pasang aksi Klik pada setiap tombol LIHAT DETAIL
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const key = button.getAttribute('data-project');
            
            if (dataProyek[key]) {
                modalTitle.textContent = dataProyek[key].title;
                modalDesc.textContent = dataProyek[key].desc;
                modal.style.display = 'flex'; // MEMUNCULKAN POP-UP
            }
        });
    });

    // 4. Tombol Close (X)
    if (btnClose) {
        btnClose.addEventListener('click', () => {
            modal.style.display = 'none'; // MENUTUP POP-UP
        });
    }

    // 5. Klik di luar kotak modal untuk menutup
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

});
