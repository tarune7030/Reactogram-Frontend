import "./Login.css";
import socialDesktop from "../assets/Desktop-img.png";
import socialMobile from "../assets/social-mobile.PNG";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../config";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    setLoading(true);
    const requestData = { email, password };
    axios
      .post(`${API_BASE_URL}/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem("user", JSON.stringify(result.data.result.user));
          dispatch({ type: "LOGIN_SUCCESS", payload: result.data.result.user });
          setLoading(false);
          navigate("/myprofile");
        }
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
          <div className="mt-2 card shadow">
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
              <h5 className="fw-bold text-center">Log In</h5>
              <form onSubmit={(e) => login(e)}>
                <input
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  type="email"
                  className="p-2 mt-4 mb-2 form-control input-bg"
                  placeholder="Phone number, username, or email"
                />

                <input
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  type="password"
                  className="p-2 mb-2 form-control input-bg"
                  placeholder="Password"
                />

                <div className="mt-3 d-grid">
                  <button type="submit" className="custom-btn custom-btn-blue">
                    Log In
                  </button>
                </div>
                <div className="my-4">
                  <h5 className="text-muted or">OR</h5>
                </div>
                <div className="mt-3 mb-5 d-grid">
                  <button type="submit" className="custom-btn custom-btn-white">
                    <span className="text-muted fs-6">
                      Don't have an account?
                    </span>
                    <Link
                      to="/signup"
                      className="ms-1 text-info fw-ligh text-decoration-none"
                    >
                      Sign Up
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

export default Login;
