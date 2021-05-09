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

});
