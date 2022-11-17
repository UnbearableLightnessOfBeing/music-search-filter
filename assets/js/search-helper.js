/********************************
 *                              *
 *    Smart Filtered Search     *
 *            BGTU              *
 *            2022              *
 *                              *
 ********************************/

class SearchHelper {
  constructor(all_items) {
    this.all_items = all_items;
    this.items = all_items;
    this.cards = "";

    this.location = null;
    this.room = null;
    this.ratings = null;

    this.rearrange();
  }

  // Сброс фильтров
  clear_filters() {
    // Откат состояний контролов
    $("#city-dropdown").dropdown("clear");
    $("#room-dropdown").dropdown("clear");
    $("#rating-3").checkbox("check");
    $("#rating-4").checkbox("check");
    $("#rating-5").checkbox("check");

    // Откат переменных
    this.items = this.all_items;
    this.location = null;
    this.room = null;
    this.ratings = null;

    // Пересборка карточек
    this.rearrange();
  }

  filter_location() {
    // Если фильтр не установлен, не будем запускать поиск
    if (!this.location) return this.all_items;

    // Массив, куда поступят отфильтрованные данные
    var items = [];

    this.all_items.forEach((item) => {
      if (item.location === this.location) {
        // Добавляем в список элементы с нужным городом
        items.push(item);
      }
    });

    return items;
  }

  filter_rating() {
    // Если фильтр не установлен, не будем запускать поиск
    if (!this.ratings || this.ratings === [3, 4, 5]) return this.all_items;

    // Массив, куда поступят отфильтрованные данные
    var items = [];

    this.all_items.forEach((item) => {
      if (this.ratings.includes(item.rating)) {
        // Добавляем в список элементы с нужным рейтингом
        items.push(item);
      }
    });

    return items;
  }

  filter_room() {
    // Если фильтр не установлен, не будем запускать поиск
    if (!this.room) return this.all_items;

    // Массив, куда поступят отфильтрованные данные
    var items = [];

    this.all_items.forEach((item) => {
      if (item.room === this.room) {
        // Добавляем в список элементы с нужным типом комнат
        items.push(item);
      }
    });

    return items;
  }

  all_filters() {
    // Массивы, куда сгружаются отфильтрованные отели
    var room_filtered = [];
    var city_filtered = [];
    var rating_filtered = [];

    // Два вспомогательных массива
    var arr1 = [];
    var arr2 = [];

    // Заполнение отфильтрованными величинами
    room_filtered = this.filter_room();
    city_filtered = this.filter_location();
    rating_filtered = this.filter_rating();

    // Находим пересечение между тремя массивами
    arr1 = room_filtered.filter((value) => city_filtered.includes(value));
    arr2 = arr1.filter((value) => rating_filtered.includes(value));

    // Выводим найденные величины в готовый массив для отображения
    this.items = arr2;

    // Собираем и выводим на сайт карточки
    this.rearrange();
  }

  // Функция пересборки карточек
  rearrange() {
    this.cards = "";

    // Если не найдены туры, выведем об этом сообщение, иначе – сами туры
    if (this.items.length === 0) {
      this.cards =
        '<div class="ui error message">По данному запросу туров не найдено.</a></div>';
    } else {
      this.items.forEach((hotel) => {
        this.cards += hotel.element();
      });
    }

    // Вывод карточек на экран
    this.render();
  }

  // Функция обновления карточек
  render() {
    $(".hotels").html(this.cards);
  }
}
