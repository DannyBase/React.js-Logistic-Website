
'use strict';
var tpj = jQuery;

var revapi1059;
tpj(document).ready(function () {
    console.log("ye kya hai :: "+tpj("#rev_slider_1059_1"));
    if (tpj("#rev_slider_1059_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1059_1");
    } else {
        revapi1059 = tpj("#rev_slider_1059_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            // sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                bullets: {
                    enable: true,
                    //hide_onmobile:true,
                    //hide_under:800,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [960, 768, 700, 640],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 3000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
                type: "scroll",
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: -1,
            stopAtSlide: 0,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: ".site-header",
            fullScreenOffset: "0px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
}); /*ready*/   