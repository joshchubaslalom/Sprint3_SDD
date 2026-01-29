import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <h1>Home Store</h1>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products, categories..." 
            className="search-input"
            aria-label="Search products and categories"
          />
          <button className="search-button" aria-label="Search">Search</button>
        </div>
        <div className="header-actions">
          <button className="header-button" aria-label="My Account">My Account</button>
          <button className="header-button" aria-label="Shopping Cart">Cart</button>
        </div>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">All Departments</li>
          <li className="nav-item">Appliances</li>
          <li className="nav-item">Bath</li>
          <li className="nav-item">Building Materials</li>
          <li className="nav-item">Electrical</li>
          <li className="nav-item">Flooring</li>
          <li className="nav-item">Hardware</li>
          <li className="nav-item">Kitchen</li>
          <li className="nav-item">Lighting</li>
          <li className="nav-item">Paint</li>
          <li className="nav-item">Plumbing</li>
          <li className="nav-item">Tools</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
