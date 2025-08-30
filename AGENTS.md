# Project: Apple-like Multi-Page E-Commerce Website
**Stack:** React (Next.js or Vite), TailwindCSS, TypeScript, Framer Motion, Zustand (state management), Shadcn/UI, Lucide icons.  
**Goal:** Create a fully responsive, pixel-perfect, high-performance e-commerce website inspired by Apple’s design philosophy.  

---

## Pages & Features

### 1. Home Page
- **Hero Section** with full-width product showcase (large product images, minimal text).  
- **Animations:** Smooth fade-ins, parallax scrolling, and Framer Motion transitions.  
- **Sections:**  
  - Featured Products (cards with hover effects).  
  - Quick navigation to categories.  
  - Promotional banner with call-to-action.  

### 2. Products Page
- **Grid layout** of all products (responsive, 2–4 columns).  
- **Filters & Sorting:** Category, price range, newest, popularity.  
- **Search bar** with auto-suggest dropdown.  
- **Hover Effects:** Zoom-in + shadow when hovering over product cards.  

### 3. Product Details Page
- Large product gallery (image slider + zoom-on-hover).  
- Product name, description, price, stock status.  
- Add to Cart button with smooth animation.  
- Tabs: "Overview | Specs | Reviews".  
- Suggested products carousel.  

### 4. Cart & Checkout
- Cart drawer accessible from navbar (with product count badge).  
- Checkout page:
  - Billing info form.  
  - Payment options (PayPal, Visa, Apple Pay).  
  - Order summary card with animations.  
- Success screen after purchase (animated checkmark).  

### 5. Login / Register
- Authentication UI with **Google Sign-In button**.  
- Framer Motion transitions (forms slide in/out).  
- Register form: Name, Email, Password, Confirm Password.  

### 6. Dashboard (After Login)
- User profile (name, email, profile pic).  
- Order history (cards with order status).  
- Saved products (wishlist).  
- Editable account settings.  

### 7. Contact & Support
- Contact form (name, email, message).  
- FAQ section with collapsible accordions.  
- Live chat widget placeholder.  

---

## Global Features
- **Navbar:** Sticky, minimal, logo + nav links + cart icon.  
- **Footer:** Clean, with links (About, Support, Privacy).  
- **Dark Mode toggle.**  
- **SEO-ready** with meta tags, Open Graph, and JSON-LD.  
- **Animations:** All transitions smooth with Framer Motion (page transitions, fade, scale, parallax).  
- **Responsive:** Mobile-first, works perfectly on all devices.  

---

## Design Guidelines
- **Style:** Minimalist, premium, inspired by Apple.  
- **Color Palette:** White, Black, Gray, with subtle gradients.  
- **Typography:** Inter or SF Pro, clean and modern.  
- **Components:** Rounded corners (2xl), soft shadows, micro-interactions.  

---

## Technical Notes
- Use **React + Tailwind + TypeScript**.  
- Use **Framer Motion** for animations.  
- Use **Shadcn/UI** for modern UI components.  
- Use **Zustand** for cart and global state.  
- Optimize images with **Next.js Image component** (if Next.js is used).  
- Write **clean, reusable components** with clear folder structure:  
  - `/components` → UI elements  
  - `/pages` → Page routes  
  - `/lib` → Utils/helpers  
  - `/store` → State management  

---

## Deliverables
- Fully working, responsive React website.  
- Pixel-perfect design, tested on mobile & desktop.  
- Code should follow best practices, DRY, and scalable architecture.  
