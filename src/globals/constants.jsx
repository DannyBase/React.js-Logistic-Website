export const route = {
    INITIAL: "/",
    home: {
        HOME1: "/",
    },
    pages: {
        ABOUT: "/about-us",
        FAQ: "/faq",
        team: {
            TEAM: "/team",
            DETAIL: "/team/detail"
        },
        contact: {
            CONTACT2: "/contact-us2"
        },
        ERROR404: "/error404",
        features: {
            footer: {
                FIXED: "/footer/fixed",
                LIGHT: "/footer/light",
                DARK: "/footer/dark"
            }
        },

        PRODUCT: "/products",
    },
    services: {
        SERVICES: "/services",
        DETAIL: "/service/detail"
    },
    blog: {
        GRID: "/blog/grid",
        POST_SINGLE: "/blog/post-single"
    },
    
    
}

export function publicUrlFor(path) {
    return process.env.PUBLIC_URL + "/assets/" + path;
}

export function loadScript(src, fromPublic) {

    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');

        script.src = (
            fromPublic === undefined ||
            fromPublic == null ||
            fromPublic
        ) ? publicUrlFor(src) : src;

        script.addEventListener('load', function () {
            resolve();
        });
        script.addEventListener('error', function (e) {
            reject(e);
        });

        setTimeout(() => {
            document.body.removeChild(script);
        }, 1500);
        document.body.appendChild(script);
    })
};