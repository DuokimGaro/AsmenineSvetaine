$(document).ready(function(){
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    $(window).scrollTop(0);
});
$(document).ready(function(){
    document.getElementById('serga').onclick = function(){
      $('#ataskaita').css('visibility', 'visible');
      $('#ataskaitatext').css('visibility', 'visible');
    }

    document.getElementById('mire').onclick = function(){
      $('#mireh1').css('visibility', 'visible');
      $('#miretext').css('visibility', 'visible');
    }
});
$(document).ready(function(){
    document.getElementById('TapinoFondas').onclick = function(){
        $('#TapinoText').delay(100).animate({"opacity": "1"}, 700);
        $('#placiau1').delay(100).animate({"opacity": "1"}, 700);

      }
  
      document.getElementById('Ministerija').onclick = function(){
        $('#MinisterijaText').delay(100).animate({"opacity": "1"}, 700);
        $('#placiau2').delay(100).animate({"opacity": "1"}, 700);
      }
});