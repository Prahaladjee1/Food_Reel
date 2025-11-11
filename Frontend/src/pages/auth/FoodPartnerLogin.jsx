import React from 'react'
import '../../styles/theme.css'
import '../../styles/auth.css'

function FoodPartnerLogin() {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h1>Partner Login</h1>
          <p>Manage your restaurant</p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            New partner? <a href="/partner-register">Register here</a>
          </p>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            <a href="/forgot-password">Forgot password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
