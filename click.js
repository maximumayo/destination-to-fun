$(document).ready(function () {
    //click handler for the destination dropdown menu
    $('#destination-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#desinationMenu .dropdown-button-text').text(value);
    });

    //click handler for the interests dropdown menu
    $('#interest-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#interestMenu .dropdown-button-text').text(value);
    });
    /*$('#interestModal').on('loaded.modal-content',function(e){
     console.log('call modal');
     setTimeOut(initCA(),500);
     });*/
    $('.submit').on('click', function () {
        $('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
            initializeMap();
        });
        $('#interestModal').modal('show'); //shows modal
    });
});