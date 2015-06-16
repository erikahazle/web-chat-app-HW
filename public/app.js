$(document).ready(function() {
  var socket = io();
  socket.on('connected', function() {
   alert("Connected!");
  });
})