$(function(){
    $(".products__slider").slick({
        prevArrow: `<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.21839 1L1 9L9.21839 17"/>
        </svg>
        </button>`,
        nextArrow: `<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.78161 17L9 9L0.78161 1"/>
        </svg>
        </button>`,
        infinite: false,        
    }, {passive: true});

    $(".questions__item-title").on("click", function() {
        $(".questions__item").removeClass("questions__item--active");
        $(this).parent().addClass("questions__item--active");
    }, {passive: true})

    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts'],
        menu: '#header__nav',
    }, {passive: true});
    
    $(".menu__btn").on("click", function() {
        $(".menu__btn").toggleClass("menu__btn--active");
        $(".menu__list").toggleClass("menu__list--active");
    })

    $(".menu__list-link").on("click", function() {
        $(".menu__btn").removeClass("menu__btn--active");
        $(".menu__list").removeClass("menu__list--active");
    }, {passive: true})
    
    Modernizr.on('webp', function(result) {
        if (result) {
            // $(".top").addClass("webp");
            $(".page-section").addClass("webp");            
        } else {
            // $(".top").addClass("no-webp");
            $(".page-section").addClass("no-webp");            
        }
    }, {passive: true});
});