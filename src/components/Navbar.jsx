const Navbar = () => {
  return (
    <div className="section-two">
      <div className="navbar">
        <div className="container">
          <div className="navbar-box">
            <div className="logo">
              <h1>Ngoding.</h1>
            </div>
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <i className="ri-menu-3-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
