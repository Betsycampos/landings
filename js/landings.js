$(document).ready(function () {


    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $('#myModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Boton fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".cta").addClass("cta-fixed");
            $(".cta-fixed a img").addClass("d-none");
            $(".cta .btn-border-r").addClass("border-r");
        } else {
            $(".cta").removeClass("cta-fixed");
            $(".cta a img").removeClass("d-none");
            $(".cta .btn-border-r").removeClass("border-r");
        }
    });


    // Tabs countries //

    $('.tab-list li a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('a.scroll').on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top -58
        }, 'slow');
        e.preventDefault();
    });

});




document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if (dropDown.classList.contains('click-dropdown') === true) {
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');

            } else {
                closeDropdown();
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
};




// Slider Plana Docente
$("#slider-viajes").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: false,
    variableWidth: true,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
    //speed: 300,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                //variableWidth: true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})

$(window).on('resize', function () {
    $('#slider-viajes').slick('resize');
});


// Slider Laboratorios

$('#laboratorios').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    default: true,
    dots: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$(window).on('resize', function () {
    $('#laboratorios').slick('resize');
});