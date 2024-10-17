import { useLocation } from "react-router-dom";
import SectionBanner from "../app/sections/common/banner/banner";
import { setBannerData } from "../globals/layout-config";

function InnerPageLayout(props) {
    const currentpath = useLocation().pathname;
    
    return (
        <>
            {/* Inner Banner */}
            <SectionBanner data={setBannerData(currentpath)} />

            {
                props.content
            }
        </>
    )
}
export default InnerPageLayout;