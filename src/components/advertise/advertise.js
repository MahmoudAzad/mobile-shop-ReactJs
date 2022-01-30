import React from "react";

const Advertise = () =>{
    return (
        <div className="advertise-container container">

            <ul className="advertise-ul">
                <li>
                <i class="fa fa-rocket fa-3x advertise-icon" aria-hidden="true"></i>
                </li>
                <li>
                <h5>Free Delivery</h5>
                <p>For all orders over €20</p>
                </li>
            </ul>

            <ul className="advertise-ul">
                <li>
                <i class="fa fa-credit-card fa-3x advertise-icon" aria-hidden="true"></i>
                </li>
                <li>
                <h5>Secure Payment</h5>
                <p>100% secure payment</p>
                </li>
            </ul>

            <ul className="advertise-ul">
                <li>
                <i class="fa fa-headphones fa-3x advertise-icon" aria-hidden="true"></i>
                </li>
                <li>
                <h5>Telephone Support</h5>
                <p>7777 7708</p>
                </li>
            </ul>

            <ul className="advertise-ul">
                <li>
                <i class="fa fa-comment-o fa-3x mil advertise-icon" aria-hidden="true"></i>
                </li>
                <li>
                <h5>2 years</h5>
                <p>European warranty</p>
                </li>
            </ul>

        </div>
    )
}

export default Advertise ;