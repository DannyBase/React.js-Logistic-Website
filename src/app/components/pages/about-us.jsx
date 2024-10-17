import FastImage from "../../../globals/elements/fastimg";
import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import SectionHome2Video from "../../sections/home/home2/section-home2-video";
import SectionHome3WhatWeDo from "../../sections/home/home3/section-home3-what-we-do";
import SectionHome3WhyChooseUs from "../../sections/home/home3/section-home3-why-choose-us";
import { publicUrlFor } from "../../../globals/constants";

function AboutUsPage() {
    return (
        <>
            {/* Our Mission */}
            <SectionHome3WhatWeDo />
            
            {/* Why Choose us */}
            <SectionHome3WhyChooseUs />

            {/* Our Services */}
            <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
                <div className="overlay-main bg-secondry opacity-09" />
                <div className="bg-changer">
                    <div className=" section-bg active" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg1.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg2.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg3.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg4.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg5.jpg")})` }} />
                    <div className="section-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg6.jpg")})` }} />
                </div>
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center text-white">
                        <h2 data-title="Services">Our Services </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-transport-4" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Cargo Transportation</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6  m-b30">
                                <div className="mt-icon-box-wraper  center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary  hover-shadow">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-truck" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Ground Shipping</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6   m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow ">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-airplane" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Air Freight</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6  m-b30">
                                <div className="mt-icon-box-wraper center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow ">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-ship-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Ocean Freight</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6    m-b30">
                                <div className="mt-icon-box-wraper center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-forklift-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Packaging &amp; Storage</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6   m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-transport-6" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15 site-text-primary">Road Freight</h4>
                                        <p className="text-white">Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Team */}
            <SectionHome1Team />

            {/* Our Testimonials */}
            <SectionHome1Testimonials/>

            {/*Video Section */}
            <SectionHome2Video />

            {/* OUR PLANS  */}
            <SectionHome1Plans />
        </>
    )
}
export default AboutUsPage;