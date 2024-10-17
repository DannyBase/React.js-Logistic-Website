import { NavLink } from "react-router-dom";
import { route } from "../../../globals/constants";

function Error404Page() {
    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-gray-light p-tb20">
                <div className="container">
                    <ul className="mt-breadcrumb breadcrumb-style-1 no-img-breadcrumb">
                        <li><NavLink to={route.home.HOME1}>Home</NavLink></li>
                        <li>Error 404</li>
                    </ul>
                </div>
            </div>
            <div className="section-full p-t80 p-b50">
                <div className="container">
                    <div className="section-content">
                        <div className="page-notfound text-center">
                            <div className="section-head">
                                <h2 data-title="Error">404</h2>
                                <h3>The webpage you are looking for is not here!</h3>
                                <NavLink to={route.home.HOME1} title="Back to home" className="site-button">Back to home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Error404Page;