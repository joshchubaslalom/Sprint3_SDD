import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Product Recalls</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Company Info</li>
            <li>Careers</li>
            <li>Suppliers</li>
            <li>Investor Relations</li>
            <li>Store Locations</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>DIY Projects</li>
            <li>Installation Guides</li>
            <li>Buying Guides</li>
            <li>Tool Rental</li>
            <li>Rebate Center</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <ul>
            <li>Email Sign Up</li>
            <li>Mobile App</li>
            <li>Gift Cards</li>
            <li>Credit Card</li>
            <li>Pro Xtra</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Home Store. All Rights Reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
