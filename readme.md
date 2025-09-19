<p align="center">
  <img src="https://directus.io/assets/logotype.svg" width="180" alt="Directus Logo">
</p>

# 🎯 Basic Directus CMS Project

Một dự án mẫu **Headless CMS** sử dụng **Directus** làm backend và định hướng tích hợp **Next.js** cho frontend.  
Mục tiêu: tạo nền tảng quản lý nội dung cho website giáo dục (giống Udemy thu nhỏ) có khả năng mở rộng và dễ bảo trì.

---

## 🚀 Kiến trúc tổng quan

┌────────────┐ ┌─────────────┐
│ Next.js │ <--> │ Directus API│ <--> │ PostgreSQL │
└────────────┘ └─────────────┘


- **Directus**: Headless CMS, quản lý dữ liệu và cung cấp REST/GraphQL API.
- **PostgreSQL**: Database quan hệ mạnh mẽ, dễ mở rộng.
- **Next.js**: Frontend React, SSR/ISR cho SEO tốt và tốc độ cao.
- **Docker Compose**: Dễ dàng dựng môi trường phát triển & triển khai.

---

## 🛠️ Công nghệ

| Thành phần     | Phiên bản |
|----------------|----------|
| Directus       | latest   |
| PostgreSQL     | 15       |
| Next.js        | 14+ (dự kiến) |
| Docker Compose | 3.9      |

---

## 📂 Cấu trúc thư mục



project-root/
├─ cms/ # Docker compose cho Directus + Postgres
│ ├─ docker-compose.yml
│ └─ uploads/
└─ frontend/ # (sẽ phát triển bằng Next.js)


---

## 🧩 Các bước hiện tại

1. **Thiết lập Directus**
   - Tạo roles: `Administrator`, `Editor`
   - Thiết lập policies và phân quyền CRUD cho collections
   - Tạo collection `post` với các fields: `title`, `content`, `cover`, `author`
2. **Tạo dữ liệu mẫu**: Thêm một vài bài viết demo.
3. **Chuẩn bị API**: Kiểm tra REST/GraphQL của Directus.
4. **Frontend (Next.js)**: Kết nối API, hiển thị danh sách bài viết.

---

## ⚡ Chạy dự án

```bash
# Khởi động CMS
docker compose up -d
# Truy cập Admin
http://localhost:8055/admin


Mặc định:

DB User: directus

DB Password: directus

🗺️ Kế hoạch phát triển

 Thiết lập CMS với Directus

 Tạo collections và phân quyền cơ bản

 Xây dựng giao diện Next.js hiển thị dữ liệu từ Directus

 Tích hợp tính năng tìm kiếm và phân trang

 Triển khai production trên VPS / cloud (Docker)

👥 Nhóm phát triển

Founder / DevOps: Long Quách Thành

Frontend Lead: Long Quách Thành

Content Editors: Long Quách Thành

