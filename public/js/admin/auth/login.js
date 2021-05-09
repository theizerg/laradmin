
$(document).ready(function(){

  $('#main-form').submit(function(){

        $('.missing_alert').css('display', 'none');

        if ($('#main-form #username').val() === '') {
            $('#main-form #username_alert').text('Ingrese el usuario').show();
            $('#main-form #username').focus();
            return false;
        }


        if ($('#main-form #password').val() === '') {
            $('#main-form #password').focus();
            $('#main-form #password_alert').text('Ingrese contraseña').show();
            return false;
        }

        var data = $('#main-form').serialize();
        $('input').iCheck('disable');
        $('#main-form input, #main-form button').attr('disabled','true');
        $('#ajax-icon').removeClass('fas fa-sign-in-alt').addClass('fas fa-spinner fa-pulse');

        Pace.track(function () {
            $.ajax({
              url: $('#main-form #_url').val(),
              headers: {'X-CSRF-TOKEN': $('#main-form #_token').val()},
              type: 'POST',
              cache: false,
              data: data,
              success: function (response) {
                 if(response === 'authenticated.true'){
                   $('#ajax-icon').removeClass('fas fa-sign-in-alt').addClass('fas fa-spinner fa-pulse');
                  toastr.success({
                    title: '¡ÉXITO!',
                    message: 'Usuario Logueado.',
                    position: 'topRight'
                  });
                
                   $(location).attr('href', $('#main-form #_redirect').val());
                  }
              },error: function (data) {
                var errors = data.responseJSON;
                $.each( errors.errors, function( key, value ) {
                  toastr.error({
                    title: '¡ERROR!',
                    message:(value) ,
                    position: 'topRight'
                  });
                
                });
                $('input').iCheck('enable');
                $('#main-form input, #main-form button').removeAttr('disabled');
                $('#ajax-icon').removeClass('fas fa-spinner fa-pulse').addClass('fas fa-sign-in-alt');
            }
           });
        });

       return false;

    });
});