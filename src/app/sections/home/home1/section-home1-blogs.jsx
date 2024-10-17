import { route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionHome1Blogs() {
    return (
        <div className="section-full  p-t80 p-b50 bg-white sx-news-blog-1">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Blog">News</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content ">
                    <div className="row">
                        {/* Block 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post latest-blog-1 date-style-2 overflow-hide  bg-white bdr-1 bdr-solid bdr-gray-light m-b30">
                                <div className="mt-post-media">
                                    <FastImage src="images/blog/grid/pic5.jpg" alt="" />
                                </div>
                                <div className="mt-post-info  p-a30">
                                    <div className="mt-post-meta text-black bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>09</strong><span>Oct 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>John</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>14 Comment</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title ">
                                        <h4 className="post-title">A partnership based trust.</h4>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* Block 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post latest-blog-1 date-style-2 overflow-hide bdr-1 bdr-solid bdr-gray-light  bg-white m-b30">
                                <div className="mt-post-media">
                                    <FastImage src="images/blog/grid/pic6.jpg" alt="" />
                                </div>
                                <div className="mt-post-info  p-a30">
                                    <div className="mt-post-meta text-black bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>15</strong><span>Oct 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>John</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>14 Comment</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title ">
                                        <h4 className="post-title">An anchor in a new era.</h4>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                        {/* Block 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post latest-blog-1 date-style-2 overflow-hide bdr-1 bdr-solid bdr-gray-light  bg-white m-b30">
                                <div className="mt-post-media">
                                    <FastImage src="images/blog/grid/pic1.jpg" alt="" />
                                </div>
                                <div className="mt-post-info  p-a30">
                                    <div className="mt-post-meta text-black bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>Oct 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>John</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.blog.POST_SINGLE}>14 Comment</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title ">
                                        <h4 className="post-title">Fueling your logistic chain.</h4>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <NavLink to={route.blog.POST_SINGLE} className="site-button-link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1Blogs;
