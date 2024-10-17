import FastImage from "../../../globals/elements/fastimg";
import { publicUrlFor, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionBlogSidebar() {
    return (
        <aside className="side-bar">
            {/* 1. Search */}
            <div className="widget">
                <div className="search-bx">
                    <form role="search" method="post">
                        <div className="input-group">
                            <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Enter your keyword" />
                            <span className="input-group-btn">
                                <button type="submit" className="site-button btn">Search</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
            {/* 2. Gallery  */}
            <div className="widget widget_gallery mfp-gallery clearfix">
                <h4>Gallery</h4>
                <ul>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic1.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic1.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic2.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic2.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum ">
                            <a href={publicUrlFor("images/gallery/pic3.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic3.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic4.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic4.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic5.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic5.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic6.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic6.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic7.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic7.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic8.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic8.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic5.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic5.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic6.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic3.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic7.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic1.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="mt-post-thum">
                            <a href={publicUrlFor("images/gallery/pic8.jpg")} className="mfp-link"><FastImage src="images/gallery/thumb/pic8.jpg" alt="" /></a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
            {/* 3. Recent Post */}
            <div className="widget  recent-posts-entry">
                <h4>Posts</h4>
                <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                        <div className="mt-post-media">
                            <FastImage src="images/blog/recent-blog/pic1.jpg" alt="" />
                        </div>
                        <div className="mt-post-info">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-author">12 September 2023 </li>
                                </ul>
                            </div>
                            <div className="mt-post-header">
                                <h6 className="post-title">Your readiness. Our mission.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="widget-post clearfix">
                        <div className="mt-post-media">
                            <FastImage src="images/blog/recent-blog/pic2.jpg" alt="" />
                        </div>
                        <div className="mt-post-info">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-author">16 September 2023</li>
                                </ul>
                            </div>
                            <div className="mt-post-header">
                                <h6 className="post-title">Thinking the way forward.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="widget-post clearfix">
                        <div className="mt-post-media">
                            <FastImage src="images/blog/recent-blog/pic3.jpg" alt="" />
                        </div>
                        <div className="mt-post-info">
                            <div className="mt-post-meta">
                                <ul>
                                    <li className="post-author">18 September 2023</li>
                                </ul>
                            </div>
                            <div className="mt-post-header">
                                <h6 className="post-title">Quality never goes out of style. </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
            {/* 4. Post Categories */}
            <div className="widget  widget_categories">
                <h4>Post Categories</h4>
                <ul>
                    <li> <NavLink to={route.services.SERVICES}>Air Cargo</NavLink><span className="badge">10</span></li>
                    <li> <NavLink to={route.services.SERVICES}>Ocean Cargo</NavLink><span className="badge">3</span></li>
                    <li> <NavLink to={route.services.SERVICES}>Trucking</NavLink><span className="badge">8</span></li>
                    <li> <NavLink to={route.services.SERVICES}>Courier</NavLink><span className="badge">1</span></li>
                </ul>
            </div>
            <div className="mt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
            {/* 5. Newsletter */}
            <div className="widget widget_newsletter-2">
                <h4>Newsletter</h4>
                <div className="newsletter-bx">
                    <div className="newsletter-icon">
                        <i className="fa fa-envelope-o" />
                    </div>
                    <div className="newsletter-content">
                        <p>Enter your e-mail and subscribe to our newsletter.</p>
                    </div>
                    <div className="m-t20">
                        <form role="search" method="post">
                            <div className="input-group">
                                <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                <span className="input-group-btn">
                                    <button type="submit" className="site-button btn">Submit</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
            {/* 6. Tags */}
            <div className="widget  widget_tag_cloud">
                <h4>Keyword</h4>
                <div className="tagcloud">
                    <NavLink to={route.services.SERVICES}>Air Cargo </NavLink>
                    <NavLink to={route.services.SERVICES}>Ocean Cargo </NavLink>
                    <NavLink to={route.services.SERVICES}>Trucking</NavLink>
                    <NavLink to={route.services.SERVICES}>Courier </NavLink>
                    <NavLink to={route.services.SERVICES}>Stock </NavLink>
                    <NavLink to={route.services.SERVICES}>Business</NavLink>
                </div>
            </div>
            <div className="mt-divider bg-gray-dark"><i className="icon-dot c-square" /></div>
        </aside>
    )
}

export default SectionBlogSidebar;
