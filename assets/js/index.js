// Данные берутся из data.js
var searchHelper;

$(document).ready(function () {
  // Создаём экземпляр класса
  searchHelper = new SearchHelper(hotels);

  // Функция-коллбек, вызовется при изменении фильтра рейтинга
  rating_changed = () => {
    var ratings = [];
    if ($("#rating-3").checkbox("is checked")) ratings.push(3);
    if ($("#rating-4").checkbox("is checked")) ratings.push(4);
    if ($("#rating-5").checkbox("is checked")) ratings.push(5);
    searchHelper.ratings = ratings;
    searchHelper.all_filters();
  };

  // Функция-коллбек, вызовется при изменении фильтра города
  location_changed = (location) => {
    searchHelper.location = location;
    searchHelper.all_filters();
  };

  // Функция-коллбек, вызовется при изменении фильтра типа комнаты
  room_changed = (room) => {
    searchHelper.room = room;
    searchHelper.all_filters();
  };

  // Инициализация комбо-бокса города
  $("#city-dropdown").dropdown({
    placeholder: "Город",
    values: cityOptions,
    clearable: true,
    onChange: location_changed,
  });

  // Инициализация комбо-бокса типа комнаты
  $("#room-dropdown").dropdown({
    placeholder: "Тип комнаты",
    values: roomOptions,
    clearable: true,
    onChange: room_changed,
  });

  // Инициализация чекбоксов рейтинга
  $("#rating-3").checkbox({
    onChange: rating_changed,
  });
  $("#rating-4").checkbox({
    onChange: rating_changed,
  });
  $("#rating-5").checkbox({
    onChange: rating_changed,
  });
});
