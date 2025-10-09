# Business Analyst Dashboard (MERN Stack)

A **Fullstack MERN Admin Dashboard** designed for business analytics and performance tracking.
Built with **React.js, Node.js, Express, MongoDB**, and modern UI using **Material UI, Redux Toolkit, RTK Query**, and **Nivo Charts**.
Implements complete data modeling, theming, and deployment on Render.com.

---

## 🚀 Tech Stack

**Frontend:** React.js, HTML5, CSS3, JavaScript, Material UI, Redux Toolkit, RTK Query, Nivo Charts
**Backend:** Node.js, Express.js, MongoDB, Mongoose
**Deployment:** Render.com
**Ports:**

* Backend → [http://localhost:5001](http://localhost:5001)
* Frontend → [http://localhost:3000](http://localhost:3000)

---

## 💡 Key Features

* Responsive **Admin Dashboard** UI using Material UI
* **Light / Dark Mode** with Redux Toolkit
* **Dynamic Sidebar & Navbar** components
* **Data Visualization** with Nivo Charts and MUI Data Grid
* Integrated **RTK Query** for API calls
* **MongoDB Aggregation** for analytics and reports
* **ERD-based Data Modeling**
* **Mock Data Seeding** and RESTful APIs
* **Deployed on Render.com**

---

## 🗂️ Project Structure

### Backend (`/server`)

```
server/
│
├── controllers/        # API logic and handlers
├── data/               # Mock data / seed files
├── models/             # Mongoose schemas and models
├── routes/             # Express routes
│
├── .gitignore
├── index.js            # Entry point of backend
├── package.json
├── package-lock.json
```

### Frontend (`/client`)

```
client/
│
├── public/             # Static assets
├── src/                # React components, pages, redux setup
│
├── .gitignore
├── README.md
├── jsconfig.json
├── package.json
├── package-lock.json
```

---

## ⚙️ Local Setup

1. Install dependencies:

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

2. Create `.env` in `/server`:

```
PORT=5001
MONGO_URI=<your_mongodb_uri>
```

3. Run the application:

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm start
```

---

## 🧩 Available Pages

* Dashboard
* Products
* Customers
* Transactions
* Geography
* Overview
* Daily
* Monthly
* Breakdown
* Admin
* Performance

---

## 🌍 Deployment

* **Backend:** Render.com
* **Frontend:** Render / Vercel / Netlify
* Update frontend `.env` with production API base URL before deployment.
