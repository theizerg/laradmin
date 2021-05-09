$(document).ready(function(){

  $('#main-form').submit(function(){

        $('.missing_alert').css('display', 'none');

        
        var data = $('#main-form').serialize();
        $('input').iCheck('disable');
        $('#main-form input, #main-form button').attr('disabled','true');
        $('#ajax-icon').removeClass('fas fa-save').addClass('fas fa-spinner fa-pulse');

        Pace.track(function () {
            $.ajax({
              url: $('#main-form #_url').val(),
              headers: {'X-CSRF-TOKEN': $('#main-form #_token').val()},
              type: 'POST',
              cache: false,
              data: data,
              success: function (response) {
                var json = $.parseJSON(response);
                if(json.success){
                  $('input').iCheck('enable');
                  $('#main-form input, #main-form button').removeAttr('disabled');
                  $('#main-form #password, #main-form #password_confirmation, #main-form #current_password').val('');
                  $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fas fa-save');
                  toastr.success('Datos guardados exitosamente');
                }
              },error: function (data) {
                var errors = data.responseJSON;
                
                $.each( errors, function( key, value ) {
                  toastr.error(value);
                  return false;
                });
                $('input').iCheck('enable');
                $('#main-form input, #main-form button').removeAttr('disabled');
                $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fas fa-save');
              }
           });
        });


       return false;

    });
});
