// Данные берутся из data.js
$(document).ready(function () {
  $("#city-dropdown").dropdown({
    placeholder: "Город",
    values: cityOptions,
  });

  // console.log(hotels);

  new SearchHelper(hotels);
});
