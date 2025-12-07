🚗 Vehicle Rental System – Backend API

A complete backend solution for managing vehicle rentals, customer accounts, bookings, and role-based access control.

Project repo link:https://github.com/Rebakum/Vehicle-Rental-System-L2-B6-A2
live link:https://vehicle-rental-system-9jvwl6326-rebekas-projects-68bf097b.vercel.app/
credential: 
Admin: 
"email": "admin@example.com",
          "password": "securePassword123"
customar:
  "email": "mezba@example.com",
    "password": "securePassword123"

🔥 Features

✔ Vehicle management (create, update, availability status)
✔ Customer management
✔ Vehicle booking & return system
✔ Auto fare calculation based on rent days
✔ Role-based authentication (Admin & Customer)
✔ JWT-based secure login
✔ PostgreSQL relational data model

🛠️ Tech Stack
Area	Technology
Runtime	Node.js
Language	TypeScript
Framework	Express.js
Database	PostgreSQL
Authentication	JSON Web Token (JWT)
Security	bcrypt (password hashing)
⚙️ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/vehicle-rental-system.git
cd vehicle-rental-system

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File

Make sure to update your PostgreSQL URL.

PORT=5000
DATABASE_URL=postgresql://your_user:your_pass@localhost:5432/your_db
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
BCRYPT_SALT=10

4️⃣ Run Server
▶ Development Mode
npm run dev

🚀 Production Mode
npm run build
npm start

📁 Project Structure
src/
 ├── modules/
 │   ├── vehicles/
 │   ├── users/
 │   ├── bookings/
 ├── middleware/
 ├── utils/
 ├── config/

