# ☁️ LittleCloud — REST API Toko Baju Anak

REST API sederhana menggunakan **Express.js + MySQL** untuk manajemen produk toko baju anak, dilengkapi tampilan web yang interaktif.

> 📚 Tugas Mandiri — Pengembangan Back-end | Universitas Teknologi Yogyakarta

## ✨ Fitur

- ✅ REST API CRUD lengkap (GET, POST, PUT, DELETE)
- 📊 Dashboard statistik produk real-time
- 🔍 Search & filter berdasarkan kategori
- 🎨 Ilustrasi baju SVG per kategori
- 🌙 Dark mode
- 📡 Endpoint sesuai spesifikasi tugas

## 🌐 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/products` | Menampilkan semua produk |
| GET | `/api/products/:id` | Menampilkan produk berdasarkan ID |
| POST | `/api/products` | Menambah produk baru |
| PUT | `/api/products/:id` | Mengupdate data produk (Harga/Stok) |
| DELETE | `/api/products/:id` | Menghapus produk berdasarkan ID |
| GET | `/api/products/stats` | Statistik produk |

### Query Parameters (GET /api/products)
- `?search=kaos` — cari berdasarkan nama produk
- `?category=Atasan` — filter berdasarkan kategori

### Contoh Request Body (POST/PUT)
```json
{
  "name": "Kaos Polos Anak",
  "price": 45000,
  "stock": 50,
  "category": "Atasan"
}
```

### Contoh Response
```json
{
  "success": true,
  "message": "Produk berhasil ditambahkan",
  "data": {
    "id": 1,
    "name": "Kaos Polos Anak",
    "price": 45000,
    "stock": 50,
    "category": "Atasan"
  }
}
```

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

## 🚀 Cara Menjalankan

### 1. Clone repo
```bash
git clone https://github.com/claziu/LittleCloud.git
cd LittleCloud
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup database
```bash
mysql -u root -p < database.sql
```

### 4. Buat file `.env`
```bash
cp .env.example .env
```
Edit `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_mysql_kamu
DB_NAME=littlecloud_db
PORT=3000
```

### 5. Jalankan server
```bash
npm run dev
```

Buka browser: **http://localhost:3000**

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Font**: Playfair Display + DM Sans (Google Fonts)
