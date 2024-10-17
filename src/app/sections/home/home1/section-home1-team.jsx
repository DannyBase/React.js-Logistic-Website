import { route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";
import _data from "../../../../globals/data/data.json";

function SectionHome1Team() {

    const { team2 } = _data.team;

    return (
        <div className="section-full text-center mt-our-team bg-gray p-t80 p-b50">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head text-center">
                    <h2 data-title="Team">Best team</h2>
                    <div className="mt-separator-outer">
                        <div className="mt-separator site-bg-primary" />
                    </div>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="row">

                        {
                            team2.map((_item, index) => {
                                return <div key={index} className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc  m-b30">
                                    <div className="mt-team-seven ">
                                        <div className="mt-team-media mt-img-effect off-color bg-white">
                                            <NavLink to={route.pages.team.DETAIL}><FastImage src={_item.image} alt="" /></NavLink>
                                        </div>
                                        <div className="mt-team-info text-center p-a30 bg-white">
                                            <h4 className="mt-team-title m-t0 m-b15"><NavLink to={route.pages.team.DETAIL} className=" site-text-primary">{_item.name}</NavLink></h4>
                                            <p>{_item.designation}</p>
                                            <div className="social-share-btn-content team-one-show-hide">
                                                <ul className="social-icons social-square">
                                                    <li><a href="https://www.facebook.com/" className="fa fa-facebook" /></li>
                                                    <li><a href="https://twitter.com/" className="fa fa-twitter" /></li>
                                                    <li><a href="https://in.linkedin.com/" className="fa fa-linkedin" /></li>
                                                    <li><a href="https://rss.com/" className="fa fa-rss" /></li>
                                                    <li><a href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1Team;
