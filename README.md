# Bingo - English Learning Landing Page

Landing page modern dan interaktif untuk platform belajar bahasa Inggris **Bingo**, dirancang dengan tema visual energik dan fitur interaktif seperti kuis, navigasi multi-bahasa, serta modal autentikasi.https://jihan068.github.io/web_learning_language/

---

## Fitur Utama

* **Branding & Logo**: Icon globe dengan teks *bingo* yang simpel dan tebal.
* **Layout Responsif**: Tampilan rapi untuk desktop maupun perangkat seluler.
* **Elemen Visual Peta & Avatar**: Siluet peta dunia (`world-map.svg`) sebagai latar belakang kluster foto avatar tutor dengan balon sapaan interaktif.
* **Navigasi Multi-Bahasa**: Selektor bahasa interaktif (Bahasa Inggris & Indonesia) menggunakan icon bendera SVG.
* **Fitur Interaktif**: 
  * Kuis interaktif tes kosa kata akademik dengan umpan balik jawaban otomatis.
  * Smooth scrolling untuk navigasi internal halaman (Schedule, Quiz, dll).
  * Modal Sign In / Sign Up yang dinamis.
  * Notifikasi toast untuk memberikan umpan balik aksi pengguna.

---

## Navigasi Utama

* `Home`
* `Course`
* `Schedule`
* `Quiz`
* `Practice Hub`
* `Pengaturan Bahasa` (Dropdown switcher EN / ID)
* `Contact`
* `Sign In / Sign Up` (Tombol pembuka modal autentikasi)

---

## Struktur File Repository

```text
.
├── image/            # Folder penyimpanan aset gambar (avatar tutor, screenshot, dll)
├── index.html        # Halaman struktur utama landing page dan kuis
├── styles.css        # Tata letak CSS, tema warna, dan gaya komponen
├── script.js         # Logika interaktivitas (kuis, multi-bahasa, modal, & navigasi)
├── world-map.svg     # Vektor peta dunia untuk latar belakang avatar
└── README.md         # Dokumentasi proyek
