# RENTINO — Premium Animated Vehicle Rental Platform

> **Next-Generation Luxury Vehicle Rental Experience built with HTML5, CSS3, and Vanilla JavaScript.**

![RENTINO Banner](https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80)

---

## 🏎️ Overview

**RENTINO** is a showroom-grade vehicle rental web application designed with a high-octane **Luxury Yellow (`#F5B716`) + Deep Carbon Black (`#050608`) + Metallic Charcoal** aesthetic. It provides a full-page cinematic experience featuring scroll reveals, micro-interactions, custom magnetic cursor effects, dynamic filtering, interactive rental calculations, comparison matrix, and local storage booking management.

---

## ✨ Key Features

1. **Brand Identity & Automotive Logo**
   - Custom SVG emblem with metallic golden-yellow gradients and animated entrance.
   - Sticky glassmorphic navigation bar with scroll state transforms.

2. **Cinematic Hero Stage**
   - High-impact visual stage with glowing ambient lighting, speed lines, and 3D floating telemetry badges.
   - Integrated quick rental search dashboard (Pickup location, Dates, Category, Driver option).

3. **Curated Automotive Collections**
   - **Dedicated Showcases**: BMW Collection, Mercedes-Benz Collection, Audi Collection, Porsche, Tesla, Range Rover, Toyota, and Jeep.
   - **RENTINO MODIFIED Division**: Aggressive section featuring widebody performance beasts, 1000HP JDM GT-Rs, and custom 6x6 builds.

4. **Dynamic Marketplace & Live Filters**
   - Real-time debounced search bar.
   - Multi-parameter filtering: Brand, Vehicle Category, Price Tiers, Transmission, and Fuel types.
   - Availability status indicators: 🟢 Available, 🟠 Limited, 🔴 Rented.

5. **Interactive Rental & Chauffeur Calculator**
   - Flexible duration selectors (1 Day, 2 Days, 3 Days, 7 Days [10% Off], 14 Days [18% Off]).
   - Chauffeur vs. Self-Drive mode toggle with instant live receipt breakdown (Base rate, Duration discount, Chauffeur fee, Security deposit, Taxes, Grand total).

6. **Comparison Engine & Favorites**
   - Compare up to 3 vehicles side-by-side in an interactive technical matrix.
   - Save favorite dream vehicles with persistent `localStorage` synchronization.

7. **Interactive Booking Engine**
   - Multi-field reservation modal with date calculation.
   - Automated booking voucher generation with unique booking reference IDs (`#RENT-XXXXXX`).

8. **VIP Services & Plans**
   - Daily Drive, Weekend Escape, Business Executive, and VIP Supercar tiers.
   - Airport Tarmac meet-and-greet, Royal Wedding motorcades, and 24/7 Concierge.

---

## 🛠️ Tech Stack & Architecture

- **HTML5**: Semantic tags, Open Graph meta tags, SVG vectors, accessible ARIA attributes.
- **CSS3**: CSS Custom properties, Glassmorphism (`backdrop-filter`), CSS Grid & Flexbox, GPU-accelerated keyframe animations.
- **JavaScript (ES6+)**: Modular architecture, Intersection Observer API, localStorage persistence, event delegation, custom cursor physics, and zero external framework dependencies.

---

## 🚀 Quick Start

1. Clone or open the project folder in any modern browser:
   ```bash
   # Open index.html directly or serve using any static server
   npx serve .
   ```
2. Experience the complete platform across Desktop, Tablet, and Mobile devices.

---

## 📂 Project Structure

```text
rentino/
│
├── index.html              # Core HTML structure & semantic layout
├── style.css               # Luxury theme styling, animations & responsive queries
├── script.js               # Vehicle dataset, filters, calculators & modal logic
│
├── assets/
│   ├── logo/               # Vector logo mark
│   ├── vehicles/           # Asset placeholders
│   ├── brands/             # Brand logos
│   ├── icons/              # UI automotive icons
│   └── backgrounds/        # Ambient patterns
│
└── README.md               # Documentation & platform overview
```

---

## 📄 License
© 2026 RENTINO Technologies Inc. All rights reserved.
