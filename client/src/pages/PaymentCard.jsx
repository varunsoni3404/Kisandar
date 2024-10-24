import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PaymentCard() {
  return (
    <div className="container bg-light d-md-flex align-items-center py-5">
      {/* Card 1 */}
      <div className="card box1 shadow-sm p-4 mb-4 mb-md-0">
        <div className="fw-bold display-6 mb-4 text-primary">
          <span className="fas fa-rupee-sign me-2"></span>599.00
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="text-muted">Commission</span>
            <span className="text-primary fw-bold">₹1.99</span>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <span className="text-muted">Total</span>
            <span className="text-primary fw-bold">₹600.99</span>
          </div>
          <hr />
          <div className="d-flex flex-column mb-3">
            <span className="far fa-file-alt text-muted">
              <span className="ps-2">Invoice ID:</span>
            </span>
            <span className="ps-3 fw-bold text-primary">SN8478042099</span>
          </div>
          <div className="d-flex flex-column mb-5">
            <span className="far fa-calendar-alt text-muted">
              <span className="ps-2">Next payment:</span>
            </span>
            <span className="ps-3 text-primary">22 July, 2018</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <span className="text-muted">Customer Support:</span>
              <span className="text-primary">Online Chat 24/7</span>
            </div>
            <div className="btn btn-outline-primary rounded-circle">
              <span className="fas fa-comment-alt"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card box2 shadow-sm ms-md-4 p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <span className="h5 fw-bold">Payment Methods</span>
          <div className="btn btn-primary rounded-circle">
            <span className="fas fa-bars"></span>
          </div>
        </div>
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">Credit Card</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mobile Payment</a>
          </li>
          <li className="nav-item ms-auto">
            <a className="nav-link" href="#">+ More</a>
          </li>
        </ul>
        <div className="px-4 d-flex align-items-center mb-4">
          <div className="btn btn-success me-3 rounded-circle">
            <span className="fas fa-plus"></span>
          </div>
          <div className="btn-group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              <span>**** 5949</span>
            </label>
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              <span>**** 3894</span>
            </label>
          </div>
        </div>
        <form>
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex flex-column mb-3">
                <label className="text-muted">Credit Card</label>
                <div className="input-group">
                  <input type="text" className="form-control" value="5136 1845 5468 3894" readOnly />
                  <span className="input-group-text">
                    <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="MasterCard" style={{ width: '40px' }} />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="text-muted">Expiration Date</label>
              <div className="input-group">
                <input type="text" className="form-control" value="05/20" readOnly />
                <span className="input-group-text">
                  <span className="fas fa-calendar-alt"></span>
                </span>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="text-muted">Code CVV</label>
              <div className="input-group">
                <input type="password" className="form-control" value="123" readOnly />
                <span className="input-group-text">
                  <span className="fas fa-lock"></span>
                </span>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label className="text-muted">Cardholder Name</label>
              <div className="input-group">
                <input type="text" className="form-control text-uppercase" value="John Doe" readOnly />
                <span className="input-group-text">
                  <span className="far fa-user"></span>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-primary w-100">Pay ₹599.00</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentCard;
