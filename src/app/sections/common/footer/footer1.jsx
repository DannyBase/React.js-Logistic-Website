import { route, publicUrlFor } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionFooter1(props) {
    return (
        <>
            <footer className={"site-footer " + props.theme}>
                {/* Footer Top Part */}
                <div className="footer-top overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container">
                        <div className="row">
                            {/* About */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_about">
                                    <h4 className="widget-title">About Company</h4>
                                    <div className="logo-footer clearfix p-b15">
                                        <NavLink to={route.home.HOME1}><FastImage src="images/footer-logo.png" width={171} height={49} alt="" /></NavLink>
                                    </div>
                                    <p>Lorem ipsum this is dummy text dolor sit amet check this text, consecte tura are dipiscing elit, sed do eiusmod.</p>
                                    <ul>
                                        <li> <i className="fa fa-phone site-text-primary" /> <b className="p-lr5 text-uppercase">Tel :</b> (987) 654-3210 </li>
                                        <li><i className="fa fa-envelope site-text-primary" /> <b className="p-lr5 text-uppercase">Email : </b>fastwayhelp@gmail.com</li>
                                        <li><i className="fa fa-location-arrow site-text-primary" /> <b className="p-lr5 text-uppercase">Location :</b> Street 4 ,45 Ny City</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Useful Links */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Useful links</h4>
                                    <ul>
                                        <li><NavLink to={route.pages.ABOUT}>About</NavLink></li>
                                        <li><NavLink to={route.pages.FAQ}>FAQ</NavLink></li>
                                        <li><NavLink to={route.pages.team.TEAM}>Our Team</NavLink></li>
                                        <li><NavLink to={route.services.SERVICES}>Services</NavLink></li>
                                        <li><NavLink to={route.pages.PRODUCT}>Products</NavLink></li>
                                        <li><NavLink to={route.blog.GRID}>Blog</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Resent Post */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget recent-posts-entry-date">
                                    <h4 className="widget-title">Resent Post</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="mt-post-media text-white  overflow-hide">
                                                <FastImage src="images/blog/recent-blog/pic1.jpg" alt="" />
                                            </div>
                                            <div className="mt-post-info">
                                                <div className="mt-post-header">
                                                    <div className="post-title">
                                                        <NavLink to={route.blog.POST_SINGLE}>A partnership based trust.</NavLink>
                                                    </div>
                                                </div>
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-author"><i className="fa fa-user site-text-primary" />By Admin</li>
                                                        <li className="post-comment"><i className="fa fa-comments site-text-primary" /> 28</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="mt-post-media  text-white  overflow-hide">
                                                <FastImage src="images/blog/recent-blog/pic2.jpg" alt="" />
                                            </div>
                                            <div className="mt-post-info">
                                                <div className="mt-post-header">
                                                    <div className="post-title">
                                                        <NavLink to={route.blog.POST_SINGLE}>For the men in charge life. </NavLink>
                                                    </div>
                                                </div>
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-author"><i className="fa fa-user site-text-primary" />By Admin</li>
                                                        <li className="post-comment"><i className="fa fa-comments site-text-primary" /> 29</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="mt-post-media  text-white  overflow-hide">
                                                <FastImage src="images/blog/recent-blog/pic3.jpg" alt="" />
                                            </div>
                                            <div className="mt-post-info">
                                                <div className="mt-post-header">
                                                    <div className="post-title">
                                                        <NavLink to={route.blog.POST_SINGLE}>Fueling your logistic chain.</NavLink>
                                                    </div>
                                                </div>
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-author"><i className="fa fa-user site-text-primary" />By Admin</li>
                                                        <li className="post-comment"><i className="fa fa-comments site-text-primary" /> 30</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Instagram Feed */}
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_newsletter f-news-letter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <div className="newsletter-bx m-b30">
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="site-button btn font-weight-600"><i className="fa fa-paper-plane" /></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget widget_gallery mfp-gallery clearfix">
                                    <h4 className="widget-title">Instagram Feed</h4>
                                    <ul className="clearfix">
                                        <li>
                                            <div className="mt-post-thum  overflow-hide">
                                                <a href={publicUrlFor("images/gallery/pic1.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic1.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mt-post-thum  overflow-hide">
                                                <a href={publicUrlFor("images/gallery/pic2.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic2.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mt-post-thum  overflow-hide">
                                                <a href={publicUrlFor("images/gallery/pic3.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic3.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mt-post-thum  overflow-hide">
                                                <a href={publicUrlFor("images/gallery/pic4.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic4.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mt-post-thum  overflow-hide">
                                                <a href={publicUrlFor("images/gallery/pic5.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic5.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mt-post-thum  overflow-hide">
                                                <a href={publicUrlFor("images/gallery/pic6.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic6.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Part */}
                <div className="footer-bottom overlay-wraper">
                    <div className="overlay-main" />
                    <div className="container p-t30">
                        <div className="mt-footer-bot-center">
                            <span className="copyrights-text">© 2024 Fastway. All Rights Reserved. Fastway</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default SectionFooter1;