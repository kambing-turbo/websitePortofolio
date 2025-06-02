document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const setaBar = document.querySelector('#seta-ajce-svg .seta-bar');
    const textoBotao = document.getElementById('textoBotao');
    const circleRadius = 29; // Radius lingkaran SVG
    const circumference = 2 * Math.PI * circleRadius; // Keliling lingkaran

    setaBar.style.strokeDasharray = circumference; // Atur stroke-dasharray sesuai keliling

    function updateScrollButton() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total tinggi scrollable
        const scrolled = window.scrollY; // Posisi scroll saat ini

        // Jika tidak ada scrollbar (tinggi konten kurang dari tinggi viewport), sembunyikan tombol
        if (scrollHeight <= 0) {
            scrollButton.style.display = 'none';
            return;
        } else {
            scrollButton.style.display = 'flex'; // Pastikan tombol terlihat jika ada scrollbar
        }

        const scrollPercentage = scrolled / scrollHeight; // Persentase scroll dari 0 ke 1

        // Jika sudah lebih dari 1/2 halaman (0.5), ubah ke "scroll to top"
        if (scrollPercentage > 0.5) {
            scrollButton.classList.add('rotate'); // Putar panah
            textoBotao.textContent = 'Ir para o topo ALT + T'; // Ubah teks aksesibilitas

            // Hitung dashoffset untuk mengisi dari bawah ke atas (progres ke atas)
            const progress = 1 - scrollPercentage; // Progres dari 0 (paling bawah) ke 1 (paling atas)
            const dashoffset = circumference * progress;
            setaBar.style.strokeDashoffset = dashoffset;

        } else {
            scrollButton.classList.remove('rotate'); // Panah kembali menunjuk ke bawah
            textoBotao.textContent = 'Ir para o rodapé ALT + T'; // Ubah teks aksesibilitas

            // Hitung dashoffset untuk mengisi dari atas ke bawah (progres ke bawah)
            const dashoffset = circumference * (1 - scrollPercentage);
            setaBar.style.strokeDashoffset = dashoffset;
        }
    }

    // Panggil fungsi saat scroll dan saat halaman dimuat
    window.addEventListener('scroll', updateScrollButton);
    updateScrollButton(); // Panggil pertama kali untuk inisialisasi

    // Fungsi untuk mengklik tombol
    scrollButton.addEventListener('click', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercentage = scrolled / scrollHeight;

        if (scrollPercentage > 0.5) {
            // Jika lebih dari setengah halaman, scroll ke atas
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Jika kurang dari setengah halaman, scroll ke bawah
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    });

    // Event listener untuk aksesibilitas (accesskey)
    document.addEventListener('keydown', (event) => {
        if (event.altKey && event.key === 't') {
            scrollButton.click();
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollDownLink = document.querySelector('.scroll-down-link');
const aboutSection = document.getElementById('about');

scrollDownLink.addEventListener('click', function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

function scrollToFooter() {
    const footerSection = document.getElementById("getin-touch");
    footerSection.scrollIntoView({ behavior: "smooth" }); 
}

// document.addEventListener("DOMContentLoaded", function () {
//   new TypeIt(".section__text__p2", {
//     cursor: false,
//     speed : 100,
//     loop: true
//   })
//   .type(' Freelancer')
//   .pause(1000)
//   .delete(10)
//   .type(' Hardware Designer')
//   .pause(1000)
//   .delete(17)
//   .type(' Automation Engineer')
//   .pause(7500)
//   .go();
// });