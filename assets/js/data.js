// Опции для комбо-бокса города
var cityOptions = [
  {
    name: "Анапа",
    value: "Анапа",
  },
  {
    name: "Севастополь",
    value: "Севастополь",
  },
  {
    name: "Анталья",
    value: "Анталья",
  },
  {
    name: "Хургада",
    value: "Хургада",
  },
];

// Опции для комбо-бокса типа комнаты
var roomOptions = [
  {
    name: "Стандарт",
    value: "Стандарт",
  },
  {
    name: "Комфорт",
    value: "Комфорт",
  },
  {
    name: "Люкс",
    value: "Люкс",
  },
  {
    name: "Семейный",
    value: "Семейный",
  },
];

// Отели - классы из hotel.js. Сигнатура ниже
// Hotel(title, rating, location, room, price)
var hotels = [
  // Комнаты отеля Hilton Plaza 5* в Хургаде
  new Hotel("Hilton Plaza", 5, "Хургада", "Стандарт", 4200),
  new Hotel("Hilton Plaza", 5, "Хургада", "Комфорт", 6100),
  new Hotel("Hilton Plaza", 5, "Хургада", "Люкс", 11500),
  new Hotel("Hilton Plaza", 5, "Хургада", "Семейный", 14500),

  // Комнаты отеля Palm Beach Resort 5* в Хургаде
  new Hotel("Palm Beach Resort", 5, "Хургада", "Стандарт", 3500),
  new Hotel("Palm Beach Resort", 5, "Хургада", "Комфорт", 4100),
  new Hotel("Palm Beach Resort", 5, "Хургада", "Семейный", 7200),

  // Комнаты отеля Ali Baba Palace 4* в Хургаде
  new Hotel("Ali Baba Palace", 4, "Хургада", "Стандарт", 3000),
  new Hotel("Ali Baba Palace", 4, "Хургада", "Комфорт", 3600),
  new Hotel("Ali Baba Palace", 4, "Хургада", "Семейный", 4800),

  // Комнаты отеля Sphinx Aqua Park Beach Resort 3* в Хургаде
  new Hotel("Sphinx Aqua Park Beach Resort", 3, "Хургада", "Стандарт", 2100),
  new Hotel("Sphinx Aqua Park Beach Resort", 3, "Хургада", "Комфорт", 2600),
  new Hotel("Sphinx Aqua Park Beach Resort", 3, "Хургада", "Семейный", 5400),

  /***********************************************/

  // Комнаты отеля Hilton Plaza 5* в Анталье
  new Hotel("Hilton Plaza", 5, "Анталья", "Стандарт", 4000),
  new Hotel("Hilton Plaza", 5, "Анталья", "Комфорт", 5600),
  new Hotel("Hilton Plaza", 5, "Анталья", "Люкс", 10900),
  new Hotel("Hilton Plaza", 5, "Анталья", "Семейный", 14000),

  // Комнаты отеля Utopia World 4* в Анталье
  new Hotel("Utopia World", 4, "Анталья", "Стандарт", 3100),
  new Hotel("Utopia World", 4, "Анталья", "Комфорт", 3500),
  new Hotel("Utopia World", 4, "Анталья", "Люкс", 5000),
  new Hotel("Utopia World", 4, "Анталья", "Семейный", 5800),

  // Комнаты отеля Antalya Pearl 4* в Анталье
  new Hotel("Antalya Pearl", 4, "Анталья", "Стандарт", 3300),
  new Hotel("Antalya Pearl", 4, "Анталья", "Комфорт", 4000),
  new Hotel("Antalya Pearl", 4, "Анталья", "Люкс", 5800),
  new Hotel("Antalya Pearl", 4, "Анталья", "Семейный", 6300),

  // Комнаты отеля Suite Laguna 3* в Анталье
  new Hotel("Suite Laguna", 3, "Анталья", "Стандарт", 1800),
  new Hotel("Suite Laguna", 3, "Анталья", "Комфорт", 2500),
  new Hotel("Suite Laguna", 3, "Анталья", "Семейный", 3700),

  /***********************************************/

  // Комнаты отеля Four Seasons 5* в Анапе
  new Hotel("Four Seasons", 5, "Анапа", "Стандарт", 8500),
  new Hotel("Four Seasons", 5, "Анапа", "Комфорт", 13200),
  new Hotel("Four Seasons", 5, "Анапа", "Люкс", 17350),
  new Hotel("Four Seasons", 5, "Анапа", "Семейный", 22500),

  // Комнаты отеля SeaSleep 4* в Анапе
  new Hotel("SeaSleep", 4, "Анапа", "Стандарт", 4500),
  new Hotel("SeaSleep", 4, "Анапа", "Комфорт", 6200),
  new Hotel("SeaSleep", 4, "Анапа", "Люкс", 10500),
  new Hotel("SeaSleep", 4, "Анапа", "Семейный", 11000),

  // Комнаты отеля Shelly Shores 3* в Анапе
  new Hotel("Shelly Shores", 3, "Анапа", "Стандарт", 2300),
  new Hotel("Shelly Shores", 3, "Анапа", "Комфорт", 3200),

  /***********************************************/

  // Комнаты отеля Four Seasons 5* в Севастополе
  new Hotel("Four Seasons", 5, "Севастополь", "Стандарт", 7500),
  new Hotel("Four Seasons", 5, "Севастополь", "Комфорт", 11200),
  new Hotel("Four Seasons", 5, "Севастополь", "Люкс", 15350),
  new Hotel("Four Seasons", 5, "Севастополь", "Семейный", 19500),

  // Комнаты отеля Sangria Weekends 4* в Севастополе
  new Hotel("Sangria Weekends", 4, "Севастополь", "Стандарт", 4500),
  new Hotel("Sangria Weekends", 4, "Севастополь", "Комфорт", 5200),
  new Hotel("Sangria Weekends", 4, "Севастополь", "Люкс", 8350),
  new Hotel("Sangria Weekends", 4, "Севастополь", "Семейный", 9500),

  // Комнаты мотеля Автосон 3* в Севастополе
  new Hotel("Мотель Автосон", 3, "Севастополь", "Стандарт", 950),
  new Hotel("Мотель Автосон", 3, "Севастополь", "Комфорт", 1400),

  /***********************************************/
];
