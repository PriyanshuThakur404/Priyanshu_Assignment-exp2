# Experiment 2: Dynamic Product Filter

## Aim
To create a dynamic product filter that sorts and filters items based on dropdown selections using React state management, demonstrating responsive product displays with animated transitions.

## Objectives
- ✅ Implement filterable product data using arrays
- ✅ Create sortable dropdown UI for multiple sort options
- ✅ Add responsive product cards with CSS Grid layouts
- ✅ Animate layout transitions and interactive elements

## Key Features

### 1. **Product Data Management**
- Array of 12 sample products with multiple attributes
- Each product includes: id, name, category, price, and rating
- Dynamic filtering based on selected criteria

### 2. **Sorting Options**
- **Default**: Original product order
- **Price (Low to High)**: Sort by ascending price
- **Price (High to Low)**: Sort by descending price
- **Rating (High to Low)**: Sort by customer ratings
- **Name (A to Z)**: Alphabetical sorting

### 3. **Filtering Options**
- Filter by category (Electronics, Accessories)
- Combined with sorting for powerful product discovery
- Real-time product count display

### 4. **React State Management**
- Uses `useState` hook for dropdown selections
- Uses `useMemo` hook for efficient filtering and sorting
- Reusable ProductCard component
- Main ProductFilter component orchestrates state

### 5. **Responsive Design**
- **CSS Grid** layout that adapts to screen size
- Automatically adjusts columns (3 → 2 → 1) based on viewport
- Mobile-optimized controls
- Touch-friendly dropdowns

### 6. **Animations**
- **Fade-in effects** for header and controls
- **Scale animations** for product cards (staggered)
- **Hover effects** with elevation (translateY)
- **Smooth transitions** on all interactive elements
- **Transform animations** on image placeholders

## Technical Stack

| Aspect | Technology |
|--------|-----------|
| Frontend Framework | React 18 |
| State Management | React Hooks (useState, useMemo) |
| Styling | CSS3 with Grid & Flexbox |
| Transpilation | Babel (standalone) |
| Responsive | Mobile-first design |

## How It Works

### Data Flow
```
Product Array
    ↓
Filter by Category (if selected)
    ↓
Sort by selected option
    ↓
Display in CSS Grid
```

### Component Architecture
```
ProductFilter (Main)
├── Controls (Dropdowns & Filters)
└── ProductCard (Reusable)
    ├── Product Image
    ├── Product Info
    └── Price & Rating
```

## Code Structure

### `index.html`
- React and Babel CDN imports
- Root div for React mounting
- Babel script type for JSX compilation

### `script.js`
- **Product Data**: 12 sample products
- **ProductCard Component**: Individual product display
- **ProductFilter Component**: Main app with state logic
- **Filtering Logic**: Category and sort operations
- **Memoization**: Performance optimization with useMemo

### `style.css`
- **Global Styles**: Reset and base styling
- **Header**: Typography and animations
- **Controls**: Dropdown styling with transitions
- **Products Grid**: CSS Grid responsive layout
- **Product Cards**: Card design with hover effects
- **Animations**: Keyframes for smooth transitions
- **Media Queries**: Breakpoints at 768px and 480px

## Features Explained

### Array Manipulation
- `filter()`: Filter products by category
- `map()`: Display products and create dropdowns
- `sort()`: Sort by various criteria
- Spread operator `[...array]`: Create new array for immutability

### React State Management
```javascript
const [sortBy, setSortBy] = useState('default');     // Sort option
const [category, setCategory] = useState('all');     // Category filter

// Memoized computation for performance
const filteredProducts = useMemo(() => {
    // Filter and sort logic
}, [sortBy, category]);
```

### CSS Grid
```css
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}
```
- `auto-fill`: Automatically creates columns
- `minmax(280px, 1fr)`: Minimum 280px, flexible beyond
- Responsive without media queries (initially)

### Animations
```css
@keyframes slideDownFade {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
```

## Responsive Breakpoints

| Breakpoint | Changes |
|-----------|---------|
| **Desktop (>768px)** | 3+ columns, full layout |
| **Tablet (≤768px)** | 2 columns, stacked controls |
| **Mobile (≤480px)** | 1 column, optimized spacing |

## How to Use

1. **Open in Browser**: Double-click `index.html`
2. **Select Category**: Choose from "All Categories", "Electronics", or "Accessories"
3. **Select Sort Option**: Pick sorting preference
4. **View Results**: Products update with animation
5. **Product Count**: Shows number of matching products

## Sample Products
- Wireless Headphones ($99.99, 4.5★)
- USB-C Cable ($12.99, 4.2★)
- Phone Case ($24.99, 4.7★)
- Laptop Stand ($49.99, 4.4★)
- Keyboard ($79.99, 4.6★)
- Mouse Pad ($15.99, 4.3★)
- Monitor ($299.99, 4.8★)
- Screen Protector ($8.99, 4.1★)
- Webcam ($59.99, 4.5★)
- Charging Cable ($14.99, 4.4★)
- External SSD ($129.99, 4.9★)
- Phone Mount ($19.99, 4.2★)

## Learning Outcomes

After completing this experiment, you will understand:
1. ✅ React component composition and reusability
2. ✅ React Hooks (useState, useMemo) for state management
3. ✅ Array methods for filtering and sorting
4. ✅ CSS Grid for responsive layouts
5. ✅ CSS animations and transitions
6. ✅ Performance optimization with memoization
7. ✅ Mobile-responsive design patterns
8. ✅ Event handling in React

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE: ❌ Not supported (React 18 requirement)

## Performance Considerations
- **useMemo**: Prevents unnecessary re-computations of filtered products
- **CSS Grid**: Hardware-accelerated layout
- **Smooth animations**: Using transform instead of position changes
- **Optimized selectors**: Efficient CSS targeting

## Potential Enhancements
- Add search functionality
- Implement price range slider
- Add multi-select filtering
- Include product images with lazy loading
- Add to cart functionality
- Pagination for large product lists
- Local storage for filter preferences
