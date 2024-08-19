import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import QuesLogoPP from "../../assets/LogoQues_Login.svg";
import TextField from "../shared/InputText";
import Button from "../shared/Button";
import { useAuth } from "../../context/auth-context";
import Spinner from "../shared/Spinner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const isSignup = location.pathname === "/signup";
  const { signup, login, loading, loginError } = useAuth();

  const handleLogin = () => {
    if (isSignup) {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords don't match");
        return;
      }
      setErrorMessage("");
      signup(username, password, fullName)
        .then((response) => {
          if (response) {
            if (response !== true) {
              setErrorMessage(response);
            }
          }
        })
        .catch((error) => {
          console.error("Signup failed ", error);
          setErrorMessage(loginError || "An error occurred during signup");
        });
    } else {
      setErrorMessage(""); // Clear any previous error messages
      login(username, password)
        .then((response) => {
          if (response) {
            if (response !== true) {
              setErrorMessage(response);
            }
          }
        })
        .catch((error) => {
          console.error("Login failed ", error);
          setErrorMessage(loginError || "An error occurred during login");
        });
    }
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="w-[40%] h-screen bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <img src={QuesLogoPP} alt="Ques.AI" />
        <div className="mt-4 text-4xl text-[#7E22CE] font-extralight tracking-widest text-center">
          {isSignup ? "Join" : "Welcome to"} <br />
          <b className="font-bold"> Ques.AI</b>
        </div>
      </div>
      {errorMessage && (
        <div className="mt-4 text-sm text-red-500">{errorMessage}</div>
      )}
      <div className="w-[70%] mt-3">
        {isSignup && (
          <TextField
            placeholder={"Full Name"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <TextField
          placeholder={"Email Address"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          placeholder={"Password"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <TextField
            placeholder={"Confirm Password"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        {!isSignup && (
          <div className="flex justify-between mt-6 text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={isChecked}
                onChange={handleCheckbox}
              />
              Remember me
            </label>
            <Link to="#" className="text-blue-500">
              Forgot password?
            </Link>
          </div>
        )}

        {isSignup && (
          <div className="flex items-center mt-6 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked}
              onChange={handleCheckbox}
            />
            <span>
              I agree to the{" "}
              <Link to="/terms" className="text-blue-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-500">
                Privacy Policy
              </Link>
            </span>
          </div>
        )}

        <Button className={"w-full mt-6"} onClick={handleLogin}>
          {loading ? <Spinner /> : isSignup ? "Sign Up" : "Login"}
        </Button>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <Link to={isSignup ? "/" : "/signup"} className="text-blue-500">
            {isSignup ? "Login" : "Create Account"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
