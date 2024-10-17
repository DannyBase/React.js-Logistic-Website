import { NavLink, Router, useRouteLoaderData,useLocation} from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { useEffect, useState } from "react";

function SectionHeader3() {

    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        loadScript("js/sticky-header.js");
    })

    const handleToggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <header className={"site-header header-style-1 mobile-sider-drawer-menu "+(isActive? 'active' : '')}>
               <div className="top-bar top-bar-liner bg-secondry">
                <div className="container">
                    <div className="row">
                        <div className="mt-topbar-right">
                            <ul className="list-unstyled  tb-info-liner">
                                <li><i className="site-text-primary" />Your Trusted 24 Hours Service Provider!</li>
                            </ul>
                            <ul className="list-inline tb-social-liner">
                                <li><a href="https://www.facebook.com/" className="fa fa-facebook" /></li>
                                <li><a href="https://twitter.com/" className="fa fa-twitter" /></li>
                                <li><a href="https://in.linkedin.com/" className="fa fa-linkedin" /></li>
                                <li><a href="https://www.instagram.com/" className="fa fa-instagram" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search Link */}
            <div className="main-bar header-middle bg-white">
                <div className="container">
                    <div className="logo-header hide-skew-section">
                        <NavLink to={route.home.HOME1}>
                            <FastImage src="images/logo-1.png" width={216} height={37} alt="" />
                        </NavLink>
                    </div>
                    <div className="header-info">
                        <ul>
                            <li>
                                <div>
                                    <div className="icon-sm">
                                        <span className="icon-cell  site-text-primary"><i className="iconmoon-smartphone" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Phone Number</strong>
                                        <span>0234-8765-9110</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="icon-sm">
                                        <span className="icon-cell  site-text-primary"><i className="iconmoon-envelope" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Email Address</strong>
                                        <span>FastWayhelp@gamil.com</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sticky-header main-bar-wraper">
                <div className="main-bar header-botton nav-bg-primary">
                    <div className="container">
                        {/* NAV Toggle Button */}
                        <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed" onClick={handleToggleMenu}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first" />
                            <span className="icon-bar icon-bar-two" />
                            <span className="icon-bar icon-bar-three" />
                        </button>
                        <div className="logo-show-in-mobile">
                            <NavLink to={route.home.HOME1}>
                                <FastImage src="images/logo-1.png" width={216} height={37} alt="" />
                            </NavLink>
                        </div>
                        {/* MAIN Vav */}
                        <div className="header-nav navbar-collapse collapse ">
                            <ul className=" nav navbar-nav">
                                <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={route.home.HOME1}>Home</NavLink></li>
                                <li className={location.pathname === '/about-us' ? 'active' : ''}><NavLink to={route.pages.ABOUT}>About us</NavLink></li>
                                <li className={location.pathname === '/services' ? 'active' : ''}><NavLink to={route.services.SERVICES}>Services</NavLink></li>
                                <li className={location.pathname === '/team' ? 'active' : ''}><NavLink to={route.pages.team.TEAM}>Our Team</NavLink></li>
                                <li className={location.pathname === '/blog/grid' ? 'active' : ''}><NavLink to={route.blog.GRID}>Blog</NavLink></li>
                                <li className={location.pathname === '/products' ? 'active' : ''}><NavLink to={route.pages.PRODUCT}>Products</NavLink></li>
                                <li className={location.pathname === '/faq' ? 'active' : ''}><NavLink to={route.pages.FAQ}>FAQ</NavLink></li>
                                <li className={location.pathname === '/contact-us2' ? 'active' : ''}><NavLink to={route.pages.contact.CONTACT2}>Contact us </NavLink></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default SectionHeader3;