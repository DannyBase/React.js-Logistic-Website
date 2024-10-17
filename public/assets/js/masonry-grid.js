if ( jQuery().isotope ) {      
    var $container = jQuery('.portfolio-wrap');
        $container.isotope({
            itemSelector: '.masonry-item',
            transitionDuration: '1s',
            originLeft: true,
            stamp: '.stamp',
        });

    $container.imagesLoaded().progress( function() {
        $container.isotope('layout');
    });

    jQuery('.masonry-filter li').on('click',function() {                           
        var selector = jQuery(this).find("a").attr('data-filter');
        jQuery('.masonry-filter li').removeClass('active');
        jQuery(this).addClass('active');
        $container.isotope({ filter: selector });
        return false;
    });
};