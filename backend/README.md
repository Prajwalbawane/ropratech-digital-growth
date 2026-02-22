# RoPratech Backend API

Production-ready Node.js + Express + MongoDB backend for the RoPratech digital agency website.

---

## 🚀 Quick Setup

```bash
cd backend
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cors helmet express-rate-limit multer
```

```bash
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

```bash
# Create uploads folder
mkdir uploads

# Seed admin + initial data
node seed.js

# Start server
node server.js
```

---

## 📁 Folder Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Login, me, change password
│   ├── serviceController.js  # CRUD services
│   ├── projectController.js  # CRUD portfolio
│   ├── reviewController.js   # Reviews + approval
│   ├── contactController.js  # Contact form messages
│   ├── statsController.js    # Dashboard counters
│   └── siteInfoController.js # Contact info management
├── middleware/
│   ├── auth.js               # JWT protect middleware
│   ├── errorHandler.js       # Global error handler
│   └── upload.js             # Multer file upload
├── models/
│   ├── Admin.js
│   ├── Service.js
│   ├── Project.js
│   ├── Review.js
│   ├── Contact.js
│   ├── Stats.js
│   └── SiteInfo.js
├── routes/
│   ├── authRoutes.js
│   ├── serviceRoutes.js
│   ├── projectRoutes.js
│   ├── reviewRoutes.js
│   ├── contactRoutes.js
│   ├── statsRoutes.js
│   └── siteInfoRoutes.js
├── uploads/                  # Uploaded files
├── .env.example
├── seed.js                   # Database seeder
├── server.js                 # Entry point
└── README.md
```

---

## 🔑 API Routes

### Auth
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| POST | `/api/auth/login` | Public | Admin login |
| GET | `/api/auth/me` | Private | Get current admin |
| PUT | `/api/auth/change-password` | Private | Change password |

### Services
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| GET | `/api/services` | Public | Get active services |
| GET | `/api/services/admin` | Private | Get all services |
| POST | `/api/services` | Private | Create service (multipart) |
| PUT | `/api/services/:id` | Private | Update service |
| DELETE | `/api/services/:id` | Private | Delete service |

### Projects (Portfolio)
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| GET | `/api/projects` | Public | Get active projects |
| GET | `/api/projects/admin` | Private | Get all projects |
| POST | `/api/projects` | Private | Create project (multipart) |
| PUT | `/api/projects/:id` | Private | Update project |
| DELETE | `/api/projects/:id` | Private | Delete project |

### Reviews
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| GET | `/api/reviews` | Public | Get approved reviews |
| GET | `/api/reviews/admin` | Private | Get all reviews |
| POST | `/api/reviews` | Public | Submit review |
| PUT | `/api/reviews/:id/approve` | Private | Approve review |
| DELETE | `/api/reviews/:id` | Private | Delete review |

### Contacts
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| POST | `/api/contacts` | Public | Submit contact form |
| GET | `/api/contacts` | Private | Get all messages |
| PUT | `/api/contacts/:id/read` | Private | Mark as read |
| DELETE | `/api/contacts/:id` | Private | Delete message |

### Stats
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| GET | `/api/stats` | Public | Get dashboard stats |
| PUT | `/api/stats` | Private | Update stats |

### Site Info
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| GET | `/api/site-info` | Public | Get contact info |
| PUT | `/api/site-info` | Private | Update contact info |

---

## 📋 Sample Requests & Responses

### Login
```json
// POST /api/auth/login
// Request:
{ "email": "admin@ropratech.com", "password": "Admin@123" }

// Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": { "id": "...", "name": "RoPratech Admin", "email": "admin@ropratech.com" }
}
```

### Create Service
```json
// POST /api/services (multipart/form-data, Authorization: Bearer <token>)
// Fields: title, description, icon, price
// File: image

// Response:
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "Business Website",
    "description": "Professional website for your business",
    "price": "₹9,999",
    "image": "/uploads/1234567890.jpg",
    "isActive": true,
    "order": 0
  }
}
```

### Submit Contact
```json
// POST /api/contacts
// Request:
{ "name": "Ramesh", "email": "ramesh@example.com", "mobile": "9876543210", "message": "I need a website" }

// Response:
{ "success": true, "message": "Message sent successfully! We'll get back to you shortly." }
```

### Submit Review
```json
// POST /api/reviews
// Request:
{ "clientName": "Sneha", "rating": 5, "message": "Great service!", "company": "Bright Academy" }

// Response:
{ "success": true, "message": "Review submitted. It will appear after admin approval." }
```

### Update Stats
```json
// PUT /api/stats (Authorization: Bearer <token>)
// Request:
{ "happyClients": 75, "projectsDelivered": 100, "yearsExperience": 4 }

// Response:
{ "success": true, "data": { "happyClients": 75, "projectsDelivered": 100, "yearsExperience": 4, "activeServices": 7 } }
```

### Update Site Info
```json
// PUT /api/site-info (Authorization: Bearer <token>)
// Request:
{
  "phone": "+91 98765 43210",
  "email": "contact@ropratech.com",
  "address": "Main Road, Gadchiroli",
  "socialLinks": { "instagram": "https://instagram.com/ropratech" }
}
```

---

## 🔒 Security Features

- **Helmet** — HTTP security headers
- **CORS** — Restricted to client origin
- **Rate Limiting** — 100 req/15min (API), 10 req/15min (login)
- **JWT Auth** — Token-based admin authentication
- **bcrypt** — Password hashing (12 salt rounds)
- **Multer** — File type + size validation (5MB max)
- **Input Validation** — Mongoose schema validation
- **Error Handling** — Global error middleware with dev stack traces

---

## 🧪 Postman Collection Structure

```
RoPratech API
├── Auth
│   ├── Login
│   ├── Get Me
│   └── Change Password
├── Services
│   ├── Get All (Public)
│   ├── Get All (Admin)
│   ├── Create
│   ├── Update
│   └── Delete
├── Projects
│   ├── Get All (Public)
│   ├── Get All (Admin)
│   ├── Create
│   ├── Update
│   └── Delete
├── Reviews
│   ├── Get Approved (Public)
│   ├── Get All (Admin)
│   ├── Submit (Public)
│   ├── Approve
│   └── Delete
├── Contacts
│   ├── Submit (Public)
│   ├── Get All (Admin)
│   ├── Mark Read
│   └── Delete
├── Stats
│   ├── Get Stats
│   └── Update Stats
└── Site Info
    ├── Get Info
    └── Update Info
```

Set a Postman environment variable `{{BASE_URL}}` = `http://localhost:5000` and `{{TOKEN}}` after login.
