# Belajar Deploy dengan Vercel

## 1. **Setup dan Integrasi Project dengan Vercel**

- Vercel mendukung integrasi langsung dengan platform seperti GitHub, GitLab, dan Bitbucket.
- Setelah autentikasi, repository dapat dihubungkan agar setiap perubahan otomatis ter-deploy.
- Pastikan semua dependensi dan file konfigurasi sudah siap agar tidak terjadi error saat build.

## 2. **Konfigurasi dan Environment Variables**

- Vercel memungkinkan penambahan _Environment Variables_ untuk mengatur konfigurasi aplikasi tanpa menyimpan data sensitif dalam kode.
- Kita dapat menentukan environment seperti Production, Preview, atau Development.
- File seperti `vercel.json` bisa digunakan untuk konfigurasi lebih lanjut, seperti _redirects_ atau _headers_ khusus.

## 3. **Monitoring dan Optimasi Deployment**

- Setelah deploy, Vercel menyediakan fitur monitoring untuk memantau performa dan status deploy.
- Fitur rollback memungkinkan kita kembali ke versi sebelumnya jika terjadi masalah.
- Setiap kali ada update di branch yang terhubung, aplikasi akan otomatis ter-redeploy dengan versi terbaru.
