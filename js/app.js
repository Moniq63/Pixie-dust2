$(function() {
  //Get the form
  var form = ('#ajax-contact');
  //This is for the formmessages
  var formmessages = ('#form-messages');

  $(form).submit(function(event) {
    //Stop the browser from submitting the form
    event.preventDefault();

    //Next we will serialize this form dataType
    var formData = $(form).serialize();

    //This is to now submit the form using AJAX.
<<<<<<< HEAD
    $.ajax({type: 'POST', url: $(form).attr('action'), data: formData}).done(function(response) {
=======
    $.ajax({type: 'POST' url: $(form).attr('action'), data: formData}).done(function(response) {
>>>>>>> 4e43f63bb3aba1fb645dfee6b7bcd67fc7427f7f
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });
  });
});