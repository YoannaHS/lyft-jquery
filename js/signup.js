$(document).ready(function() {
  // Verificamos el número de teléfono ingresado por el usuario
  $('#send').click(function() {
    if ($('#phone').val().length !== 9 || isNaN($('#phone').val())) {
      $('#phone').css('border-color', '#FF0000');
      alert('El número de teléfono debe tener al menos 9 números.');
      return false;
    //   Generamos el código random
    } else {
      var $number = $('input[type="text"]').val('');
      var $randon = 100 + Math.floor(Math.random('number') * 3);
      alert('Tu código LAB' + ($randon));
    }
  });
  $('#phone').on('click', function() {
    $('.btn').removeAttr('disabled');
  });
});