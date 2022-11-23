// Данные берутся из data.js
var searchHelper;

$(document).ready(function () {
  // Создаём экземпляр класса
  searchHelper = new SearchHelper(songs);

  // Функция-коллбек, вызовется при изменении фильтра рейтинга
  // rating_changed = () => {
  //   var ratings = [];
  //   if ($("#rating-3").checkbox("is checked")) ratings.push(3);
  //   if ($("#rating-4").checkbox("is checked")) ratings.push(4);
  //   if ($("#rating-5").checkbox("is checked")) ratings.push(5);
  //   searchHelper.ratings = ratings;
  //   searchHelper.all_filters();
  // };

  // Функция-коллбек, вызовется при изменении фильтра города
  title_changed = (title) => {
    searchHelper.title = title;
    searchHelper.all_filters();
  };

  // Функция-коллбек, вызовется при изменении фильтра типа комнаты
  genre_changed = (genre) => {
    searchHelper.genre = genre;
    searchHelper.all_filters();
  };

  //  callback function on age options change
  author_changed = (author) => {
    searchHelper.author = author;
    searchHelper.all_filters();
  };

  // Инициализация комбо-бокса города
  $("#genre-dropdown").dropdown({
    placeholder: "Жанр",
    values: genreOptions,
    clearable: true,
    onChange: genre_changed,
  });


  // Text search by title setup
  $("#title-input").attr("placeholder", "Поиск по названию...");
  $("#title-input").on('keyup',function() {
    title_changed($(this).val());
  });

  // Text search by author setup
  $("#author-input").attr("placeholder", "Поиск по исполнителю...");
  $("#author-input").on('keyup',function() {
    author_changed($(this).val());
  });
  // // Инициализация чекбоксов рейтинга
  // $("#rating-3").checkbox({
  //   onChange: rating_changed,
  // });
  // $("#rating-4").checkbox({
  //   onChange: rating_changed,
  // });
  // $("#rating-5").checkbox({
  //   onChange: rating_changed,
  // });
});
