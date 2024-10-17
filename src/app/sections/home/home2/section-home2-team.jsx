import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";
import { route } from "../../../../globals/constants";
import _data from "../../../../globals/data/data.json";

function SectionHome2Team() {

    const { team1 } = _data.team;

    return (
        <div className="section-full text-center mt-our-team bg-white p-t80 p-b50">
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
                            team1.map((_item, index) => {
                                return <div key={index} className="col-lg-3 col-md-6 m-b30">
                                    <div className="animate-top">
                                        <div className="mt-team-media">
                                            <NavLink to={route.pages.team.DETAIL}><FastImage src={_item.image} className="" alt="" /></NavLink>
                                        </div>
                                        <div className="mt-team-info text-center p-a20 text-white">
                                            <div className="mt-team-info-inner">
                                                <h4 className="mt-team-title m-b15">
                                                    <NavLink to={route.pages.team.DETAIL} className="text-white">{_item.name}</NavLink>
                                                </h4>
                                                <p className="m-b15">{_item.designation}</p>
                                            </div>
                                            <div className="social-share-btn-content">
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

export default SectionHome2Team;
