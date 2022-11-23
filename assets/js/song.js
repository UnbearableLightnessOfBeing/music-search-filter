class Song {
  // Конструктор
  // (сюда передаются название отеля, рейтинг, место, тип комнаты и стоимость)
  constructor(title, author, genre, releaseDate, album, fileSource) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.album = album;
    this.fileSource = fileSource;
  }


  // Возвращает отель в виде строки с HTML-кодом
  element() {
    var text = `
      <div class="ui raised fluid card" style="border: 9px solid #6435c9; background: rgba(193, 193, 255, 0.8); width: 100%; margin: 0;">
        <div class="content">
          <div class="header">${
            this.title
          }</div>
          <div class="author">
            <span class="ui header violet text">${this.author}</span>
          </div>
          <div class="file">

            <figure >
                <audio style="width: 100%;"
                    controls
                    src="./assets/music/${this.fileSource}">
                        <a href="/media/cc0-audio/t-rex-roar.mp3">
                            Download audio
                        </a>
                </audio>
            </figure>

          </div>
          <div class="description left aligned">
            <span class="category"></span>
          </div>
          <div class="description left aligned">
            <p><b>Жанр:</b>: ${this.genre}</p>
            <p><b>Альбом: </b>: ${this.album}</p>
            <p><b>Год выпуска:</b>: ${this.releaseDate}</p>
          </div>
        </div>
        <div class="extra content">
          <div class="right floated author">
            Музыкальный сайт «Название»
          </div>
        </div>
      </div>`;
    return text;
  }
}
