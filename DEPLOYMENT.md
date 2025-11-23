# Deployment Guide

## Frontend Deployment (Vercel)

### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Environment Variables (if needed):
- `VITE_API_URL`: Your backend URL (e.g., https://your-backend.onrender.com)

---

## Backend Deployment (Render)

### Steps:
1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +"  → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: portfolio-backend
   - **Root Directory**: `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
6. Add Environment Variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Any secure random string
   - `PORT`: 5000
7. Click "Create Web Service"

---

## Database Setup (MongoDB Atlas)

### Steps:
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a new cluster (free tier)
4. Click "Connect"
5. Add your current IP address (or 0.0.0.0/0 for all IPs)
6. Create database user with username and password
7. Get connection string
8. Replace `<password>` with your database password
9. Add to backend `.env` as `MONGO_URI`

Example:
```
mongodb+srv://admin:yourpassword@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## Alternative Deployment Options

### Backend
- **Railway**: Similar to Render, auto-deploys from GitHub
- **Heroku**: Classic PaaS (paid plans)
- **DigitalOcean App Platform**: Simple deployment

### Frontend
- **Netlify**: Alternative to Vercel
- **GitHub Pages**: For static sites (requires changes)
- **Cloudflare Pages**: Fast CDN deployment

---

## Post-Deployment Checklist

- [ ] Backend responds at your domain
- [ ] Frontend loads correctly
- [ ] Can log into admin panel
- [ ] CRUD operations work
- [ ] Contact form sends messages
- [ ] All images load properly
- [ ] Mobile responsive design works
- [ ] Social links work
- [ ] Resume downloads

---

## Updating After Deployment

### Frontend:
Push to GitHub → Vercel auto-deploys

### Backend:
Push to GitHub → Render auto-deploys

### Manual Updates:
Use the admin dashboard to update:
- Projects
- Skills
- Achievements
