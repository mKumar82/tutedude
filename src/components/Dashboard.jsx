import invite from "../images/invite.png";
import refer from "../images/refer.png";
import discount from "../images/discount.png";
import rupee from "../images/₹.png";
import wallet from "../images/wallet.png";
const Dashboard = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-md-6">
            <div className=" d-flex justify-content-center">
              <div className="card first-card">
                <div className="row mt-3 mx-auto">
                  <div className="col-md-4 col-6 d-flex flex-column justify-content-center align-items-center">
                    <h1>Referral Earning</h1>
                    <p> 2,500</p>
                  </div>
                  <div className="col-md-4 col-6 d-flex flex-column justify-content-center align-items-end">
                    <h1>Total Referrals</h1>
                    <p className="mx-5 px-3">7</p>
                  </div>
                  <div className="col-md-4 col-6 d-flex flex-column justify-content-center align-items-center">
                    <h1>Wallet Balance</h1>
                    <p>500</p>
                  </div>
                  <div className="col-6 col-md-12 d-flex flex-column justify-content-center align-items-center ">
                    <button type="button" className="withdraw-btn">
                      <h1>Withdraw Balance</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="container  section2 ">
              <h1>Your Referral Code</h1>
              <div
                className="d-flex justify-content-center align-items-center letter"
                // style={{ margin: "0 auto" }}
              >
                EDCH54
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 section3">
          <div className="row">
            <h1>How does it work ?</h1>

            <div className="row">
              <div className="col-lg-5">
                <div className="card mb-3 border-0" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-3  img-background  d-flex flex-column justify-content-center align-items-center ">
                      <img
                        src={invite}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-9">
                      <div className="card-body">
                        <h5 className="card-title">Invite your Friends</h5>
                        <p className="card-text">
                          Share the link tutedude.com with your friends
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card mb-3 border-0" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-3  img-background  d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={refer}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-9">
                      <div className="card-body">
                        <h5 className="card-title">
                          Friend purchases any course
                        </h5>
                        <p className="card-text">
                          Using you REFERRAL CODE in the payments page
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="card mb-3 border-0" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-3  img-background  d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={rupee}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-9">
                      <div className="card-body">
                        <h5 className="card-title">
                          You get ₹ 200 as referral money
                        </h5>
                        <p className="card-text">
                          Of total purchase the friend makes sharebale to your
                          wallet{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card mb-3 border-0" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-3  img-background  d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={discount}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-9">
                      <div className="card-body">
                        <h5 className="card-title">
                          Your Friend gets ₹ 200 Off
                        </h5>
                        <p className="card-text">
                          On his overall fee on successful purchase using your
                          referral code
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="card mb-3 border-0" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-3  img-background  d-flex flex-column justify-content-center align-items-center">
                      <img
                        src={wallet}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-9">
                      <div className="card-body">
                        <h5 className="card-title">
                          Transfer money from wallet
                        </h5>
                        <p className="card-text">
                          When the wallet balance reaches ₹200 or more, you can
                          withdraw it
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <h1 className="footer-text1 mx-4 mt-3">Friends Who Enrolled</h1>
          <h1 className="footer-text2 mx-4 mt-3">Terms & Conditions</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
