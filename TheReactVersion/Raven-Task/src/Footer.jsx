import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div class="footer-content">
            <h1>
              <a href="">Contact Us</a>
            </h1>
            <p>
              <a href="">Email: info@example.com</a>
            </p>
            <p>Phone: +234 7064528951</p>
            <p>Address: 123 Shawn Street, UL</p>
          </div>
          <div class="footer-content">
            <h3>Follow Us</h3>
            <ul class="social-icons">
              <li>
                <a href="">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-bar">
            <hr></hr>
          <p>&copy; 2024 Sisyphus. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
