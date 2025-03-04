$('#hamburger-menu a[href]').on('click', function(event) {
    $('#hamburger-menu-btn-check').trigger('click');
});

$('.main').on('click', function(event) {
    $('#hamburger-menu-btn-check:checked').trigger('click');
});