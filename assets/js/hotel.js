class Hotel {
  // Конструктор
  // (сюда передаются название отеля, рейтинг, место, тип комнаты и стоимость)
  constructor(title, rating, location, room, price) {
    this.title = title;
    this.rating = rating;
    this.location = location;
    this.room = room;
    this.price = price;
  }

  // Возвращает рейтинг отеля в виде звёздочек :)
  stars() {
    var text = "";
    for (let i = 0; i < this.rating; i++) {
      text += "★";
    }
    return text;
  }

  // Возвращает отель в виде строки с HTML-кодом
  element() {
    var text = `
      <div class="ui raised fluid card">
        <div class="content">
          <div class="header">${
            this.title
          } | <span class="ui warning text">${this.stars()}</span></div>
          <div class="meta">
            <span class="category">${this.location}</span>
          </div>
          <div class="description left aligned">
            <p><b>Тип комнаты</b>: ${this.room}</p>
            <p><b>Стоимость за сутки</b>: ${this.price}₽</p>
          </div>
        </div>
        <div class="extra content">
          <div class="right floated author">
            <img class="ui avatar image" src="assets/img/beach.svg" />
            Турагентство «ILTuristo»
          </div>
        </div>
      </div>`;
    return text;
  }

  // Возвращает отель в виде JSON
  jsom() {
    return {
      name: this.title,
      rating: this.rating,
      location: this.location,
      room: this.room,
      price: this.price,
    };
  }
}
