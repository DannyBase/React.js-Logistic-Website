import { useEffect } from "react";
import { loadScript, publicUrlFor, route } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import SectionSlider3 from "../../sections/home/home3/section-slider3";
import SectionHome3WhatWeDo from "../../sections/home/home3/section-home3-what-we-do";
import SectionHome3WhyChooseUs from "../../sections/home/home3/section-home3-why-choose-us";
import SectionHome2Video from "../../sections/home/home2/section-home2-video";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import SectionHome1Blogs from "../../sections/home/home1/section-home1-blogs";
import { NavLink } from "react-router-dom";
import _data from "../../../globals/data/data.json";

function Home1Page() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Slider */}
            <SectionSlider3 />

            {/* Our Mission */}
            <SectionHome3WhatWeDo />

            {/* Why Choose us */}
            <SectionHome3WhyChooseUs />

            {/*Video Section */}
            <SectionHome2Video />

            {/* Our Team */}
            <SectionHome1Team />

            {/* Our Testimonials */}
            <SectionHome1Testimonials/>

            

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
                                <div className="mt-icon-box-wraper center  p-a30 bgcall-block hover-shadow site-bg-white">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-transport-4" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Cargo Transportation</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper  center  p-a30 bgcall-block hover-shadow site-bg-white">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-truck" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Ground Shipping</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6  m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bgcall-block hover-shadow site-bg-white ">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-airplane" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Air Freight</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 m-b30">
                                <div className="mt-icon-box-wraper center  p-a30 bgcall-block hover-shadow site-bg-white">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-ship-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Ocean Freight</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6   m-b30">
                                <div className="mt-icon-box-wraper center  p-a30 bgcall-block hover-shadow site-bg-white">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-forklift-1" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Packaging &amp; Storage</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6  m-b30">
                                <div className="mt-icon-box-wraper center p-a30 bgcall-block hover-shadow site-bg-white">
                                    <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-primary m-b20">
                                        <span className="icon-cell  site-text-primary"><i className="flaticon-transport-6" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="mt-tilte  m-b15">Road Freight</h4>
                                        <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MY BLOG */}
            <SectionHome1Blogs />

            {/* Our Client Logo */}
            <div className="section-full bg-gray p-tb50">
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel home-client-logo owl-btn-vertical-center">

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
export default Home1Page;