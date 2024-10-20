# Belajar Global State Management dengan Redux

## 1. Mengelola State Secara Global

- Dengan menggunakan **Redux**, state dapat dikelola secara global dan diakses dari berbagai komponen tanpa perlu prop drilling (mengirim data melalui props dari satu komponen ke komponen lainnya).
- Ini membuat aplikasi lebih terstruktur dan memudahkan pengelolaan state yang kompleks.

## 2. Memanfaatkan Redux Toolkit untuk Sederhana dan Efisien

- **Redux Toolkit** menyediakan cara yang lebih sederhana dan efisien dalam membuat store dan reducers. Dengan ini, konfigurasi Redux menjadi lebih mudah, dan kode lebih bersih dibandingkan dengan metode Redux klasik.

## 3. Integrasi dengan React dan Vite

- Dalam proyek React dengan **Vite**, Redux dihubungkan dengan komponen melalui **Provider** untuk menyediakan store ke seluruh aplikasi. Komponen menggunakan **useSelector** untuk membaca state dan **useDispatch** untuk mengirim aksi, memastikan state selalu sinkron di seluruh aplikasi.
