<p align="center">
  <img src="logo.png" alt="Mint Playbook Banner" width="100%">
</p>
# shopfeather

A clean, minimal React clothing shop with pixel icons, Tailwind CSS, and smooth animations. Open source for inspiration.

## Deployment

This site is configured for GitHub Pages.

1. **Configure Homepage**: Update the `"homepage"` field in `package.json` with your GitHub URL.
2. **Deploy**:
   ```bash
   npm run deploy
   ```

The site uses `HashRouter` to ensure client-side routing works perfectly on GitHub Pages without additional server configuration.

## Features

- **Minimalist Design**: A strict black & white aesthetic with subtle gray accents.
- **Pixel Art Icons**: Custom-styled icons for navigation, buttons, and indicators.
- **Smooth Transitions**: Fluid animations between pages and interactive elements.
- **Product Experience**: Clean grid layouts, hover image swaps, and detailed product views.
- **E-commerce Ready**: Functional cart system, checkout flow, and inventory management.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## Tech Stack

- **Framework**: React 18+ (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React (Pixel-styled)
- **Routing**: React Router

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:5173`.

## Structure

- `/src/components`: UI components like Navbar, Hero, and ProductCard.
- `/src/pages`: Main views including Home, ProductDetail, and Checkout.
- `/src/context`: Cart state management.
- `/src/data`: Product and collection data.
- `/src/layouts`: Main page layout wrapper.

Built for those who appreciate simplicity and clean code.
