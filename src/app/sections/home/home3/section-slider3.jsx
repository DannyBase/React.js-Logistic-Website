import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function SectionSlider3() {

    useEffect(()=>{
        loadScript("js/rev-script-1.js")
    })

    return (
        <>
            <div className="main-slider style-two default-banner">
                <div className="tp-banner-container">
                    <div className="tp-banner">
                        {/* START REVOLUTION SLIDER 5.4.1 */}
                        <div className="rev_slider_wrapper fullscreen-container" data-alias="typewriter-effect" data-source="gallery" style={{ background: '#212427' }}>
                            <div id="rev_slider_1014_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
                                <ul>
                                    {/* SLIDE 1 */}
                                    <li data-index="rs-1000" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={2000} data-thumb={publicUrlFor("media/images/construct-video1.jpg")} data-rotate={0} data-saveperformance="off" data-title="Creative" data-param1="01" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                        {/* MAIN IMAGE */}
                                        <FastImage src="media/images/construct-video1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" className="rev-slidebg" data-no-retina />
                                        {/* LAYERS */}
                                        {/* LAYER NR. 1 [ for overlay ] */}
                                        <div className="tp-caption tp-shape tp-shapewrapper " id="slide-100-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                              {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                              ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 12, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                        </div>
                                        {/* LAYER NR. 2 [ for video ] */}
                                        <div className="rs-background-video-layer" data-forcerewind="on" data-volume="mute" data-videowidth="100%" data-videoheight="100%" data-videomp4={publicUrlFor("media/video/construct-video1.mp4")} data-videopreload="auto" data-videoloop="loop" data-aspectratio="16:9" data-autoplay="true" data-autoplayonlyfirsttime="false" />
                                        {/* LAYER NR. 3 [ for title ] */}
                                        <div className="tp-caption  tp-resizeme" id="slide-100-layer-3" data-x="['left','left','left','left']" data-hoffset="['250','180','150','100']" data-y="['top','top','top','top']" data-voffset="['300','300','300','200']" data-width="none" data-height="none" data-fontsize="['60','60','40','24']" data-lineheight="['70','70','70','60']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[
                              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                              ]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: 'rgba(255, 255, 255, 1.00)', borderWidth: 0 }}>
                                            <span style={{ fontFamily: '"Roboto", sans-serif' }}>
                                                <span className="site-text-primary text-uppercase">Conveyed</span>
                                            </span>
                                        </div>
                                        {/* LAYER NR. 4 [ for title ] */}
                                        <div className="tp-caption RotatingWords-TitleWhite   tp-resizeme  tounblur" id="slide-100-layer-4" data-x="['left','left','left','left']" data-hoffset="['650','550','400','250']" data-y="['top','top','top','top']" data-voffset="['300','300','300','200']" data-width="none" data-height="none" data-fontsize="['60','60','40','24']" data-lineheight="['70','70','70','60']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[
                              {&quot;delay&quot;:2000,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.8;sY:0.8;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;+1200&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}
                              ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: 'rgba(255, 255, 255, 1.00)', borderWidth: 0 }}>
                                            <span className="text-uppercase" style={{ fontFamily: '"Roboto", sans-serif' }}>By Air</span>
                                        </div>
                                        {/* LAYER NR. 5 [ for title ] */}
                                        <div className="tp-caption RotatingWords-TitleWhite   tp-resizeme  tounblur" id="slide-100-layer-5" data-x="['left','left','left','left']" data-hoffset="['650','550','400','250']" data-y="['top','top','top','top']" data-voffset="['300','300','300','200']" data-width="none" data-height="none" data-fontsize="['60','60','40','24']" data-lineheight="['70','70','70','60']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[
                              {&quot;delay&quot;:5000,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.8;sY:0.8;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},
                              {&quot;delay&quot;:&quot;+1000&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}
                              ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: 'rgba(255, 255, 255, 1.00)', borderWidth: 0 }}>
                                            <span className="text-uppercase" style={{ fontFamily: '"Roboto", sans-serif' }}>By Sea</span>
                                        </div>
                                        {/* LAYER NR. 6 [ for title ] */}
                                        <div className="tp-caption RotatingWords-TitleWhite   tp-resizeme  tounblur" id="slide-100-layer-6" data-x="['left','left','left','left']" data-hoffset="['650','550','400','250']" data-y="['top','top','top','top']" data-voffset="['300','300','300','200']" data-width="none" data-height="none" data-fontsize="['60','60','40','24']" data-lineheight="['70','70','70','60']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[
                              {&quot;delay&quot;:8000,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.8;sY:0.8;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;+1200&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}
                              ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: 'rgba(255, 255, 255, 1.00)', borderWidth: 0 }}>
                                            <span className="text-uppercase" style={{ fontFamily: '"Roboto", sans-serif' }}>By Road</span>
                                        </div>
                                        {/* LAYER NR. 7 [ for title ] */}
                                        <div className="tp-caption RotatingWords-TitleWhite   tp-resizeme  tounblur" id="slide-100-layer-7" data-x="['left','left','left','left']" data-hoffset="['650','550','400','250']" data-y="['top','top','top','top']" data-voffset="['300','300','300','200']" data-width="none" data-height="none" data-fontsize="['60','60','40','24']" data-lineheight="['70','70','70','60']" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[
                              {&quot;delay&quot;:12000,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.8;sY:0.8;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.03,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}
                              ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: 'rgba(255, 255, 255, 1.00)', borderWidth: 0 }}>
                                            <span className="text-uppercase" style={{ fontFamily: '"Roboto", sans-serif' }}>By Rail</span>
                                        </div>
                                        {/* LAYER NR. 8 [ for paragraph] */}
                                        <div className="tp-caption  tp-resizeme" id="slide-100-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['400','400','400','280']" data-fontsize="['18','18','16','14']" data-lineheight="['30','30','30','24']" data-width="['800','800','600','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[
                              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                              ]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, fontWeight: 500, color: 'rgba(255, 255, 255, 0.85)', borderWidth: 0 }}>
                                            <span style={{ fontFamily: '"Poppins", sans-serif' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>
                                        </div>
                                        {/* LAYER NR. 9 [ for readmore botton ] */}
                                        <div className="tp-caption tp-resizeme" id="slide-100-layer-9" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['550','550','550','450']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                              {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                              ]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, textTransform: 'uppercase', fontWeight: 700 }}>
                                            <NavLink to={route.pages.ABOUT} className="site-button button-lg  m-r15">Read more</NavLink>
                                        </div>
                                    </li>
                                </ul>
                                <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                            </div>
                        </div>
                        {/* END REVOLUTION SLIDER */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionSlider3;