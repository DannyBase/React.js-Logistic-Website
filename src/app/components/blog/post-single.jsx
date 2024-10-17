import FastImage from "../../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../../globals/constants";
import SectionBlogSidebar from "../../sections/blog/section-blog-sidebar";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function BlogPostSinglePage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Blog Single Post */}
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="row">
                        {/* Side Left */}
                        <div className="col-lg-8 col-md-12 m-b30">
                            {/* Blog Post */}
                            <div className="blog-post date-style-2 blog-post-single">
                                <div className="mt-post-media mt-img-effect overflow-hide">
                                    <FastImage src="images/blog/default/thum1.jpg" alt="" />
                                </div>
                                <div className="post-description-area p-t30">
                                    <div className="mt-post-meta bdr-1 bdr-solid bdr-b-1 bdr-gray-light p-b20">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar site-text-primary" /><strong>20</strong><span>March 2023</span> </li>
                                            <li className="post-author"><i className="fa fa-user site-text-primary" /><NavLink to={route.pages.team.DETAIL}>By <span>Robin</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments site-text-primary" /> <NavLink to={route.pages.ABOUT}>0 Comments</NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-title ">
                                        <h2 className="post-title">Logistics through innovation, dedication, and technology.</h2>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>Lorem Ipsum is simply text of the. Lorem Ipsum is simply text of the stry stext of the stry simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply text of the. Lorem Ipsum is simply text of the stry Lorem Ipsum is simply text of the</p>
                                        <h4>About Our Company</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with Letraset.</p>
                                        <blockquote className="bdr-3 bdr-primary bdr-2 bdr-l-2 bdr-primary">
                                            Mauris fermentum porta sem, non hendrerit enim bibendum consectetur. Fusce diam est, porttitor vehicula gravida at, accumsan bibendum tincidunt imperdiet. Maecenas quis magna faucibus, varius ante sit amet, varius augue. Praesent aliquam, augue ac pulvinar accumsan
                                            <div className="p-t15"><p> – Jone Due</p></div>
                                        </blockquote>
                                        <p>
                                            Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis Consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vitae, consequuntur minima tempora ins cupiditate ratione est, ad molestias deserunt in ipsam ea quasi cum culpa adipisci dolores voluptatum fuga at! assumenda provident lorem ipsum dolor sit amet, consectetur.</p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-sm12">
                                                <div className="mt-box ">
                                                    <div className="mt-thum-bx mt-img-effect overflow-hide m-b20">
                                                        <FastImage src="images/blog/blog-small/pic1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm12 text-justify">
                                                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. curabitur blandit tempus porttitor.</p>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus. Suspendisse vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus vel scelerisque id, iaculis eu nibh.</p>
                                    </div>
                                    <div className="widget bg-white  widget_tag_cloud">
                                        <h4 className="tagcloud">Tags</h4>
                                        <div className="tagcloud">
                                            <NavLink to={route.pages.PRODUCT}>Products</NavLink>
                                            <NavLink to={route.services.SERVICES}>Services</NavLink>
                                            <NavLink to={route.pages.ABOUT}>Transport</NavLink>
                                        </div>
                                    </div>
                                    <div className="mt-box">
                                        <div className="row  p-lr15">
                                            <h4 className="tagcloud pull-left m-t5 m-b0">Share</h4>
                                            <div className="widget_social_inks">
                                                <ul className="social-icons social-square m-b0">
                                                    <li><a href="#" className="fa fa-facebook" /></li>
                                                    <li><a href="#" className="fa fa-twitter" /></li>
                                                    <li><a href="#" className="fa fa-rss" /></li>
                                                    <li><a href="#" className="fa fa-youtube" /></li>
                                                    <li><a href="#" className="fa fa-instagram" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear bg-gray p-a30 comment-list-bg radius-10" id="comment-list">
                                <div className="comments-area" id="comments">
                                    <h2 className="comments-title">5 Comments</h2>
                                    <div className="p-t30">
                                        {/* COMMENT LIST START */}
                                        <ol className="comment-list">
                                            <li className="comment">
                                                {/* COMMENT BLOCK */}
                                                <div className="comment-body bg-white">
                                                    <div className="comment-meta">
                                                        <a href="#">Sep 11, 2023 at 7:15 am</a>
                                                    </div>
                                                    <div className="comment-author vcard">
                                                        <FastImage className="avatar photo" src="images/user/pic1.jpg" alt="" />
                                                        <cite className="fn">Mila Curtis</cite>
                                                        <span className="says">says:</span>
                                                    </div>
                                                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat </p>
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                {/* COMMENT BLOCK */}
                                                <div className="comment-body  bg-white">
                                                    <div className="comment-meta">
                                                        <a href="#">Sep 11, 2023 at 8:30 am</a>
                                                    </div>
                                                    <div className="comment-author vcard">
                                                        <FastImage className="avatar photo" src="images/user/pic2.jpg" alt="" />
                                                        <cite className="fn">Cherie</cite>
                                                        <span className="says">says:</span>
                                                    </div>
                                                    <p>Duis sed odio Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat </p>
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>
                                                {/* SUB COMMENT BLOCK */}
                                                <ol className="children">
                                                    <li className="comment odd parent">
                                                        <div className="comment-body bg-white">
                                                            <div className="comment-meta">
                                                                <a href="#">Sep 11, 2023 at 9:00 am</a>
                                                            </div>
                                                            <div className="comment-author vcard">
                                                                <FastImage className="avatar photo" src="images/user/pic3.jpg" alt="" />
                                                                <cite className="fn">Chole Major</cite>
                                                                <span className="says">says:</span>
                                                            </div>
                                                            <p>laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                            <div className="reply">
                                                                <a href="#" className="comment-reply-link">Reply</a>
                                                            </div>
                                                        </div>
                                                        <ol className="children">
                                                            <li className="comment odd parent">
                                                                <div className="comment-body bg-white">
                                                                    <div className="comment-meta">
                                                                        <a href="#">Sep 11, 2023 at 11:15 am</a>
                                                                    </div>
                                                                    <div className="comment-author vcard">
                                                                        <FastImage className="avatar photo" src="images/user/pic4.jpg" alt="" />
                                                                        <cite className="fn">Davis Curtis</cite>
                                                                        <span className="says">says:</span>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh..</p>
                                                                    <div className="reply">
                                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="comment">
                                                {/* COMMENT BLOCK */}
                                                <div className="comment-body bg-white">
                                                    <div className="comment-meta">
                                                        <a href="#">Sep 12, 2023 at 11:30 am</a>
                                                    </div>
                                                    <div className="comment-author vcard">
                                                        <FastImage className="avatar photo" src="images/user/pic1.jpg" alt="" />
                                                        <cite className="fn">Stacy poe</cite>
                                                        <span className="says">says:</span>
                                                    </div>
                                                    <p>Quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis</p>
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                        {/* COMMENT LIST END */}
                                        {/* LEAVE A REPLY START */}
                                        <div className="comment-respond  bg-white p-a30" id="respond">
                                            <h3 className="comment-reply-title" id="reply-title">Leave a Comments
                                                <small>
                                                    <a style={{ display: 'none' }} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a>
                                                </small>
                                            </h3>
                                            <form className="comment-form" id="commentform" method="post">
                                                <p className="comment-form-author">
                                                    <label htmlFor="author">Name <span className="required">*</span></label>
                                                    <input type="text" name="user-comment" placeholder="Author" id="author" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                                    <input type="text" placeholder="Email" name="email" id="email" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <label htmlFor="url">Website</label>
                                                    <input type="text" placeholder="Website" name="url" id="url" />
                                                </p>
                                                <p className="comment-form-comment">
                                                    <label htmlFor="comment">Comment</label>
                                                    <textarea rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                                </p>
                                                <p className="form-submit">
                                                    <button className="site-button text-uppercase" type="button">Submit Comment</button>
                                                </p>
                                            </form>
                                        </div>
                                        {/* LEAVE A REPLY END */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Side Right */}
                        <div className="col-lg-4 col-md-12">
                            <SectionBlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BlogPostSinglePage;