import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch all products on load
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Display all products initially
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.category && product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(result);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleAddProductSubmit = (event) => {
    event.preventDefault();
    console.log("New Product:", newProduct);
    setNewProduct({
      name: "",
      brand: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
    setShowAddProduct(false);
  };

  const handleProductClick = (product) => {
    axios
      .get(`http://localhost:8080/api/products/${product.id}`)
      .then((response) => {
        setSelectedProduct(response.data); // Fetch and display the selected product
      })
      .catch((error) => console.error("Error fetching product details:", error));
  };

  const handleCloseDescription = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className="navbar">
        <div className="nav-links">
          <button onClick={() => setShowAddProduct(false)}>Home</button>
          <button onClick={() => setShowAddProduct(true)}>Add Product</button>
          <select onChange={handleCategoryChange}>
            <option value="all">Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
        <div className="right-options">
          <button onClick={handleDarkModeToggle}>
            {darkMode ? "🌞" : "🌙"}
          </button>
          <button onClick={() => alert(`Cart items: ${cart.length}`)}>
            🛒 ({cart.length})
          </button>
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
      </div>

      {showAddProduct ? (
        <div className="add-product-form">
          <h2>Add New Product</h2>
          <form onSubmit={handleAddProductSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Brand"
              value={newProduct.brand}
              onChange={(e) =>
                setNewProduct({ ...newProduct, brand: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
            />
            <select
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="furniture">Furniture</option>
            </select>
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              required
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      ) : (
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
                <p>Price: ₹{product.price}</p>
                <p>Category: {product.category}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      )}

      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-image"
            />
            <h2>{selectedProduct.name}</h2>
            <p>
              <strong>Brand:</strong> {selectedProduct.brand}
            </p>
            <p>
              <strong>Price:</strong> ₹{selectedProduct.price}
            </p>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <button onClick={handleCloseDescription}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
