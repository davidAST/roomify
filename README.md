# 🏠 Roomify — AI Architectural Visualization SaaS

> Transform 2D floor plans into photorealistic 3D renders using AI — completely free to build and deploy.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Puter.js](https://img.shields.io/badge/Puter.js-FF6B35?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

## 📌 Overview

**Roomify** is a full-stack AI-powered SaaS application that lets users upload 2D architectural floor plans and generate photorealistic 3D visualizations using state-of-the-art AI models (Gemini for now). Built with React Router v7 and TypeScript on top of [Puter.js](https://puter.com), it features persistent metadata, a global community feed, and zero infrastructure cost.

🌐 **Live demo:** [roomify-woad.vercel.app](https://roomify-woad.vercel.app)

---

## ✨ Features

- 🖼️ **2D → 3D Rendering** — Upload a floor plan and get a photorealistic 3D render powered by AI
- 🤖 **AI Model** — Uses Gemini (Google) for high-quality generation
- ☁️ **Puter.js Backend** — Authentication, file storage, and persistent metadata via Puter.js
- 🌍 **Community Feed** — Browse and compare renders from users around the world
- 🔐 **Authentication** — Secure user login and session management via Puter.js
- 🔄 **Compare View** — Side-by-side slider to compare the original plan with the 3D render
- 🆓 **Free to Deploy** — No cloud bills: deploy to Vercel, storage handled by Puter.js

---

## 🧱 Tech Stack

| Layer           | Technology                                  |
| --------------- | ------------------------------------------- |
| Framework       | React Router v7 (SSR enabled)               |
| Frontend        | React 19 + TypeScript                       |
| Styling         | Tailwind CSS v4                             |
| Build Tool      | Vite                                        |
| AI Models       | Gemini (Google)                             |
| Backend / Infra | Puter.js (auth, file storage, KV metadata)  |
| Deployment      | Vercel                                      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A free [Puter](https://puter.com) account

### Installation

```bash
# Clone the repository
git clone https://github.com/davidAST/roomify.git
cd roomify

# Install dependencies
npm install

# Start the development server
npm run dev
```

> You need a `.env` file with a puter key for the application to work locally

### Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
roomify/
├── app/                  # React Router v7 app directory
│   ├── routes/           # File-based routes
│   └── root.tsx          # Root layout
├── components/           # Reusable UI components (Navbar, etc.)
├── lib/                  # Puter.js helpers and utilities
├── public/               # Static assets
├── Dockerfile
├── react-router.config.ts
├── vite.config.ts
└── README.md
```

---

## 🔄 How It Works

1. **Sign in** with your Puter account
2. **Upload** a 2D floor plan image
3. Roomify sends it to an **AI model** (Gemini) via Puter.js
4. The generated 3D render is **stored** and metadata is saved via Puter.js KV
5. Your project appears in your **dashboard** and the **global community feed**
6. Use the **compare view** to see the original floor plan alongside the 3D render

---

## 🐳 Docker

A `Dockerfile` is included if you prefer to self-host:

```bash
docker build -t roomify .
docker run -p 3000:3000 roomify
```

---

## 🎬 Demonstration Videos

https://github.com/user-attachments/assets/5931c2d6-6123-4427-8519-3dbe48d71c40

https://github.com/user-attachments/assets/5f1d19ba-d15b-47ea-8619-a27c4b08b444

---
