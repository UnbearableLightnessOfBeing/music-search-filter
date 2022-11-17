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

    this.rearrange();
  }

  // Функция пересборки карточек
  rearrange() {
    this.cards = "";

    this.items.forEach((hotel) => {
      this.cards += hotel.element();
    });

    this.render();
  }

  // Функция обновления карточек
  render() {
    $(".hotels").html(this.cards);
  }
}
