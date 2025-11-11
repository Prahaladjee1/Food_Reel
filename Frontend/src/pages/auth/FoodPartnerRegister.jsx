import React from 'react'
import '../../styles/theme.css'
import '../../styles/auth.css'

function FoodPartnerRegister() {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>Food Partner Register</h1>
          <p>Grow your business with us</p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="restaurant-name">Restaurant Name</label>
            <input
              type="text"
              id="restaurant-name"
              placeholder="Enter restaurant name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="owner-name">Owner Name</label>
            <input
              type="text"
              id="owner-name"
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a strong password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to Partner Terms and Privacy Policy
            </label>
          </div>

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already a partner? <a href="/partner-login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
