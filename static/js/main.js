


jQuery.noConflict();


/* link smooth scroll to top */
function scrollToTop(i) {
    if (i == 'show') {
        if (jQuery(this).scrollTop() != 0) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    }
    if (i == 'click') {
        jQuery('#toTop').click(function () {
            jQuery('body,html').animate({scrollTop: 0}, 600);
            return false;
        });
    }
}

jQuery(document).ready(function () {
    scrollToTop('click');
});
jQuery(window).scroll(function () {
    scrollToTop('show');
});



/* colorbox init */
jQuery(document).ready(function () {

    jQuery('a.colorUp').colorbox({
        rel: 'gal',
        maxWidth: "95%"
    });

});



/* tooltip for socials init */

function tooltipInit() {
    jQuery("[data-toggle='tooltip']").tooltip();
}

// tooltip classes

jQuery('.fancy').tooltip({
    template: '<div class="tooltip fancy"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
});


jQuery(document).ready(function () {
    tooltipInit();
});



/* Sliders */

jQuery(window).load(function () {

    // flexFull slider init
    jQuery('.flexslider.flexFull').flexslider({
        animation: "slide",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        // easing types :
        // swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
        // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
        // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
        // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc,
        // easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack,
        // easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 800,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order

        // Primary Controls
        controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)

        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        useCSS: false,                   //{NEW} Boolean: Slider will use CSS3 transitions if available


        // Secondary Navigation
        keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel

        // Callback API
        start: function () {
            jQuery(".flexslider.flexFull").removeClass("loading-slider");
        }
    });
});


jQuery(window).load(function () {

    // flexCarousel slider init
    jQuery('.flexslider.flexCarousel').flexslider({
        animation: "slide",
        useCSS: true,
        slideshow: false,
        slideshowSpeed: 7000,
        animationSpeed: 500,
        animationLoop: false,
        itemWidth: 300,
        itemMargin: 20,
        minItems: 1,
        maxItems: 10,
        move: 1,
        controlNav: false,
	    start: function(slider) {
		    slider.flexAnimate(3);
		    jQuery('.total-slides').text(slider.count);
        },
	     after: function(slider) {

		     var zm = slider.currentSlide;
		     var $current = jQuery('.flexCarousel li:nth-child(' + (zm+1) + ')');

		     var content1 = "<a href=" +  $current.attr('data-link') + ">" + $current.attr('data-title') +
					    "<span>" +  $current.attr('data-cat') + "</span>" + "</a>";

			   jQuery('.flexCarousel-caption').html(content1);

			   jQuery('.flexCarousel li').removeClass('active');
			   $current.addClass('active');

	     }
    });
});



jQuery(window).load(function () {

    // flexSimple slider init
    jQuery('.flexslider.flexSimple').flexslider({
        animation: "slide",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        // easing types :
        // swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
        // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
        // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
        // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc,
        // easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack,
        // easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 800,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order

        // Primary Controls
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)

        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        useCSS: false,                   //{NEW} Boolean: Slider will use CSS3 transitions if available


        // Secondary Navigation
        keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel


        // Callback API
        start: function () {
            jQuery(".flexslider.flexSimple").removeClass("loading-slider");
        }
    });

    // previewGallery slider init
    jQuery('.previewBox .previewGallery').flexslider({
        animation: "slide",              //String: Select your animation type, "fade" or "slide"
        easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        // easing types :
        // swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
        // easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint,
        // easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine,
        // easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc,
        // easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack,
        // easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: false,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 800,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,               //Boolean: Randomize slide order

        // Primary Controls
        controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)

        // Usability features
        pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: true,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        useCSS: false,                   //{NEW} Boolean: Slider will use CSS3 transitions if available


        // Secondary Navigation
        keyboard: false,                 //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel


        // Callback API
        start: function () {
            jQuery(".previewBox .previewGallery").removeClass("loading-slider");
        }
    });
});





// ISOTOPE INIT

jQuery.Isotope.prototype._getCenteredMasonryColumns = function () {
    this.width = this.element.width();

    var parentWidth = this.element.parent().width();

    // i.e. options.masonry && options.masonry.columnWidth
    var colW = this.options.masonry && this.options.masonry.columnWidth || // or use the size of the first item
            this.$filteredAtoms.outerWidth(true) || // if there's no items, use size of container
            parentWidth;

    var cols = Math.floor(parentWidth / colW);
    cols = Math.max(cols, 1);

    // i.e. this.masonry.cols = ....
    this.masonry.cols = cols;
    // i.e. this.masonry.columnWidth = ...
    this.masonry.columnWidth = colW;
};

jQuery.Isotope.prototype._masonryReset = function () {
    // layout-specific props
    this.masonry = {};
    // FIXME shouldn't have to call this again
    this._getCenteredMasonryColumns();
    var i = this.masonry.cols;
    this.masonry.colYs = [];
    while (i--) {
        this.masonry.colYs.push(0);
    }
};

jQuery.Isotope.prototype._masonryResizeChanged = function () {
    var prevColCount = this.masonry.cols;
    // get updated colCount
    this._getCenteredMasonryColumns();
    return ( this.masonry.cols !== prevColCount );
};

jQuery.Isotope.prototype._masonryGetContainerSize = function () {
    var unusedCols = 0, i = this.masonry.cols;
    // count unused columns
    while (--i) {
        if (this.masonry.colYs[i] !== 0) {
            break;
        }
        unusedCols++;
    }

    return {
        height: Math.max.apply(Math, this.masonry.colYs),
        // fit container to columns that have been used;
        width: (this.masonry.cols - unusedCols) * this.masonry.columnWidth
    };
};


jQuery(window).load(function () {

    var $container = jQuery('#iContainer'), // object that will keep track of options
            isotopeOptions = {}, // defaults, used if not explicitly set in hash
            defaultOptions = {
                filter: '*',
                sortBy: 'original-order',
                sortAscending: true,
                layoutMode: 'masonry'
            };


    var setupOptions = jQuery.extend({}, defaultOptions, {
        itemSelector: '.galleryItem',
        masonry: {
            // columnWidth: $container.width() / 4

        }
    });

    // set up Isotope
    $container.isotope(setupOptions);

    var $optionSets = jQuery('#galleryOptions').find('.option-set'), isOptionLinkClicked = false;

    // switches selected class on buttons
    function changeSelectedLink($elem) {
        // remove selected class on previous item
        $elem.parents('.option-set').find('.selected').removeClass('selected');
        // set selected class on new item
        $elem.addClass('selected');
    }


    $optionSets.find('a').click(function () {
        var $this = jQuery(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return;
        }
        changeSelectedLink($this);
        // get href attr, remove leading #
        var href = $this.attr('href').replace(/^#/, ''), // convert href into object
        // i.e. 'filter=.inner-transition' -> { filter: '.inner-transition' }
                option = jQuery.deparam(href, true);
        // apply new option to previous
        jQuery.extend(isotopeOptions, option);
        // set hash, triggers hashchange on window
        jQuery.bbq.pushState(isotopeOptions);
        isOptionLinkClicked = true;
        return false;
    });


    var hashChanged = false;

    jQuery(window).bind('hashchange', function (event) {
        // get options object from hash
        var hashOptions = window.location.hash ? jQuery.deparam.fragment(window.location.hash, true) : {}, // do not animate first call
                aniEngine = hashChanged ? 'best-available' : 'none', // apply defaults where no option was specified
                options = jQuery.extend({}, defaultOptions, hashOptions, { animationEngine: aniEngine });
        // apply options from hash
        $container.isotope(options);
        // save options
        isotopeOptions = hashOptions;

        // if option link was not clicked
        // then we'll need to update selected links
        if (!isOptionLinkClicked) {
            // iterate over options
            var hrefObj, hrefValue, $selectedLink;
            for (var key in options) {
                hrefObj = {};
                hrefObj[ key ] = options[ key ];
                // convert object into parameter string
                // i.e. { filter: '.inner-transition' } -> 'filter=.inner-transition'
                hrefValue = jQuery.param(hrefObj);
                // get matching link
                $selectedLink = $optionSets.find('a[href="#' + hrefValue + '"]');
                changeSelectedLink($selectedLink);
            }
        }

        isOptionLinkClicked = false;
        hashChanged = true;
    })// trigger hashchange to capture any hash data on init
            .trigger('hashchange');

});

/* accordion class active */

jQuery(document).ready(function () {
    jQuery(".accordion").on("show",function (e) {
        jQuery(e.target).prev(".accordion-heading").find(".accordion-toggle").addClass("active");
    }).on("hide",function (e) {
            jQuery(this).find(".accordion-toggle").not(jQuery(e.target)).removeClass("active");
        }).each(function () {
            var $a = jQuery(this);
            $a.find("a.accordion-toggle").attr("data-parent", "#" + $a.attr("id"));
        });
});


/* testimonials */

// change value

jQuery(document).ready(function () {
    var intervalID = setInterval(myFunction, 10000);

    function myFunction(){
        var tabs = jQuery('.testimonial.version2 .nav-tabs .dropdown-menu > li'),
            active = tabs.filter('.active'),
            next = active.next('li'),
            toClick = next.length ? next.find('a') : tabs.eq(0).find('a');
        toClick.trigger('click');
    };


    jQuery(".testimonial.version2").hover( function () {
        window.clearInterval(intervalID)
    }, function () {
        intervalID = setInterval(myFunction, 15000);
    });

    option = jQuery('.testimonial.version2 .dropdown-menu a');
    option.on("click", function() {
        jQuery(this).parent().parent().find(".active").removeClass("active");
    });
    current = jQuery('.testimonial.version2 .dropdown-current');
    selected = current.parent().parent().parent().find(".active a").html();
    current.html(selected);
    jQuery(option).on("click", function (){
        current.html(jQuery(this).text());
    });
});
jQuery(window).load(function() {
    jQuery('.content-slider').flexslider({
        animation: "slide",
        pauseOnHover: true,
        directionNav: true
    });
});


/* pretty photo */
