document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var navbarToggler = document.querySelector(".navbar-toggler");

  // Fungsi untuk menambahkan efek saat scroll pada layar besar
  function handleScroll() {
    if (window.innerWidth >= 992 && window.scrollY > 0) {
      navbar.classList.add("navbar-glass");
    } else if (window.innerWidth >= 992 && window.scrollY === 0) {
      navbar.classList.remove("navbar-glass");
    }
  }

  // Event listener untuk scroll di layar besar
  window.addEventListener("scroll", handleScroll);

  // Event listener untuk klik ikon hamburger di layar kecil
  navbarToggler.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      navbar.classList.toggle("navbar-glass");
    }
  });

  // Menghapus kelas navbar-glass ketika ukuran layar diubah ke besar
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      navbar.classList.remove("navbar-glass");
    }
  });
});
