import { Routes, Route } from "react-router-dom";
import { route } from "../globals/constants";
import Home1Page from "../app/components/home/home1";

import InnerPageLayout from "../layouts/inner-page-layout";
import AboutUsPage from "../app/components/pages/about-us";
import FAQPage from "../app/components/pages/faq";
import TeamPage from "../app/components/pages/team/team";
import TeamDetailPage from "../app/components/pages/team/detail";
import ContactUs2Page from "../app/components/pages/contact/contact-us2";
import ProductsPage from "../app/components/pages/products";
import FeaturesPage from "../app/components/pages/features/features";
import Error404 from "../app/components/pages/error404";

import ServicesPage from "../app/components/services/services";
import ServiceDetailPage from "../app/components/services/detail";


import BlogGridPage from "../app/components/blog/grid";
import BlogPostSinglePage from "../app/components/blog/post-single";



function AppRoutes() {
    return (
        <Routes>
            <Route path={route.INITIAL} element={<Home1Page />}/>
            <Route path={route.home.HOME1} element={<Home1Page />}/>
            <Route path={route.pages.ABOUT} element={<InnerPageLayout content={<AboutUsPage />} />}/>
            <Route path={route.pages.FAQ} element={<InnerPageLayout content={<FAQPage />} />}/>
            <Route path={route.pages.team.TEAM} element={<InnerPageLayout content={<TeamPage />} />}/>
            <Route path={route.pages.team.DETAIL} element={<InnerPageLayout content={<TeamDetailPage />} />}/>
            <Route path={route.pages.contact.CONTACT2} element={<InnerPageLayout content={<ContactUs2Page />} />}/>
            <Route path={route.pages.PRODUCT} element={<InnerPageLayout content={<ProductsPage />} />}/>
            <Route path={route.pages.features.footer.FIXED} element={<InnerPageLayout content={<FeaturesPage />} />}/>
            <Route path={route.pages.features.footer.LIGHT} element={<InnerPageLayout content={<FeaturesPage />} />}/>
            <Route path={route.pages.features.footer.DARK} element={<InnerPageLayout content={<FeaturesPage />} />}/>
            <Route path={route.services.SERVICES} element={<InnerPageLayout content={<ServicesPage />} />}/>
            <Route path={route.services.DETAIL} element={<InnerPageLayout content={<ServiceDetailPage />} />}/>
            <Route path={route.blog.GRID} element={<InnerPageLayout content={<BlogGridPage />} />}/>
            <Route path={route.blog.POST_SINGLE} element={<InnerPageLayout content={<BlogPostSinglePage />} />}/>
            <Route path="*" element={<InnerPageLayout content={<Error404 />} />}/>
        </Routes>
    )
}
export default AppRoutes;