import * as React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <div className="err-container text-center">
    <div className="err">
      <h1>404</h1>
      <h2>Sorry, page not found</h2>
    </div>

    <div className="err-body">
      <Link to="/" className="btn btn-raised btn-lg btn-default">
        Go Back to Home Page
      </Link>
    </div>
  </div>
);

export default () => (
  <div className="page-err">
    <Error404 />
  </div>
);
