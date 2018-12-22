$(document).ready(function () {
    var poschange = false;
    var headername = $('#name').html();

    $('#goto-skills').click(function () {
        scrollSlideTo($('#skills-page').offset().top);
        return false;
    });
    $('#goto-portfolio').click(function () {
        scrollSlideTo($('#portfolio-page').offset().top);
        return false;
    });
    $('#li-name').click(function () {
        scrollSlideTo(0);
        return false;
    });
    $(window).scroll(function () {
        var pos = $(window).scrollTop();

        if (pos > 300 && poschange == false) {
            poschange = true;
            $('#sub-links').addClass('fixed-top');
            $('#li-name').show("medium").css('display', 'inline-block');
            $('.name').clone().hide().appendTo('#li-name').fadeIn(1500);
            //console.log(pos);
        }
        else if (pos <= 300 && poschange == true) {
            poschange = false;
            $('#sub-links').removeClass('fixed-top');
            $('#li-name').hide("medium").html('');
            //console.log(pos);
        }
    });
    function scrollSlideTo(p) {
        $('html,body').animate({ scrollTop: (p) }, 400);
    }
    var skh = $('.skills-content').height();
    skh += 270;
    if (skh > $(window).height()) {
        $('#skills-page').css('height', skh + 'px');
    }
    //console.log($(window).height()+','+$('.skills-content').height());

    $('#box-1,#box-2,#box-3,#box-4').click(function () {
        $('#modal-' + $(this).attr('id')).modal();
    })
});