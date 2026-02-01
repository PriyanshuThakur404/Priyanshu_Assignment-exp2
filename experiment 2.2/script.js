const { useState, useMemo } = React;

// Product data
const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 99.99, rating: 4.5 },
    { id: 2, name: "USB-C Cable", category: "Accessories", price: 12.99, rating: 4.2 },
    { id: 3, name: "Phone Case", category: "Accessories", price: 24.99, rating: 4.7 },
    { id: 4, name: "Laptop Stand", category: "Electronics", price: 49.99, rating: 4.4 },
    { id: 5, name: "Keyboard", category: "Electronics", price: 79.99, rating: 4.6 },
    { id: 6, name: "Mouse Pad", category: "Accessories", price: 15.99, rating: 4.3 },
    { id: 7, name: "Monitor", category: "Electronics", price: 299.99, rating: 4.8 }
];

// Product Card Component
function ProductCard({ product }) {
    return (
        <div className="product-card">
            <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

// Main Filter Component
function ProductFilter() {
    const [category, setCategory] = useState('all');

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = products;

        // Filter by category
        if (category !== 'all') {
            result = result.filter(p => p.category === category);
        }

        return result;
    }, [category]);

    const categories = ['all', ...new Set(products.map(p => p.category))];

    return (
        <div className="container">
            <header className="header">
                <h1>Dynamic Product Filter</h1>
                <p className="subtitle">Sort and filter products seamlessly</p>
            </header>

            <div className="controls">
                <div className="control-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="select-dropdown"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>
                                {cat === 'all' ? 'All Categories' : cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="result-count">
                    Showing <strong>{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}
                </div>
            </div>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="no-results">
                    <p>No products found. Try adjusting your filters.</p>
                </div>
            )}
        </div>
    );
}

// Render the app
ReactDOM.render(<ProductFilter />, document.getElementById('root'));
