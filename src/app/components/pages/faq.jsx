import { useEffect } from "react";
import FastImage from "../../../globals/elements/fastimg";
import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import _data from "../../../globals/data/data.json";

function FAQPage() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Section */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12  m-b30">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2>FAQ</h2>
                                <div className="mt-separator-outer">
                                    <div className="mt-separator site-bg-primary" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* Accordian */}
                            <div className="accordion mt-accordion acc-bg-gray" id="accordionExample">
                                {/*one*/}
                                <div className="acod-head mt-panel">
                                    <h4 className="accordion-header acod-title" id="headingOne">
                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fa fa-long-arrow-right" />
                                            How do we work?
                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                        </a>
                                    </h4>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="acod-body">
                                            <div className="acod-content p-tb15">Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.</div>
                                        </div>
                                    </div>
                                </div>
                                {/*Two*/}
                                <div className="acod-head mt-panel">
                                    <h4 className="accordion-header acod-title" id="headingTwo">
                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-long-arrow-right" />
                                            What services do we offer?
                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                        </a>
                                    </h4>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="acod-body">
                                            <div className="acod-content p-tb15">Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.</div>
                                        </div>
                                    </div>
                                </div>
                                {/*Three*/}
                                <div className="acod-head mt-panel">
                                    <h4 className="accordion-header  acod-title" id="headingThree">
                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-long-arrow-right" />
                                            What kind of vehicles do we have?
                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                        </a>
                                    </h4>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="acod-body">
                                            <div className="acod-content p-tb15">Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.</div>
                                        </div>
                                    </div>
                                </div>
                                {/*Four*/}
                                <div className="acod-head mt-panel">
                                    <h4 className="accordion-header acod-title" id="headingFour">
                                        <a href="#" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><i className="fa fa-long-arrow-right" />
                                            How reliable are we?
                                            <span className="indicator"><i className="fa fa-plus" /></span>
                                        </a>
                                    </h4>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="acod-body">
                                            <div className="acod-content p-tb15">Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg 4 col-md-12 m-b30">
                            <div className="mt-box p-a30 need-help bg-gray">
                                <h2 className="m-t0">Need any help!</h2>
                                <p>Find answers to frequently asked questions about Bizipress, contacts and general customer account information </p>
                                <div className="mt-icon-box-wraper  p-a20 left bg-white m-b30">
                                    <div className="icon-sm">
                                        <span className="icon-cell site-text-primary"><i className="fa fa-envelope" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="mt-tilte m-b0">mail@Demo123.com</h5>
                                    </div>
                                </div>
                                <div className="mt-icon-box-wraper  p-a20 left bg-white m-b30">
                                    <div className="icon-sm">
                                        <span className="icon-cell site-text-primary"><i className="fa fa-phone" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="mt-tilte m-b0">(654) 321-7654</h5>
                                    </div>
                                </div>
                                <NavLink to={route.pages.contact.CONTACT1} className="site-button">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Client Logo */}
            <div className="section-full bg-gray">
                <div className="container">
                    {/* Carousel */}
                    <div className="section-content">
                        <div className="owl-carousel client-logo-carousel owl-btn-vertical-center">

                            {
                                clients.map((_item, index) => {
                                    return <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo mt-img-effect on-color">
                                                <NavLink to={route.pages.ABOUT}><FastImage src={_item} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQPage;