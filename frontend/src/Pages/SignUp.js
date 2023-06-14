import React from "react";
import "./Login.css";
import socialDesktop from "../assets/Desktop-img.png";
import socialMobile from "../assets/social-mobile.PNG";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            className="socialDesktop"
            style={{ width: "100%", height: "600px" }}
            src={socialDesktop}
            alt="socialDesktop"
          />
          <img className="socialMobile" src={socialMobile} alt="socialMobile" />
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mt-2 card shadow">
            <div className="card-body px-4">
              <h5 className="fw-bold text-center">Sign Up</h5>
              <form>
                <input
                  type="text"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone"
                />

                <input
                  type="email"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Email"
                />

                <input
                  type="text"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="FullName"
                />

                <input
                  type="password"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Password"
                />
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    style={{ marginRight: "150px" }}
                    className="form-check-label"
                    for="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>

                <div className="mt-3 d-grid">
                  <button type="submit" className="custom-btn custom-btn-blue">
                    Sign Up
                  </button>
                </div>
                <div className="my-4">
                  <h5 className="text-muted or">OR</h5>
                </div>
                <div className="mt-3 mb-5 d-grid">
                  <button type="submit" className="custom-btn custom-btn-white">
                    <span className="text-muted fs-6">
                      Already have an account?
                    </span>
                    <Link
                      to="/login"
                      className="ms-1 text-info fw-ligh text-decoration-none"
                    >
                      Log In
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
