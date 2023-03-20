import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
//Page Not Found ...404
export default function NotFound() {
  return (
    <div>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                  <NavLink to={'/'}>
                  <Button>Go Home</Button>
                  </NavLink>
            </div>
        </div>
    </div>
  )
}
