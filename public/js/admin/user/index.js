$(document).ready(function(){

  $('#search-input').autocomplete({
    paramName: 'q',
    serviceUrl: $('#_url').val() + '/user-autocomplete',
    transformResult: function(response) {
       response = JSON.parse(response);
       return {
           suggestions: $.map(response, function(item) {
               return { value: item.full_name, data: item.id };
           })
         };
    }
  });


  $(".del-btn").click(function(){
    $("#confirm-btn").attr("href", $(this).attr('id'));
  });

  $('#confirm-btn').click(function () {

      var ID = $(this).attr('href');
      $('#ajax-icon').removeClass('fa fa-trash').addClass('fa fa-spin fa-refresh');

      Pace.track(function () {
        $.ajax({
          url: $("#_url").val() + '/user/' + ID,
          headers: {'X-CSRF-TOKEN': $('#_token').val()},
          type: 'DELETE',
          success: function (response) {
            var json = $.parseJSON(response);
            if(json.success){
                $("#confirm-modal").modal("hide");
                $('#ajax-icon').removeClass('fa fa-spin fa-refresh').addClass('fa fa-trash');
                $('.row' + ID +'').hide();
                toastr.success('Usuario eliminado');
            }
          }
        });
      });
      return false;
    });

});
