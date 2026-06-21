# 💼 CareerNest - Full Stack Job Portal

A full-featured job portal web application built using **MongoDB, Express, React, and Node.js (MERN Stack)**.  
It provides separate functionalities for **Job Seekers** and **Recruiters** with **Clerk Authentication** and **Sentry** integration for error tracking & performance monitoring.

---

## 📖 Overview

**CareerNest** allows:
- **Job Seekers** to browse job listings, save bookmarks, apply online, and manage their profiles (including uploading resumes).
- **Recruiters** to post new job openings, manage job listings, and handle applications from candidates.

It features **real-time application management**, **resume upload/download**, **job bookmarking/saving**, and **recruiter decisions (accept/reject)** for applications.

---

## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Authentication:** [Clerk](https://clerk.com/) (for Job Seekers)  
**Error Tracking & Monitoring:** [Sentry](https://sentry.io/)  
**File Storage:** Cloudinary / Local Storage (for resumes) *(update based on your implementation)*  
**Hosting:** Render (Backend), Vercel/Netlify (Frontend)
**Live:**(https://client-alpha-three-14.vercel.app)

---

## ✨ Features

### **Job Seeker**
- 🔍 Search & filter job openings
- 📄 View detailed job descriptions
- 📥 Apply online with uploaded resume
- 📂 Manage profile and resume
- 🔐 Secure login & signup via **Clerk**

### **Recruiter**
- 📝 Post new job openings
- 📊 Manage published job posts
- 📬 View received applications
- ✅ Accept / ❌ Reject applications
- 📄 View applicant resumes

### **System Features**
- 🛠 Error tracking & performance monitoring with **Sentry**
- 📊 MongoDB query monitoring & optimization
- 📱 Responsive UI for all devices

---

## 🚀 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
PORT=5000
#Backend .env
MONGO_URI=your_mongodb_connection_string
CLERK_API_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
SENTRY_DSN=your_sentry_dsn
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

#Fronend .env
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_SENTRY_DSN=your_sentry_dsn

# Run Application
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev

## 🌐 Live Demo

🔗 **Live Site:** [https://client-alpha-three-14.vercel.app](https://client-alpha-three-14.vercel.app)  
🔗 **API Server:** [https://server-three-bay.vercel.app](https://server-three-bay.vercel.app)



