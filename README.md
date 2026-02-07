# 🍞 Loafy Bakery

A modern, responsive e-commerce website for a bakery business. Built with vanilla HTML, CSS, and JavaScript.

![Loafy Bakery](assets/LOGO.png)

## ✨ Features

- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, minimalistic design with smooth animations and transitions
- **Product Catalog** - Browse products by category (Bread, Cake, Dessert, Pastry)
- **Shopping Cart** - Add products to cart with local storage persistence
- **Product Details Modal** - View detailed product information in an elegant popup
- **Search Functionality** - Search products by name or description
- **Smooth Navigation** - Smooth scrolling and animated page transitions
- **Back to Top Button** - Quick navigation to the top of the page

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Flexbox, and Grid
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Google Fonts** - Inter & Playfair Display typography
- **Font Awesome** - Icon library

## 📁 Project Structure

```
loafy-bakery/
├── index.html             # Homepage (root)
├── README.md
├── assets/                # Images and media files
│   ├── LOGO.png
│   ├── bakery.mp4
│   └── [product images]
├── css/
│   ├── styles.css         # Main homepage styles
│   ├── products.css       # Products page styles
│   ├── cart.css           # Cart page styles
│   └── checkout.css       # Checkout page styles
├── html/
│   ├── products.html      # Products catalog
│   ├── cart.html          # Shopping cart
│   └── checkout.html      # Checkout page
└── js/
    ├── scripts.js         # Main JavaScript
    └── cart.js            # Cart functionality
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aj-tech-24/loafy.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd loafy-bakery
   ```

3. **Open in browser**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server like Live Server (VS Code extension)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **Visit the site**
   ```
   http://localhost:8000/html/index.html
   ```

## 📱 Pages

| Page | Description |
|------|-------------|
| **Home** | Landing page with hero section, product categories, about us, and contact form |
| **Products** | Full product catalog organized by category with search functionality |
| **Cart** | View and manage items in your shopping cart |
| **Checkout** | Complete your order with delivery details |

## 🎨 Design Features

- **Color Palette**
  - Primary: `#2c2c2c` (Dark gray)
  - Accent: `#c9a87c` (Warm gold)
  - Background: `#fafafa` (Off-white)
  - Surface: `#ffffff` (White)

- **Typography**
  - Headings: Playfair Display (Serif)
  - Body: Inter (Sans-serif)

- **Effects**
  - Glassmorphism header with backdrop blur
  - Smooth hover animations
  - Card lift effects
  - Modal fade-in animations

## 🛒 Cart Functionality

The shopping cart uses `localStorage` to persist data between sessions:

```javascript
// Adding item to cart
const cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ imgSrc, name, description, price });
localStorage.setItem('cart', JSON.stringify(cart));
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Arvin Joy Pangalo**
- GitHub: [@aj-tech-24](https://github.com/aj-tech-24)

## 🙏 Acknowledgments

- Product images from various sources
- Font Awesome for icons
- Google Fonts for typography

---

<p align="center">Made with ❤️ and 🍞</p>
