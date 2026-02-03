import React from 'react'
import Header from './layout/Header'
function LoadingSpinner() {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 mt-5">
        <div className="progress w-25 mb-3" style={{ height: "6px" }}>
          <div
            className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
            style={{ width: "100%" }}
          />
        </div>
        <p>Loading foods...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
