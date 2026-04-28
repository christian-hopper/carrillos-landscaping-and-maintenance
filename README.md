# 🌿 Master Landscaping Template

A reusable landscaping website template built with **React, Vite, TypeScript, Tailwind CSS, and Lucide React**.

This project is designed so you can launch a new landscaping website quickly by editing one central data file instead of changing content across multiple components.

---

## ✨ Features

- Reusable component-based structure
- Centralized business content in one file
- Easy per-client branding with reusable theme variables
- Mobile-first responsive design
- GitHub Pages deployment ready
- Built for fast cloning and reuse across multiple landscaping clients
- Designed for quick local service business launches

---

## 🛠️ Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

---

## 📂 Project Structure

src/

- components/
  - Navbar.tsx
  - Hero.tsx
  - Services.tsx
  - About.tsx
  - Gallery.tsx
  - Process.tsx
  - Testimonials.tsx
  - CTA.tsx
  - Footer.tsx
  - shared/
    - DynamicIcon.tsx
- data/
  - business.ts
- utils/
  - iconMap.ts
  - applyTheme.ts
- App.tsx
- main.tsx

---

## 🧠 How It Works

All business-specific content is stored in:

`src/data/business.ts`

This includes:

- business name
- short brand name
- logo initials
- phone number
- email
- address
- service area
- navigation links
- hero content
- services
- about copy
- gallery images
- process steps
- testimonials
- CTA copy
- footer content
- social links
- theme values

To reuse this template for a new landscaping company, you mainly update that one file.

---

## 🎨 Customizing for a New Client

### 1. Update business information

Edit `src/data/business.ts` and replace the existing content with the new client’s:

- business name
- short brand name
- phone number
- email
- address
- service area
- quote link
- social links
- service list
- testimonials
- gallery content
- process steps

This template is designed to support landscaping businesses such as:

- lawn care
- landscape design
- hardscaping
- irrigation
- sod installation
- seasonal cleanups
- tree trimming
- outdoor lighting

---

### 2. Update theme values

Inside `business.ts`, update the theme object to match the new client’s branding.

Typical values include:

- primary color
- primary dark color
- accent color
- background color
- text color
- muted text color
- border color
- dark section background

This makes it easy to swap branding without editing every component.

---

### 3. Update images

Replace placeholder or stock image URLs with:

- completed yard transformations
- lawn care photos
- hardscaping projects
- team or crew photos
- branded business assets
- before and after gallery images

---

### 4. Update deployment path

Edit `.env.production` and set:

`VITE_BASE_PATH=/your-repo-name/`

Example:

`VITE_BASE_PATH=/elite-scapes-landscaping/`

---

## 📦 Installation

Install dependencies:

`npm install`

Start the dev server:

`npm run dev`

---

## 🏗️ Build

Create a production build:

`npm run build`

---

## 🚀 Deploy to GitHub Pages

This project is configured for GitHub Pages deployment.

### Step 1

Set the repo base path in `.env.production`

Example:

`VITE_BASE_PATH=/master-landscaping-template/`

### Step 2

Run the deploy command:

`npm run deploy`

### Step 3

Your site will be live at:

`https://your-username.github.io/your-repo-name/`

---

## ⚡ Recommended Workflow

1. Copy or clone this template
2. Rename the repository
3. Update `src/data/business.ts`
4. Update `.env.production`
5. Replace images and favicon
6. Review branding and theme values
7. Deploy to GitHub Pages

---

## 📬 Quote / Contact Form

The current quote form is front-end only.

Right now it:

- captures form input in the UI
- can be wired to a real submission service

For real client use, connect it to a service such as:

- Formspree
- Netlify Forms
- EmailJS

---

## 📝 Notes

- This template is best for brochure-style landscaping and local service business sites
- All business content is intended to be managed from `src/data/business.ts`
- Always test mobile layout before deployment
- Replace stock content before launching a real client site
- Optimize images for performance when possible
- Keep branding, service copy, and contact info consistent before publishing

---

## 📈 Future Improvements

Potential upgrades:

- SEO meta tags per business
- real quote form backend
- analytics integration
- scheduling or estimate booking integration
- CMS support
- stronger TypeScript typing for `business.ts`
- reusable section toggles for optional layouts

---

Free to use for personal and commercial projects.

Free to use and modify for personal or commercial projects.

---

## 👨‍💻 Author

Christian Hopper
