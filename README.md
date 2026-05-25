# 🏠 Roomify — AI Architectural Visualization SaaS

> Transform 2D floor plans into photorealistic 3D renders using AI — completely free to build and deploy.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Puter.js](https://img.shields.io/badge/Puter.js-FF6B35?style=for-the-badge)
![Claude AI](https://img.shields.io/badge/Claude_AI-191919?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
---

## 📌 Overview

**Roomify** is a full-stack AI-powered SaaS application that lets users upload 2D architectural floor plans and generate photorealistic 3D visualizations using state-of-the-art AI models (Claude, Gemini, and more). Built with React and TypeScript on top of [Puter.js](https://puter.com), it features permanent hosting, persistent metadata, a global community feed, and zero infrastructure cost.

---

## ✨ Features

- 🖼️ **2D → 3D Rendering** — Upload a floor plan and get a photorealistic 3D render powered by AI
- 🤖 **Multi-model AI** — Leverages Claude and Gemini models for high-quality generation
- ☁️ **Serverless Workers** — Lightweight, scalable background processing with no server management
- ⚡ **KV Storage** — High-performance key-value storage for persistent metadata
- 🌍 **Community Feed** — Browse and compare renders from users around the world
- 🔐 **Authentication** — Secure user login and session management via Puter.js
- 🆓 **Free to Deploy** — No cloud bills: hosting, storage, and compute run on Puter's free tier

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TypeScript |
| AI Models | Claude (Anthropic), Gemini (Google) |
| Backend / Infra | Puter.js (serverless workers, KV, hosting) |
| Auth | Puter.js Authentication |
| Image Hosting | Puter.js Permanent Hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A free [Puter](https://puter.com) account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/roomify.git
cd roomify

# Install dependencies
npm install

# Start the development server
npm run dev
```

> No `.env` setup required — authentication and storage are handled entirely through Puter.js in the browser.

---

## 📁 Project Structure

```
roomify/
├── src/
│   ├── components/       # Reusable UI components (Navbar, etc.)
│   ├── pages/            # Homepage, Upload, Project, Community Feed
│   ├── workers/          # Serverless worker logic for AI generation
│   ├── lib/              # Puter.js helpers, KV storage utilities
│   └── types/            # TypeScript interfaces and types
├── public/
└── README.md
```

---

## 🔄 How It Works

1. **Sign in** with your Puter account
2. **Upload** a 2D floor plan image
3. Roomify sends it to an **AI model** (Claude / Gemini) via a serverless worker
4. The generated 3D render is **hosted permanently** and metadata is saved to KV storage
5. Your project appears in your **dashboard** and the **global community feed**
6. Use the **compare view** to see the original floor plan alongside the 3D render

---
