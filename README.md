# React + Vite Template

React + Vite + TypeScript + Zustand + TailwindCSS + shadcn/ui starter template.

## ⚙️ Tech Stack & Versions

| Tech             | Version |
| ---------------- | ------- |
| React            | ^19.1.1 |
| TypeScript       | ~5.8.3  |
| Vite             | ^7.1.7  |
| Zustand          | ^5.0.8  |
| TailwindCSS      | ^3.4.17 |
| shadcn           | ^3.3.1  |
| React Router DOM | ^7.9.2  |

> Others: class-variance-authority, tailwind-merge, clsx, lucide-react, tailwindcss-animate, Radix Primitives (@radix-ui/react-\*) etc.

## 🧰 Prerequisites

- Node.js LTS (recommended)
- npm (or pnpm/yarn — replace commands as needed)

## 🚀 Getting Started

### 1. Download

#### Option A — Use as Template

1. Click **Use this template** on GitHub → create a new repository
2. Clone locally:

```bash
git clone https://github.com/<your-id>/<your-repo>.git
cd <your-repo>
```

#### Option B — Clone Directly

```bash
git clone https://github.com/minijae011030/react-template.git
cd react-template
```

### 2. Install Dependencies

```bash
npm i
```

### 3. Run Dev Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Build

```bash
npm run preview
```

### 6. Code Quality

```bash
npm run lint    # ESLint checks
npm run format  # Prettier + Tailwind class auto-sorting
```

## 🗂️ Project Structure

```plaintext
src/
├─ components/
│  └─ ui/                # shadcn components (button, card, dialog, etc.)
├─ pages/                # Route pages (Home, About, Playground)
├─ store/                # Zustand stores (e.g., theme, user)
├─ router.tsx            # react-router-dom router
├─ main.tsx              # Entry point
└─ index.css             # Tailwind entry
```

## ✨ Features

- **React Router**: Basic routing setup
- **ESLint + Prettier**: Includes prettier-plugin-tailwindcss for class sorting
- **Vite**: Fast dev server & bundler
- **Zustand** – Lightweight global state management with persistence (e.g. theme toggle)
- **TailwindCSS**: Extended colors/border radius, tailwindcss-animate plugin
- **shadcn/ui**: Radix-based, accessible UI components

## 📝 Notes

- To add shadcn components:

```bash
npx shadcn@latest add button card dialog input label textarea tabs separator sheet dropdown-menu
```

- To add routes: create a component in src/pages → register it in router.tsx
