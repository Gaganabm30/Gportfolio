# MERN Portfolio - Gagana B M

A full-stack personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Public Pages**: Home, About, Skills, Projects, Achievements, Contact, Resume
- **Admin Dashboard**: Secure admin panel with JWT authentication to manage content
- **Responsive Design**: Mobile-first, modern UI with smooth animations
- **API Integration**: Full CRUD operations for dynamic content management

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Framer Motion (animations)
- React Icons
- Axios
- Pure CSS (no frameworks)

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT authentication
- bcryptjs

## Project Structure

```
Gportfolio/
├── backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── controllers/     # Route controllers
│   ├── config/          # Configuration files
│   ├── .env             # Environment variables
│   └── server.js        # Entry point
└── frontend/
    ├── src/
    │   ├── api/         # Axios instance
    │   ├── components/  # Reusable components
    │   ├── context/     # React context (Auth)
    │   ├── pages/       # Page components
    │   ├── App.jsx      # Main app with routes
    │   └── main.jsx     # Entry point
    └── public/          # Static assets
```

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create/Update `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the server:
```bash
node server.js
```

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Admin Setup

1. **Create Admin User**: Send a POST request to `/api/auth/register-admin` with:
```json
{
  "username": "admin",
  "password": "your_password"
}
```

2. **Login**: Visit `/admin/login` and use your credentials

3. **Manage Content**: Access the dashboard at `/admin/dashboard`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register-admin` - Register admin (use once)

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Achievements
- `GET /api/achievements` - Get all achievements
- `POST /api/achievements` - Create achievement
- `PUT /api/achievements/:id` - Update achievement
- `DELETE /api/achievements/:id` - Delete achievement

### Contact
- `POST /api/contact` - Send message
- `GET /api/contact` - Get all messages

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Backend (Render/Railway)
1. Push code to GitHub
2. Create new web service
3. Set build command: `npm install`
4. Set start command: `node server.js`
5. Add environment variables

### Database (MongoDB Atlas)
1. Create cluster at [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Add to backend `.env`

## Adding Profile Photo

Place your photo as `gagana.jpg` in the `frontend/public` folder.

## Customization

- **Colors**: Edit CSS variables in `frontend/src/index.css`
- **Content**: Use the admin dashboard or directly edit initial data
- **Styling**: Modify component CSS files

## License

MIT

## Author

**Gagana B M**
- GitHub: [@Gaganabm30](https://github.com/Gaganabm30)
- LinkedIn: [gaganabm](https://linkedin.com/in/gaganabm)
- Instagram: [@__.g_a_g_a_n_a.__](https://www.instagram.com/__.g_a_g_a_n_a.__)
