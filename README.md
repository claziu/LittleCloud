# ☁️ LittleCloud — REST API Toko Baju Anak

REST API sederhana menggunakan **Express.js + MySQL** untuk manajemen produk toko baju anak, dilengkapi tampilan web yang interaktif.

> 📚 Tugas Mandiri — Pengembangan Back-end | Universitas Teknologi Yogyakarta
> NPM : 523411252
> NAMA : Zikriana Putri M

## 🌐 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/products` | Menampilkan semua produk |
| GET | `/api/products/:id` | Menampilkan produk berdasarkan ID |
| POST | `/api/products` | Menambah produk baru |
| PUT | `/api/products/:id` | Mengupdate data produk (Harga/Stok) |
| DELETE | `/api/products/:id` | Menghapus produk berdasarkan ID |
| GET | `/api/products/stats` | Statistik produk |


## 🗂️ Struktur Proyek

```
LittleCloud/
├── controller/
│   └── productController.js   # Logic CRUD
├── middleware/
│   └── productMiddleware.js   # Logger & validator
├── route/
│   └── productRoutes.js       # Definisi endpoint
├── public/
│   ├── index.html             # Halaman utama
│   ├── css/style.css          # Styling
│   └── js/app.js              # Frontend logic
├── db.js                      # Koneksi MySQL
├── server.js                  # Entry point
├── database.sql               # Schema + sample data
├── .env.example               # Template konfigurasi
├── .gitignore
└── package.json
```

Buka browser: **http://localhost:3000**

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Font**: Playfair Display + DM Sans (Google Fonts)
