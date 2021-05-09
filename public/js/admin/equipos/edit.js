$(document).ready(function(){

  $('#main-form').submit(function(){

        $('.missing_alert').css('display', 'none');

         if ($('#main-form #nb_marca').val() === '') {
            $('#main-form #nb_marca_alert').text('Ingrese la marca').show();
            $('#main-form #nb_marca').focus();
            return false;
        }

         if ($('#main-form #nb_modelo').val() === '') {
            $('#main-form #nb_modelo_alert').text('Ingrese el modelo').show();
            $('#main-form #nb_modelo').focus();
            return false;
        }
        
         if ($('#main-form #serial').val() === '') {
            $('#main-form #serial_alert').text('Ingrese el serial del equipo').show();
            $('#main-form #serial').focus();
            return false;
        }   

        if ($('#main-form #nu_cantidad').val() === '') {
            $('#main-form #nu_cantidad_alert').text('Ingrese la cantidad de equipos').show();
            $('#main-form #nu_cantidad').focus();
            return false;
        }       

        if ($('#main-form #current_password').val() === '') {
            $('#main-form #current_password_alert').text('Ingrese contraseña actual').show();
            $('#main-form #current_password').focus();
            return false;
        }

        var data = $('#main-form').serialize();
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
                  $('#main-form #password, #main-form #password_confirmation, #main-form #current_password').val('');
                  $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-edit');
                  toastr.success('Datos actualizados exitosamente');
                }
              },error: function (data) {
                var errors = data.responseJSON;
                $.each( errors.errors, function( key, value ) {
                  toastr.error(value);
                  return false;
                });
                $('input').iCheck('enable');
                $('#main-form input, #main-form button').removeAttr('disabled');
                $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-edit');
              }
           });
        });

       return false;

    });
});
