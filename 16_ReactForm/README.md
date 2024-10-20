# Belajar React Form dengan Regex Validasi

## 1. Penggunaan Regex untuk Validasi Input

- **Regex** digunakan untuk memastikan bahwa input pengguna sesuai dengan pola tertentu.
- Pola ini membantu memvalidasi berbagai jenis data seperti nama, price, dan freshens.
- Dengan memanfaatkan regex, aplikasi dapat mencegah pengguna mengirimkan data yang tidak valid.

## 2. Integrasi Validasi dalam Komponen React

- Validasi di React diimplementasikan melalui **event handler** seperti `onChange` dan `onSubmit`.
- Dengan menggunakan **state**, aplikasi dapat melacak status validasi setiap input.
- Proses ini memungkinkan form untuk memberikan umpan balik langsung kepada pengguna, baik saat mengetik maupun saat mengirim data.

## 3. Menampilkan Pesan Kesalahan kepada Pengguna

- **Pesan kesalahan** harus ditampilkan secara real-time agar pengguna dapat mengetahui apa yang perlu diperbaiki.
- React memungkinkan penyesuaian pesan dan status validasi melalui state yang diperbarui saat pengguna berinteraksi dengan form.
- Menyediakan umpan balik yang jelas dapat meningkatkan pengalaman pengguna dan membantu mereka mengisi form dengan benar.
