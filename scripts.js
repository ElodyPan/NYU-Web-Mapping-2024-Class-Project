$(document).ready(function() {
  $('.color-btn').click(function() {
    var color = $(this).data('color');
    $('#container').css('background-color', color);
  });
  $('.book-btn').click(function() {
    var answerSelector = '#' + $(this).data('answer');
    var imageUrl = $(this).data('image');

    // Display the reading notes in the left column.
    var notesHtml = $(answerSelector).html();
    $('#notes-display').html(notesHtml);
    
    // Display the image in the right column.
    $('#image-display').css('background-image', 'url(' + imageUrl + ')');
  });
});
