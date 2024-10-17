import { route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionHome3WhyChooseUs() {
    return (
        <div className="section-full bg-gray p-t80  p-b50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        {/* TITLE START*/}
                        <div className="section-head text-left">
                            <h2>Why Choose us</h2>
                            <div className="mt-separator-outer">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content sx-why-choose">
                            <div className="mt-box">
                                <div className="mt-info bg-white text-left p-a20 m-b30">
                                    <h4>Fast Worldwide delivery</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet odio id lectus tristique luctus. Morbi id sodales orcit.</p>
                                    <NavLink to={route.pages.ABOUT} className="site-button-link site-text-primary font-weight-600">Read More</NavLink>
                                </div>
                            </div>
                            <div className="mt-box m-b30">
                                <div className="mt-info bg-white text-left p-a20">
                                    <h4>Safety &amp; Compliance</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet odio id lectus tristique luctus. Morbi id sodales orcit.</p>
                                    <NavLink to={route.pages.ABOUT} className="site-button-link site-text-primary font-weight-600">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        {/* TITLE START*/}
                        <div className="section-head text-left">
                            <h2>Our Skills</h2>
                            <div className="mt-separator-outer">
                                <div className="mt-separator site-bg-primary" />
                            </div>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content  clearfix ">
                            <div className="p-b0">
                                <div className="mt-box">
                                    <h2 className="m-t0"><span className="site-text-primary"> 25 years</span> of experience in Logistics services</h2>
                                </div>
                                <div className="our-exp">
                                    <span className="progressText text-black"><b>Ground Transport</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                                    </div>
                                    <span className="progressText text-black"><b>Cargo</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '78%' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>78%</div>
                                    </div>
                                    <span className="progressText text-black"><b>Logistic Services</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                                    </div>
                                    <span className="progressText text-black"><b>Warehousing</b></span>
                                    <div className="progress m-b30 m-t10">
                                        <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
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

export default SectionHome3WhyChooseUs;
