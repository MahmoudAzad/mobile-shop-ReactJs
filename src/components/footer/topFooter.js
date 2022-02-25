import React, { Fragment } from 'react';

const TopFooter = () => {
    return (
        <Fragment >
            <hr className="mt-5" />
            <footer className="footer-container container">
                <ul>
                    <li>
                        <h6>
                            Contact Details
                        </h6>
                    </li>
                    <li>
                        <p>
                            <strong>Office:</strong>  27 boundaries Street<br />
                            AttachmentMap, Offices 202,<br />
                            2040 Street nextIndicator
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Tel:</strong> + 222 4444 8888
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Fax:</strong> + 222 4444 8888
                        </p>
                    </li>
                    <li>
                        <i class="fa fa-facebook mr-3 fa-lg footer-icon-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter mr-3 fa-lg footer-icon-twiteer" aria-hidden="true"></i>
                        <i class="fa fa-pinterest-p mr-3 fa-lg footer-icon-pinterest" aria-hidden="true"></i>
                        <i class="fa fa-instagram mr-3 fa-lg footer-icon-instagram" aria-hidden="true"></i>

                    </li>
                </ul>


                <ul>
                    <li>
                        <h6>
                            SITEMAP
                        </h6>
                    </li>
                    <li>
                        <p>
                            Shop
                        </p>
                    </li>
                    <li>
                        <p>
                            Profile
                        </p>
                    </li>
                    <li>
                        <p>
                            Helpful Info
                        </p>
                    </li>
                    <li>
                        <p>
                            Return Policy
                        </p>
                    </li>
                    <li>
                        <p>
                            Blog
                        </p>
                    </li>
                    <li>
                        <p>
                            Contact
                        </p>
                    </li>
                    <li>
                        <p>
                            Term of Service
                        </p>
                    </li>
                </ul>







                <ul>
                    <li>
                        <h6>
                            CATEGORIES
                        </h6>
                    </li>
                    <li>
                        <p>
                            Smartphones
                        </p>
                    </li>
                    <li>
                        <p>
                            Tablets
                        </p>
                    </li>
                    <li>
                        <p>
                            Accessories
                        </p>
                    </li>
                    <li>
                        <p>
                            Smartwatches
                        </p>
                    </li>
                    <li>
                        <p>
                            New Arrivals
                        </p>
                    </li>
                    <li>
                        <p>
                            Best Sellers
                        </p>
                    </li>
                </ul>





                <ul>
                    <li>
                        <h6>
                            SHOP
                        </h6>
                    </li>
                    <li>
                        <p>
                            My account

                        </p>
                    </li>
                    <li>
                        <p>
                            Cart
                        </p>
                    </li>
                    <li>
                        <p>
                            Order Tracking

                        </p>
                    </li>
                    <li>
                        <p>
                            Checkout

                        </p>
                    </li>
                    <li>
                        <p>
                            Compare

                        </p>
                    </li>
                    <li>
                        <p>
                            Wishlist

                        </p>
                    </li>
                </ul>





                <ul>
                    <li>
                        <h6>
                            NEWSLETTER
                        </h6>
                    </li>
                    <li>
                        <p>
                            Register now to get updates on <br />
                            promotions & coupons
                        </p>
                    </li>
                    <li>
                        <input placeholder="Email *" type="email" className="mr-1 w-2" />
                        <button type="submit" className="ml-3">Submit</button>
                    </li>

                </ul>
            </footer>
        </Fragment>

    );
}

export default TopFooter;