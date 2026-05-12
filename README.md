# 🚀 Innotix Solution — React + Tailwind CSS Website

## 📁 Folder Structure

```
innotix-react-tailwind/
│
├── public/
│   └── index.html              ← Main HTML file
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx      ← Sticky navbar with mobile menu
│   │   ├── Hero/
│   │   │   └── Hero.jsx        ← Hero section with animations
│   │   ├── Marquee/
│   │   │   └── Marquee.jsx     ← Scrolling ticker
│   │   ├── About/
│   │   │   └── About.jsx       ← About us section
│   │   ├── Services/
│   │   │   └── Services.jsx    ← 9 service cards
│   │   ├── WhyUs/
│   │   │   └── WhyUs.jsx       ← Why choose us + stats
│   │   ├── IoT/
│   │   │   └── IoT.jsx         ← Industrial IoT + live dashboard
│   │   ├── Training/
│   │   │   └── Training.jsx    ← Student training programs
│   │   ├── TechStack/
│   │   │   └── TechStack.jsx   ← Technology stack grid
│   │   ├── Portfolio/
│   │   │   └── Portfolio.jsx   ← Filterable project cards
│   │   ├── Testimonials/
│   │   │   └── Testimonials.jsx← Client reviews
│   │   ├── Industries/
│   │   │   └── Industries.jsx  ← Industries we serve
│   │   ├── CTA/
│   │   │   └── CTA.jsx         ← Call to action banner
│   │   ├── Contact/
│   │   │   └── Contact.jsx     ← Contact form
│   │   └── Footer/
│   │       └── Footer.jsx      ← Footer with links
│   │
│   ├── data/
│   │   └── siteData.js         ← ✏️  ALL your content lives here
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js  ← Scroll animation + counter hooks
│   │
│   ├── App.js                  ← Root component
│   ├── index.js                ← Entry point
│   └── index.css               ← Tailwind + custom CSS
│
├── tailwind.config.js          ← Tailwind config
├── postcss.config.js           ← PostCSS config
└── package.json                ← Dependencies
```

---

## ⚡ Setup on Mac (Step by Step)

### Step 1 — Install Node.js
Go to https://nodejs.org → Download "LTS" version → Install it

Check it works:
```
node -v
npm -v
```

### Step 2 — Open VS Code
Open VS Code → File → Open Folder → Select the `innotix-react-tailwind` folder

### Step 3 — Open Terminal in VS Code
Press `Ctrl + `` ` (backtick) OR go to Terminal → New Terminal

### Step 4 — Install Dependencies
```bash
npm install
```
Wait ~1 minute for packages to install.

### Step 5 — Start the App
```bash
npm start
```
Your website opens at → http://localhost:3000 🎉

---

## ✏️ How to Edit Content

All your text, names, services, and data are in ONE file:
```
src/data/siteData.js
```

Change company name, phone, email, services, testimonials — all in that one file.

---

## 🏗️ Build for Production
```bash
npm run build
```
This creates a `build/` folder — upload this to any hosting (Netlify, Vercel, etc.)

---

## 🌐 Deploy Free on Netlify
1. Run `npm run build`
2. Go to https://netlify.com → Sign up
3. Drag & drop the `build/` folder
4. Done — live website! 🚀
