$(document).ready(function () {
    $('.remove').click(function (event) { 
        event.preventDefault();
        $(this).parent().parent().hide();
    });
});