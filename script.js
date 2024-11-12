$(document).ready(function() {
    // Show default content
    $('.page-content').hide();
    $('#reason-and-resolution').fadeIn();

    $('#nav a').on('click', function(e) {
        e.preventDefault();
        var page = $(this).data('page');
        if (page) {
            $('.page-content').hide();
            $('#' + page).fadeIn(900);
            $('#nav a').removeClass('selected');
            $(this).addClass('selected');

            // Initialize haiku when 'sandbox' page is displayed
            if (page === 'sandbox') {
                if (!window.haikuInitialized) {
                    initializeHaiku();
                    window.haikuInitialized = true;
                }
            }
        }
    });

    // Smooth scroll for chapter links
    $('.chapter-nav a').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 20
        }, 800);
    });
