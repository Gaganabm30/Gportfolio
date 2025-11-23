# Quick Start Guide

## First Time Setup

### 1. Start Backend
```bash
cd backend
node server.js
```

### 2. Start Frontend (in new terminal)
```bash
cd frontend
npm run dev
```

### 3. Access Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

### 4. Create Admin (First time only)

Use a tool like Postman or curl:
```bash
curl -X POST http://localhost:5000/api/auth/register-admin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

### 5. Login to Admin Panel
1. Go to http://localhost:5173/admin/login
2. Login with your credentials
3. Start adding projects, skills, achievements!

## Important Files to Add

1. **Profile Photo**: `frontend/public/gagana.jpg`
2. **Resume**: `frontend/public/resume.pdf`

## Environment Setup

Update `backend/.env` with your MongoDB connection:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=your_secret_key_here
PORT=5000
```

## Common Issues

**Backend won't start**: 
- Check if MongoDB URI is correct
- Ensure MongoDB Atlas IP is whitelisted

**Frontend errors**:
- Run `npm install` in frontend folder
- Clear node_modules and reinstall if needed

**Can't see data**:
- Make sure backend is running
- Check API endpoint in browser: http://localhost:5000/api/projects
