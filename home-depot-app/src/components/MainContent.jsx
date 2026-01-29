import './MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Your Home Improvement Store</h2>
          <p>Find everything you need for your next project</p>
          <button className="cta-button" onClick={() => console.log('Shop Now clicked')}>Shop Now</button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="categories-section">
        <h2>Shop by Department</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">🔨</div>
            <h3>Tools</h3>
            <p>Power & hand tools for every job</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🎨</div>
            <h3>Paint</h3>
            <p>Colors and supplies for any surface</p>
          </div>
          <div className="category-card">
            <div className="category-icon">💡</div>
            <h3>Lighting</h3>
            <p>Indoor & outdoor lighting solutions</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🚿</div>
            <h3>Plumbing</h3>
            <p>Fixtures and pipe supplies</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🪟</div>
            <h3>Windows & Doors</h3>
            <p>Upgrade your home's entryways</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🌳</div>
            <h3>Garden</h3>
            <p>Everything for outdoor living</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-placeholder">Product Image</div>
            <h4>Product Name</h4>
            <p className="price">$99.99</p>
            <button className="add-to-cart" onClick={() => console.log('Added to cart: $99.99')}>Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-placeholder">Product Image</div>
            <h4>Product Name</h4>
            <p className="price">$149.99</p>
            <button className="add-to-cart" onClick={() => console.log('Added to cart: $149.99')}>Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-placeholder">Product Image</div>
            <h4>Product Name</h4>
            <p className="price">$79.99</p>
            <button className="add-to-cart" onClick={() => console.log('Added to cart: $79.99')}>Add to Cart</button>
          </div>
          <div className="product-card">
            <div className="product-placeholder">Product Image</div>
            <h4>Product Name</h4>
            <p className="price">$199.99</p>
            <button className="add-to-cart" onClick={() => console.log('Added to cart: $199.99')}>Add to Cart</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Free Delivery</h3>
            <p>On orders over $45</p>
          </div>
          <div className="service-card">
            <h3>Installation Services</h3>
            <p>Professional installation available</p>
          </div>
          <div className="service-card">
            <h3>Tool Rental</h3>
            <p>Rent tools for your project</p>
          </div>
          <div className="service-card">
            <h3>Design Services</h3>
            <p>Expert design consultation</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainContent
