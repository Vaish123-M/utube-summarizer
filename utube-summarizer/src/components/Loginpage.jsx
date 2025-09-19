


import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


const Loginpage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, emailOrPhone, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email/phone or password");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, emailOrPhone, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Sign-up failed. Email may already be in use or password is too weak.");
    }
  };

  // Google/Gmail sign-in (both use Google provider)
  // Google and Gmail sign-in (both use Google provider)
  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError("Google/Gmail sign-in failed");
    }
  };

  // LinkedIn sign-in (OAuth)
  const handleLinkedInSignIn = () => {
    // You need to set up LinkedIn OAuth and handle the callback in your backend
    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_LINKEDIN_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_liteprofile%20r_emailaddress", "_blank");
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-card-left">
          <h1 className="login-title">YouTube Summarizer</h1>
          <p className="login-desc">Paste any YouTube video link and get a summary in all available caption languages. Download as PDF, Word, or image. Your summaries are saved for easy access anytime!</p>
        </div>
        <div className="login-card-right">
          <h2 className="login-subtitle">Sign In to Your Account</h2>
          <form className="login-form" onSubmit={isSignUp ? handleSignUp : handleSignIn}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="login-input"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">{isSignUp ? "Sign Up" : "Sign In"}</button>
          </form>
          <div className="login-socials login-socials-logos">
            <span className="login-social-logo google" title="Sign in with Google" tabIndex={0} role="button" onClick={handleGoogleSignIn}></span>
            <span className="login-social-logo linkedin" title="Sign in with LinkedIn" tabIndex={0} role="button" onClick={handleLinkedInSignIn}></span>
            <span className="login-social-logo gmail" title="Sign in with Gmail" tabIndex={0} role="button" onClick={handleGoogleSignIn}></span>
          </div>
          <div className="login-signup">
            {isSignUp ? (
              <>
                <span>Already have an account?</span>
                <button className="login-signup-btn" onClick={() => setIsSignUp(false)}>Sign In</button>
              </>
            ) : (
              <>
                <span>Don't have an account?</span>
                <button className="login-signup-btn" onClick={() => setIsSignUp(true)}>Sign Up</button>
              </>
            )}
          </div>
          {error && <div className="login-error">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
