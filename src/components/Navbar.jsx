// import brandImg from "../images/brand.png";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col logo"></div>
          <div className="col">
            <div className="btn-group profile-btn  px-3 float-end" role="group">
              <button
                type="button"
                className="btn btn-purple dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>ProfileName</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col nav-text ">UI/UX &gt; Refer & Earn</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
