# ChatrBox Messenger App 📨

A fully customizable React-based multi-group chat messenger simulator, ideal for scripted storytelling, YouTube content, and digital performance playback.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📦 Project Structure
```
ChatrBox/
├── public/
│   └── styles/
│       ├── global.css
│       └── themes.css
├── src/
│   ├── components/
│   ├── contexts/
│   └── App.jsx
├── index.html
├── main.jsx
├── package.json
└── vite.config.js
```

## ✨ Features
- Multi-group chat system with avatars
- Character roles: Human, AI, Admin, System
- Message types: Text, System, Action, Audio Transcription, Glitch
- Playback simulation with typing & delay
- Theme switching: Neon, iMessage, Discord, WhatsApp, ChatGPT
- Light/Dark mode toggle

## 🌐 Deployment Guide

### 1. **Deploy to Netlify**
1. Push your code to GitHub
2. Go to [https://netlify.com](https://netlify.com)
3. New Site > Import Git > Select Repo
4. Set build settings:
   - Build Command: `npm run build`
   - Publish directory: `dist`
5. Deploy site!

### 2. **Deploy to Vercel**
1. Push to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. New Project > Import > Select Vite preset
4. Done!

### 3. **Deploy via GitHub Pages (advanced)**
1. Add this to `vite.config.js`:
```js
base: '/your-repo-name/'
```
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```
4. Run:
```bash
npm run deploy
```

## 📄 License
MIT
*/
