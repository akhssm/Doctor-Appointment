# 🩺 Doctor Appointment Booking System

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application that simplifies the process of booking doctor appointments. The platform provides separate dashboards for **Patients**, **Doctors**, and **Administrators**, enabling efficient appointment management, secure authentication, and online payments through **Stripe**.

---

## 🚀 Live Demo

### 🌐 Patient Portal
https://doctor-appointment-frontend-qbpv.onrender.com/

### 👨‍⚕️ Doctor & Admin Portal
https://doctor-appointment-admin-imam.onrender.com

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)

### Payment Gateway
- Stripe

### Image Storage
- Cloudinary

### Deployment
- Render

---

# ✨ Key Features

## 👤 Patient

- Register and Login securely
- Browse doctors by specialty
- View doctor profiles
- Book appointments
- Select available date and time slot
- Pay securely using Stripe
- View appointment history
- Cancel appointments
- Update personal profile information

---

## 👨‍⚕️ Doctor

- Secure doctor login
- Dashboard with appointment statistics
- View upcoming appointments
- Manage appointment status
- Mark appointments as completed
- Cancel appointments
- Update profile information
- Set consultation fees
- Manage availability status

---

## 👨‍💼 Admin

- Secure admin login
- Dashboard with platform analytics
- Add new doctors
- Manage doctor profiles
- View all appointments
- Cancel appointments
- Monitor patients and doctors

---

# 🏠 Application Pages

## Home Page

- Browse available doctors
- Search doctors by specialty
- View top doctors
- About section
- Contact section
- Responsive design

---

## All Doctors Page

- Display all registered doctors
- Filter doctors by specialty
- Navigate to doctor profile

---

## Doctor Appointment Page

- Doctor details
- Qualification
- Experience
- Consultation fee
- Available time slots
- Appointment booking
- Stripe payment integration

---

## User Profile

- Update profile picture
- Edit personal information
- View appointment history
- Cancel appointments

---

## Admin Dashboard

- Total Doctors
- Total Patients
- Total Appointments
- Latest Bookings
- Add Doctor
- Doctor List
- Appointment Management

---

## Doctor Dashboard

- Earnings Overview
- Appointment Statistics
- Appointment Management
- Profile Management
- Availability Control

---

# 💳 Payment Integration

Supports secure online payments using:

- Stripe Checkout

---

# 📂 Folder Structure

```text
Doctor-Appointment/
│
├── frontend/        # Patient Frontend (React + Vite)
├── backend/         # Express Server & APIs
├── admin/           # Admin & Doctor Dashboard
├── .gitignore
├── README.md
└── .git
```

---

# ⚙️ Project Setup

## Clone Repository

```bash
git clone https://github.com/akhssm/Doctor-Appointment
```

```bash
cd Doctor-Appointment
```

---

## Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

### Admin

```bash
cd ../admin
npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password

JWT_SECRET_KEY=your_jwt_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

FRONTEND_URL=http://localhost:5173

ADMIN_URL=http://localhost:5174
```

---

## Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Admin (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---


# ▶️ Run the Application

## Start Backend

```bash
cd backend
npm run server
```

## Start Frontend

```bash
cd frontend
npm run dev
```

## Start Admin Panel

```bash
cd admin
npm run dev
```

---

# 📸 Screenshots

Add screenshots of the application here.

Example:

```
screenshots/
│── home.png
│── doctors.png
│── appointment.png
│── admin-dashboard.png
│── doctor-dashboard.png
```

---

# 🔒 Security Features

- JWT Authentication
- Password Encryption
- Protected Routes
- Role-Based Access Control
- Secure Stripe Payments
- Environment Variable Configuration

---

# 🚀 Future Enhancements

- Email Notifications
- Appointment Reminders
- Video Consultation
- Medical Records
- Doctor Reviews & Ratings
- Multi-language Support
- Dark Mode

---

# 👨‍💻 Author

**Akshay Kumar Reddy**

GitHub: https://github.com/akhssm

LinkedIn: https://www.linkedin.com/in/akshay-manda-b65757244/

---

# 🤝 Contributing

Contributions are welcome!

Feel free to fork this repository, create a new branch, and submit a Pull Request.

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the MIT License.