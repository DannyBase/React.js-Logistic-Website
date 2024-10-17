import { publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionHome2Video() {
    return (
        <div className="section-full  about-video p-t130 p-b80 overlay-wraper" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg7.jpg")})` }}>
            <div className="overlay-main bg-secondry  opacity-09" />
            <div className="container text-center ">
                <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                    <i className="icon fa fa-play" />
                    <span className="ripple" />
                </a>
                <div className="text-white help-section">
                    <h2 className="m-b30">Quality never goes out of style.</h2>
                    <h4 className="m-b30"><strong>We take pride in serving our customers safely. We are hear to help you out.</strong></h4>
                    <NavLink to={route.pages.contact.CONTACT1} className="site-button">Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SectionHome2Video;
