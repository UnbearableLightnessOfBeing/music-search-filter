/********************************
 *                              *
 *         Smart Filter         *
 *            BGTU              *
 *            2022              *
 *                              *
 ********************************/

class SearchHelper {
  constructor(all_items) {
    this.all_items = all_items;
    this.items = all_items;
    this.cards = "";

    this.title = '';
    this.genre = null;
    this.author = '';

    this.rearrange();
  }

  // Сброс фильтров
  clear_filters() {
    // Откат состояний контролов
    $("#genre-dropdown").dropdown("clear");
    $("#title-title").val('');
    $("#author-title").val('1');

    // Откат переменных
    this.items = this.all_items;
    this.title = '';
    this.genre = null;
    this.author = '';

    // Пересборка карточек
    this.rearrange();
  }

  filter_genre() {
    // Если фильтр не установлен, не будем запускать поиск
    if (!this.genre) return this.all_items;

    // Массив, куда поступят отфильтрованные данные
    var items = [];

    this.all_items.forEach((item) => {
      if (item.genre === this.genre) {
        // Добавляем в список элементы с нужным городом
        items.push(item);
      }
    });

    return items;
  }

  filter_title() {
    // Если фильтр не установлен, не будем запускать поиск
    if (!this.title) return this.all_items;

    // Массив, куда поступят отфильтрованные данные
    var items = [];

    this.all_items.forEach((item) => {
      if (item.title.toLowerCase().includes(this.title.toLowerCase())) {
        items.push(item);
      }
    });

    return items;
  }

  filter_author() {
    // Если фильтр не установлен, не будем запускать поиск
    if (!this.author) return this.all_items;

    // Массив, куда поступят отфильтрованные данные
    var items = [];

    this.all_items.forEach((item) => {
      if (item.author.toLowerCase().includes(this.author.toLowerCase())) {
        items.push(item);
      }
    });

    return items;
  }

  all_filters() {
    // Массивы, куда сгружаются отфильтрованные отели
    var genre_filtered = [];
    var title_filtered = [];
    var author_filtered = [];

    // Два вспомогательных массива
    var arr1 = [];
    var arr2 = [];

    // Заполнение отфильтрованными величинами
    genre_filtered = this.filter_genre();
    author_filtered = this.filter_author();
    title_filtered = this.filter_title();

    // Находим пересечение между тремя массивами
    arr1 = genre_filtered.filter((value) => title_filtered.includes(value));
    arr2 = arr1.filter((value) => author_filtered.includes(value));

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
        '<div class="ui error message">По данному запросу песен не найдено.</a></div>';
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
