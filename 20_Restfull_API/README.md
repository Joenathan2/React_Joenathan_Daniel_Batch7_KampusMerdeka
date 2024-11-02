# Restfull API

## 1. Penggunaan Kondisi pada Form untuk Mode Create dan Edit

Pada aplikasi, form dapat diatur agar memiliki dua mode: `Create` dan `Edit`. Dengan menggunakan kondisi yang memeriksa apakah `editingProduct` bernilai `null` atau tidak, kita bisa mengubah judul dan label tombol. Ini membantu pengguna memahami apakah mereka sedang membuat produk baru atau mengedit produk yang sudah ada.

## 2. Menggunakan `handleEdit` untuk Mengisi Data ke Form

Fungsi `handleEdit` digunakan untuk menyiapkan form dalam mode edit. Saat tombol "Edit" diklik, produk yang dipilih akan diisi ke dalam state form (seperti `productName`, `productCategory`, dll.), sehingga field form akan terisi dengan data yang benar untuk diedit.

## 3. Penyimpanan Data ke MockAPI Menggunakan Axios

Aplikasi ini menggunakan `axios` untuk berinteraksi dengan API. Saat menyimpan, memperbarui, atau menghapus produk, kita melakukan request `POST`, `PUT`, atau `DELETE` ke MockAPI dan menampilkan pesan sukses ketika operasi berhasil. Hal ini memastikan bahwa perubahan data terjadi di server, bukan hanya di aplikasi lokal.
