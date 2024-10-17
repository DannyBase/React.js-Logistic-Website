import SectionFooter1 from "../app/sections/common/footer/footer1";
import SectionHeader1 from "../app/sections/common/header/header1";
import { route } from "./constants";
import banner from "../globals/data/banner.json";

export function showHeader(currentpath) {
    return !(currentpath === route.pages.ERROR404)
}

export function setFooter(currentpath) {
    if (currentpath === route.pages.features.footer.LIGHT) {
        return <SectionFooter1 theme="footer-light" />
    } else {
        return <SectionFooter1 theme="footer-dark" />
    }
}

export function setHeader(currentpath) {
    if (
        currentpath
    ) {
        return <SectionHeader1 />
    } 
}

export const setBannerData = (currentpath) => {
    switch (currentpath) {
        case route.pages.FAQ:
            return banner.faq
        case route.pages.team.TEAM:
            return banner.team
        case route.pages.team.DETAIL:
            return banner.teamDetail
        case route.pages.contact.CONTACT2:
            return banner.contact1
            case route.pages.PRODUCT:
            return banner.products
        case route.pages.ERROR404:
            return banner.error404
        case route.services.SERVICES:
            return banner.services
        case route.services.DETAIL:
            return banner.serviceDetail
        case route.blog.GRID:
            return banner.blogGrid
        case route.blog.POST_SINGLE:
            return banner.blogPostSingle
        default:
            return banner.about
    }
}