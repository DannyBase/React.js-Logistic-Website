import { NavLink } from "react-router-dom";
import { route } from "../../../../globals/constants";

function SectionHome1Plans() {
    return (
        <div className="section-full text-center sx-pricing-plan-area bg-gray p-t80 p-b50">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Our Plan">Our Plans</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="pricingtable-row">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="pricingtable-wrapper pricing-table-style-5 pricing-table-shadow">
                                    <div className="pricingtable-inner bg-gray">
                                        <div className="pricingtable-price">
                                            <span className="pricingtable-bx">$29</span>
                                            <span className="pricingtable-type">Month</span>
                                        </div>
                                        <div className="pricingtable-title">
                                            <h3>Basic</h3>
                                        </div>
                                        <ul className="pricingtable-features text-black bg-gray">
                                            <li>Per Mile</li>
                                            <li>6000 kg load</li>
                                            <li>850 kg / pallet </li>
                                            <li>Warehousing </li>
                                            <li>Free Packaging </li>
                                            <li>24/7 support </li>
                                        </ul>
                                        <div className="pricingtable-footer">
                                            <NavLink to={route.pages.ABOUT} className="site-button text-uppercase">Order Now</NavLink>
                                        </div>
                                        <div className="overlay-main bg-white opacity-07" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="pricingtable-wrapper  pricing-table-style-5 pricing-table-shadow">
                                    <div className="pricingtable-inner bg-gray">
                                        <div className="pricingtable-price">
                                            <span className="pricingtable-bx">$49</span>
                                            <span className="pricingtable-type">Month</span>
                                        </div>
                                        <div className="pricingtable-title">
                                            <h3>Pro</h3>
                                        </div>
                                        <ul className="pricingtable-features text-black bg-gray">
                                            <li>Per Mile</li>
                                            <li>6000 kg load</li>
                                            <li>850 kg / pallet </li>
                                            <li>Warehousing </li>
                                            <li>Free Packaging </li>
                                            <li>24/7 support </li>
                                        </ul>
                                        <div className="pricingtable-footer">
                                            <NavLink to={route.pages.ABOUT} className="site-button text-uppercase">Order Now</NavLink>
                                        </div>
                                        <div className="overlay-main bg-white opacity-07" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="pricingtable-wrapper  pricing-table-style-5 pricing-table-shadow">
                                    <div className="pricingtable-inner bg-gray">
                                        <div className="pricingtable-price">
                                            <span className="pricingtable-bx">$99</span>
                                            <span className="pricingtable-type">Month</span>
                                        </div>
                                        <div className="pricingtable-title">
                                            <h3>Premium</h3>
                                        </div>
                                        <ul className="pricingtable-features text-black bg-gray">
                                            <li>Per Mile</li>
                                            <li>6000 kg load</li>
                                            <li>850 kg / pallet </li>
                                            <li>Warehousing </li>
                                            <li>Free Packaging </li>
                                            <li>24/7 support </li>
                                        </ul>
                                        <div className="pricingtable-footer">
                                            <NavLink to={route.pages.ABOUT} className="site-button text-uppercase">Order Now</NavLink>
                                        </div>
                                        <div className="overlay-main bg-white opacity-07" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1Plans;
