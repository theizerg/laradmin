
$(document).ready(function(){

  $('#main-form').submit(function(){

        $('.missing_alert').css('display', 'none');

        if ($('#main-form #email').val() === '') {
            $('#main-form #email_alert').text('Ingrese correo electrónico').show();
            $('#main-form #email').focus();
            return false;
        }

        if (! $('#main-form #email').val().match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)) {
            $('#main-form #email').focus();
            $('#main-form #email_alert').text('Ingrese correo electrónico válido').show();
            return false;
        }

        var data = $('#main-form').serialize();
        $('#main-form input, #main-form button').attr('disabled','true');
        $('#ajax-icon').removeClass('fa fa-envelope').addClass('fa fa-spin fa-refresh');

        Pace.track(function () {
            $.ajax({
              url: $('#main-form #_url').val(),
    		      headers: {'X-CSRF-TOKEN': $('#main-form #_token').val()},
    		      type: 'POST',
              cache: false,
    	        data: data,
              success: function (response) {
                 var json = $.parseJSON(response);
                 $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-envelope');

                 if(json.response === 'passwords.sent'){
                   toastr.success(json.response_message);
                 }

                 if(json.response === 'passwords.user'){
                   toastr.error(json.response_message);
                   $('#main-form input, #main-form button').removeAttr('disabled');
                 }
              },error: function (data) {
                var errors = data.responseJSON;
                $.each( errors.errors, function( key, value ) {
                  toastr.error(value);
                  return false;
                });
                $('#main-form input, #main-form button').removeAttr('disabled');
                $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-envelope');
            }
           });
        });

       return false;

    });
});
