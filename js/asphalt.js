"use strict"; /* oblige à déclarer toute variable utilisée */
$(document).ready(initialiser);
function initialiser(evt){}

$('.star').on('change', function() {
  let stars = $(this).val();
  /* Make an AJAX call to register the rating */
  console.log(stars);
});
