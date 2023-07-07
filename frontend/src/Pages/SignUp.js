import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import socialDesktop from "../assets/Desktop-img.png";
import socialMobile from "../assets/social-mobile.PNG";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../src/config";
import Swal from "sweetalert2";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const signup = (event) => {
    event.preventDefault();

    setLoading(true);
    const requestData = { fullName: fullName, email, password };
    axios
      .post(`${API_BASE_URL}/signup`, requestData)
      .then((result) => {
        debugger;
        if (result.status === 201) {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "User successfully registered!",
          });
        }
        setFullName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Some error occurred please try again later!",
        });
      });
  };

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
          <div className="card shadow">
            {loading ? (
              <div className="col-md-12 mt-3 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="card-body px-4">
              <h5 className="fw-bold text-center">Sign Up</h5>
              <form onSubmit={(e) => signup(e)}>
                <input
                  type="text"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone"
                />

                <input
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  type="email"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Email"
                />

                <input
                  value={fullName}
                  onChange={(ev) => setFullName(ev.target.value)}
                  type="text"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="FullName"
                />

                <input
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  type="password"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Password"
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    style={{ marginRight: "150px" }}
                    className="form-check-label"
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
