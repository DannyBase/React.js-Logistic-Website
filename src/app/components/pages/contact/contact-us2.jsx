function ContactUs2Page() {
    return (
        <>
            <div className="section-full p-t80 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            {/* Google Map Block */}
                            <div className="equal-col m-b30">
                                <div className="gmap-outline">
                                    <div className="google-map" style={{ width: '100%' }}>
                                        <iframe height={460} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.671934832277!2d5.603688015335255!3d6.335048295411633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3b4640debe5%3A0xb86b2f2dd3d5a3b0!2sBenin%20City%2C%20Nigeria!5e0!3m2!1sen!2s!4v1697536905645!5m2!1sen!2s" />


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" bg-gray-light p-a30 radius-10 cons-contact-form-wrap">
                                <div className="section-head">
                                    <h2>Contact Form </h2>
                                    <div className="mt-separator-outer m-b30">
                                        <div className="mt-separator site-bg-primary" />
                                    </div>
                                </div>
                                <div className="mt-box">
                                    <form className="cons-contact-form contact-style-2" method="post" action="form-handler.php">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" rows={6} className="form-control Message" required placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-12 text-right">
                                                <button name="submit" type="submit" value="Submit" className="site-button-secondry  m-r15">Submit</button>
                                                <button name="Resat" type="reset" value="Reset" className="site-button ">Reset </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="section-head">
                        <h2>Contact Detail </h2>
                        <div className="mt-separator-outer m-b30">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-icon-box-wraper bx-style-2 m-l20 m-b30 p-a30 left bg-white">
                                <div className="mt-icon-box-xs site-bg-primary m-b20">
                                    <span className="icon-cell text-white"><i className="fa fa-phone" /></span>
                                </div>
                                <div className="icon-content p-l20">
                                    <h4 className="mt-tilte site-text-primary">Phone</h4>
                                    <p>+29 876 542 2010</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-icon-box-wraper bx-style-2 m-l20 m-b30 p-a30 left bg-white">
                                <div className="mt-icon-box-xs site-bg-primary m-b20">
                                    <span className="icon-cell text-white"><i className="fa fa-envelope" /></span>
                                </div>
                                <div className="icon-content p-l20">
                                    <h4 className="mt-tilte site-text-primary">Email</h4>
                                    <p>demo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-icon-box-wraper bx-style-2 m-l20 m-b30 p-a30 left bg-white">
                                <div className="mt-icon-box-xs site-bg-primary m-b20">
                                    <span className="icon-cell text-white"><i className="fa fa-map-marker" /></span>
                                </div>
                                <div className="icon-content p-l20">
                                    <h4 className="mt-tilte site-text-primary">Address</h4>
                                    <p>450 W 21d Steet New York, NY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs2Page;