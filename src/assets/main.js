$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/anthonybetancount.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response here
    }
  });

});
