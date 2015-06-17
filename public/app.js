function writeLine(name, line) {
  $('.chatlines').append('<li class="talk"><span class="nick">&lt;' + name + '&gt;</span> ' + line + '</li>');
}

$(document).ready(function() {
  var socket = io();
  socket.on('connected', function() {
   $('.connecting').slideUp(); 
   $('input').attr('disabled', false);
  });

  $('form').on('submit', function(ev) {
    ev.preventDefault();
    var $name = $('#nick');
    var $line = $('#text');
    socket.emit('chat', {name: $name.val(), line: $line.val()});
    writeLine($name.val(), $line.val());
    $line.val("");
  });

  function writeAction(name, action) {
    var actionStrings = {'trout': 'slaps the room around with a large trout',
                         'rofl': 'rolls around on the floor laughing',
                         'sad': 'looks rather sad :(',
                         'boost': 'scatters Boost around the room liberally.'};
    $('.chatlines').append('<li class="action">' + name + ' ' + actionStrings[action] + '</li>');
  }

})