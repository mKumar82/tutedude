import profile from "../images/Vector.png";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-4 logo"></div>
          <div className="col">
            <div className="btn-group profile-btn  px-3 float-end" role="group">
              <button
                type="button"
                className="btn btn-link nav-ul d-none d-md-block disabled"
                style={{ color: "rgba(128, 0, 128, 0.25)" }}
              >
                My Assignment
              </button>
              <button
                type="button"
                className="btn btn-link nav-ul d-none d-md-block disabled"
                style={{ color: "rgba(128, 0, 128, 0.25)" }}
              >
                Chat with Mentor
              </button>

              <button
                type="button"
                className="btn btn-link nav-ul d-none d-md-block dropdown-toggle"
                style={{ color: "#800080" }}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={profile} alt="" />
                <span className="mx-1">ProfileName</span>
              </button>

              <button
                type="button"
                className="btn btn-purple dropdown-toggle d-md-none d-block"
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
