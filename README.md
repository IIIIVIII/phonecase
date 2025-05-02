# 📱 Phonecase Inventory & Sales Management System

This is a full-stack web application for managing phone case inventory, sales, and generating sales reports. The application is built using:

- **Frontend**: React.js (with styled-components and framer-motion)
- **Backend**: Spring Boot (Java 21), JPA (Hibernate), MySQL
- **Database Access**: ORM via Spring Data JPA + Prepared Statements (for reporting)
- **Report Support**: Filterable by date range and category
- **Deployment**: Local testing (can be deployed to cloud for extra credit)

---

## 📁 Folder Structure

```
phonecase/
├── backend/         # Spring Boot backend (IntelliJ)
│   └── src/
│       ├── main/
│       │   ├── java/com/example/phonecase
│       │   └── resources/
│           └── application.properties
│           └── data.sql
├── frontend/        # React frontend (WebStorm)
│   └── src/
│       ├── components/
│       └── App.js
└── README.md
```

---

## ✅ Features Implemented

### Requirement 1: Data Entry & Updates
- Add, edit, delete products (CRUD via Spring JPA ORM)
- Frontend form dynamically populates category dropdown from DB

### Requirement 2: Sales Report
- Filter by start date, end date, and category
- Data is aggregated by product name: `SUM(quantity)`, `SUM(quantity × unit_price)`
- Uses **prepared statements** for secure querying

---

## 📊 Index Optimization Report (Stage 3)

| Index Name                       | Table         | Column         | Used In                        |
|----------------------------------|---------------|----------------|--------------------------------|
| `idx_products_category_id`       | `products`    | `category_id`  | `/api/products?categoryId=X`  |
| `idx_orders_order_date`          | `orders`      | `order_date`   | `/api/reports/sales` filtering |
| `idx_order_details_order_id`     | `order_details` | `order_id`    | join in report query           |
| `idx_order_details_product_id`   | `order_details` | `product_id`  | group by in report query       |

---

## 🔐 Transactions & Isolation (Discussion)

Although the app is single-user scoped, the database is designed to support multi-user transactions. For potential concurrent access:
- In the future, isolation level `REPEATABLE READ` could be used for order handling
- Currently no conflicting updates are expected in demo usage

---

## 🧠 Lessons Learned

- Handling Hibernate table recreation via `ddl-auto=update` to avoid wiping data
- Styling reports clearly with React + styled-components
- Using fallback UI when category API fails
- GitHub project structure matters for multi-part apps

---

## 🚀 Running the App

### Backend (Spring Boot):
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend (React):
```bash
cd frontend
npm install
npm start
```

---

## 🌐 Live URL (Optional)
> _Leave blank or update if deployed to GCP / AWS / etc._

---

## 🧾 License

MIT License. For educational use only.