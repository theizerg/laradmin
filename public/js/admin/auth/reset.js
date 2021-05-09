
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

        if (! $('#main-form #password').val().match(/^[a-zA-Z0-9\.!@#\$%\^&\*\?_~\/]{6,30}$/)) {
            $('#main-form #password_alert').text('Ingrese contraseña de al menos 06 caracteres').show();
            $('#main-form #password').focus();
            return false;
        }

        if ($('#main-form #password_confirmation').val() === '') {
            $('#main-form #password_confirmation_alert').text('Ingrese contraseña nuevamente').show();
            $('#main-form #password_confirmation').focus();
            return false;
        }

        if ($('#main-form #password_confirmation').val() !== $('#main-form #password').val()) {
            $('#main-form #password_confirmation_alert').text('Contraseñas no coinciden');
            $('#main-form #password_confirmation').focus();
            return false;
        }

        var data = $('#main-form').serialize();
        $('#main-form input, #main-form button').attr('disabled','true');
        $('#ajax-icon').removeClass('fa fa-edit').addClass('fa fa-spin fa-refresh');

        Pace.track(function () {
            $.ajax({
              url: $('#main-form #_url').val(),
    		      headers: {'X-CSRF-TOKEN': $('#main-form #_token').val()},
    		      type: 'POST',
              cache: false,
    	        data: data,
              success: function (response) {
                 var json = $.parseJSON(response);
                 $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-edit');

                 if(json.response === 'passwords.reset'){
                   toastr.success(json.response_message);

                   window.setTimeout(function () {
                     location.href = $('#main-form #_redirect').val();
                   }, 2000);
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
