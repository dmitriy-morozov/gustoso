$(document).ready(function () {
    $(".accordeon-item:eq(0)").css('z-index', '5');
    $(".accordeon-item:eq(1)").css('z-index', '2');
    $(".accordeon-item:eq(2)").css('z-index', '1');
});

$('.accordeon-item--input').click(function () {
    if ($('.accordeon-item--input').eq(0).is(':checked')) {
        $(".accordeon-item:eq(0)").css('z-index', '5');
        $(".accordeon-item:eq(1)").css('z-index', '2');
        $(".accordeon-item:eq(2)").css('z-index', '1');
    }
    if ($('.accordeon-item--input').eq(1).is(':checked')) {
        $(".accordeon-item:eq(1)").css('z-index', '5');
        $(".accordeon-item:eq(0)").css('z-index', '1');
        $(".accordeon-item:eq(2)").css('z-index', '2');
    }
    if ($('.accordeon-item--input').eq(2).is(':checked')) {
        $(".accordeon-item:eq(2)").css('z-index', '5');
        $(".accordeon-item:eq(0)").css('z-index', '1');
        $(".accordeon-item:eq(1)").css('z-index', '2');
    }
});




