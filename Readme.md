```
# 🚗 Vehicle Rental System
# 🎯 Project Overview
A backend API for a vehicle rental management system that handles:

Vehicles - Manage vehicle inventory with availability tracking
Customers - Manage customer accounts and profiles
Bookings - Handle vehicle rentals, returns and cost calculation
Authentication - Secure role-based access control (Admin and Customer roles)
🛠️ Technology Stack
Node.js + TypeScript
Express.js (web framework)
PostgreSQL (database)
bcrypt (password hashing)
jsonwebtoken (JWT authentication)
## ⚙️ Installation
### 1️⃣ Clone

git clone https://github.com/your-username/vehicle-rental-system.git
cd vehicle-rental-system

2️⃣ Install dependencies
npm install

3️⃣ Create .env
PORT=5000
DATABASE_URL=mongodb+srv://...
JWT_SECRET=your_secret
JWT_EXPIRES_IN=1d
BCRYPT_SALT=10

4️⃣ Run server
Development Mode:
npm run dev

Production Mode:
npm run build
npm run dev
