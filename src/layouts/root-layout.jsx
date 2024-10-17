import AppRoutes from "../routing/app-routes";
import { setFooter, setHeader, showHeader } from "../globals/layout-config";
import { useLocation } from "react-router-dom";
import { route } from "../globals/constants";

function RootLayout() {
    const currentpath = useLocation().pathname;

    const isFooterFixed = () => {
        return currentpath === route.pages.features.footer.FIXED
    }

    return (
        <>
            {
                isFooterFixed()
                    ? <FixedFooterLayout currentpath={currentpath} />
                    : <AppLayout currentpath={currentpath} />
            }
        </>
    )
}

function FixedFooterLayout(props) {
    const { currentpath } = props;
    return (
        <>
            <div className="footer-fixed">
                <AppLayout currentpath={currentpath} />
            </div>
        </>
    )
}

function AppLayout(props) {
    const { currentpath } = props;
    return (
        <>
            <div className="page-wraper">

                {/* HEADER START */}
                {
                    showHeader(currentpath) &&
                    setHeader(currentpath)
                }

                {/* Content Mid part*/}
                <div className="page-content">
                    <AppRoutes />
                </div>

                {/* Footer Part*/}
                {
                    setFooter(currentpath)
                }

                {/* Scroll Top Button */}
                <button className="scroltop"><span className="fa fa-space-shuttle relative" id="btn-vibrate" /></button>
            </div>
        </>
    )
}


export default RootLayout;