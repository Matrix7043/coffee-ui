# ☕ Coffee Store

A modern, responsive coffee shop e-commerce application built with React, featuring a shopping cart system with real-time updates and smooth user experience.

## 🌟 Features

- **Product Catalog**: Browse a curated selection of coffee drinks
- **Shopping Cart**: Add, remove, and adjust quantities of items
- **Real-time Updates**: Cart count updates instantly in the navbar
- **Persistent State**: Cart state managed with React Context API
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Routing**: Multi-page navigation with React Router
- **Clean UI**: Coffee-themed color palette with smooth interactions

## 🛠️ Tech Stack

- **React 18** - UI library with hooks
- **React Router** - Client-side routing
- **Context API** - Global state management
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx       # Navigation with cart count
│   ├── CoffeeList.jsx   # Coffee product grid
│   ├── CoffeeCard.jsx   # Individual coffee item card
│   └── Cart.jsx         # Cart display and management
├── context/             # Global state management
│   └── CartContext.jsx  # Cart state and operations
├── pages/               # Page components
│   ├── Home.jsx         # Main store page
│   └── CartPage.jsx     # Cart checkout page
├── assets/              # Static assets
│   └── react.svg        # React logo
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles (Tailwind import)
```

## 🎨 Color Palette

The app uses a coffee-inspired color scheme:

- **Primary Brown**: `#3e2723` (Navbar background)
- **Coffee Brown**: `#6f4e37` (Buttons, accents)
- **Background**: `#f5f5f5` (Light gray)
- **White**: `#ffffff` (Cards, text)

## 🧩 Key Components

### CartContext

Global state management for the shopping cart:

```javascript
const { cart, addToCart, incrementItem, decrementItem, clearCart } = useCart();
```

**Available functions:**
- `addToCart(coffee)` - Add item to cart or increment if exists
- `incrementItem(id)` - Increase quantity by 1
- `decrementItem(id)` - Decrease quantity by 1 (removes if 0)
- `clearCart()` - Empty entire cart

### CoffeeCard

Individual product card with:
- Coffee name and description
- Price display
- "Add to Cart" button
- Hover effects

### Navbar

Top navigation featuring:
- Store branding
- Cart link with live item count
- Clear cart button (disabled when empty)
- Responsive layout

### Cart

Shopping cart display with:
- Empty state message
- Item list with quantities
- Increment/decrement controls
- Price calculations

## 🛒 Current Products

| Coffee | Description | Price |
|--------|-------------|-------|
| Espresso | Strong and bold coffee | Rs. 149 |
| Cappuccino | Rich and foamy coffee | Rs. 199 |
| Latte | Smooth and creamy coffee | Rs. 179 |

## 🔄 Cart Functionality

### Adding Items
1. Click "Add to Cart" on any coffee card
2. Item appears in cart with quantity 1
3. Subsequent clicks increment quantity

### Adjusting Quantities
- Use `+` button to increase quantity
- Use `-` button to decrease quantity
- Item automatically removes when quantity reaches 0

### Clearing Cart
- Click "Clear Cart" in navbar to empty entire cart
- Button is disabled when cart is empty

## 🎯 User Flow

```
Home Page (/) 
    ↓
Browse Coffee Selection
    ↓
Add Items to Cart
    ↓
View Cart Count in Navbar
    ↓
Navigate to Cart Page (/cart)
    ↓
Adjust Quantities
    ↓
Clear Cart (optional)
```

## 🔧 Customization

### Adding New Products

Edit `src/components/CoffeeList.jsx`:

```javascript
const coffees = [
  // ... existing coffees
  {
    id: 4,
    name: "Americano",
    description: "Bold and smooth coffee",
    price: 129,
  },
];
```

### Changing Colors

Update Tailwind classes in components:

```javascript
// Example: Change button color
className="bg-[#6f4e37]" // Replace with your color
```

### Adding Features

Common enhancements:
- Product images
- Search/filter functionality
- Checkout process
- Order history
- User authentication
- Price totals and tax calculations

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: Single column layout
- **Tablet**: 2 columns (md: breakpoint)
- **Desktop**: 3 columns grid

## 🐛 Known Issues

- Cart data is not persisted (resets on page refresh)
- No backend integration
- No payment processing
- Limited to 3 products

## 🚀 Future Enhancements

- [ ] LocalStorage persistence
- [ ] Product images
- [ ] Checkout flow
- [ ] Order summary with totals
- [ ] Product details modal
- [ ] User reviews and ratings
- [ ] Wishlist functionality
- [ ] Backend API integration
- [ ] Payment gateway
- [ ] Order tracking

## 📝 Usage Example

### Using the Cart Context

```javascript
import { useCart } from './context/CartContext';

function MyComponent() {
  const { cart, addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: 1,
      name: "Espresso",
      description: "Strong coffee",
      price: 149
    });
  };

  return (
    <div>
      <p>Cart items: {cart.length}</p>
      <button onClick={handleAdd}>Add Coffee</button>
    </div>
  );
}
```

## 🔒 Error Handling

The app includes basic error boundaries:
- Context usage validation (must be inside provider)
- Empty cart state handling
- Disabled buttons for invalid states

## 🎓 Learning Resources

This project demonstrates:
- React Hooks (useState, useContext, useReducer pattern)
- Context API for state management
- React Router for navigation
- Tailwind CSS utility classes
- Component composition
- Conditional rendering
- Event handling

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons and design inspired by modern e-commerce UIs

---

**Happy Coding! ☕**

*For questions or suggestions, please open an issue or submit a pull request.*
