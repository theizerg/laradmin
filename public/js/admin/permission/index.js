$(document).ready(function(){

  $('#main-form').submit(function(){

        $('.missing_alert').css('display', 'none');

        if ($('#main-form #current_password').val() === '') {
            $('#main-form #current_password_alert').text('Ingrese contraseña actual').show();
            $('#main-form #current_password').focus();
            return false;
        }

        var data = $('#main-form').serializeArray();
        $('input').iCheck('disable');
        $('#main-form input, #main-form button').attr('disabled','true');
        $('#ajax-icon').removeClass('fa fa-edit').addClass('fa fa-spin fa-refresh');

        Pace.track(function () {
            $.ajax({
              url: $('#main-form #_url').val(),
    		      headers: {'X-CSRF-TOKEN': $('#main-form #_token').val()},
    		      type: 'PUT',
              cache: false,
    	        data: data,
              success: function (response) {
                var json = $.parseJSON(response);
                if(json.success){
                  $('input').iCheck('enable');
                  $('#main-form input, #main-form button').removeAttr('disabled');
                  $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-edit');
                  $('#main-form #current_password').val('')
                  toastr.success('Permisos actualizados exitosamente');
                }
              },error: function (data) {
                var errors = data.responseJSON;
                $.each( errors.errors, function( key, value ) {
                  toastr.error(value);
                  return false;
                });
                $('input').iCheck('enable');
                $('#main-form #current_password').val('')
                $('#main-form input, #main-form button').removeAttr('disabled');
                $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-edit');
              }
           });
        });


       return false;

    });


});
